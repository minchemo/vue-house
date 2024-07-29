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
						<SplideSlide class="slide" v-for="img,  in data" :key="img">
							<img :src="img.img" alt="" srcset="">
							<div class="caption">{{ img.caption }}</div>
							<img class="transport" src="@/section/s3/transport.png" alt="" srcset="">
						</SplideSlide>
					</Splide>
				</div>
				<div class="pagi">
					<span v-for="item, i in data" @click="splide.splide.go(i)"
						:class="{ active: i == currentIndex }" :key="item"></span>
				</div>
			</div>
			<div class="title">
				<img class="map" src="@/section/s3/map.png" alt="" srcset="" data-aos="fade" data-aos-delay="0">
				<div class="t1" data-aos="fade-up" data-aos-delay="0">雙捷匯</div>
				<div class="t2" data-aos="fade-up" data-aos-delay="200">海線正核心</div>
				<div class="t3" data-aos="fade-up" data-aos-delay="400">沙鹿新站加上未來捷運藍線B4站黃金雙軸線，台灣大道、中科聯外道路特五通車，串連中部科技走廊，海線生活圈成熟發展，沙鹿受惠最多。</div>
			</div>
		</div>
		<div class="star-1" v-if="!isMobile">
			<div class="star01"><img src="./s1/star1.svg" alt="star"></div>
			<div class="star02"><img src="./s1/star1.svg" alt="star"></div>
			<div class="star03"><img src="./s1/star1.svg" alt="star"></div>
			<div class="star04"><img src="./s1/star1.svg" alt="star"></div>
			<div class="star05"><img src="./s1/star1.svg" alt="star"></div>
			<div class="star06"><img src="./s1/star1.svg" alt="star"></div>
			<div class="star07"><img src="./s1/star1.svg" alt="star"></div>
			<div class="star08"><img src="./s1/star1.svg" alt="star"></div>
		</div>
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
	
	@keyframes star {	
		0%{
		transform: scale(.5)translateY(30%);
		opacity: 0;
	   }
	   10%{
		transform: scale(1);
		opacity: 1;
	   }
	   65%{
		transform: scale(1)translateY(-10%);
		opacity: 1;
	   }
	   75%{
		transform: scale(1.5)translateY(-30%);
		opacity: 0;
	   }
	   100%{
		transform: scale(.5)translateY(0%);;
		opacity: 0;
	   }
	}
	
.star-1{position: absolute;left: 0;top: 0;width: 100%;height: 100%;
> div {position: absolute;
/* */	transform: scale(.5);
    opacity: 0;
	animation:star 8s ease-in-out infinite;
img{width: 100%;}}
  .star01{
    width: 13.5vw;
    top: 75%;
    left: 33%;
	animation-delay: 0s;
    img{
		opacity:0.4;
		transform: rotate(17deg);
		filter: saturate(10%)brightness(1.2);}
  }
  .star02{
	width: 11vw;
    top: 67%;
    left: 37.5%;
	animation-delay: 0.3s;
    img{
    opacity: 0.3;
    transform: rotate(164deg);}
  }
  .star03{
    width: 5.5vw;
    top: 75%;
    left: 46.5%;
	animation-delay: 0.6s;
    img{
    opacity: 0.4;
    transform: rotate(172deg);
	filter:saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);
	}
  }
  .star04{
    width: 5.5vw;
    top: 84%;
    left: 55.5%;
	animation-delay: 0.9s;
    img{
    opacity: 0.3;
    transform: rotate(-3deg);
	}
  }
  .star05{
    width: 5vw;
    top: 85%;
    left: 62%;
	animation-delay: 1.2s;
    img{
    opacity: 0.3;
    transform: rotate(117deg);
	filter:saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);
	}
  }
  .star06{
    width: 8vw;
    top: 78%;
    left: 71.5%;
	animation-delay: 1.5s;
    img{
    opacity: 0.3;
    transform: rotate(79deg);}
  }
  .star07{
    width: 13vw;
    top: 75%;
    left: 77%;
	animation-delay: 1.8s;
    img{
		opacity:0.4;
		transform: rotate(96deg);
		filter: saturate(20%)brightness(1.2);}
  }
  .star08{
    width: 13.5vw;
    top: 64%;
    left: 80.5%;
	animation-delay: 2.1s;
    img{
		opacity:0.3;
		transform: rotate(67deg);}
  }
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
</script>
