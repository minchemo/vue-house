<template>
	<article class="s2">
		<div class="t">
			<div class="t-m">
				<div class="t1" data-aos="fade-up" data-aos-delay="0">品味土城繁華</div>
				<div class="t2" data-aos="fade-up" data-aos-delay="200">悠享漫漫日常</div>
			</div>
			<div class="t3" data-aos="fade-up" data-aos-delay="400">無垠繁榮的前景，正於土城逐漸成形，板南線、萬大線拉近土城與台北的距離，三大科技園區接手區域商業榮景。<br>
				司法特區開始構建，菁英匯聚，但綠意並沒有因為城市的繁榮而消弭。在土城繁華的光景中，我們依舊可以步入在山林草地中享受生活慢時光。</div>
		</div>
		<div class="view">
			<fullview />
		</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
	@apply w-full relative;
	height: size(1472);

	.view {
		@apply w-full h-full absolute top-0 left-0;
		overflow: hidden;
		position: relative;
		z-index: 10;
	}

	.t {
		@apply absolute z-20 w-full flex flex-col items-center justify-center text-white;
		top: size(126);
		gap: size(20);

		.t-m {
			@apply flex items-end leading-none;
			gap: size(43);

			.t1 {
				@apply font-['Noto_Serif_TC'];
				font-size: size(64);
				font-weight: 500;
				letter-spacing: size(5.76);
			}

			.t2 {
				font-size: size(48);
				font-weight: 500;
				letter-spacing: size(4.32);
			}
		}

		.t3 {
			@apply text-center;
			font-size: size(17);
			font-weight: 500;
			line-height: size(38.6);
			letter-spacing: size(2.38);
			width: size(1069);
		}
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
	.s2 {
		@apply w-full overflow-visible relative z-20;
		height: sizem(750);

		.t {
			@apply items-start;
			top: sizem(30);
			gap: sizem(20);
			padding: 0 sizem(30);

			.t-m {
				gap: sizem(14);

				.t1 {
					font-size: sizem(22);
					letter-spacing: sizem(2);
				}

				.t2 {
					font-size: sizem(15);
					letter-spacing: sizem(1.35);
				}
			}

			.t3 {
				@apply text-left;
				font-size: sizem(13);
				line-height: sizem(20);
				letter-spacing: 1;
				width: 100%;
			}
		}
	}
}
</style>

<script setup>
import fullview from "@/components/fullview2.vue";
import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());

</script>
