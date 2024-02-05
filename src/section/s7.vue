<template>
	<article class="s7">
		<div class="t">
			<div class="t1" data-aos="fade-up" data-aos-delay="0">Just be Yourself</div>
			<div class="t-f ">
				<div class="t2" data-aos="fade-up" data-aos-delay="200">跳出傳統思維框架<br>
					享受與眾不同人生</div>
				<div class="t3" data-aos="fade-up" data-aos-delay="400">新世代電梯別墅觀點、顛覆性的鈔值價格，<br>
					用大樓四房、換透天四層，一樣的價格當然買大的！</div>
			</div>
		</div>
		<div class="caption" v-if="isMobile">建<br>築<br>外<br>觀<br>3<br>D<br>示<br>意<br>圖</div>
		<div class="caption" v-else>建築外觀3D示意圖</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s7 {
	@apply w-full overflow-visible relative z-10 flex justify-start items-start;
	height: size(1080);
	background: url('@/section/s7/bg.jpg');
	background-size: cover;

	.t {
		@apply absolute;
		top: size(96);
		left: size(154);

		.t1 {
			color: white;
			font-size: size(58);
			font-family: 'Noto Serif TC';
			font-weight: 700;
		}

		.t-f {
			@apply flex items-end;
			gap: size(58);
			margin-top: size(14);

			.t2 {
				color: #fff;
				font-size: size(40);
				font-family: 'Noto Serif TC';
				font-weight: 700;
				letter-spacing: size(4.8);
				word-wrap: break-word;
			}

			.t3 {
				color: white;
				font-size: size(25);
				font-weight: 700;
				word-wrap: break-word;
				padding-bottom: size(8);
			}
		}
	}

	.caption {
		@apply absolute;
		color: white;
		font-size: size(19);
		font-weight: 400;
		line-height: size(12);
		right: size(145);
		bottom: size(21);
	}

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
	.s7 {
		height: sizem(487);
		background: url('@/section/s7/bgm.png');
		background-size: cover;

		.t {
			@apply absolute;
			top: unset;
			bottom: sizem(33);
			left: sizem(55);

			.t1 {
				font-size: sizem(34);
				font-weight: 600;
			}

			.t-f {
				@apply flex flex-col items-center;
				gap: 0;
				margin-top: sizem(88);

				.t2 {
					font-size: sizem(20);
					letter-spacing: 1;
					word-wrap: break-word;
				}

				.t3 {
					font-size: sizem(12);
					font-weight: 400;
					padding-bottom: 0;
					margin-top: sizem(2)
				}
			}
		}

		.caption {
			@apply absolute;
			font-size: sizem(12);
			line-height: sizem(12);
			right: sizem(10);
			bottom: unset;
			top: sizem(72);
			text-align: center;
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
