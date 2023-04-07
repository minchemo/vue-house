<template>
	<article class="s6 relative font-['Noto_Serif_TC']">
		<div class="main">
			<div class="left">
				<Splide class="slide-box" ref="splide" :options="{
					arrows: false,
					pagination: false,
					type: 'loop',
					autoplay: true,
					interval: 4000,
				}" @splide:move="move">
					<SplideSlide class="slide" v-for="img, i in items[activeSlide].imgs">
						<img :src="img.img" alt="" srcset="">
						<p>{{ img.caption }}</p>
					</SplideSlide>
				</Splide>
				<div class="btns">
					<div class="item" v-for="item, i in items" :class="{ active: i == activeSlide }" @click="activeSlide = i; splide.splide.go(0)">
						{{ item.title }}</div>
				</div>
			</div>
			<div class="right">
				<div class="t1" data-aos="fade-up" data-aos-delay="200" v-html="items[activeSlide].t1"></div>
				<div class="t3" data-aos="fade-up" data-aos-delay="400" v-html="items[activeSlide].t3"></div>
				<!-- 
				<div class="t1" data-aos="fade-up" data-aos-delay="200">鹽行繁榮風華<br>
					生活人文圖畫</div>
				<div class="t3" data-aos="fade-up" data-aos-delay="400">■ 5min 「台南應用科技大學」半徑完整生活圈<br />
					■ 5min 鹽行聚落核心 三村國小、夜市商圈<br />
					■ 6min 愛買&家樂福 休閒購物美食好方便<br />
					■ 校園公園景觀一覽無遺，近取鹽水溪河堤綠廊</div> -->
			</div>
		</div>
		<img class="slash" src="@/section/slash.svg" alt="" srcset="">
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s6 {
	width: 100%;
	height: size(1010);
	background-image: url(@/section/s3/bg.jpg);
	background-size: cover;
	padding-top: size(96);
	padding-left: size(104.3);

	.main {
		@apply flex flex-row items-center justify-start;
		gap: size(55.66);
		.left {
			.btns {
				@apply flex items-center;
				.item {
					@apply flex-1 cursor-pointer;
					background-color: #B08D8D;
					color: #fff;
					font-weight: 700;
					font-size: size(30);
					padding: size(10) 0;
					text-align: center;
					&.active {
						background-color: #803031;
					}
					&:hover {
						background-color: #803031;

					}
				}
			}
			.slide-box {
			margin: unset;
			width: size(1236);
			.slide {
				@apply relative;
				img {
					width: size(1236);
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
		}
		.right {
			padding-bottom: size(120);
			.t1 {
				margin-top: size(101.40);
				padding-left: -#{size(13)};
				font-weight: 700;
				font-size: size(37);
				line-height: 140%;
				color: #803031;
			}
			.t3 {
				margin-top: size(30);
				padding-left: -#{size(13)};
				width: size(445.47);
				font-weight: 400;
				font-size: size(20);
				line-height: 150%;
				color: #000000;
			}
		}
	}

	.slash {
		@apply absolute z-10;
		top: size(331.69);
		left: size(1653.08);
		width: size(176.77);
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

.s6 {
	height: sizem(576);
	padding-top: 0;
	padding-left: 0;

	.main {
		@apply flex-col;
		gap: sizem(63);
		.left {
			.btns {
				@apply flex items-center;
				.item {
					font-size: sizem(14);
					padding: sizem(17) 0;
				}
			}
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
		}
		.right {
			padding-bottom: 0;
			.t1 {
				margin-top: 0;
				padding-left:0;
				font-size: sizem(23);
			}
			.t3 {
				margin-top: sizem(15);
				padding-left: 0;
				width: auto;
				font-size: sizem(14);
			}
		}
	}

	.slash {
		@apply absolute z-10;
		top: sizem(325.68);
		left: sizem(181);
		width: sizem(118);
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
const activeSlide = ref(0)

const items = [
	{
		title: '散步南應大熟成機能',
		imgs: [
			{
				caption: '購物情境圖',
				img: new URL("../section/s6/1-1.jpg", import.meta.url).href
			},
			{
				caption: '公園情境圖',
				img: new URL("../section/s6/1-2.jpg", import.meta.url).href
			},
			{
				caption: '奇美醫院實景圖',
				img: new URL("../section/s6/1-3.jpg", import.meta.url).href
			},
		],
		t1: '鹽行繁榮風華<br>生活人文圖畫',
		t3: '■ 5min 「台南應用科技大學」半徑完整生活圈<br />■ 5min 鹽行聚落核心 三村國小、夜市商圈<br />■ 6min 愛買&家樂福 休閒購物美食好方便<br />■ 校園公園景觀一覽無遺，近取鹽水溪河堤綠廊',
	},
	{
		title: '聚焦永康文教新聚落',
		imgs: [
			{
				caption: '臺南市立鹽行國民中學',
				img: new URL("../section/s6/2-1.jpg", import.meta.url).href
			},
			{
				caption: '台灣歷史博物館實景圖',
				img: new URL("../section/s6/2-2.jpg", import.meta.url).href
			},
			{
				caption: '台南南台科技大學實景圖',
				img: new URL("../section/s6/2-3.jpg", import.meta.url).href
			},
			{
				caption: '台南市新圖書總館實景圖',
				img: new URL("../section/s6/2-4.jpg", import.meta.url).href
			},
			{
				caption: '三村國小實景圖',
				img: new URL("../section/s6/2-5.jpg", import.meta.url).href
			},
		],
		t1: '國際教育專區<br>博館運動場域<br>聚焦永康文教新聚落',
		t3: '■ 明星學區：國際雙語教育鹽行國中、三村國小<br>■ 「台南應用科技大學」完整生活圈<br>■ 文化&運動：國立台灣歷史博物館、台南總圖、<br> 台南國際棒球場',
	}
]
</script>
