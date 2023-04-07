<template>
	<article class="s11 relative font-['Noto_Serif_TC']">
		<div class="main">
			<div class="slide-box">
			<div class="arrows">
				<img loading="lazy" class="prev" @click="splide.splide.go('<')" src="@/section/prev.png" alt="" srcset="">
				<img loading="lazy" class="next" @click="splide.splide.go('>')" src="@/section/next.png" alt="" srcset="">
			</div>
			<Splide ref="splide" :options="{
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
			</div>
			<div class="right">
				<div class="t1" data-aos="fade-up" data-aos-delay="200">XXXXXX<br>
					XXXXXXXXXXX</div>
				<div class="t2" data-aos="fade-up" data-aos-delay="400">
					XXXXXXXX
				</div>
				<div class="t3" data-aos="fade-up" data-aos-delay="600">
					XXXXXXXXXXXXXXXX<br>
					XXXXXXXXXXXXXXXXXXXXXXX<br>
					XXXXXXXX
				</div>
			</div>
		</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s11 {
	width: 100%;
	height: size(1109);
	background-image: url(@/section/s3/bg.jpg);
	background-size: cover;
	padding-top: size(164.31);

	.main {
		@apply flex flex-row items-center justify-start;
		gap: size(0);
		.slide-box {
			@apply relative;
			width: size(1293);
			.slide {
				@apply relative;
				img {
					width: size(1293);
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
		.arrows {
			@apply absolute z-20 flex items-center justify-between;
			width: 100%;
			padding: 0;
			bottom: 50%;
			transform: translateY(50%);
			img {
				margin: unset;
			}
		}
		}
		.right {
			@apply relative z-10;
			margin-left: -#{size(45)};
			padding-bottom: size(120);
			.t1 {
				font-weight: 700;
				font-size: size(37);
				line-height: 140%;
				color: #fff;
				padding: size(19.25) size(53);
				padding-left: size(80) !important;
				background-color: #803031d2;
				width: size(588.75);
			}
			.t2 {
				margin-top: size(59);
				padding-left: size(80);
				font-weight: 700;
				font-size: size(30);
				line-height: 150%;
				color: #000000;
			}
			.t3 {
				margin-top: size(28);
				padding-left: size(80);
				font-weight: 700;
				font-size: size(20);
				line-height: 150%;
				color: #000000;
			}
		}
	}

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

	.s11 {
	height: sizem(580);
	padding-top:0;

	.main {
		@apply flex-col;
		gap: sizem(30);
		.slide-box {
			width: 100%;
			.slide {
				img {
					width: 100%;
				}
				p {
					right: sizem(10);
					bottom: sizem(5);
					font-size: sizem(12);
					text-shadow: 0px sizem(2) sizem(4) rgba(0, 0, 0, 0.8);
				}
			}
		}
		.right {
			@apply relative z-10 w-full;
			margin-left: 0;
			padding-bottom: 0;
			.t1 {
				font-size: sizem(23);
				padding: sizem(16.25) 0;
				padding-left: sizem(32.5) !important;
				width: sizem(358.14);
			}
			.t2 {
				margin-top: sizem(20);
				padding-left: sizem(32.5);
				font-size: sizem(16);
			}
			.t3 {
				margin-top: sizem(8);
				padding-left: sizem(32.5);
				font-size: sizem(14);
			}
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
		caption: '樣品屋',
		img: new URL("../section/s11/1.jpg", import.meta.url).href
	},
	{
		caption: '樣品屋',
		img: new URL("../section/s11/1.jpg", import.meta.url).href
	},
]
</script>
