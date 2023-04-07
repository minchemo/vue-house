<template>
	<article class="s7 relative font-['Noto_Serif_TC']">
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
				<div class="t1" data-aos="fade-up" data-aos-delay="200">天開地闊 萬美就緒<br>
					春福深植品味 雙塔恆永視野</div>
				<div class="t2" data-aos="fade-up" data-aos-delay="400">
					近鄰鹽行繁華商圈，俯瞰國際雙語教育特區<br>
					春福敬獻飯店質感宅，再現台南不一樣的地標風景！<br><br>

					始終經典簡約，造就美感不簡單<br>
					用方框、序列的雙塔景致，宛若一扇開敞大門<br>
					喜迎每一位，對家與生活、對城市發展有盼望的人<br>
					既仰望，也收藏。深蘊品味，生活的故事更耐人尋味…

				</div>
			</div>
		</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s7 {
	width: 100%;
	height: size(1138);
	background-image: url(@/section/s3/bg.jpg);
	background-size: cover;
	padding-top: size(42.78);

	.main {
		@apply flex flex-row-reverse items-center justify-start;
		gap: size(0);
		.slide-box {
			@apply relative;
			width: size(1300);
			.slide {
				@apply relative;
				img {
					width: size(1300);
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
			margin-right: -#{size(14)};
			padding-bottom: size(120);
			.t1 {
				padding-left: -#{size(13)};
				font-weight: 700;
				font-size: size(37);
				line-height: 140%;
				color: #fff;
				padding: size(19.25) size(53);
				background-color: #803031d2;
			}
			.t2 {
				margin-top: size(70.52);
				padding-left: size(35);
				font-weight: 400;
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

	.s7 {
	height: sizem(644);
	padding-top: 0;

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
			margin-right: 0;
			padding-bottom: 0;
				width: 100%;
			.t1 {
				padding-left: 0;
				font-size: sizem(23);
				padding: sizem(17) sizem(33);
			}
			.t2 {
				margin-top: sizem(20);
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
		caption: '日景外觀鳥瞰透視圖示意，僅供參考',
		img: new URL("../section/s7/1.jpg", import.meta.url).href
	},
	{
		caption: '夜景外觀鳥瞰透視圖示意，僅供參考',
		img: new URL("../section/s7/2.jpg", import.meta.url).href
	},
]
</script>
