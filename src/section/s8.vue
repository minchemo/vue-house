<template>
	<article class="s3">
		<div class="t">
			<div class="t1">慢享土城日常</div>
			<div class="t2">光合植萃建築</div>
			<div class="l"></div>
			<div class="t3">2-4房 全新落成 親眼見證美好</div>
			<div class="pagi">
				<span v-for="img, i in imgsA" :class="{ 'active': i == currentIdxA }" @click="splideA.go(i)"></span>
			</div>
		</div>

		<Slide ref="splideA" :gap="1" :imgs="imgsA" :w="1920" :h="1089" :w_m="375" :h_m="615" :dot="false"
			@slideIndex="onMovedA" />
		<img class="architectural" src="@/section/s8/architectural.png" alt="" srcset="">
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
	@apply w-full relative;
	height: size(1080);

	.t {
		@apply absolute z-10 text-white flex flex-col items-center justify-center;
		top: size(415);
		right: size(367);

		.t1 {
			font-family: "Noto Serif TC";
			font-size: size(64);
			font-weight: 500;
			letter-spacing: size(5.76)
		}

		.t2 {
			font-size: size(48);
			font-weight: 500;
			letter-spacing: size(4.32)
		}

		.l {
			@apply bg-white;
			width: size(397);
			height: size(1);
			margin: size(25) 0;
		}

		.t3 {
			font-size: size(24);
			font-weight: 500;
			letter-spacing: size(6.24)
		}

		.pagi {
			@apply flex items-center justify-center;
			gap: size(9);
			margin-top: size(20);

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

	.architectural {
		@apply absolute;
		width: size(614);
		left: size(157);
		bottom: size(10);
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
		img: new URL("../section/s8/1.jpg", import.meta.url).href,
		caption: "",
	},
	{
		img: new URL("../section/s8/2.jpg", import.meta.url).href,
		caption: "",
	},
]
const onMovedA = (idx) => {
	currentIdxA.value = idx;
}

</script>
