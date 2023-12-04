<template>
	<article class="s2">
		<img class="star1" src="@/section/s2/starm.png" alt="" srcset="" v-if="isMobile">
		<img class="star2" src="@/section/s2/starm.png" alt="" srcset="" v-if="isMobile">
		<div class="contain">
			<div class="title">
				<div class="t1" data-aos="fade-up" data-aos-delay="0">勝興建設 深耕台中<br>
					嚴選地段 蓋好房子</div>
				<div class="t2" data-aos="fade-up" data-aos-delay="200"> 
					市中心的重劃區，步行5分鐘距離<br />
					勝興建築團隊，攜手七期豪宅御用大師<br />
					打造安心舒適健康的國際精品家居。
				</div>
				<img class="t3" src="@/section/s2/t3.png" alt="" srcset="" data-aos="fade-up" data-aos-delay="400">
			</div>
			<div class="items">
				<template v-if="!isMobile">
					<div class="item" v-for="item, i in data">
						<div class="cover" @click="setSelected(item)">
							<div class="bg" :style="{ 'background-image': `url(${item.cover})` }"></div>
							<div class="caption">{{ item.caption }}</div>
							<img class="expand" src="@/section/s2/expand.png" alt="" srcset="">
						</div>
						<div class="t1">{{ item.t1 }}</div>
						<div class="t2">{{ item.t2 }}</div>
					</div>
				</template>
				<template v-else>
					<Splide class="w-screen" :options="{
						pagination: false,
						arrows: false,
						drag: true,
						autoplay: true,
						autoWidth: true,
						interval: 3000,
						gap: 15,
						focus: 'center',
						perPage: 1.5,
						type: 'loop',
					}">
						<SplideSlide class="item" v-for="item, i in data">
							<div class="cover" @click="setSelected(item)">
								<div class="bg" :style="{ 'background-image': `url(${item.cover})` }"></div>
								<div class="caption">{{ item.caption }}</div>
								<img class="expand" src="@/section/s2/expand.png" alt="" srcset="">
							</div>
							<div class="t1">{{ item.t1 }}</div>
							<div class="t2">{{ item.t2 }}</div>
						</SplideSlide>
					</Splide>
				</template>
			</div>
		</div>
	</article>
	<div class="s2popup" :class="{ active: popupOpen }">
		<div class="contain" :key="selected">
			<div class="back" @click="popupOpen = !popupOpen">
				<span>回到上一頁</span><img src="@/section/s2/close.png" alt="" srcset="">
			</div>
			<div class="swiper-box" >
				<div class="arrows" v-if="isMobile && selected.imgs.length > 1">
					<img class="prev" @click="splide.splide.go('<')" src="@/section/arrow.png" alt="" srcset="">
					<img class="next" @click="splide.splide.go('>')" src="@/section/arrow.png" alt="" srcset="">
				</div>
				<Splide ref="splide" class="swiper"  :options="{
					pagination: false,
					arrows: false,
					drag: true,
					autoplay: true,
					interval: 4000,
					gap: 15,
				}" @splide:move="move">
					<SplideSlide class="slide" v-for="img, i in selected.imgs">
						<img :src="img.img" alt="" srcset="">
						<div class="caption">{{ img.caption }}</div>
					</SplideSlide>
				</Splide>
			</div>
			<div class="title">
				<div class="pagi">
					<span v-for="item, i in selected.imgs" @click="splide.splide.go(i)"
						:class="{ active: i == currentIndex }"></span>
				</div>
				<div class="t">
					<div class="t1">{{ selected.t1 }}</div>
					<div class="t2">{{ selected.t2 }}</div>
					<img class="t3" src="@/section/s2/t3.png" alt="" srcset="">
				</div>
			</div>
		</div>
		<div class="backdrop" @click="popupOpen = !popupOpen"></div>
	</div>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2popup {
	@apply fixed z-[999999] transition-all duration-500 flex items-center justify-center;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	transform: translateX(100%);
	padding: size(80) size(100);

	.contain {
		@apply relative z-10 flex items-center justify-center w-full h-full;
		padding: size(100) size(100);
		gap: size(35);
		background-color: rgba(233, 114, 144, 0.95);

		.swiper-box {
			aspect-ratio: 1091/695;
			height: 100%;
			filter: drop-shadow(0 size(4) size(4) rgba(0, 0, 0, 0.25));

			.swiper {

				.slide {
					img {
						width: 100%;
						border: size(7) solid #fff;
						filter: drop-shadow(0 size(4) size(4) rgba(0, 0, 0, 0.25));
					}

					.caption {
						@apply absolute;
						color: white;
						font-size: size(13);
						font-weight: 400;
						left: size(20);
						bottom: size(20)
					}
				}


			}
		}

		.title {
			@apply flex flex-col justify-between h-full;
			padding: size(7) 0;

			.pagi {
				@apply flex items-center;
				gap: size(9);

				span {
					@apply cursor-pointer;
					width: size(9);
					height: size(9);
					background-color: #D9D9D9;

					&.active {
						background-color: #FCEE21;
					}
				}
			}

			.t {
				.t1 {
					color: #FCEE21;
					font-size: size(41.79);
					font-weight: 700;
				}

				.t2 {
					margin-top: size(15);
					color: white;
					font-size: size(23);
					font-weight: 400;
					line-height: size(33)
				}

				.t3 {
					margin-top: size(51);
					width: size(381);
				}
			}
		}

		.back {
			@apply absolute flex items-center cursor-pointer;
			top: size(20);
			right: size(20);
			font-size: size(18);
			font-weight: 400;
			color: #fff;

			img {
				width: size(50);
			}
		}
	}

	.backdrop {
		@apply absolute cursor-pointer;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(4px);
	}

	&.active {
		transform: translateX(0);
	}
}

