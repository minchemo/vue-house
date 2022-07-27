<template>
    <div class="s9 relative">
        <lazy-component>
            <div class="imgbox">
                <p class="font-['Noto_sans_tc']">結構工法</p>
            </div>
            <img v-if="$isMobile()" class="mask" src="@/section/s9/mask.png" alt="" srcset="">
        </lazy-component>

        <div class="title">

            <div class="t1" data-aos="fade" data-aos-delay="0">全面房護 家倍安心 </div>
            <div class="t2 font-['Noto_sans_tc']" data-aos="fade" data-aos-delay="200">
                採用筏式基礎工法全面開挖，基樁深入地表 25 公尺，地下四周採用厚 60公分擋土牆發揮擋土與隔水功能，同時於水箱層筏基以及地上 8~10F 將水泥磅數提高到 5000psi、地下 B5 到地上 7F 更加強到
                6000psi，整棟大樓結構磐石穩固，屹立不搖。
            </div>
        </div>
        <lazy-component>
            <img v-if="$isMobile()" class="rb_leaf pointer-events-none" src="@/section/s9/leaf_m.png" alt="" srcset="">
            <img v-else class="rb_leaf pointer-events-none" src="@/section/s9/leaf.png" alt="" srcset="">
        </lazy-component>

    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
    width: 100%;
    height: size(1080);
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: size(114);

    .imgbox {
        width: size(770);
        height: size(1000);
        background-image: url('@/section/s9/1.jpg');
        background-size: cover;
        position: relative;

        p {
            position: absolute;
            font-weight: 500;
            font-size: size(12);
            right: size(5);
            bottom: size(5);
            color: #fff;
        }
    }

    .title {
        color: #fff;
        z-index: 1;
        left: size(215);
        top: size(0);

        .t1 {
            font-weight: 700;
            font-size: size(40);
            margin-bottom: size(30);
            color: #ACA883;
        }

        .t2 {
            font-weight: 300;
            font-size: size(20);
            line-height: 150%;
            width: size(587);
        }
    }

    &::after {
        content: '';
        width: size(1);
        height: 100%;
        background-color: #ACA883;
        position: absolute;
        left: size(65);
        top: 0;
        z-index: 1;
        pointer-events: none;
    }

    &::before {
        content: '';
        width: size(1);
        height: 100%;
        background-color: #ACA883;
        position: absolute;
        right: size(65);
        top: 0;
        z-index: 1;
        pointer-events: none;
    }

    .rb_leaf {
        position: absolute;
        right: 0;
        bottom: size(0);
        width: size(843);
        transform-origin: right bottom;
        animation: rb 2s alternate-reverse infinite ease-in-out;

        @keyframes rb {
            from {
                transform: skewX(0);
            }

            to {
                transform: skewX(-5deg);
            }
        }
    }
}

@media screen and (max-width:768px) {

    .s9 {
        width: 100%;
        height: size-m(796);
        flex-direction: column-reverse;
        justify-content: flex-end;
        padding-top: size-m(20);
        gap: 0;

        .imgbox {
            width: size-m(375);
            height: size-m(487);
            background-image: url('@/section/s9/1_m.jpg');
            background-size: cover;
            background-repeat: no-repeat;

            p {
                display: none;
            }
        }

        .mask {
            width: 100%;
            position: absolute;
            bottom: size-m(60);
            left: 0;
        }

        .title {
            z-index: 1;
            left: unset;
            top: unset;
            width: 100%;
            padding: size-m(30);

            .t1 {
                font-size: size-m(24.5);
                margin-bottom: size-m(20);
            }

            .t2 {
                font-size: size-m(12);
                line-height: 180%;
                width: 100%;
            }
        }

        &::after {
            display: none;
        }

        &::before {
            display: none;
        }

        .rb_leaf {
            width: 100%;
        }
    }

}
</style>

<script setup>
import { ref, getCurrentInstance } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties;
</script>