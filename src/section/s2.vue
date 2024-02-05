<template>
	<article class="s2">
		<div class="t1" data-aos="fade-up" data-aos-delay="0">The Future Vision</div>
		<div class="t2" data-aos="fade-up" data-aos-delay="200" v-if="isMobile"><span>台積電2奈米廠進駐</span><br>科技S廊道往高鐵移動</div>
		<div class="t2" data-aos="fade-up" data-aos-delay="200" v-else>台積電2奈米廠進駐｜科技S廊道往高鐵移動</div>
		<div class="t3" data-aos="fade-up" data-aos-delay="400">北城計畫「高鐵科技之心」加速開發<br>
			引領新左營生活圈華麗躍升，城市新門戶成形！</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
	@apply w-full overflow-visible relative z-10 flex flex-col justify-end items-center;
	height: size(1300);
	background-image: url('@/section/s2/bg.jpg');
	background-size: cover;
	background-position: bottom center;
	margin-top: -#{size(220)};
	padding-bottom: size(105);

	.t1 {
		color: white;
		font-size: size(58);
		font-family: 'Noto Serif TC';
		font-weight: 700;
	}

	.t2 {
		color: #C9A063;
		font-size: size(40);
		font-family: 'Noto Serif TC';
		font-weight: 700;
		letter-spacing: size(4.8);
		word-wrap: break-word
	}

	.t3 {
		// 北城計畫「高鐵科技之心」加速開發<br/>引領新左營生活圈華麗躍升，城市新門戶成形！
		color: white;
		font-size: size(25);
		font-weight: 700;
		word-wrap: break-word;
		text-align: center;
		margin-top: size(35);
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

	.s2 {
		height: sizem(451);
		background-image: url('@/section/s2/bgm.jpg');
		margin-top: -#{sizem(93)};
		padding-bottom: sizem(21);

		.t1 {
			font-size: sizem(34);
		}

		.t2 {
			font-size: sizem(20);
			letter-spacing: 0;

			span {
				letter-spacing: sizem(2.4);
			}
		}

		.t3 {
			font-size: sizem(12);
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
