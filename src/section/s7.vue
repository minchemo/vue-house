<template>
	<article class="s7 relative">
		<div class="text">
			<div class="t1" data-aos="fade-down" data-aos-delay="0">雙捷核心 環狀線╳機場線<br>
				2站台北 一線國門 幸福隨行</div>
			<div class="t2" data-aos="fade-down" data-aos-delay="200" v-if="!$isMobile()">
				微距機場捷運線「新北產業園區站」環狀線「幸福站」、皆僅800米<br>
				1站轉乘中和新蘆線，1站直達台北車站<br>
				一線連結桃園機場，加上鄰近台64、65號、台1線快速道路連接國道<br>
				縱橫雙北與國際從容以閱
			</div>
			<div class="t2" data-aos="fade-down" data-aos-delay="200" v-if="$isMobile()">
				微距機場捷運線「新北產業園區站」環狀線「幸福站」、皆僅800米，
				1站轉乘中和新蘆線，1站直達台北車站，
				一線連結桃園機場，加上鄰近台64、65號、台1線快速道路連接國道，
				縱橫雙北與國際從容以閱。
			</div>
			<ul class="pagin" v-if="!$isMobile()">
				<li v-for="img, i in imgs" v-bind:class="{ active: currentSlideIndex == i }" @click="splide.splide.go(i)">
				</li>
			</ul>
		</div>
		<div class="slider" data-aos="fade" data-aos-delay="0">
			<div class="arrows" v-if="$isMobile()">
				<img loading="lazy" class="prev" @click="splide.splide.go('<')" src="@/section/prev.png" alt="" srcset="">
				<img loading="lazy" class="next" @click="splide.splide.go('>')" src="@/section/next.png" alt="" srcset="">
			</div>
			<Splide ref="splide" class="slide" @splide:move="moved" :options="options">
				<SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
					<p>{{ img.caption }}</p>
				</SplideSlide>
			</Splide>
		</div>
		<img loading="lazy" class="mark" data-aos="fade" data-aos-delay="0" v-if="!$isMobile()" src="@/section/s7/mark.png" alt="" srcset="">
		<img loading="lazy" class="mark" data-aos="fade" data-aos-delay="0" v-else src="@/section/s7/mark_m.png" alt="" srcset="">
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s7 {
	width: 100%;
	height: size(876);
	gap: size(0);
	@apply flex justify-center items-center;

	.text {
		@apply relative flex flex-col items-start justify-center;
		width: size(952);
		height: size(732);
		background-color: #EEEEEE;
		padding-left: size(114.07);
		.t1 {
			font-weight: 700;
			font-size: size(50);
			line-height: 160%;
			color: #00437D;
		}
		.t2 {
			margin-top: size(30);
			font-weight: 400;
			font-size: size(25);
			line-height: 200%;
			color: #000;
		}
		.pagin {
			@apply absolute flex items-center justify-start;
			gap: size(10.22);
			margin-top: size(62);
			left: size(770);
			bottom: size(30.36);
			li {
				@apply cursor-pointer;
				width: size(36.78);
				height: size(3.86);
				background-color: #BB9259;
				&.active {
					height: size(11.47);
				}
			}
		}
	}
	.slider {
		@apply relative bg-white;
		right: 0;
		bottom: 0;
		width: size(789);
		height: size(732);
		filter: drop-shadow(0 size(5) size(20) rgba(0, 0, 0, 0.3));
		.slide-item {
			width: size(789);
			height: size(732);
			background-size: cover;
			p {
				@apply absolute;
				
				right: size(10);
				bottom: size(5);
				font-weight: 400;
				font-size: size(18);
				color: #FFFFFF;
				text-shadow: 0px size(2) size(2) rgba(0, 0, 0, 0.8);
			}
		}
	}
	.mark {
		@apply absolute;
		width: size(258.03);
		left: size(849.03);
		top: 0;
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s7 {
	width: 100%;
	height: auto;
	gap: 0;
	padding-top: sizem(31);
	@apply flex flex-col justify-center items-center;

	.text {
		width: sizem(351);
		height: auto;
		padding: sizem(45.7) sizem(19) sizem(35) sizem(19);
		.t1 { 
			font-size: sizem(20);
			line-height: 163%;
			color: #00437D;
		}
		.t2 {
			text-align: justify;
			width: 100%;
			margin-top: sizem(10);
			font-size: sizem(13);
			line-height: 187%;
			color: #000;
		}
	}
	.slider {
		@apply relative bg-white;
		right: 0;
		bottom: 0;
		width: sizem(351);
		height: sizem(314);
		box-shadow: sizem(5) sizem(5) sizem(10) rgba(0, 0, 0, 0.5);
		filter: none;
		.slide-item {
			width: sizem(351);
			height: sizem(314);
			p {
				
				right: sizem(10);
				bottom: sizem(10);
				font-size: sizem(12);
				text-shadow: 0px sizem(2) sizem(2) rgba(0, 0, 0, 0.8);
			}
		}

		
		.arrows {
			@apply absolute z-10 flex items-center justify-between;
			width: 100%;
			padding: 0 sizem(5);
			bottom: 50%;
			transform: translateY(50%);
			img {
				margin: unset;
			}
		}
	}
	.mark {
		width: sizem(91.4);
		height: auto;
		left: sizem(269);
		bottom: unset;
		top: sizem(15.6);
	}

  }
}

</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const getImg = (path) => {
	if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
	return new URL(`./${path}_m.jpg`, import.meta.url).href
}
const splide = ref();
const currentSlideIndex = ref(0);
const moved = (newIdx, prevIdx, destIdx) => {
	currentSlideIndex.value = prevIdx
}

const options = {
	rewind: true,
	arrows: false,
	pagination: false,
	autoplay: true,
	interval: 4000,
	gap: 0,
	type: 'fade'
}

const imgs = [
	{
		img: globals.$isMobile() ? new URL("s7/1_m.jpg", import.meta.url).href : new URL("s7/1.jpg", import.meta.url).href,
		caption: "機捷新北產業園區站"
	},
	{
		img: globals.$isMobile() ? new URL("s7/2_m.jpg", import.meta.url).href : new URL("s7/2.jpg", import.meta.url).href,
		caption: "環狀線幸福站"
	},
]
</script>
