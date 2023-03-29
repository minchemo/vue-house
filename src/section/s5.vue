<template>
	<article class="s5 relative z-10">
		<div class="text">
			<div class="t1" data-aos="fade-down" data-aos-delay="0">出家門進雙校門<br>
				副都心唯一文教雙語學區 </div>
			<div class="t2" data-aos="fade-down" data-aos-delay="200" v-if="!$isMobile()">
				父母心中最優質的生活環境，頭前國中正對面<br>
				步行1分鐘昌平國小副都心首屈一指雙語學校，社區公托中心<br>
				步行3分鐘吉的堡幼兒園，鄰近新莊高中、輔仁大學<br>
				16年完全教育學區，純翠的環境、濃郁的學習氛圍<br>
				在放手之前，給孩子一個好環境<br>
				讓他贏得自己的未來，培養與世界同行的眼界與自信
			</div>
			<div class="t2" data-aos="fade-down" data-aos-delay="200" v-if="$isMobile()">
				父母心中最優質的生活環境，頭前國中正對面<br>
				步行1分鐘昌平國小副都心首屈一指雙語學校，社區公托中心，步行3分鐘吉的堡幼兒園，鄰近新莊高中、輔仁大學。
				16年完全教育學區，純翠的環境、濃郁的學習氛圍，在放手之前，給孩子一個好環境。
				讓他贏得自己的未來，培養與世界同行的眼界與自信。
			</div>
		</div>
		<ul class="pagin" v-if="!$isMobile()">
			<li v-for="img, i in imgs" v-bind:class="{ active: currentSlideIndex == i }" @click="splide.splide.go(i)"></li>
		</ul>
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
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
	width: 100%;
	height: size(1028);
	padding-left: size(97);
	@apply flex items-center;

	.text {
		width: size(1159.5);
		height: size(731);
		background: #EEEEEE;
		box-shadow: size(10) size(10) size(20) rgba(0, 0, 0, 0.5);
		padding: size(120) size(114);
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
			color: #000000;
		}
	}
	.pagin {
		@apply absolute flex items-center justify-center;
		left: size(657.62);
		bottom: size(21.5);
		gap: size(10.22);
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
	.slider {
		@apply absolute bg-white;
		right: 0;
		bottom: 0;
		width: size(960);
		height: size(566);
		filter: drop-shadow(0 size(5) size(20) rgba(0, 0, 0, 0.3));
		.slide-item {
				// @apply relative;
			width: size(960);
			height: size(566);
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
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s5 {
	width: 100%;
	height: sizem(678);
	padding-left: 0;
	padding-top: sizem(31);
	@apply flex flex-col items-center;

	.text {
		width: sizem(351);
		height: auto;
		background: #EEEEEE;
		box-shadow: sizem(5) sizem(5) sizem(10) rgba(0, 0, 0, 0.5);
		padding: sizem(45.7) sizem(18) sizem(20) sizem(18);
		.t1 { 
			font-size: sizem(20);
			line-height: 163%;
			color: #00437D;
		}
		.t2 {
			margin-top: sizem(10);
			font-size: sizem(13);
			line-height: 187%;
			text-align: justify;
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
		img: globals.$isMobile() ? new URL("s5/1_m.jpg", import.meta.url).href : new URL("s5/1.jpg", import.meta.url).href,
		caption: "吉的堡幼兒園"
	},
	{
		img: globals.$isMobile() ? new URL("s5/2_m.jpg", import.meta.url).href : new URL("s5/2.jpg", import.meta.url).href,
		caption: "昌平國小"
	},
	{
		img: globals.$isMobile() ? new URL("s5/3_m.jpg", import.meta.url).href : new URL("s5/3.jpg", import.meta.url).href,
		caption: "頭前國中"
	},
	{
		img: globals.$isMobile() ? new URL("s5/4_m.jpg", import.meta.url).href : new URL("s5/4.jpg", import.meta.url).href,
		caption: "新莊高中"
	},
]
</script>
