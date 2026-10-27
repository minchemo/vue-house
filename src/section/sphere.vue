<template>
    <div class="sphere-wrap">
        <canvas ref="canvasRef" class="sphere-canvas"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasRef = ref(null)
let sphere = null

function createSphere(canvas, options) {
    const cfg = Object.assign({
        count: 120,          // 粒子數量
        maxDistance: 0.42,   // 連線距離（相對球半徑）
        hollow: 0.55,        // 中空半徑（相對球半徑，0 = 不中空）
        hollowFade: 0.08,    // 中空邊緣淡出寬度
        zSpin: 8,            // 平面旋轉 °/秒（正值 = 順時針）
        spinY: 5,            // 球體自身 Y 軸自轉 °/秒
        tiltX: 0,            // 傾斜角度 X（度）
        tiltY: 0,            // 傾斜角度 Y（度）
        flatten: 0.4,        // 壓扁程度（1 = 正球，越小越像平面）
        drift: 1,            // 表面漂移強度
        fillOpacity: 0.35,   // 三角面濃度
        dotSize: 1,          // 圓點大小倍率
        radiusRatio: 0.44,   // 球半徑 / 畫布較短邊
        triangleChance: 0.55,
        darkChance: 0.1,
        color: [134, 207, 220],
        seed: 7
    }, options || {});

    const ctx = canvas.getContext('2d');
    let width = 0, height = 0, dpr = 1;
    let particles = [], linked = new Uint8Array(0);
    let spinAngle = 0, zAngle = 0, lastT = 0, rafId = 0, destroyed = false, ro = null;

    function mulberry32(a) {
        return function () {
            a |= 0; a = (a + 0x6D2B79F5) | 0;
            let t = Math.imul(a ^ (a >>> 15), 1 | a);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    // 三個索引 -> 穩定亂數，讓每個三角形的深淺固定、不閃爍
    function hash3(i, j, k) {
        let h = Math.imul(i + 1, 73856093) ^ Math.imul(j + 1, 19349663) ^ Math.imul(k + 1, 83492791);
        h = Math.imul(h ^ (h >>> 13), 1274126177);
        h ^= h >>> 16;
        return (h >>> 0) / 4294967295;
    }

    function build() {
        const rand = mulberry32(cfg.seed >>> 0);
        particles = [];
        for (let i = 0; i < cfg.count; i++) {
            particles.push({
                theta: rand() * Math.PI * 2,
                phi: Math.acos(2 * rand() - 1),
                pa: rand() * Math.PI * 2, pb: rand() * Math.PI * 2,
                f1: 0.3 + rand() * 0.6, f2: 0.3 + rand() * 0.6,
                size: 1.3 + Math.pow(rand(), 2) * 3.2,
                x: 0, y: 0, z: 0, px: 0, py: 0, rx: 0, ry: 0, rz: 0,
                scale: 1, depth: 0, vis: 0
            });
        }
        linked = new Uint8Array(cfg.count * cfg.count);
    }

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = canvas.clientWidth || 300;
        height = canvas.clientHeight || 300;
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function frame(ts) {
        if (destroyed) return;
        rafId = requestAnimationFrame(frame);

        const t = ts * 0.001;
        const dt = lastT ? Math.min(0.05, t - lastT) : 0;
        lastT = t;
        spinAngle += cfg.spinY * dt * Math.PI / 180;
        zAngle += cfg.zSpin * dt * Math.PI / 180;

        ctx.clearRect(0, 0, width, height);

        const cx = width / 2, cy = height / 2;
        const R = Math.min(width, height) * cfg.radiusRatio;
        const fov = R * 3.5;
        const k = R / 280;                        // 讓線寬、點大小隨容器等比縮放
        const col = cfg.color[0] + ', ' + cfg.color[1] + ', ' + cfg.color[2];

        const cSY = Math.cos(spinAngle), sSY = Math.sin(spinAngle);
        const tx = cfg.tiltX * Math.PI / 180, ty = cfg.tiltY * Math.PI / 180;
        const cTX = Math.cos(tx), sTX = Math.sin(tx), cTY = Math.cos(ty), sTY = Math.sin(ty);
        const cZ = Math.cos(zAngle), sZ = Math.sin(zAngle);
        const band = Math.max(0.001, cfg.hollowFade);
        const amp = 0.07 * cfg.drift;
        const N = particles.length;

        // 1. 更新位置：球面漂移 -> Y 自轉 -> 傾斜 -> 壓扁 -> 平面順時針旋轉 -> 投影
        const idx = [];
        for (let i = 0; i < N; i++) {
            const p = particles[i];
            const th = p.theta + Math.sin(p.pa + t * p.f1) * amp;
            const ph = Math.min(Math.PI - 0.02, Math.max(0.02, p.phi + Math.cos(p.pb + t * p.f2) * amp));
            let x = R * Math.sin(ph) * Math.cos(th);
            let y = R * Math.cos(ph);
            let z = R * Math.sin(ph) * Math.sin(th);

            let x1 = x * cSY - z * sSY; let z1 = z * cSY + x * sSY; x = x1; z = z1;
            let y2 = y * cTX - z * sTX; let z2 = z * cTX + y * sTX; y = y2; z = z2;
            let x3 = x * cTY - z * sTY; let z3 = z * cTY + x * sTY; x = x3; z = z3;

            p.depth = (z / R + 1) / 2;
            z *= cfg.flatten;
            // 畫面座標 y 向下，所以這個旋轉矩陣的正角度 = 視覺上順時針
            const xs = x * cZ - y * sZ;
            const ys = x * sZ + y * cZ;
            p.rx = xs; p.ry = ys; p.rz = z;
            p.scale = fov / (fov - z);
            p.px = xs * p.scale + cx;
            p.py = ys * p.scale + cy;

            const rho = Math.hypot(p.px - cx, p.py - cy) / R;
            p.vis = Math.min(1, Math.max(0, (rho - cfg.hollow) / band));
            if (p.vis > 0) idx.push(i);
        }

        // 2. 三角面（只在中空區以外）
        const D = cfg.maxDistance * R, D2 = D * D, m = idx.length;
        linked.fill(0);
        for (let a = 0; a < m; a++) {
            const i = idx[a], p1 = particles[i];
            for (let b = a + 1; b < m; b++) {
                const j = idx[b], p2 = particles[j];
                const dx = p1.rx - p2.rx, dy = p1.ry - p2.ry, dz = p1.rz - p2.rz;
                if (dx * dx + dy * dy + dz * dz >= D2) continue;
                linked[i * N + j] = 1;
                if (cfg.fillOpacity <= 0) continue;
                for (let c = b + 1; c < m; c++) {
                    const l = idx[c], p3 = particles[l];
                    const ex = p1.rx - p3.rx, ey = p1.ry - p3.ry, ez = p1.rz - p3.rz;
                    if (ex * ex + ey * ey + ez * ez >= D2) continue;
                    const fx = p2.rx - p3.rx, fy = p2.ry - p3.ry, fz = p2.rz - p3.rz;
                    if (fx * fx + fy * fy + fz * fz >= D2) continue;
                    if (hash3(i, j, l) > cfg.triangleChance) continue;

                    const dark = hash3(l, j, i) < cfg.darkChance;
                    const tone = dark ? 0.6 + hash3(j, l, i) * 0.4 : 0.15 + hash3(j, i, l) * 0.25;
                    const depth = (p1.depth + p2.depth + p3.depth) / 3;
                    const alpha = cfg.fillOpacity * tone * (0.25 + 0.75 * depth) * Math.min(p1.vis, p2.vis, p3.vis);
                    ctx.beginPath();
                    ctx.moveTo(p1.px, p1.py); ctx.lineTo(p2.px, p2.py); ctx.lineTo(p3.px, p3.py);
                    ctx.closePath();
                    ctx.fillStyle = 'rgba(' + col + ', ' + alpha.toFixed(3) + ')';
                    ctx.fill();
                }
            }
        }

        // 3. 細線
        ctx.lineWidth = Math.max(0.5, 0.7 * k);
        for (let a = 0; a < m; a++) {
            const i = idx[a], p1 = particles[i];
            for (let b = a + 1; b < m; b++) {
                const j = idx[b];
                if (!linked[i * N + j]) continue;
                const p2 = particles[j];
                const dx = p1.rx - p2.rx, dy = p1.ry - p2.ry, dz = p1.rz - p2.rz;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                const depth = (p1.depth + p2.depth) / 2;
                const alpha = (1 - dist / D) * 0.45 * (0.3 + 0.7 * depth) * Math.min(p1.vis, p2.vis);
                ctx.beginPath();
                ctx.moveTo(p1.px, p1.py); ctx.lineTo(p2.px, p2.py);
                ctx.strokeStyle = 'rgba(' + col + ', ' + alpha.toFixed(3) + ')';
                ctx.stroke();
            }
        }

        // 4. 圓點：大小不一，前面較實、後面較淡
        for (let a = 0; a < m; a++) {
            const p = particles[idx[a]];
            const size = Math.max(0.8, p.size * p.scale * cfg.dotSize * k);
            const alpha = (0.35 + 0.65 * p.depth) * p.vis;
            ctx.beginPath();
            ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(' + col + ', ' + alpha.toFixed(2) + ')';
            ctx.fill();
        }
    }

    build();
    resize();
    if (typeof ResizeObserver !== 'undefined') {
        ro = new ResizeObserver(resize);
        ro.observe(canvas);
    } else {
        window.addEventListener('resize', resize);
    }
    rafId = requestAnimationFrame(frame);

    return {
        cfg: cfg,
        rebuild: build,
        resize: resize,
        destroy: function () {
            destroyed = true;
            cancelAnimationFrame(rafId);
            if (ro) ro.disconnect(); else window.removeEventListener('resize', resize);
        }
    };
}

onMounted(() => {
    sphere = createSphere(canvasRef.value, {
        count: 70,
        maxDistance: 0.52,
        hollow: 0.3,
        hollowFade: 0.08,
        zSpin: 7,
        spinY: 5,
        tiltX: 0,
        tiltY: 0,
        flatten: 0.55,
        drift: 1.9,
        fillOpacity: 0.15,
        dotSize: 0.9,
        radiusRatio: 0.41,
        triangleChance: 0.55,
        darkChance: 0.1,
        color: [134,207,220],
        seed: 7,
    })
})
onBeforeUnmount(() => {
    if (sphere) sphere.destroy()
})
</script>

<style scoped>
.sphere-wrap {
   /* position: relative; */
    aspect-ratio: 1 / 1; }
.sphere-canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.sphere-center {
    position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
    width: 25%; height: auto; border-radius: 50%; object-fit: cover;
}
</style>
