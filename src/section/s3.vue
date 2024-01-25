<template>
	<article class="s3">
		<div class="t">
			<img class="t1" src="@/section/s3/t1.png" alt="" srcset="">
			<div class="t-m">
				<div class="t2">一步滿滿</div>
				<div class="t3">土城繁華無垠</div>
			</div>
		</div>
		<div class="slide-box slide-box-a">
			<Slide ref="splideA" :imgs="imgsA" :w="749" :h="367.75" :w_m="311" :h_m="152.7" :dot="false"
				@slideIndex="onMovedA" />
			<div class="slide-t">
				<div class="pagi">
					<span v-for="img, i in imgsA" :class="{ 'active': i == currentIdxA }" @click="splideA.go(i)"></span>
				</div>
				<div class="t1">交通耀眼｜捷運一路延伸 公路華麗轉身</div>
				<div class="t2">國道三號北土城交流道預計2027年完工，上國三更省時。台65線銜接國1，台灣南北通行速速走，捷運板南線、萬大線匯聚，順暢接軌大台北生活圈。</div>
			</div>
		</div>
		<div class="slide-box slide-box-b">
			<div class="slide-t">
				<div class="pagi">
					<span v-for="img, i in imgsB" :class="{ 'active': i == currentIdxB }" @click="splideB.go(i)"></span>
				</div>
				<div class="t1">前景璀璨｜都市計畫齊發展 榮景一路向上</div>
				<div class="t2">多項政府計畫持續進駐，土城司法園區預計2027完工、土城長庚醫院2020年啟用，產業發展、醫療動能即刻匯聚，持續將土城推向大台北繁榮前段班。</div>
			</div>
			<Slide ref="splideB" :imgs="imgsB" :w="749" :h="367.75" :w_m="311" :h_m="152.7" :dot="false"
				@slideIndex="onMovedB" />
		</div>


	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
	@apply w-full relative flex flex-col items-center justify-center;
	height: size(1080);
	padding: 0 size(277);
	gap: size(18);

	.t {
		@apply w-full;

		.t1 {
			width: size(467.43);
		}

		.t-m {
			@apply flex items-end justify-start leading-none;
			gap: size(24);

			.t2 {
				@apply font-['Noto_Serif_TC'];
				font-size: size(64);
				font-weight: 500;
				letter-spacing: size(5.76);
			}

			.t3 {
				font-size: size(48);
				font-family: Noto Sans TC;
				font-weight: 500;
				letter-spacing: size(4.32);
			}
		}
	}

	.slide-box {
		@apply flex items-center justify-center text-white;
		gap: size(14);

		.slide-t {
			@apply flex flex-col items-start justify-center w-full h-full;
			background-color: rgba(167, 124, 34, 0.60);
			width: size(604);
			height: size(367);
			padding: 0 size(60);

			.pagi {
				@apply flex items-center;
				gap: size(9);
				margin-bottom: size(15);

				span {
					@apply block cursor-pointer hover:opacity-50;
					width: size(9);
					height: size(9);
					background-color: #D9D9D9;

					&.active {
						background-color: #A77C22;
					}
				}
			}

			.t1 {
				@apply whitespace-nowrap;
				font-size: size(25);
				font-weight: 900;
				letter-spacing: size(2.25);
				margin-bottom: size(25);
			}

			.t2 {
				font-size: size(17);
				letter-spacing: size(1.53);
				font-weight: 500;
			}
		}
	}

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
	.s3 {
		@apply w-full overflow-visible relative z-20;

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
		img: new URL("../section/s3/a1.jpg", import.meta.url).href,
		caption: "台65",
	},
	{
		img: new URL("../section/s3/a2.jpg", import.meta.url).href,
		caption: "高速公路",
	},
]
const onMovedA = (idx) => {
	currentIdxA.value = idx;
}

const splideB = ref(null)
const currentIdxB = ref(0)
const imgsB = [
	{
		img: new URL("../section/s3/b1.jpg", import.meta.url).href,
		caption: "土城醫院",
	},
	{
		img: new URL("../section/s3/b2.jpg", import.meta.url).href,
		caption: "情境示意圖",
	},
]
const onMovedB = (idx) => {
	currentIdxB.value = idx;
}


</script>
