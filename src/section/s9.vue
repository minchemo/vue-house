<template>
	<article class="s9">
		<div class="t">
			<div class="t1" data-aos="fade-up" data-aos-delay="0">新城市•新時代•新觀點</div>
			<div class="t2" data-aos="fade-up" data-aos-delay="200">地上全是你家<br>
				#人生格局 #由你定義</div>
		</div>
		<div class="r-t">
			<img class="t1" src="@/section/s9/logo.png" alt="">
			<div class="t2" data-aos="fade-up" data-aos-delay="0">北城計畫 <span>╳</span> 科技之星 台積電</div>
			<div class="t3" data-aos="fade-up" data-aos-delay="200">23-38地坪｜城市新門戶｜別墅新浪潮</div>
			<img class="t4" src="@/section/s9/logo2.png" alt="">
			<img src="@/section/s9/light.png" class="light" alt="" srcset="">
		</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s9 {
	@apply w-full overflow-visible relative z-10 flex justify-center items-center;
	height: size(886);
	background: url('@/section/s9/bg.webp');
	background-size: cover;
	gap: size(216);

	.t {
		@apply flex flex-col items-center justify-center;
		width: size(538);
		height: size(342);
		background-image: url('@/section/s9/box.png');
		background-size: contain;
		background-repeat: no-repeat;
		gap: size(16.5);

		.t1 {
			color: #C9A063;
			font-size: size(36);
			font-family: 'Noto Serif TC';
			font-weight: 700;
			word-wrap: break-word;
		}

		.t2 {
			color: #C9A063;
			font-size: size(33);
			font-weight: 700;
			word-wrap: break-word;
			text-align: center;
		}
	}

	.r-t {
		@apply relative;

		.t1 {
			width: size(384);
		}

		.t2 {
			margin-top: size(94);
			color: white;
			font-size: size(42);
			font-weight: 700;

			span {
				font-size: size(33);
				font-family: 'Noto Serif TC';
			}
		}

		.t3 {
			margin-top: size(11);
			color: white;
			font-size: size(31);
			font-weight: 700;
			word-wrap: break-word
		}

		.t4 {
			margin-top: size(21);
			width: size(283);
		}

		.light {
			@apply absolute;
			top: size(250);
			width: size(733);
			left: -#{size(99)};
		}
	}

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
	.s9 {
		@apply w-full overflow-visible relative z-10 flex flex-col justify-start items-center;
		height: sizem(571);
		background: url('@/section/s9/bgm.webp');
		background-size: cover;
		gap: sizem(25);
		padding-top: sizem(40);

		.t {
			width: sizem(271);
			height: sizem(143);
			background-image: url('@/section/s9/boxm.png');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			gap: sizem(11);

			.t1 {
				font-size: sizem(16);
			}

			.t2 {
				font-size: sizem(13);
			}
		}

		.r-t {
			@apply relative text-center;

			.t1 {
				width: sizem(154);
			}

			.t2 {
				margin-top: sizem(21);
				font-size: sizem(19);
				letter-spacing: 0;

				span {
					font-size: sizem(19);
					letter-spacing: 0;
				}
			}

			.t3 {
				margin-top: 0;
				font-size: sizem(14);
			}

			.t4 {
				margin-top: sizem(17);
				width: sizem(104);
			}

			.light {
				@apply absolute;
				top: sizem(90);
				width: sizem(350);
				left: -#{sizem(44)};
			}
		}

	}
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());

</script>
