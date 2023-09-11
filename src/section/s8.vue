<template>
	<article class="s8 relative">
		<div>
			<div class="sep-text">
				INTERIOR DESIGN
			</div>
			<div class="section">
				<div class="title">
					<div class="t1">公園捷運宅
					</div>
					<div class="t2">
						<div class="item" @click="movePosition(i)" :class="`timeline${i}`" v-for="item, i in items">
							<div class="t2a">{{ item.t1 }}</div>
							<div class="t2b">{{ item.t2 }}</div>
						</div>
						<div class="line">
							<div class="pos"></div>
						</div>
					</div>
					<div class="t3">
						19-33<span>坪</span> 2-3<span>房</span>
					</div>
				</div>
				<div class="slider-box">
					<div class="arrows">
						<img class="prev" @click="splide.splide.go('<')" src="@/section/prev.png" alt="" srcset="">
						<img class="next" @click="splide.splide.go('>')" src="@/section/next.png" alt="" srcset="">
					</div>
					<Splide ref="splide" :options="{
						arrows: false,
						pagination: false,
						type: 'loop',
						autoplay: true,
						interval: 4000,
						gap: 50
					}" @splide:move="move">
						<SplideSlide class="slide" v-for="img, i in items">
							<img :src="img.img" alt="" srcset="">
							<p class="right">{{ img.caption }}</p>
						</SplideSlide>
					</Splide>
					<div class="pagi">
						<div class="item" @click="splide.splide.go(i)" v-for="img, i in items"
							:class="{ active: i == currentIdx }"></div>
					</div>
				</div>
			</div>
		</div>
	</article>
</template>

<style lang="scss" scoped >
@import '@/assets/style/function.scss';

.s8 {
	width: 100%;
	height: size(1080);
	background-image: url(@/section/s8/bg.jpg);
	background-size: cover;
	padding: 0 size(212);
	@apply flex items-center justify-center;


	.section {
		@apply flex items-center justify-center;
		gap: size(135);

		.slider-box {
			@apply relative;
			width: size(1059.13);

			.slide {
				@apply relative overflow-hidden;
				border-radius: size(100);

				img {
					width: size(1059.13);
				}

				p {
					@apply absolute;
					bottom: size(10);
					font-weight: 400;
					font-size: size(14);
					color: #FFFFFF;
					text-shadow: 0px size(2) size(4) rgba(0, 0, 0, 0.8);

					&.left {

						left: size(80);
					}

					&.right {
						right: size(80);

					}
				}
			}

			.arrows {
				@apply absolute z-20 flex items-center justify-between;
				width: 100%;
				padding: 0 size(30);
				bottom: 50%;
				transform: translateY(50%);

				img {
					@apply cursor-pointer;
					margin: unset;
				}
			}

			.pagi {
				@apply absolute flex;
				gap: size(13);
				bottom: -#{size(30)};
				left: size(100);

				.item {
					@apply cursor-pointer hover:opacity-100;
					border-radius: 100%;
					width: size(13);
					height: size(13);
					background-color: #B81B70;
					opacity: 0.5;

					&.active {
						opacity: 1;
					}
				}
			}
		}

		.title {
			.t1 {
				@apply relative;
				color: #C3398D;
				font-size: size(48);
				font-weight: 700;
				line-height: size(61);
			}

			.t2 {
				@apply flex flex-col relative;
				padding: size(32) 0;
				margin: size(5) 0;
				padding-left: size(45);
				white-space: nowrap;
				gap: size(17);

				.item {
					color: #000;
					line-height: 127.3%;

					.t2a {
						font-size: size(18.37);
						font-weight: 700;
					}

					.t2b {
						font-size: size(14.696);
						font-weight: 400;
						margin-top: size(5)
					}
				}

				.line {
					@apply absolute top-0;
					width: 1px;
					height: 100%;
					left: size(20);
					background-color: #FF3EA1;

					.pos {
						@apply absolute;
						top: 0;
						left: 50%;
						margin-left: -#{size(8.5)};
						border-radius: 100%;
						width: size(17);
						height: size(17);
						background-color: #FF3EA1;
						transition: all .5s;
					}
				}
			}

			.t3 {
				white-space: nowrap;
				color: #B81B70;
				font-size: size(55);
				font-weight: 400;
				line-height: 127.3%;

				span {
					font-size: size(36);
				}
			}
		}
	}

	.sep-text {
		@apply relative;
		text-align: left;
		color: #FF3EA1;
		font-size: size(27);
		font-family: 'Noto Serif TC';
		font-weight: 700;
		letter-spacing: size(31.18);
		margin-bottom: size(50);


		&::after {
			content: '';
			width: size(800);
			height: 1px;
			background-color: #FF3EA1;
			position: absolute;
			top: 50%;
			margin-top: -0.5px;
		}
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


	.s4 {
		width: 100%;
		height: sizem(860);
	}
}
</style>
<script setup>
import anime from 'animejs/lib/anime.es.js';

import { computed, getCurrentInstance, onMounted, ref, } from 'vue';
import inView from 'in-view';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());



const splide = ref();
const currentIdx = ref(0)
const move = (newIdx, prevIdx, destIdx) => {
	currentIdx.value = prevIdx
	movePosition(currentIdx.value)
}

const movePosition = (index) => {
	let baseHeight = document.querySelector('.s8 .title .t2 .item').clientHeight;
	let lineHeight = document.querySelector('.s8 .line').clientHeight;
	let prefixHeight = (lineHeight - (baseHeight * 8)) / 2;

	// let totalHeight = baseHeight * 8; 
	let moveHeight = (baseHeight * index) 


	anime({
		targets: '.s8 .pos',
		top: prefixHeight + moveHeight,
		duration: 200,
		easing: 'easeInOutExpo',
	});
}

const items = [
	{
		t1: '迎賓高效玄關',
		t2: '收納空間好聰明，防疫落塵區好安心',
		img: new URL("../section/s8/1.jpg", import.meta.url).href
	},
	{
		t1: '7米2面寬客餐廳',
		t2: '格局分明不打結，動線佳採光足',
		img: new URL("../section/s8/2.jpg", import.meta.url).href
	},
	{
		t1: '寬敞大主臥',
		t2: '套房式精緻規劃，空間升級加倍又舒適',
		img: new URL("../section/s8/3.jpg", import.meta.url).href
	},
	{
		t1: '多功能採光次臥',
		t2: '規劃方正，書房小孩房一次全滿足',
		img: new URL("../section/s8/4.jpg", import.meta.url).href
	},
	{
		t1: '新式建照零雨遮',
		t2: '降躁地板規劃，享受居家寧靜生活',
		img: new URL("../section/s8/5.jpg", import.meta.url).href
	},
	{
		t1: '衛浴開窗設計規劃',
		t2: '乾濕分離，當層排氣，防潮防霉',
		img: new URL("../section/s8/6.jpg", import.meta.url).href
	},
	{
		t1: '聰慧工作陽台',
		t2: '空間毫無浪費，洗衣曬衣輕鬆又順手',
		img: new URL("../section/s8/7.jpg", import.meta.url).href
	},
	{
		t1: '深凹窗防風防雨遮陽',
		t2: '樑柱外推無虛坪讓空間零死角',
		img: new URL("../section/s8/8.jpg", import.meta.url).href
	},
]
onMounted(() => {
	setTimeout(() => {

		movePosition(0)
	}, 500);
})
</script>
