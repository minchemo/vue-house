<template>
	<article class="s5">
		<img class="t1" src="@/section/s5/1.jpg" alt="" srcset="">
		<div class="t2">｜賀高大之森榮獲2023美國TITAN白金獎 法國NDA金獎｜</div>
		<div class="t3">我們向世界證明，這座建築配得上您</div>
		<div class="badges">
			<img src="@/section/s5/b1.png" alt="" srcset="">
			<img src="@/section/s5/b2.png" alt="" srcset="">
		</div>
		<div class="t4">
			拿下全台唯一，才擔得起高大特區首席極光地標頭銜
			在2023美國TITAN Property Awards
			法國Novum Design Awards (NDA)評選中
			台灣十大建商茂德機構攜手國際豪宅團隊打造「高大之森」
			一舉囊括國際建築室內設計白金獎及金獎</div>
	</article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s5 {
	@apply w-full relative z-10;
	height: size(1080);

	.t1 {
		width: size(1278.52);
	}

	.t2 {}

	.t3 {}

	.badges {
		@apply flex;
		gap: size(20);

		img {
			width: size(261.4);
		}
	}

	.t4 {}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
	.s5 {
		height: sizem(667);
		max-height: unset;
	}
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());
</script>
