<template>
	<article class="s5">
		<div class="t">
			<img class="t1" src="@/section/s5/greenery.png" alt="" srcset="" data-aos="fade-up" data-aos-delay="0">
			<div class="t-m">
				<div class="t2" data-aos="fade-up" data-aos-delay="200">二步慢慢</div>
				<div class="t3" data-aos="fade-up" data-aos-delay="400">綠意飽滿入懷</div>
			</div>
		</div>
		<img class="i1" v-if="!isMobile" src="@/section/s5/1.jpg" alt="" srcset="">
		<img class="i1" v-else src="@/section/s5/1m.jpg" alt="" srcset="">
		<div class="t">
			<div class="t4" data-aos="fade-up" data-aos-delay="0">樂活健行｜離山很近 開始山系Outdoor生活</div>
			<div class="t5" data-aos="fade-up" data-aos-delay="200">
				當家就住在山旁邊，那就好好的享受健行給您的暢快吧！大尖山步道、<br v-if="!isMobile">倫子山系步道、桐花公園，賞景、賞花、賞綠，運動不用去健身房，自然就是你的運動場。</div>
		</div>
		<div class="is" v-if="!isMobile">
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
		<Splide v-else ref="splide" class="is splide-widget" :options="{
			rewind: true,
			arrows: true,
			autoplay: true,
			interval: 4000,
			gap: 20,
			type: 'loop',
			arrowPath: `M17.4591 31.1385C17.9961 31.6755 18.8667 31.6755 19.4037 31.1385C19.9406 30.6015 19.9406 29.7309 19.4037 29.1939L10.3223 20.1126L19.4037 11.0312C19.9406 10.4943 19.9406 9.62368 19.4037 9.0867C18.8667 8.54973 17.9961 8.54973 17.4591 9.0867L7.40551 19.1403C6.86854 19.6773 6.86854 20.5479 7.40551 21.0849L17.4591 31.1385Z`
		}" @splide:mounted="mounted" @splide:move="moved">
			<SplideSlide class="item" v-for="img in imgs">
				<div class="i" :style="{ backgroundImage: `url(${img.img})` }">
					<div class="caption">{{ img.caption }}</div>
				</div>
				<div class="t">
					<div class="t1">{{ img.t1 }}</div>
					<div class="t2">{{ img.t2 }}</div>
				</div>
			</SplideSlide>
		</Splide>
		<div class="t">
			<div class="t4" data-aos="fade-up" data-aos-delay="0">綠享人生｜三大公園環繞 擁倘適切閑然</div>
			<div class="t5" data-aos="fade-up" data-aos-delay="200">近擁城市中的綠洲，開車很近，走路也不遠，與家人共享天倫時光不必走遠。</div>
		</div>
		<img src="@/section/s5/leaf.png" class="leaf" alt="" srcset="">
	</article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s5 {
	@apply w-full relative flex flex-col items-center justify-center;
	background: #DEDBD4;
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
	.s5 {
		@apply w-full overflow-hidden relative z-20 justify-start;
		height: auto;
		padding:  sizem(30) sizem(31);
		gap: sizem(20);


		.t {
			@apply w-full flex flex-col items-start justify-center;

			.t1 {
				width: sizem(184);
			}

			.t-m {
				@apply flex items-end justify-center leading-none;
				gap: sizem(12);

				.t2 {
					font-size: sizem(22);
					letter-spacing: sizem(2);
				}

				.t3 {
					font-size: sizem(15);
					letter-spacing: sizem(1.35);
				}
			}

			.t4 {
				font-size: sizem(14);
				font-weight: 900;
				letter-spacing: sizem(1.26);
			}

			.t5 {
				@apply text-left;
				font-size: sizem(13);
				line-height: sizem(20);
				letter-spacing: 1;
				margin-top: sizem(5);
			}
		}

		.i1 {
			width: sizem(375);
		}

		.is {
			@apply block items-center;
			gap: 0;
			width: sizem(311);

			.item {
				.i {
					@apply relative;
					width: sizem(311);
					height: sizem(323);
					background-size: cover;


					.caption {
						font-size: sizem(12);
						left: sizem(10);
						bottom: sizem(5);
					}

				}

				.t {
					@apply flex flex-col items-center justify-center text-white text-center;
					background: rgba(9, 110, 99, 0.85);
					font-size: sizem(13);
					line-height: sizem(25);
					letter-spacing: sizem(1.53);
					padding: sizem(8) 0;
					gap: 0;

					.t1 {
						font-size: sizem(17);
					}

				}
			}
		}

		.leaf {
			@apply hidden;
		}
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