.s2 {
	width: 100%;
	height: size(1080);
	background-image: url(@/section/s2/bg.webp);
	@apply flex items-center justify-center bg-cover;

	.contain {
		@apply flex items-center;
		gap: size(62);

		.title {
			white-space: nowrap;

			.t1 {
				color: #E97290;
				font-size: size(64);
				font-weight: 900;
				line-height: size(83);
			}

			.t2 {
				margin-top: size(30);
				color: black;
				font-size: size(20);
				font-weight: 500;
				line-height: size(35);
			}

			.t3 {
				margin-top: size(27);
				width: size(525);
			}
		}

		.items {
			@apply grid grid-cols-2;
			column-gap: size(46.45);
			row-gap: size(32);

			// width: size(957);
			.item {
				.t1 {
					margin-top: size(15.8);
					padding: 0 size(7);
					color: #E97290;
					font-size: size(24);
					font-weight: 700;
				}

				.t2 {
					margin-top: size(0);
					padding: 0 size(7);
					font-size: size(18);
					font-weight: 400;
					line-height: size(26.6);
					width: size(437);
				}

				.cover {
					@apply relative bg-white cursor-pointer transition-all;
					padding: size(7);
					width: size(455.46);
					height: size(290.15);
					filter: drop-shadow(0 size(4) size(4) rgba(0, 0, 0, 0.25));

					.bg {
						@apply w-full h-full bg-cover bg-center;
					}

					.caption {
						@apply absolute;
						color: white;
						font-size: size(13);
						font-weight: 400;
						left: size(16);
						bottom: size(13);
					}

					.expand {
						@apply absolute;
						width: size(24);
						right: size(16);
						bottom: size(16);
					}

					&:hover {
						filter: drop-shadow(0 size(4) size(4) rgba(0, 0, 0, 0.5));
					}
				}

				&:nth-child(2n) {
					transform: translateY(size(40));
				}
			}
		}
	}
}

