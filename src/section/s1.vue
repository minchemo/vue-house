<template>
	<article class="s1 relative">
		<div class="bubble">
			<div class="bubble-1 z-[10]"></div>
			<div class="bubble-2"></div>
			<div class="bubble-3"></div>
			<div class="bubble-4"></div>
			<div class="bubble-5"></div>
		</div>
		<div class="content">
			<div class="intro">
				<img class="logo" src="@/section/s1/logo.png" alt="" srcset="">
				<img class="t1" src="@/section/s1/t1.png" alt="" srcset="">
				<img class="t2" src="@/section/s1/t2.png" alt="" srcset="">
				<img class="arrow" src="@/section/s1/arrow.png" alt="" srcset="">
			</div>
		</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
	@apply w-full h-screen;
	max-height: size(1080);
	min-height: size(900);
  	background: linear-gradient(
  	  180deg,
  	  rgba(255, 62, 161, 1) 67.03703999519348%,
  	  rgba(217, 48, 138, 1) 100%
  	);

	.bubble {
		@apply absolute w-full h-full inset-0;
		> div {
			@apply absolute;
			background-color: #ff3ea1;
			border-radius: 50%;
			&.bubble-3 {
			  width: size(809);
			  height: size(809);
			  left: size(65);
			  top: size(150);
			  box-shadow: 12px 5px 14px 0px rgba(85, 8, 45, 0.25);
			}
			&.bubble-5 {
			  width: size(745);
			  height: size(745);
			  left: size(1625);
			  top: size(94);
			  box-shadow: -9px -8px 9px 0px rgba(114, 18, 75, 0.25);
			}
			&.bubble-4 {
			  width:  size(560);
			  height:  size(560);
			  left: -#{size(328)};
			  top: size(423);
			  box-shadow: 8px -9px 11px 0px rgba(128, 20, 97, 0.25);
			}
			&.bubble-1 {
			  width:  size(1080);
			  height: size(1080);
			  left: size(1162);
			  top: -#{size(788)};
			  box-shadow: 11px 6px 20px 0px rgba(0, 0, 0, 0.25);
			}
			&.bubble-2 {
			  width: size(640);
			  height: size(640);
			  left: size(824);
			  top: size(868);
  				box-shadow: -9px 0px 6px 0px rgba(0, 0, 0, 0.25);
			}
		}
	}
	.content {
		.intro {
			@apply absolute flex flex-col items-end;
			gap: size(27);
			width: size(457);
			top: size(317);
			left: size(960);
			img {
				width: 100%;
			}
			.t2 {
				width: size(293);
			}
			.arrow {
				width: size(75.31);
			}
			.arrow {
				margin-right: size(107);
				margin-top: size(17);
			}
		}
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


	.s1 {
	height: 100vh;
    min-height: sizem(667);
    max-height: sizem(750);
	background: #E5B03D;

}
  }

</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
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
