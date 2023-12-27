<template>
	<article class="s5">
		<div class="section1">
			<div class="title">
				<div class="t1" data-aos="fade-up" data-aos-delay="0">機能全</div>
				<div class="t2" data-aos="fade-up" data-aos-delay="200">站前新商圈</div>
				<div class="t3" data-aos="fade-up" data-aos-delay="400">車站商圈、家樂福商圈、靜宜商圈，匯集金融醫療行政中心、運動中心、沙鹿國中國小、市場、家樂福、星巴克、麥當勞、全國電子..All in one。</div>
			</div>
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
						interval: 4000,
						gap: 15,
					}" @splide:move="move">
						<SplideSlide class="slide" v-for="img, i in data">
							<img :src="img.img" alt="" srcset="">
							<div class="caption">{{ img.caption }}</div>
							<img class="transport" src="@/section/s5/function.png" alt="" srcset="">
						</SplideSlide>
					</Splide>
				</div>
				<div class="pagi">
					<span v-for="item, i in data" @click="splide.splide.go(i)"
						:class="{ active: i == currentIndex }"></span>
				</div>
			</div>
		</div>
		<img class="i3" src="@/section/s5/i3.jpg" alt="" srcset="" v-if="!isMobile">

		<div class="section2">
			<img class="group" src="@/section/s5/group.jpg" alt="" srcset="" v-if="isMobile">
			<div class="title">
				<img class="i2" src="@/section/s5/i2.jpg" alt="" srcset="" v-if="!isMobile">
				<div class="t1" data-aos="fade-up" data-aos-delay="0">
					市中心<span>重劃好生活</span>
				</div>
				<img src="@/section/s5/citycenter.png" class="t2" alt="" srcset="" data-aos="fade-up" data-aos-delay="200">
				<div class="t3" data-aos="fade-up" data-aos-delay="400">沙鹿市中心首見全新重劃區，整齊街廓新視野，「勝興興站」稀有千坪基地，30米寬綠園道、近百米雙排綠蔭大樹迎賓，現在機能完備、未來願景立見。</div>
			</div>
		</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
	@apply relative bg-cover;
	width: 100%;
	height: size(2006);
	background-image: url(@/section/s5/bg.jpg);
	padding-top: size(180);
	padding-right: size(183);


	.section1 {
		@apply flex items-center justify-end relative z-10;
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
						width: size(240.69);
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
				text-align: justify;
				margin-top: size(35);
				color: black;
				font-size: size(20);
				font-weight: 500;
				line-height: size(35);
				width: size(525);
			}
		}

	}

	.section2 {
		@apply flex items-end justify-end;
		gap: size(84);
		margin-top: size(140);

		.i1 {
			aspect-ratio: 1/1;
			width: size(521);
		}

		.title {
			@apply flex flex-col;
			width: size(791);
			padding-bottom: size(79);

			.i2 {
				@apply w-full;
			}

			.t1 {
				color: #E97290;
				font-size: size(80);
				font-weight: 900;
				margin-top: size(83);

				span {
					font-size: size(64);
					margin-left: size(20);
					font-weight: 500
				}
			}

			.t2 {
				margin-top: -#{size(5)};
				width: size(289);
			}

			.t3 {
				margin-top: size(30);
				color: black;
				font-size: size(20);
				font-weight: 500;
				line-height: size(35);
			}
		}
	}

	.i3 {
		@apply absolute;
		width: size(708);
		left: 0;
		top: size(804);
	}
}

@media screen and (max-width: 767px) {
	.s5 {
		width: 100%;
		height: sizem(1260);
		background-image: url(@/section/s5/bgm.jpg);
		padding: 0;
		padding-top: sizem(65);

		.section1 {
			@apply flex flex-col items-start justify-end relative z-10;
			gap: sizem(20);
			padding: 0 sizem(32);

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
							width: sizem(97);
							left: sizem(10);
							bottom: sizem(10);
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
				.t1 {
					@apply inline;
					font-size: sizem(33);

					span {
						font-size: sizem(30);
						margin-left: sizem(10);
					}
				}

				.t2 {
					@apply inline;
					margin-left: 10px;
					width: 100%;
					font-size: sizem(30);
				}

				.t3 {
					text-align: justify;
					margin-top: 20px;
					color: black;
					font-size: sizem(15);
					line-height: sizem(25.5);
					width: 100%;
				}
			}

		}

		.section2 {
			@apply flex flex-col items-start justify-end;
			gap: sizem(40);
			margin-top: sizem(85);

			.group {
				width: 100%;
			}

			.title {
				@apply flex flex-col;
				width: 100%;
				padding: 0 sizem(32);
				padding-bottom: 0;

				.i2 {
					@apply w-full;
				}

				.t1 {
					font-size: sizem(33);
					margin-top: 0;

					span {
						font-size: sizem(30);
						margin-left: 10px;
					}
				}

				.t2 {
					margin-top: 5px;
					padding-left: 2px;
					width: sizem(151);
				}

				.t3 {
					margin-top: sizem(20);
					font-size: sizem(15);
					line-height: sizem(25.5);
				}
			}
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
const data = [
	{
		img: new URL("../section/s5/1.jpg", import.meta.url).href,
		caption: "現場實景拍攝"
	},
	{
		img: new URL("../section/s5/2.jpg", import.meta.url).href,
		caption: "現場實景拍攝"
	},
	{
		img: new URL("../section/s5/3.jpg", import.meta.url).href,
		caption: "現場實景拍攝"
	},
	{
		img: new URL("../section/s5/4.jpg", import.meta.url).href,
		caption: "現場實景拍攝"
	},
]

</script>
