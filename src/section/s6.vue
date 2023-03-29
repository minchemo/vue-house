<template>
	<article class="s6 relative">
		<div class="text">
			<div class="t1" data-aos="fade-down" data-aos-delay="0">青春綠皮書<br>穠翠綠洲氧森養生</div>
			<div class="t2" data-aos="fade-down" data-aos-delay="200" v-if="!$isMobile()">
				全國四座低碳綠能示範城市，新莊副都心新北唯一示範特區<br>
				斥資30億中港大排美化工程，打造新北清溪川<br>
				5分鐘1.4公頃塭仔底濕地公園、昌平公園、願景公園環聚<br>
				慢活城森養好人生
			</div>
			<div class="t2" data-aos="fade-down" data-aos-delay="200" v-if="$isMobile()">
				全國四座低碳綠能示範城市，新莊副都心新北唯一示範特區，斥資30億中港大排美化工程，打造新北清溪川，5分鐘1.4公頃塭仔底濕地公園、昌平公園、願景公園環聚，慢活城森養好人生。
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
		<img class="flag" data-aos="fade" data-aos-delay="0" src="@/section/s6/flag.png" alt="" srcset="">
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s6 {
	width: 100%;
	height: size(720);
	gap: size(88);
	@apply flex flex-row-reverse justify-end items-end;

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
		width: size(1041);
		height: size(566);
		filter: drop-shadow(0 size(5) size(20) rgba(0, 0, 0, 0.3));
		.slide-item {
				// @apply relative;
			width: size(1041);
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
	.flag {
		@apply absolute;
		width: size(680.05);
		height: size(495.67);
		left: size(1317.45);
		bottom: size(467.33);
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s6 {
	width: 100%;
	height: auto;
	gap: sizem(27.2);
	padding-top: sizem(20);
	@apply flex flex-col justify-center items-center;

	.text {
		width: sizem(367);
		height: auto;
		padding: 0 sizem(18);
		//white-space: nowrap;
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
		width: sizem(222);
		height: auto;
		left: sizem(148.5);
		bottom: unset;
		top: -#{sizem(100)};
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
		img: globals.$isMobile() ? new URL("s6/1_m.jpg", import.meta.url).href : new URL("s6/1.jpg", import.meta.url).href,
		caption: "昌平公園"
	},
	{
		img: globals.$isMobile() ? new URL("s6/2_m.jpg", import.meta.url).href : new URL("s6/2.jpg", import.meta.url).href,
		caption: "塭仔圳溼地公園"
	},
	{
		img: globals.$isMobile() ? new URL("s6/3_m.jpg", import.meta.url).href : new URL("s6/3.jpg", import.meta.url).href,
		caption: "願景公園"
	},
	{
		img: globals.$isMobile() ? new URL("s6/4_m.jpg", import.meta.url).href : new URL("s6/4.jpg", import.meta.url).href,
		caption: "中港綠堤"
	},
]
</script>
