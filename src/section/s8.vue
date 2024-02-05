<template>
	<article class="s8">
		<div class="t">
			<div class="t1">Better than Better</div>
			<img class="t2" src="@/section/s8/team.png" alt="" srcset="">
			<div class="t3" data-aos="fade-up" data-aos-delay="0" v-if="isMobile">以誠信深耕在地<br>以品質創造價值</div>
			<div class="t3" data-aos="fade-up" data-aos-delay="0" v-else>以誠信深耕在地｜以品質創造價值</div>
			<div class="t4" data-aos="fade-up" data-aos-delay="200">精益求精，格局規劃細膩貼心、用料實在深得人心<br>
				榮獲多項建築金獎肯定，完美傳遞幸福心關係！</div>
			<div class="t5"></div>
		</div>
		<div class="slidebox">
			<img class="slide-t" src="@/section/s8/title.svg" alt="" srcset="">
			<div class="arrows">
				<img @click="splideA.go('<')" class="prev" src="@/section/arrow.png" alt="" srcset="">
				<img @click="splideA.go('>')" class="next" src="@/section/arrow.png" alt="" srcset="">
			</div>
			<Slide ref="splideA" :arrow_m="false" :gap="10" :gap_m="0" :imgs="isMobile ? imgsAm : imgsA" :w="952"
				:h="591.87" :w_m="337" :h_m="296" :dot="false" @slideIndex="onMovedA" />
		</div>

	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s8 {
	@apply w-full overflow-visible relative z-10 flex justify-center items-center;
	height: size(793);
	background: url('@/section/s8/bg.jpg');
	background-size: cover;
	gap: size(138);

	.t {
		@apply flex flex-col justify-center items-center;

		.t1 {
			color: #B28247;
			font-size: size(48);
			font-family: 'Noto Serif TC';
			font-weight: 700;
			word-wrap: break-word
		}

		.t2 {
			margin-top: size(31.2);
			width: size(485.28);
		}

		.t3 {
			margin-top: size(55.89);
			color: #595757;
			font-size: size(40);
			font-family: 'Noto Serif TC';
			font-weight: 700;
			letter-spacing: size(4.8);
			word-wrap: break-word
		}

		.t4 {
			margin-top: size(12);
			color: #595757;
			font-size: size(25);
			font-weight: 700;
			word-wrap: break-word;
			text-align: center;
		}

		.t5 {
			margin-top: size(30);
			background-color: #B28247;
			width: size(604);
			height: size(15);
		}
	}

	.slidebox {
		@apply relative flex flex-col;
		gap: size(22);
		width: size(952);

		.slide-t {
			width: 100%;
		}

		.arrows {
			@apply absolute z-10 w-full flex justify-between items-center top-1/2 -translate-y-1/2;
			padding: 0 size(10);

			>img {
				@apply hover:opacity-50 cursor-pointer;
				width: size(15);
			}

			.next {
				transform: scaleX(-1)
			}
		}
	}


}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
	.s8 {

		@apply w-full overflow-visible relative z-0 flex flex-col justify-end items-center;
		height: sizem(751);
		background: url('@/section/s8/bgm.jpg');
		gap: sizem(24);
		background-size: cover;
		padding-bottom: sizem(15);
		margin-top: -#{sizem(50)};

		.t {
			@apply flex flex-col justify-center items-center;

			.t1 {
				font-size: sizem(34);
				font-weight: 600;
			}

			.t2 {
				margin-top: sizem(19);
				width: sizem(280);
			}

			.t3 {
				margin-top: sizem(15);
				color: #595757;
				font-size: sizem(20);
				font-weight: 700;
				letter-spacing: 1;
				word-wrap: break-word
			}

			.t4 {
				margin-top: sizem(2);
				font-size: sizem(12);
				font-weight: 400;
			}

			.t5 {
				margin-top: sizem(4);
				background-color: #B28247;
				width: sizem(245);
				height: sizem(6);
			}
		}

		.slidebox {
			@apply relative flex flex-col;
			gap: sizem(12);
			width: sizem(337);

			.slide-t {
				width: 100%;
			}

			.arrows {
				padding: 0 sizem(10);

				>img {
					width: sizem(13);
				}

				.next {
					transform: scaleX(-1)
				}
			}
		}

	}
}
</style>

