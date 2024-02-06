<template>
	<article class="s6">
		<img class="cloud" src="@/section/s6/cloud.webp" alt="" srcset="">
		<div class="t">
			<div class="t1" data-aos="fade-up" data-aos-delay="0">Nearby <br v-if="isMobile">Nature Areas</div>
			<div class="t2" data-aos="fade-up" data-aos-delay="200" v-if="isMobile">半山伴水城市綠洲<br>健康生活不必遠求</div>
			<div class="t2" data-aos="fade-up" data-aos-delay="200" v-else>半山伴水城市綠洲｜健康生活不必遠求</div>
			<div class="t3" data-aos="fade-up" data-aos-delay="400">左擁42公頃蓮池潭、右抱170公頃半屏山，<br>
				養心在靜、養身在動，悠悅環境打造益壽捷徑！</div>
		</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s6 {
	@apply w-full overflow-visible relative z-10 flex justify-start items-start;
	height: size(1080);
	background: url('@/section/s6/bg.webp');
	background-size: cover;

	.cloud{
	@apply absolute;
	top: size(-10);
	right: size(450);
	transform: translate(-30%, 0%);
	animation: an 8s infinite ease-in-out alternate-reverse;
	}
	@keyframes an {
		to {
			transform: translate(10%, 0%);
		}
	}
	.t {
		@apply absolute;
		top: size(307.3);
		right: size(128);

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
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
	.s6 {
		@apply w-full overflow-visible relative z-10 flex justify-center items-center;
		height: sizem(726);
		background: url('@/section/s6/bgm.webp');
		background-size: cover;

		.cloud{
		@apply absolute;
		top: sizem(130);
		right: sizem(0);
		width: sizem(360);
		transform: translate(-30%, 0%);
		}

		@keyframes an {
		to {
			transform: translate(-70%, 0%);
		}
	}


		.t {
			@apply absolute;
			top: sizem(286);
			right: unset;
			left: sizem(88);

			.t1 {
				font-size: sizem(34);
				font-weight: 600;
				line-height: sizem(38);
			}

			.t2 {
				font-size: sizem(20);
				font-weight: 700;
				letter-spacing: 1;
				margin-top: sizem(7);
			}

			.t3 {
				font-size: sizem(12);
				font-weight: 400;
				margin-top: sizem(9);
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
