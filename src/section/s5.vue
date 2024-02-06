<template>
	<article class="s5">
		<img class="i" v-if="isMobile" src="@/section/s5/im.webp" alt="" srcset="">
		<img class="i" v-else src="@/section/s5/i.webp" alt="" srcset="">
		<div class="t">
			<div class="t1" data-aos="fade-up" data-aos-delay="0">The<br v-if="isMobile"> Modern Life</div>
			<div class="t2" data-aos="fade-up" data-aos-delay="200">百貨商圈密度之冠<br>
				串起北高雄連城價值</div>
			<div class="t3" data-aos="fade-up" data-aos-delay="400">一路連結漢神巨蛋、美術館、大順路<br>
				時尚氣息獨步南台灣，近擁哈囉市場<br>
				左營大路商圈，生活不僅國際、而且在地！</div>
		</div>
		<img class="bg" v-if="isMobile" src="@/section/s5/bgm.webp" alt="" srcset="">
		<img class="bg" v-else src="@/section/s5/bg.webp" alt="" srcset="">
		<img class="dancer" data-aos="fade-up" data-aos-delay="400" src="@/section/s5/dancer.webp" alt="" srcset="">
		<div class="fashion" v-if="isMobile">Fashion</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
	@apply w-full overflow-visible relative z-10 flex justify-start items-start;
	height: size(900);
	background: #7FB0A2;
	gap: size(83);
	padding-top: size(52);

	.t {
		.t1 {
			color: white;
			font-size: size(58);
			font-family: 'Noto Serif TC';
			font-weight: 700;
		}

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
			margin-top: size(32);
		}
	}

	.i {
		width: size(1112);
	}

	.bg {
		@apply absolute right-0 bottom-0;
		width: size(811);
	}

	.dancer {
		@apply absolute right-0 bottom-0 mix-blend-multiply;
		width: size(371);
		transform: rotate(10deg);
		animation: an 3s infinite ease-in-out alternate-reverse;
	}

	@keyframes an {
		to {
			transform: rotate(-10deg);
		}
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
	.s5 {
		@apply w-full overflow-visible relative z-10 flex flex-col-reverse justify-center items-center;
		height: sizem(391);
		gap: sizem(10);
		padding-top: 0;

		.t {
			@apply relative z-10;
			padding-right: sizem(80);

			.t1 {
				font-size: sizem(34);
				line-height: sizem(38);
			}

			.t2 {
				font-size: sizem(20);
				letter-spacing: 1;
			}

			.t3 {
				font-size: sizem(12);
				margin-top: sizem(9);
				font-weight: 400;
			}
		}

		.i {
			width: sizem(343);
		}

		.bg {
			@apply absolute right-0 top-0 bottom-auto;
			width: 100%;
		}

		.dancer {
			@apply absolute mix-blend-multiply;
			width: sizem(155);
			bottom: sizem(162);
			right: -#{sizem(10)}
		}

		.fashion {
			@apply absolute;
			top: sizem(123);
			right: sizem(18);
			color: white;
			font-size: sizem(29);
			font-family: 'Noto Serif TC';
			font-weight: 600;
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
