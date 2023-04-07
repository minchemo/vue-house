<template>
	<article class="s2 relative font-['Noto_Serif_TC']">
		<div class="view">
			<div class="title">
				<div class="t1" data-aos="fade-up" data-aos-delay="200">府城機能 南科近程<br>
					永康生活新城心</div>
				<div class="line"></div>
				<div class="t2" data-aos="fade-up" data-aos-delay="400">
					永康區人口突破23萬人，居台南人口數之冠、移入成長率NO.1！足見生活、發展大優勢。一次進場全新「鹽行國中重<br
						v-if="!$isMobile()" />劃區」，雙語文教、景觀綠廊高端生活圈，更近國道、更近南科，更近下一代的國際視野新人生！
				</div>
			</div>
			<Fullview class="viewB" />
		</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
	width: 100%;
	height: size(1080);
	.view {
		width: 100%;
		height: 100%;
		
		.title {
			@apply absolute flex items-center justify-center w-full z-10;
			top: size(104.75);
			gap: size(39.5);
			.t1 {
				font-weight: 700;
				font-size: size(38);
				line-height: 127%;
				color: #D8AE67;
			}
			.line {
				width: size(1);
				height: size(93.25);
				background-color: #fff;
			}
			.t2 {
				font-weight: 400;
				font-size: size(21);
				line-height: 160%;
				text-align: justify;
				color: #FFFFFF;
			}
		}
	}

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


	.s2 {
	width: 100%;
	height: sizem(750);
	background-color: #0F2F58;
	.view {
		width: 100%;
		height: 100%;
		
		.viewB{
			@apply absolute bottom-0;
			height: 85%;
		}

		.title {
			@apply flex-col items-start;
			top: sizem(60);
			gap: sizem(16);
			padding: 0 sizem(32.5);
			.t1 {
				font-size: sizem(23);
			}
			.line {
				width: sizem(310);
				height: sizem(1);
			}
			.t2 {
				font-size: sizem(14);
			}
		}
	}

}
  }

</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());

const scrollTo = (target) => {
	let el = document.getElementById(target);
	smoothScroll({
		scrollTo: el
	})
}
</script>
