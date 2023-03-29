<template>
	<article class="s3 relative z-10">
		<div class="view">
			<Fullview />
		</div>
		<div class="text">
			<img loading="lazy" class="logo" data-aos="fade" data-aos-delay="0" src="@/section/s3/mark.png" alt="" srcset="">
			<div class="t1"  data-aos="fade-down" data-aos-delay="0">新莊副都心10年熟成<br />
				國家級CBD共享其成</div>
			<div class="t2"></div>
			<div class="t3" data-aos="fade-down" data-aos-delay="200">中央領軍，建設到位<br />
				合署辦公大樓、知識產業園區、捷運機場線<br />
				環狀線、國家電影文化中心⋯陸續落成啟用<br />
				10年開發熟成，國家級CBD已然形城<br />
				點燃能量引擎共享其成</div>
		</div>
		<img loading="lazy" class="i1" data-aos="fade" data-aos-delay="0" src="@/section/s3/horse.png" alt="" srcset="">
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
	width: 100%;
	height: size(1145);
	background-color: #EEEEEE;
	@apply flex flex-col;
	.view {
		width: 100%;
		height: size(793);
	}
	.text {
		@apply flex flex-1 items-center justify-end;
		padding-right: size(396);
		.logo {
			width: size(201.44);
			margin: unset;
			margin-right: size(56.1);
		}
		.t1 {
			font-weight: 700;
			font-size: size(50);
			line-height: 200%;
			letter-spacing: 0.1em;
			color: #00437D;
			margin-right: size(43);
		}
		.t2 {
			width: size(1);
			height: size(217);
			background-color: #860009;
			margin-right: size(81);
		}
		.t3 {
			font-weight: 400;
			font-size: size(25);
			line-height: 200%;
			color: #000000;
		}
	}
	.i1 {
		@apply absolute;
		top: size(808);
		right: -#{size(275.21)};
		width: size(637.21);
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
	width: 100%;
	height: sizem(963);
	@apply flex flex-col;
	.view {
		width: 100%;
		height: sizem(667);
	}
	.text {
		@apply flex-wrap flex-none justify-start items-start mx-auto;
		padding-right: 0;
		width: sizem(333.33);
		padding-top: sizem(37);

		.logo {
			width: sizem(79.4);
			margin: unset;
			margin-right: sizem(16.3);
			padding-left: sizem(10);
		}
		.t1 {
			font-size: sizem(20);
			line-height: 163%;
			margin-right: 0;
		}
		.t2 {
			flex-basis: sizem(333.33);
			height: sizem(1);
			margin-right: 0;
			margin: sizem(10) 0;
		}
		.t3 {
			font-size: sizem(13);
			line-height: 187%;
		}
	}
	.i1 {
		@apply absolute;
		top: sizem(866);
		right: -#{sizem(66)};
		width: sizem(177);
	}
  }
}

</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
