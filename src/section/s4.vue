<template>
	<article class="s4">
		<div class="slide-box slide-box-a">
			<Slide ref="splide" :gap="24" :box_w="1369" :per_page="3" :imgs="imgsA" :w="440" :h="458" :w_m="311"
				:h_m="323.72" :dot="false" @slideIndex="onMovedA" />
			<div class="slide-t">
				<div class="pagi">
					<span v-for="img, i in imgsA" :class="{ 'active': i == currentIdxA }" @click="splide.go(i)"></span>
				</div>
			</div>
		</div>
		<div class="t">
			<img class="t1" src="@/section/s4/convenient.png" alt="" srcset="">
			<div class="t2">極緻機能｜日常採買好方便 美食隨處可見</div>
			<div class="t3">
				日月光廣場、秀泰影城、家樂福，時尚購物與都市休閒匯集，看電影買東西都好容易。<br />延吉街、裕民路商圈，下班後晚餐不擔心，採買食材煮頓飯都很便利。</div>
		</div>
		<img class="hill1 hill" src="@/section/s4/hill1.png" alt="" srcset="">
		<img class="hill2 hill" src="@/section/s4/hill2.png" alt="" srcset="">
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
	@apply w-full relative flex flex-col items-center justify-center;
	height: size(1000);
	padding: 0 size(277);
	gap: size(50);

	.t {
		@apply w-full flex flex-col items-center;
		color: #000;
		gap: size(10);

		.t1 {
			width: size(467);
		}

		.t2 {
			font-size: size(32);
			font-weight: 900;
			letter-spacing: size(0.32);
		}

		.t3 {
			@apply text-center;
			font-size: size(17);
			font-weight: 500;
			line-height: size(30);
			letter-spacing: size(1.53);
		}

	}

	.slide-box {
		@apply flex flex-col items-center justify-center text-white;
		gap: size(14);
		width: size(1369);

		.pagi {
			@apply flex items-center;
			gap: size(9);
			margin-bottom: size(15);

			span {
				@apply block cursor-pointer hover:opacity-50;
				width: size(9);
				height: size(9);
				background-color: #C9A063;

				&.active {
					background-color: #A77C22;
				}
			}
		}

	}

	.hill {
		@apply absolute;

		&.hill1 {
			width: size(462);
			left: size(276);
			bottom: size(27);
		}

		&.hill2 {
			width: size(288);
			right: size(261);
			bottom: size(117);
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

const splide = ref(null)
const currentIdxA = ref(0)
const imgsA = [
	{
		img: new URL("../section/s4/1.jpg", import.meta.url).href,
		caption: "土城日月光",
	},
	{
		img: new URL("../section/s4/2.jpg", import.meta.url).href,
		caption: "土城日月光-秀泰影城",
	},
	{
		img: new URL("../section/s4/3.jpg", import.meta.url).href,
		caption: "家樂福",
	},
	{
		img: new URL("../section/s4/4.jpg", import.meta.url).href,
		caption: "延吉街市場",
	},
	{
		img: new URL("../section/s4/5.jpg", import.meta.url).href,
		caption: "裕民路商圈",
	},
]
const onMovedA = (idx) => {
	currentIdxA.value = idx;
}


</script>
