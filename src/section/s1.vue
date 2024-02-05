<template>
	<article class="s1">
		<img class="logo" src="@/section/s1/logo.png" alt="" srcset="">
		<div class="t1" data-aos="fade-up" data-aos-delay="0" v-if="isMobile">台積電共榮圈<br>高鐵聚富光點</div>
		<div class="t1" data-aos="fade-up" data-aos-delay="0" v-else>台積電共榮圈 · 高鐵聚富光點</div>
		<div class="t2" data-aos="fade-up" data-aos-delay="200">23-38地坪｜城市新門戶｜別墅新浪潮</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
	@apply w-full h-screen overflow-visible relative z-20 flex flex-col items-center;
	min-height: size(900);
	max-height: size(1080);
	background-image: url('@/section/s1/bg.png');
	background-size: cover;
	background-position: bottom center;
	padding-top: size(139);


	.logo {
		width: size(389.37);
	}


	.t1 {
		color: white;
		font-size: size(42);
		font-weight: 700;
		margin-top: size(57);
	}

	.t2 {
		color: #C9A063;
		font-size: size(38);
		font-weight: 700;
		margin-top: size(19);
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
	.s1 {
		height: 100vh;
		min-height: sizem(600);
		max-height: 100vh;
		background-image: url('@/section/s1/bgm.png');
		padding-top: sizem(68);


		.logo {
			width: sizem(200);
		}


		.t1 {
			font-size: sizem(22);
			margin-top: sizem(28.5);
		}

		.t2 {
			font-size: sizem(18);
			margin-top: sizem(10);
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
