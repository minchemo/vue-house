<template>
	<article class="s2">
		<div class="contain">
			<div class="title">
				<div class="t1">勝興建設 深耕台中<br>
					嚴選地段 蓋好房子</div>
				<div class="t2">
					市中心的重劃區，步行5分鐘距離<br />
					勝興建築團隊，攜手七期豪宅御用大師<br />
					打造安心舒適健康的國際精品家居。
				</div>
				<img class="t3" src="@/section/s2/t3.png" alt="" srcset="">
			</div>
			<div class="items">
				<div class="item" v-for="item, i in data">
					<div class="cover" @click="selected = item">
						<div class="bg" :style="{ 'background-image': `url(${item.cover})` }"></div>
						<div class="caption">{{ item.caption }}</div>
						<img class="expand" src="@/section/s2/expand.png" alt="" srcset="">
					</div>
					<div class="t1">{{ item.t1 }}</div>
					<div class="t2">{{ item.t2 }}</div>
				</div>
			</div>
		</div>
	</article>
	<div class="popup" :class="{ active: selected != null }">
		<div class="contain">
			<div class="back" @click="selected = null">
				<span>回到上一頁</span><img src="@/section/s2/close.png" alt="" srcset="">
			</div>
			<template v-if="selected != null">

				<div class="swiper-box">
					<Splide ref="splide" class="swiper" :options="{
						pagination: false,
						arrows: false,
						type: 'loop',
						drag: true,
						autoplay: true,
						autoWidth: true,
						interval: 4000,
						gap: 15,
						classes: {
							// pagination: 'splide__pagination pagi',
						}
					}" @splide:move="move">
						<SplideSlide class="slide" v-for="img, i in selected.imgs">
							<div class="img" :style="{ 'background-image': `url(${img.img})` }">
							</div>
						</SplideSlide>
					</Splide>
				</div>
				<div class="title">
					<ul class="splide__pagination pagi"></ul>
					<div class="t">
						<div class="t1">{{ selected.t1 }}</div>
						<div class="t2">{{ selected.t2 }}</div>
						<img class="t3" src="@/section/s2/t3.png" alt="" srcset="">
					</div>
				</div>
			</template>
		</div>
		<div class="backdrop" @click="selected = null"></div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.popup {
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
			width: size(1091);
			height: size(695);
			filter: drop-shadow(0 size(4) size(4) rgba(0, 0, 0, 0.25));
			.swiper {
				.img {
					width: size(1091);
					height: size(695);
					border: size(7) solid #fff;
					filter: drop-shadow(0 size(4) size(4) rgba(0, 0, 0, 0.25));
					@apply bg-cover bg-center;
				}
			}
		}
		.title {
			@apply flex flex-col justify-between h-full;
			.pagi {

			}

			.t {
				.t1 {
					color: #FCEE21;
font-size: size(41.79);
font-weight: 700;
				}
				.t2 {
					color: white;
font-size: size(23);
font-weight: 400;
line-height:size(33)
				}
				.t3 {width: size(381);}
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
		background: rgba(255,255,255,0.1);
	}
	&.active {
		transform: translateX(0);
	}
}

.s2 {
	width: 100%;
	height: size(1080);
	background-image: url(@/section/s2/bg.jpg);
	@apply flex items-center justify-center;
	.contain {
		@apply flex items-center; 
		gap: size(62);
		.title {
white-space: nowrap;
			.t1{
				color: #E97290;
font-size: size(64);
font-weight: 900;
line-height: size(83);
			}
			.t2{
				margin-top: size(30);
				color: black;
font-size: size(20);
font-weight: 500;
line-height: size(35);}
			.t3{
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
				.t1{
					margin-top: size(15.8);
					padding: 0 size(7);
					color: #E97290;
font-size: size(24);
font-weight: 700;
				}
				.t2{
					margin-top: size(0);
					padding: 0 size(7);
					font-size: size(18);
font-weight: 400;
line-height: size(26.6);
width: size(437);
				}
				.cover{
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
	.s2 {
	width: 100%;
	height: sizem(667);
	

}
  }

</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());

const scrollTo = (target) => {
	let el = document.getElementById(target);
	smoothScroll({
		scrollTo: el
	})
}

const selected = ref(null)

const data = [
	{
		cover: new URL("../section/s2/1.jpg", import.meta.url).href,
		t1: "勝興A+｜一、二期",
		t2: "喧囂市心的寂靜，公園轉彎就到家，且一期好評不斷、再次獻上二期精心聚作。",
		caption: "實景拍攝",
		imgs: [
			{
				img: new URL("../section/s2/1_1.jpg", import.meta.url).href,
				caption: "實景拍攝"
			},
			{
				img: new URL("../section/s2/1_2.jpg", import.meta.url).href,
				caption: "實景拍攝"
			},
		]
	},
	{
		cover: new URL("../section/s2/2.jpg", import.meta.url).href,
		t1: "勝興文心大慶",
		t2: "全齡化公設，親子共讀社區環境",
		caption: "實景拍攝",
		imgs: [
			{
				img: new URL("../section/s2/2_1.jpg", import.meta.url).href,
				caption: "實景拍攝"
			},
			{
				img: new URL("../section/s2/2_2.jpg", import.meta.url).href,
				caption: "實景拍攝"
			},
		]
	},
	{
		cover: new URL("../section/s2/3.jpg", import.meta.url).href,
		t1: "勝興松竹",
		t2: "重劃先驅，領銜十期門戶",
		caption: "實景拍攝",
		imgs: [
			{
				img: new URL("../section/s2/3_1.jpg", import.meta.url).href,
				caption: "實景拍攝"
			},
			{
				img: new URL("../section/s2/3_2.jpg", import.meta.url).href,
				caption: "示意圖"
			},
			{
				img: new URL("../section/s2/3_3.jpg", import.meta.url).href,
				caption: "示意圖"
			},
			{
				img: new URL("../section/s2/3_4.jpg", import.meta.url).href,
				caption: "示意圖"
			},
		]
	},
	{
		cover: new URL("../section/s2/4.jpg", import.meta.url).href,
		t1: "勝興豐境",
		t2: "凌空22層，市政重劃區雙港核心地段。",
		caption: "示意圖",
		imgs: [
			{
				img: new URL("../section/s2/4_1.jpg", import.meta.url).href,
				caption: "示意圖"
			},

		]
	},
]
</script>
