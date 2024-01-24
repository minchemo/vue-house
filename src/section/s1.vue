<template>
	<article class="s1">
		<div class="t">
			<img src="@/section/s1/logo.png" class="t1">
			<div class="t-m">
				<div class="t2">土城植萃<span>｜</span>慢享日常</div>
				<div class="t3">青雲路<span>•</span>明德路 光合2-4房</div>
			</div>
			<div class="t4">全新<br>
				落成</div>
		</div>
		<s1bg />
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
	@apply w-full h-screen overflow-visible relative z-20;
	min-height: size(900);
	max-height: size(1080);

	.t {
		@apply absolute z-10 w-full flex items-center justify-center;
		bottom: size(667);
		gap: size(46);

		.t1 {
			width: size(540.29);
		}

		.t-m {
			@apply flex flex-col;
			gap: size(26);

			.t2 {
				font-size: size(47);
				font-weight: 400;
				letter-spacing: size(24.43);
				line-height: 1;
				word-wrap: break-word;

				span {
					color: #A77C22
				}
			}

			.t3 {
				font-size: size(39.15);
				font-weight: 600;
				letter-spacing: size(13.31);
				line-height: 1;

				span {
					font-size: size(24);
					font-weight: 1000;
				}
			}
		}

		.t4 {
			background-color: #A77C22;
			color: white;
			font-size: size(43);
			font-family: Inter;
			font-weight: 700;
			letter-spacing: size(3.87);
			line-height: 1.25;
			word-wrap: break-word;
			padding: size(8) size(16);
		}
	}

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
	.s1 {
		@apply w-full overflow-visible relative z-20;

	}
}
</style>

<script setup>
import s1bg from "./s1/bg.vue";
import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());

</script>
