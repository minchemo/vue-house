<template>
	<article class="s9 relative">
		<div class="bubble" ref="bubbleRef">
			<div class="bubble-1 z-[10]"></div>
			<div class="bubble-2"></div>
			<div class="bubble-3"></div>
			<div class="bubble-4"></div>
			<div class="bubble-5"></div>
		</div>
		<div class="content">
			<div class="intro">
				<S9mix class="s9mix" />
				<img    class="t1" src="@/section/s9/t1.svg" data-aos="fade-up" data-aos-delay="0" alt="" />
				<img    class="t2" src="@/section/s9/t2.svg" data-aos="fade-up" data-aos-delay="200" alt="" />
				<div class="line"></div>
				<img    class="logo" data-aos="fade-in" data-aos-delay="200" src="@/section/s9/logo.svg" alt="" />
			</div>
		</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s9 {
	@apply w-full h-screen overflow-visible relative z-10;
	height: size(1308);
	background: linear-gradient(175deg, #A92D41 3.87%, #8E135E 96.09%);
	padding-top: size(228);

	.bubble {
		@apply absolute w-full h-full inset-0 overflow-hidden;

		>div {
			@apply absolute;
			border-radius: 50%;

			&.bubble-3 {
				width: size(809);
				height: size(809);
				left: -#{size(335)};
				top: size(50);
				box-shadow: size(12) size(5) size(14) rgba(85, 8.15, 45.04, 0.25);
				background: rgba(255, 62, 161, 0.05);
			}

			&.bubble-5 {
				width: size(745);
				height: size(745);
				left: size(1625);
				top: size(94);
				box-shadow: -#{size(9)} -#{size(8)} size(9) rgba(113.69, 17.53, 75.22, 0.25);
				background: linear-gradient(157deg, rgba(255, 62, 161, 0.20) 0%, rgba(255, 62, 161, 0) 100%); box-shadow: -9px -8px 9px rgba(113.69, 17.53, 75.22, 0.25);
			}

			&.bubble-4 {
				width: size(560);
				height: size(560);
				left: -#{size(328)};
				top: size(423);
				box-shadow: size(8) -#{size(9)} size(11) 0px rgba(128, 20, 97, 0.25);
				background: linear-gradient(185deg, rgba(255, 62, 161, 0.36) 0%, rgba(255, 62, 161, 0) 100%); 
			}

			&.bubble-1 {
				width: size(1080);
				height: size(1080);
				left: size(1162);
				top: -#{size(788)};
				box-shadow: size(11) size(6) size(20) 0px rgba(0, 0, 0, 0.25);
				background: #A92D41;
			}

			&.bubble-2 {
				width: size(640);
				height: size(640);
				left: size(824);
				top: size(868);
				box-shadow: -#{size(9)} 0px size(6) 0px rgba(0, 0, 0, 0.25);
				background: linear-gradient(193deg, rgba(255, 62, 161, 0.31) 0%, rgba(255, 62, 161, 0) 100%); box-shadow: -9px 0px 6px rgba(0, 0, 0, 0.25);
			}
		}
	}

	.content {
		.intro {
			@apply flex flex-col items-center justify-center z-10 relative;
			.s9mix {
				width: size(1079);
			}
			.t1 {
				width: size(888);
				margin-bottom: size(33);
			}
			.t2 {
				width: size(888);
			}
			.line {
				margin: size(19) 0;
				background-color: #fff;
				width: 1px;
				height: size(63);
			}
			.logo {
				width: size(388);
			}
		}

	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1300px) {
	.s9{
		height: size(1500);
	}
}

@media screen and (max-width: 767px) {


	.s9 {
	@apply w-full h-screen overflow-visible relative z-10;
	height: sizem(664);
	background: linear-gradient(175deg, #A92D41 3.87%, #8E135E 96.09%);
	padding-top: sizem(125);

	.bubble {
		@apply absolute w-full h-full inset-0 overflow-hidden;

		>div {
			@apply absolute;
			border-radius: 50%;

			&.bubble-3 {
				width: sizem(224.3);
				height: sizem(224.3);
				left: -#{sizem(125)};
				top: sizem(156);
				box-shadow: sizem(12) sizem(5) sizem(14) rgba(85, 8.15, 45.04, 0.25);
				background: rgba(255, 62, 161, 0.05);
			}

			&.bubble-5 {
				width: sizem(206.5);
				height: sizem(206.5);
				left: sizem(350.22);
				top: sizem(170.68);
				box-shadow: -#{sizem(9)} -#{sizem(8)} sizem(9) rgba(113.69, 17.53, 75.22, 0.25);
				background: linear-gradient(157deg, rgba(255, 62, 161, 0.20) 0%, rgba(255, 62, 161, 0) 100%); box-shadow: -9px -8px 9px rgba(113.69, 17.53, 75.22, 0.25);
			}

			&.bubble-4 {
				width: sizem(155.26);
				height: sizem(155.26);
				left: -#{sizem(122)};
				top: sizem(332);
				box-shadow: sizem(8) -#{sizem(9)} sizem(11) 0px rgba(128, 20, 97, 0.25);
				background: linear-gradient(185deg, rgba(255, 62, 161, 0.36) 0%, rgba(255, 62, 161, 0) 100%); 
			}

			&.bubble-1 {
				width: sizem(299.43);
				height: sizem(299.43);
				left: sizem(213.53);
				top: -#{sizem(158)};
				box-shadow: sizem(11) sizem(6) sizem(20) 0px rgba(0, 0, 0, 0.25);
				background: #A92D41;
			}

			&.bubble-2 {
				width: sizem(177.44);
				height: sizem(177.44);
				left: sizem(235.99);
				top: sizem(372.24);
				box-shadow: -#{sizem(9)} 0px sizem(6) 0px rgba(0, 0, 0, 0.25);
				background: linear-gradient(193deg, rgba(255, 62, 161, 0.31) 0%, rgba(255, 62, 161, 0) 100%); box-shadow: -9px 0px 6px rgba(0, 0, 0, 0.25);
			}
		}
	}

	.content {
		.intro {
			@apply flex flex-col items-center justify-center z-10 relative;
			.s9mix {
				@apply flex justify-center;
				width: 100%;
			}
			.t1 {
				width: sizem(318.64);
				margin-bottom: sizem(10);
			}
			.t2 {
				width: sizem(318.64);
			}
			.line {
				margin: sizem(10) 0;
				background-color: #fff;
				width: 1px;
				height: sizem(63);
			}
			.logo {
				width: sizem(238.78);
			}
		}

	}
	}
}
</style>

<script setup>
import anime from 'animejs/lib/anime.es.js';
import S9mix from '@/section/s9mix.vue';

import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());

const scrollTo = (target) => {
	let el = document.getElementById(target);
	smoothScroll({
		scrollTo: el
	})
}

const bubbleRef = ref(null);

function r(min, max) {
	return Math.random() * (max - min) + min;
}



const animeBubble = () => {
	const bubbles = bubbleRef.value.children;
	for (const child of bubbles) {
		anime({
			targets: child,
			translateX: isMobile.value ? r(-10, 10) : r(-100, 100),
			translateY: isMobile.value ? r(-10, 10) : r(-100, 100),
			round: r(1, 10),
			delay: r(0, 1000),
			duration: r(5000, 8000),
			direction: 'alternate',
			easing: 'easeInOutSine',
			loop: true,
		});
	}
}


onMounted(() => {
	animeBubble();
})

</script>