@media screen and (max-width: 767px) {
	.s2popup {
		@apply fixed z-[999999] transition-all duration-500 flex items-start justify-center;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		transform: translateX(100%);
		padding: sizem(30) sizem(12);

		.contain {
			@apply relative z-10 flex flex-col items-start;
			padding: sizem(70) sizem(20) sizem(40) sizem(20);
			gap: sizem(10);
			height: auto;

			.swiper-box {
				aspect-ratio: 1091/695;
				height: auto;
				width: 100%;
				filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));

				.arrows {
					@apply absolute z-10 flex justify-between left-1/2 -translate-x-1/2 top-1/4 -translate-y-1/2;
					width: 85%;
					margin-top:sizem(30);
					padding: sizem(10);

					.next {
						transform: rotate(180deg);
					}
				}

				.swiper {
					.slide {
						img {
							width: 100%;
							border: sizem(5) solid #fff;
							filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
						}

						.caption {
							font-size: sizem(12);
							left: sizem(16);
							bottom: sizem(10)
						}
					}


				}
			}

			.title {
				@apply flex flex-col justify-between h-full;
				padding: sizem(7) 0;

				.pagi {
					@apply hidden;
				}

				.t {
					.t1 {
						font-size: sizem(30);
					}

					.t2 {
						margin-top: sizem(5);
						font-size: sizem(15);
						line-height: sizem(25.5)
					}

					.t3 {
						margin-top: sizem(80);
						width: 100%
					}
				}
			}

			.back {
				@apply absolute flex items-center cursor-pointer;
				top: sizem(5);
				right: sizem(5);
				font-size: sizem(13);

				img {
					width: sizem(40);
				}
			}
		}

		.backdrop {
			@apply absolute cursor-pointer;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: rgba(255, 255, 255, 0.1);
			backdrop-filter: blur(4px);
		}

		&.active {
			transform: translateX(0);
		}
	}

	.s2 {
		@apply relative;
		width: 100%;
		height: sizem(742);
		background-image: url(@/section/s2/bgm.webp);
		background-position: bottom;
		@apply items-start;
		padding-top: sizem(60);

		.star1 {
			@apply absolute;
			right: -#{sizem(16)};
			top: -#{sizem(55.73)}
		}
		.star2 {
			@apply absolute;
			top: sizem(251.84);
			left: -#{sizem(50)}
		}

		.contain {
			@apply flex-col relative z-10;
			gap: unset;

			.title {
				white-space: nowrap;

				.t1 {
					font-size: sizem(33);
					line-height: sizem(42.5);
				}

				.t2 {
					margin-top: sizem(20);
					font-size: sizem(15);
					line-height: sizem(25.5);
				}

				.t3 {
					margin-top: sizem(24.35);
					width: sizem(310);
				}
			}

			.items {
				@apply block;
				column-gap: unset;
				row-gap: unset;
				margin-top: sizem(85);

				.item {
					.t1 {
						margin-top: sizem(10);
						padding: 0 sizem(7);
						font-size: sizem(16);
					}

					.t2 {
						margin-top: 8px;
						padding: 0 sizem(7);
						font-size: sizem(15);
						line-height: sizem(22.17);
						width: sizem(271);
					}

					.cover {
						@apply relative bg-white cursor-pointer transition-all;
						padding: sizem(5);
						width: sizem(282);
						height: auto;
						aspect-ratio: 283.13/180.36;
						filter: drop-shadow(0 sizem(8) sizem(8) rgba(0, 0, 0, 0.25));

						.caption {
							font-size: sizem(12);
							left: sizem(12);
							bottom: sizem(8);
						}

						.expand {
							@apply absolute;
							width: sizem(24);
							right: sizem(16);
							bottom: sizem(16);
						}

					}

					&:nth-child(2n) {
						transform: translateY(0);
					}
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

const scrollTo = (target) => {
	let el = document.getElementById(target);
	smoothScroll({
		scrollTo: el
	})
}

const splide = ref(null)

const currentIndex = ref(0)
const move = (index, index2) => {
	currentIndex.value = index2;
}

const setSelected = (item) => {
	selected.value = item;
	currentIndex.value = 0;
	popupOpen.value = true;
}
const data = [
	{
		cover: new URL("../section/s2/1.webp", import.meta.url).href,
		t1: "勝興A+｜一、二期",
		t2: "喧囂市心的寂靜，公園轉彎就到家，且一期好評不斷、再次獻上二期精心聚作。",
		caption: "實景拍攝",
		imgs: [
			{
				img: new URL("../section/s2/1_1.webp", import.meta.url).href,
				caption: "實景拍攝"
			},
			{
				img: new URL("../section/s2/1_2.webp", import.meta.url).href,
				caption: "實景拍攝"
			},
		]
	},
	{
		cover: new URL("../section/s2/2.webp", import.meta.url).href,
		t1: "勝興文心大慶",
		t2: "全齡化公設，親子共讀社區環境",
		caption: "實景拍攝",
		imgs: [
			{
				img: new URL("../section/s2/3_1.webp", import.meta.url).href,
				caption: "實景拍攝"
			},
			{
				img: new URL("../section/s2/3_2.webp", import.meta.url).href,
				caption: "示意圖"
			},
			{
				img: new URL("../section/s2/3_3.webp", import.meta.url).href,
				caption: "示意圖"
			},
			{
				img: new URL("../section/s2/3_4.webp", import.meta.url).href,
				caption: "示意圖"
			},
			{
				img: new URL("../section/s2/3_5.webp", import.meta.url).href,
				caption: "示意圖"
			},
		]
	},
	{
		cover: new URL("../section/s2/3.webp", import.meta.url).href,
		t1: "勝興松竹",
		t2: "重劃先驅，領銜十期門戶",
		caption: "實景拍攝",
		imgs: [
			{
				img: new URL("../section/s2/2_1.webp", import.meta.url).href,
				caption: "實景拍攝"
			},
			{
				img: new URL("../section/s2/2_2.webp", import.meta.url).href,
				caption: "實景拍攝"
			},
		]
	},
	{
		cover: new URL("../section/s2/4.webp", import.meta.url).href,
		t1: "勝興豐境",
		t2: "凌空22層，市政重劃區雙港核心地段。",
		caption: "示意圖",
		imgs: [
			{
				img: new URL("../section/s2/4_1.webp", import.meta.url).href,
				caption: "示意圖"
			},

		]
	},
]
const popupOpen = ref(false)
const selected = ref(data[0])

onMounted(() => {
	selected.value = data[1];
})
</script>
