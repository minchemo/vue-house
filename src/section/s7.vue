<template>
	<article class="s7 relative">
		<div class="intro">
			<div class="t1" data-aos="fade-up" data-aos-delay="0">
				力挺小資<br v-if="!$isMobile()">快樂當家
				<svg class="group-1" width="82" height="38" viewBox="0 0 82 38" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M82 -1.43945e-05L40.8057 37.2727L3.34789e-06 -2.15632e-05" stroke="#FF3EA1" stroke-width="2" />
				</svg>
			</div>
			<div class="t2" data-aos="fade-up" data-aos-delay="100">星級夢幻主題休閒會館</div>
			<div class="t3" data-aos="fade-up" data-aos-delay="200">
				尊榮優雅品味，高訂名宅風範，還有全齡化休閒會館設施，宛如藝廊挑高迎賓廳，凝鍊奢華，盡顯雍容氣韻，感受的是空間尺度流洩的從容。從森林大道穿過迴廊，轉入大廳或閱覽室、交誼廳，與前庭後院共譜應和的空間流轉，在風與光之間，靜靜捕捉生活的情節，為建築與城市之間，留出一個會呼吸的慢活空間。
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
				drag: true,
				autoplay: false,
				interval: 4000,
				gap: 0
			}" @splide:move="move">
				<SplideSlide class="slide" v-for="img, i in items" @click="setPreviewImageSrc(i)">
					<img :src="img.img" alt="" srcset="">
					<p class="right">{{ img.caption }}</p>
					<div class="des">{{ img.img_des }}</div>
					<img src="@/section/s7/tip.png" class="tip" alt="" srcset="" v-if="$isMobile()">
				</SplideSlide>
			</Splide>
		</div>
	</article>

	<div class="preview" v-if="previewImageSrc && $isMobile()">
		<img class="p" :src="previewImageSrc" alt="" srcset="">
	</div>
	<img class="preview-c" v-if="previewImageSrc && $isMobile()" src="@/section/close.png" @click="previewImageSrc = null" alt=""
		srcset="">
</template>

<style lang="scss" scoped >
@import '@/assets/style/function.scss';

.s7 {
	width: 100%;
	height: size(1080);
	background-color: #eee;


	.intro {
		@apply flex flex-col items-center justify-center absolute z-10;
		width: size(344);
		height: 100%;
		right: size(161);
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.66) 0%, rgba(0, 0, 0, 0.00) 100%);
		padding: 0 size(19);


		.t1 {
			@apply relative ;
			color: #fff;
			font-size: size(55);
			font-weight: 700;
			line-height: size(70);

			svg {
				@apply absolute left-1/2 -translate-x-1/2;
				width: size(82);
				bottom: -#{size(80)};
			}
		}

		.t2 {
			@apply whitespace-nowrap;
			margin-top: size(100);
			color: #FFFFFF;
			font-size: size(30);
			font-weight: 500;
			letter-spacing: size(0.75);
		}

		.t3 {
			margin-top: size(10);
			color: #fff;
			font-size: size(16);
			font-weight: 400;
			line-height: size(30.40);
			text-align: justify;
		}

	}

	.slider-box {
		@apply absolute inset-0;
		width: 100%;
		height: size(1080);

		.arrows {
			@apply absolute z-20 flex items-center justify-between left-1/2 -translate-x-1/2;
			width: size(221);
			bottom: size(43.36);

			img {
				@apply cursor-pointer;
				margin: unset;
				width: size(18);
			}
		}


		.slide {
			@apply relative overflow-hidden bg-cover;

			img {
				width: 100%;
				height: size(1080);
			}

			p {
				@apply absolute;
				bottom: size(22);
				font-weight: 400;
				font-size: size(14);
				color: #FFFFFF;
				text-shadow: 0px size(2) size(4) rgba(0, 0, 0, 0.8);

				&.left {
					left: size(38);
				}

				&.right {
					right: size(38);

				}
			}

		}
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


	.preview {
		@apply fixed z-[100000] inset-0 bg-black overflow-x-scroll overflow-y-hidden;
		.p {
			
			height: 100%;
		}
	}
		.preview-c {
			@apply fixed z-[100001];
			width: sizem(20);

			top: sizem(30);
			right: sizem(30);
		}

	.s7 {
	width: 100%;
	height: sizem(667);

	.intro {
		@apply flex flex-col items-start justify-start absolute z-10 pointer-events-none;
		width: 100%;
		height: 100%;
		right:0;
		background: transparent;
		padding: 0 sizem(30);
		padding-top: sizem(46);

		.t1 {
				@apply relative;
				color: #fff;
				font-size: sizem(25);
				line-height: sizem(31);
				width: 100%;

				svg {
					@apply absolute left-auto right-0;
					width: sizem(50.2);
					bottom:0;
					transform: unset;
				}
			}

		.t2 {
				margin-top: sizem(25);
				font-size: sizem(15);
				letter-spacing: sizem(0.38);
		}

		.t3 {
				margin-top: sizem(11);
				width: 100%;
				color: #fff;
				font-size: sizem(13);
				font-weight: 400;
				line-height: sizem(24.7);
				text-align: justify;
		}

	}

	.slider-box {
		@apply absolute inset-0;
		width: 100%;
		height: 100%;

		.arrows {
			@apply absolute z-20 flex items-center justify-between left-1/2 -translate-x-1/2;
			width: 100%;
			bottom: sizem(198);
			padding: 0 sizem(20);

			img {
				@apply cursor-pointer;
				margin: unset;
				width: sizem(8.4);
			}
		}


		.slide {
			@apply relative overflow-hidden bg-cover;

			.tip {
				@apply absolute;
				width: sizem(100);
				height: auto;
				bottom: sizem(20);
				left: 50%;
				transform: translateX(-50%);
			}

			img {
				width: 100%;
				height: 100%;
			}

			p {
				@apply absolute;
				bottom: sizem(18);
				font-weight: 400;
				font-size: sizem(14);
				color: #FFFFFF;
				text-shadow: 0px sizem(2) sizem(4) rgba(0, 0, 0, 0.8);

				&.left {
					left: sizem(20);
				}

				&.right {
					right: sizem(20);

				}
			}

		}
	}
	}
}
</style>
<script setup>
import { computed, getCurrentInstance, onMounted, ref, } from 'vue';
import inView from 'in-view';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const splide = ref();
const currentIdx = ref(0)
const move = (newIdx, prevIdx, destIdx) => {
	currentIdx.value = prevIdx
}
const previewImageSrc = ref(null);

const setPreviewImageSrc = (idx) => {
	previewImageSrc.value = prevs[idx]
}

const items = [
	{
		caption: '大廳3D示意圖',
		img: isMobile.value ? new URL("../section/s7/1m.jpg", import.meta.url).href : new URL("../section/s7/1.jpg", import.meta.url).href
	},
	{
		caption: '大廳3D示意圖',
		img: isMobile.value ? new URL("../section/s7/2m.jpg", import.meta.url).href : new URL("../section/s7/2.jpg", import.meta.url).href
	},
]

const prevs = [
	new URL("../section/s7/1.jpg", import.meta.url).href, new URL("../section/s7/2.jpg", import.meta.url).href
]

onMounted(() => {

})
</script>
