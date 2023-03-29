<template>
	<article class="s8 relative">
		<div class="text">
			<div class="t1" data-aos="fade-down" data-aos-delay="0">雙商圈雙百貨<br>3分鐘微距宏匯廣場</div>
			<div class="t2" data-aos="fade-down" data-aos-delay="200"  v-if="!$isMobile()">
				時尚熱點宏匯廣場、晶冠廣場超過400個品牌入駐<br>
				美麗新影城、VR虛擬實境樂園、SONY Zepp表演展<br>
				館、家樂福、IKEA⋯<br>
				散步3分鐘中原商圈食衣住行市場採買機能全到位
			</div>

			<div class="t2" data-aos="fade-down" data-aos-delay="200"  v-if="$isMobile()">
				時尚熱點宏匯廣場、晶冠廣場超過400個品牌入駐，美麗新影城、VR虛擬實境樂園、SONY Zepp表演展館、家樂福、IKEA⋯，散步3分鐘中原商圈食衣住行市場採買機能全到位。
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
		<img class="flag" data-aos="fade" data-aos-delay="0" src="@/section/s8/horse.png" alt="" srcset="">
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s8 {
	width: 100%;
	height: size(1076);
	gap: size(88);
	padding-bottom: size(172);
	@apply flex flex-row-reverse justify-center items-end;

	.text {
		width: auto;
		height: auto;
		.t1 {
			font-weight: 700;
			font-size: size(50);
			line-height: 160%;
			color: #FFCE88;
		}
		.t2 {
			margin-top: size(30);
			font-weight: 400;
			font-size: size(25);
			line-height: 200%;
			color: #fff;
		}
		.pagin {
			@apply relative flex items-center justify-start;
			gap: size(10.22);
			margin-top: size(62);
			li {
				@apply cursor-pointer;
				width: size(36.78);
				height: size(3.86);
				background-color: #DFD9CD;
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
	.flag {
		@apply absolute;
		width: size(637.21);
		left: size(1542);
		bottom: size(484.87);
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s8 {
	width: 100%;
	height: auto;
	gap: sizem(27.2);
	padding-top: sizem(53.7);
	@apply flex flex-col justify-center items-center;

	.text {
		width: sizem(351);
		height: auto;
		padding: 0 sizem(10);
		.t1 { 
			font-size: sizem(20);
			line-height: 163%;
			color: #FFCE88;
		}
		.t2 {
			margin-top: sizem(10);
			font-size: sizem(13);
			line-height: 187%;
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
	.flag {
		width: sizem(134);
		height: auto;
		left: sizem(294);
		bottom: unset;
		top: sizem(10);
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
		img: globals.$isMobile() ? new URL("s8/1_m.jpg", import.meta.url).href : new URL("s8/1.jpg", import.meta.url).href,
		caption: "宏匯廣場"
	},
	{
		img: globals.$isMobile() ? new URL("s8/2_m.jpg", import.meta.url).href : new URL("s8/2.jpg", import.meta.url).href,
		caption: "京冠廣場(情境示意圖)"
	},
]
</script>
