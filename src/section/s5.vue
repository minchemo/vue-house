<template>
	<article class="s5">
		<div class="t">
			<img class="t1" src="@/section/s5/greenery.png" alt="" srcset="">
			<div class="t-m">
				<div class="t2">二步慢慢</div>
				<div class="t3">綠意飽滿入懷</div>
			</div>
		</div>
		<img class="i1" src="@/section/s5/1.jpg" alt="" srcset="">
		<div class="t">
			<div class="t4">樂活健行｜離山很近 開始山系Outdoor生活</div>
			<div class="t5">
				當家就住在山旁邊，那就好好的享受健行給您的暢快吧！大尖山步道、<br>倫子山系步道、桐花公園，賞景、賞花、賞綠，運動不用去健身房，自然就是你的運動場。</div>
		</div>
		<div class="is">
			<div class="item" v-for="img in imgs">
				<div class="i" :style="{ backgroundImage: `url(${img.img})` }">
					<div class="caption">{{ img.caption }}</div>
				</div>
				<div class="t">
					<div class="t1">{{ img.t1 }}</div>
					<div class="t2">{{ img.t2 }}</div>
				</div>
			</div>
		</div>
		<div class="t">
			<div class="t4">綠享人生｜三大公園環繞 擁倘適切閑然</div>
			<div class="t5">
				
近擁城市中的綠洲，開車很近，走路也不遠，與家人共享天倫時光不必走遠。</div>
		</div>
		<img src="@/section/s5/leaf.png" class="leaf" alt="" srcset="">
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
	@apply w-full relative flex flex-col items-center justify-center;
	height: size(1594);
	padding: 0 size(277);
	gap: size(50);

	.t {
		@apply w-full flex flex-col items-center justify-center;

		.t1 {
			width: size(351);
		}

		.t-m {
			@apply flex items-end justify-center leading-none;
			gap: size(24);

			.t2 {
				@apply font-['Noto_Serif_TC'];
				font-size: size(64);
				font-weight: 500;
				letter-spacing: size(5.76);
			}

			.t3 {
				font-size: size(48);
				font-family: Noto Sans TC;
				font-weight: 500;
				letter-spacing: size(4.32);
			}
		}

		.t4 {
			font-size: size(32);
			font-weight: 900;
			letter-spacing: size(0.32);
		}

		.t5 {
			@apply text-center;
			font-size: size(17);
			font-weight: 500;
			line-height: size(30);
			letter-spacing: size(1.53);
			margin-top: size(5);
		}
	}

	.i1 {
		width: size(1372);
	}

	.is {
		@apply flex items-center;
		gap: size(18);

		.item {
			.i {
				@apply relative;
				width: size(356.42);
				height: size(371);
				background-size: cover;


				.caption {
					@apply absolute text-white;
					font-size: size(12);
					font-weight: 500;
					left: size(10);
					bottom: size(5);
				}

			}

			.t {
				@apply flex flex-col items-center justify-center text-white text-center;
				background: rgba(9, 110, 99, 0.85);
				font-size: size(17);
				line-height: 1;
				letter-spacing: size(1.53);
				padding: size(20) 0;
				gap: size(10);

				.t1 {
					font-weight: 900;
				}

				.t2 {
					font-weight: 500;
				}
			}
		}
	}

	.leaf {
		@apply absolute;
		right: size(80);
		bottom: size(175);
		width: size(850);
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
	.s3 {
		@apply w-full overflow-visible relative z-20;

	}
}
</style>

<script setup>
import Slide from "@/components/slide.vue";
import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());

const imgs = [
	{
		img: new URL("../section/s5/i1.jpg", import.meta.url).href,
		caption: "斬龍山公園",
		t1: "斬龍山遺址文化公園",
		t2: "步行約15分鐘、開車約5分鐘"
	},
	{
		img: new URL("../section/s5/i2.jpg", import.meta.url).href,
		caption: "清和公園",
		t1: "清和社區公園",
		t2: "步行約5分鐘，開車約1分鐘"
	},
	{
		img: new URL("../section/s5/i3.jpg", import.meta.url).href,
		caption: "大清水公園",
		t1: "大清水運動公園",
		t2: "步行約20分鐘、開車約4分鐘"
	}
]


</script>