<script setup>
import Slide from "@/components/slide.vue";
import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());


const splideA = ref(null)
const currentIdxA = ref(0)
const imgsA = [
	{
		img: new URL("../section/s8/1.jpg", import.meta.url).href,
		caption: "<span>銳揚國寶</span>｜2018 / 鳳山區",
	},
	{
		img: new URL("../section/s8/2.jpg", import.meta.url).href,
		caption: "<span>銳揚國囍</span>｜2022 / 鳳山區",
	},
	{
		img: new URL("../section/s8/3.jpg", import.meta.url).href,
		caption: "<span>銳揚八方</span>｜2022 / 鳳山區",
	},
	{
		img: new URL("../section/s8/4.jpg", import.meta.url).href,
		caption: "<span>鋭揚新生活</span>｜2024 / 鳳山區",
	},
	{
		img: new URL("../section/s8/5.jpg", import.meta.url).href,
		caption: "<span>鋭揚新樂活</span>｜2023 / 鳳山區",
	},
	{
		img: new URL("../section/s8/6.jpg", import.meta.url).href,
		caption: "<span>銳揚巴洛克</span>｜2021 / 鳳山區",
	},
	{
		img: new URL("../section/s8/7.jpg", import.meta.url).href,
		caption: "<span>銳揚天鵝堡</span>｜2020 / 楠梓區",
	},
	{
		img: new URL("../section/s8/8.jpg", import.meta.url).href,
		caption: "<span>銳揚新世代</span>｜2019 / 鳳山區",
	},
	{
		img: new URL("../section/s8/9.jpg", import.meta.url).href,
		caption: "<span>銳揚國美</span>｜2019 / 鳳山區",
	},
	{
		img: new URL("../section/s8/10.jpg", import.meta.url).href,
		caption: "<span>銳揚捷仕堡</span>｜2019 / 鳳山區",
	},
	{
		img: new URL("../section/s8/11.jpg", import.meta.url).href,
		caption: "<span>銳揚新天第</span>｜2017 / 鳳山區",
	},
]
const imgsAm = [
	{
		img: new URL("../section/s8/1m.jpg", import.meta.url).href,
		caption: "<span>銳揚國寶</span>｜2018 / 鳳山區",
	},
	{
		img: new URL("../section/s8/2m.jpg", import.meta.url).href,
		caption: "<span>銳揚國囍</span>｜2022 / 鳳山區",
	},
	{
		img: new URL("../section/s8/3m.jpg", import.meta.url).href,
		caption: "<span>銳揚八方</span>｜2022 / 鳳山區",
	},
	{
		img: new URL("../section/s8/4m.jpg", import.meta.url).href,
		caption: "<span>鋭揚新生活</span>｜2024 / 鳳山區",
	},
	{
		img: new URL("../section/s8/5m.jpg", import.meta.url).href,
		caption: "<span>鋭揚新樂活</span>｜2023 / 鳳山區",
	},
	{
		img: new URL("../section/s8/6m.jpg", import.meta.url).href,
		caption: "<span>銳揚巴洛克</span>｜2021 / 鳳山區",
	},
	{
		img: new URL("../section/s8/7m.jpg", import.meta.url).href,
		caption: "<span>銳揚天鵝堡</span>｜2020 / 楠梓區",
	},
	{
		img: new URL("../section/s8/8m.jpg", import.meta.url).href,
		caption: "<span>銳揚新世代</span>｜2019 / 鳳山區",
	},
	{
		img: new URL("../section/s8/9m.jpg", import.meta.url).href,
		caption: "<span>銳揚國美</span>｜2019 / 鳳山區",
	},
	{
		img: new URL("../section/s8/10m.jpg", import.meta.url).href,
		caption: "<span>銳揚捷仕堡</span>｜2019 / 鳳山區",
	},
	{
		img: new URL("../section/s8/11m.jpg", import.meta.url).href,
		caption: "<span>銳揚新天第</span>｜2017 / 鳳山區",
	},
]
const onMovedA = (idx) => {
	currentIdxA.value = idx;
}
</script>
