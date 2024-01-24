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
			<Slide :imgs="imgsA" :w="749" :h="367.75" :w_m="311" :h_m="152.7" :dot="false" />
		</div>


	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
	@apply w-full relative flex flex-col items-center justify-center;
	height: size(1080);
	padding: 0 size(277);

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

</script>
