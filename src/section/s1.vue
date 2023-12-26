<template>
	<article class="s1 relative">
		<div class="section1">
			<div class="t">
				<img class="logo" src="@/section/s1/LOGO01.png" alt="" srcset="">
				<img class="t1" src="@/section/s1/LOGO02.png" alt="" srcset="">
				<div class="t2">楠梓高大特區最華麗的一極</div>
				<div class="t3">大台北重劃推手之王前進高雄代表作</div>
			</div>
			<video autoplay inline muted loop src="@/section/s1/01.mp4"></video>
			<div class="mask"></div>
		</div>
		<div class="section2">
			y1
		</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
	@apply w-full overflow-visible relative z-20;

	.section1 {
		@apply w-full flex flex-col items-center justify-center relative overflow-hidden;
		max-height: size(1080);
		min-height: size(900);
		background-size: cover;
		background-position: 0 center;

		.t {
			@apply w-full flex flex-col items-center justify-center z-10;

			.logo {
				width: size(151);
				margin-bottom: size(60);
			}

			.t1 {
				width: size(536);
				margin-bottom: size(20);
			}

			.t2 {
				background: linear-gradient(236deg, #A18151 15%, #E9D9BB 46%, #8E682E 99%);
				color: #042B54;
				font-size: size(38.66);
				font-weight: 700;
				letter-spacing: size(3.48);
				padding: size(8) size(16);
				margin-bottom: size(8);
			}

			.t3 {
				color: white;
				font-size: size(29.87);
				font-weight: 700;
				letter-spacing: size(3.88);
				word-wrap: break-word
			}
		}

		video {
			@apply w-full h-auto absolute z-0;
		}

		.mask {
			@apply w-full h-[30%] absolute bottom-0 z-0;
			background-position: 0px 0px;
			background: linear-gradient(to bottom, rgba(10, 59, 117, 0%) 0%,  rgba(10, 59, 117, 100%) 70%, rgba(10, 59, 117, 100%) 100%);
		}

	}

	.section2 {}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


	.s1 {
		height: sizem(667);
		max-height: unset;
		background-image: url(@/section/s1/bgm.jpg);


		.caption {
			@apply absolute;
			color: white;
			font-size: sizem(12);
			font-weight: 400;
			right: sizem(9.5);
			bottom: sizem(5);
		}

		.title {
			padding-top: sizem(86);

			.logo {
				width: sizem(150);
			}

			.t1 {
				@apply whitespace-nowrap;
				margin-top: 0;
				font-size: sizem(33);
				line-height: sizem(42.5);
			}

			.t2 {
				margin-top: 10px;
				font-size: sizem(15);
				line-height: sizem(25.32);
				letter-spacing: sizem(1.2);
			}

		}

		.star {
			img {
				&.star1 {
					width: sizem(379);
					top: -#{sizem(56.41)};
					right: -#{sizem(113)};
				}

				&.star2 {
					width: sizem(168.41);
					top: sizem(256.1);
					left: -#{sizem(33)};
				}
			}
		}

		.layer1 {
			width: sizem(50);
			top: sizem(445);
			left: 50%;
			transform: translateX(-50%) !important;
		}
	}
}
</style>

<script setup>
import Boy from '@/section/boy.vue';
import anime from 'animejs/lib/anime.es.js';
import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());
</script>
