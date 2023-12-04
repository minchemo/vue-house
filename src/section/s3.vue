<template>
	<article class="s3">
		<div class="contain">
			<div class="swiper-wrapper">
				<div class="swiper-box">
					<div class="arrows" v-if="isMobile">
						<img class="prev" @click="splide.splide.go('<')" src="@/section/arrow_dark.png" alt="" srcset="">
						<img class="next" @click="splide.splide.go('>')" src="@/section/arrow_dark.png" alt="" srcset="">
					</div>
					<Splide ref="splide" class="swiper" :options="{
						pagination: false,
						arrows: false,
						drag: true,
						autoplay: true,
						interval: 3000,
						gap: 15,
						type: 'loop',
					}" @splide:move="move">
						<SplideSlide class="slide" v-for="img, i in data">
							<img :src="img.img" alt="" srcset="">
							<div class="caption">{{ img.caption }}</div>
							<img class="transport" src="@/section/s3/transport.png" alt="" srcset="">
						</SplideSlide>
					</Splide>
				</div>
				<div class="pagi">
					<span v-for="item, i in data" @click="splide.splide.go(i)"
						:class="{ active: i == currentIndex }"></span>
				</div>
			</div>
			<div class="title">
				<img class="map" src="@/section/s3/map.png" alt="" srcset="" data-aos="fade" data-aos-delay="0">
				<div class="t1" data-aos="fade-up" data-aos-delay="0">雙捷匯</div>
				<div class="t2" data-aos="fade-up" data-aos-delay="200">海線正核心</div>
				<div class="t3" data-aos="fade-up" data-aos-delay="400">沙鹿新站加上未來捷運藍線B4站黃金雙軸線，台灣大道、中科聯外道路特五通車，串連中部科技走廊，海線生活圈成熟發展，沙鹿受惠最多。</div>
			</div>
		</div>
		<img class="star" ref="starRef" src="@/section/s3/star.png" alt="" srcset="" v-if="!isMobile">
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
	@apply flex items-center justify-center relative bg-cover;
	width: 100%;
	height: size(1080);
	background-image: url(@/section/s3/bg.webp);

	.contain {
		@apply flex items-center justify-center relative z-10;
		gap: size(50);

		.swiper-wrapper {
			.swiper-box {
				aspect-ratio: 975/669;
				width: size(975);

				.slide {
					img {
						width: 100%;
					}

					.caption {
						@apply absolute;
						color: white;
						font-size: size(13);
						font-weight: 400;
						right: size(20);
						bottom: size(20)
					}

					.transport {
						@apply absolute;
						width: size(426.69);
						left: size(40);
						bottom: size(30);
					}
				}
			}

			.pagi {
				@apply flex items-center justify-center;
				gap: size(9);
				margin-top: size(22);

				span {
					@apply cursor-pointer;
					width: size(9);
					height: size(9);
					background-color: #D9D9D9;

					&.active {
						background-color: #E97290;
					}
				}
			}
		}

		.title {
			line-height: 1;

			.map {
				width: size(518);
				margin-bottom: -#{size(20)};
			}

			.t1 {
				color: #E97290;
				font-size: size(80);
				font-weight: 900;
			}

			.t2 {
				margin-top: size(20);
				color: #E97290;
				font-size: size(64);
				font-weight: 500;

			}

			.t3 {
				margin-top: size(35);
				color: black;
				font-size: size(20);
				font-weight: 500;
				line-height: size(35);
				width: size(525);
			}
		}

	}


	.star {
		@apply absolute;
		width: size(1273.85);
		right: size(59.15);
		bottom: -#{size(120)};
	}
}

@media screen and (max-width: 767px) {
	.s3 {
		width: 100%;
		height: sizem(654);
		background-image: url(@/section/s3/bgm.webp);
		background-position: top center;
		background-size: cover;
		@apply items-start;
		padding: sizem(53) sizem(33);

		.contain {
			@apply flex flex-col-reverse items-start justify-start relative z-10;
			gap: sizem(28);

			.swiper-wrapper {

				.swiper-box {
					@apply relative;
					aspect-ratio: 975/669;
					width: 100%;

					.arrows {
						@apply absolute z-10 flex items-center justify-between left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2;
						width: 112%;

						.next {
							transform: rotate(180deg);
						}
					}

					.slide {
						img {
							width: 100%;
						}

						.caption {
							font-size: sizem(12);
							right: sizem(10);
							bottom: sizem(5)
						}

						.transport {
							width: sizem(135.6);
							left: sizem(10);
							bottom: sizem(10);
						}
					}
				}

				.pagi {
					@apply hidden;
				}
			}

			.title {
				line-height: 1;

				.map {
					width: 100%;
					margin-bottom: 0;
				}

				.t1 {
					@apply inline;
					font-size: sizem(33);
				}

				.t2 {
					@apply inline;
					margin-top: 0;
					margin-left: sizem(10);
					font-size: sizem(30);
				}

				.t3 {
					margin-top: sizem(22);
					color: black;
					font-size: sizem(15);
					font-weight: 500;
					line-height: sizem(25.5);
					width: 100%;
				}
			}

		}


		.star {
			@apply absolute;
			width: size(1273.85);
			right: size(59.15);
			bottom: -#{size(120)};
		}
	}
}
</style>
<script setup>
import anime from 'animejs/lib/anime.es.js';
import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());

const splide = ref(null)

const currentIndex = ref(0)
const move = (index, index2) => {
	currentIndex.value = index2;
}

const scrollTo = (target) => {
	let el = document.getElementById(target);
	smoothScroll({
		scrollTo: el
	})
}

const data = [
	{
		img: new URL("../section/s3/1.webp", import.meta.url).href,
		caption: "現場實景拍攝"
	},
	{
		img: new URL("../section/s3/2.webp", import.meta.url).href,
		caption: "現場實景拍攝"
	},
	{
		img: new URL("../section/s3/3.webp", import.meta.url).href,
		caption: "情境示意圖"
	},
]


const starRef = ref(null);

function r(min, max) {
	return Math.random() * (max - min) + min;
}

const animeS = () => {
	anime({
		targets: starRef.value,
		translateX: isMobile.value ? r(-100, 100) : r(-100, 100),
		translateY: isMobile.value ? r(-100, 100) : r(-100, 100),
		round: r(1, 10),
		delay: r(0, 1000),
		duration: r(5000, 8000),
		direction: 'alternate',
		easing: 'easeInOutSine',
		loop: true,
	});
}


onMounted(() => {
	animeS();
})
</script>
