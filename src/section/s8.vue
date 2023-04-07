<template>
	<article class="s8 relative font-['Noto_Serif_TC']">
		<div class="main">
			<Splide class="slide-box" ref="splide" :options="{
				arrows: false,
				pagination: false,
				type: 'loop',
				autoplay: true,
				interval: 4000,
			}" @splide:move="move">
				<SplideSlide class="slide" v-for="img, i in items">
					<img :src="img.img" alt="" srcset="">
					<p>{{ img.caption }}</p>
				</SplideSlide>
			</Splide>
			<div class="right"  data-aos="fade-up" data-aos-delay="200">
				<div class="t1">豪宅式氛圍 禮遇級品味</div>
				<div class="t2">
					注入豪宅或飯店質感的同時，同步全齡化的設計思考<br>
					讓公設空間不僅承襲既有「煙波DNA」美學與氛圍<br>
					同時引導服務者的從容禮遇，為居住者的日常時光，皆是品味
				</div>
			</div>
			<img v-if="$isMobile()" class="fakeSlide" :src="items[currentIdx].img" alt="" srcset="">
		</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s8 {
	width: 100%;
	height: auto;
	background-image: url(@/section/s3/bg.jpg);
	background-size: cover;
	padding-top: size(42.78);

	.main {
		.slide-box {
			width: 100%;
			height: 100%;
			.slide {
				@apply relative;
				img {
					width: 100%;
				}
				p {
					@apply absolute;
					right: size(10);
					bottom: size(10);
					font-weight: 400;
					font-size: size(15);
					line-height: 160%;
					color: #FFFFFF;
					text-shadow: 0px size(2) size(4) rgba(0, 0, 0, 0.8);
				}
			}
		}
		.right {
			@apply pointer-events-none absolute z-10;
			bottom: size(102.15);
			right: 0;
			padding: size(19.25) size(32);
			background-color: #803031c7;
			color: #fff;
			.t1 {
				font-weight: 700;
				font-size: size(37);
				line-height: 140%;
			}
			.t2 {
				margin-top: size(25);
				font-weight: 400;
				font-size: size(20);
				line-height: 150%;
			}
		}
	}

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

	.s8 {
	height: auto;
	padding-top: 0;

	.main {
		.slide-box {
			@apply relative z-10;
			.slide {
				p {
					right: sizem(10);
					bottom: sizem(5);
					font-size: sizem(12);
					text-shadow: 0px sizem(2) sizem(4) rgba(0, 0, 0, 0.8);
				}
			}
		}
		.right {
			@apply relative z-10;
			bottom: 0;
			right: 0;
			padding: sizem(60) sizem(32.5);
			backdrop-filter: blur(5px);
			.t1 {
				font-size: sizem(23);
			}
			.t2 {
				margin-top: sizem(14);
				font-size: sizem(13);
			}
		}
		.fakeSlide {
			@apply absolute z-[1];
			width: 120%;
			bottom: 0;
			left: 0;
		}
	}

}
}

</style>
<script setup>
import { computed, getCurrentInstance, ref, } from 'vue';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const splide = ref();
const currentIdx = ref(0)
const move = (newIdx, prevIdx, destIdx) => {
	currentIdx.value = prevIdx
}

const items = [
	{
		caption: '公設示意圖',
		img: new URL("../section/s8/1.jpg", import.meta.url).href
	},
	{
		caption: '公設示意圖',
		img: new URL("../section/s8/2.jpg", import.meta.url).href
	},
	{
		caption: '公設示意圖',
		img: new URL("../section/s8/3.jpg", import.meta.url).href
	},
	{
		caption: '公設示意圖',
		img: new URL("../section/s8/4.jpg", import.meta.url).href
	},
	{
		caption: '公設示意圖',
		img: new URL("../section/s8/5.jpg", import.meta.url).href
	},
	{
		caption: '公設示意圖',
		img: new URL("../section/s8/6.jpg", import.meta.url).href
	},
]
</script>
