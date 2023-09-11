<template>
	<article class="s9 relative">
		<div class="bubble" ref="bubbleRef">
			<div class="bubble-1 z-[10]"></div>
			<div class="bubble-2"></div>
			<div class="bubble-3"></div>
			<div class="bubble-4" v-if="!isMobile"></div>
			<div class="bubble-5" v-if="!isMobile"></div>
		</div>
		<div class="content">
			<div class="intro">
				
			</div>
		</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s9 {
	@apply w-full h-screen overflow-visible relative z-10;
	max-height: size(1080);
	min-height: size(900);
	background: linear-gradient(175deg, #FF3EA1 3.87%, #8E135E 96.09%);

	.bubble {
		@apply absolute w-full h-full inset-0 overflow-hidden;

		>div {
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
				width: size(560);
				height: size(560);
				left: -#{size(328)};
				top: size(423);
				box-shadow: 8px -9px 11px 0px rgba(128, 20, 97, 0.25);
			}

			&.bubble-1 {
				width: size(1080);
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

		.train {
			left: size(124);
			top: size(323);
			width: size(979);
			z-index: 1;
		}

		.leaf {
			width: size(739.22);
			left: size(69);
			top: size(131);
			animation: an_s 1.5s linear infinite;

			@keyframes an_s {
				0% {
					transform: scale(.5)translateY(0%);
					opacity: 0;
				}

				50% {
					transform: scale(.95)translateY(-30%);
					opacity: 1;
				}

				100% {
					transform: scale(1.5)translateY(-40%);
					opacity: 0;
				}
			}
		}

		.leaf2 {
			top: size(491);
			right: size(352.44);
			width: size(190.56);
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


		.bubble {

			>div {
				@apply absolute;
				background-color: #ff3ea1;
				border-radius: 50%;

				&.bubble-3 {
					width: sizem(263);
					height: sizem(263);
					left: -#{sizem(113)};
					top:-#{sizem(68)};
					box-shadow: sizem(11) sizem(6) sizem(20) 0px rgba(0, 0, 0, 0.25);
				}


				&.bubble-1 {
					width: sizem(311);
					height: sizem(311);
					left: sizem(299);
					top: sizem(46);
					box-shadow: -#{sizem(9)} -#{sizem(8)} -#{sizem(9)} 0px rgba(114, 18, 75, 0.25);
				}

				&.bubble-2 {
					width: size(640);
					height: size(640);
					left: size(824);
					top: size(868);
					box-shadow: sizem(12) sizem(5) sizem(14) 0px rgba(85, 8, 45, 0.25);
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

			.train {
				left: size(124);
				top: size(323);
				width: size(979);
				z-index: 1;
			}

			.leaf {
				width: size(739.22);
				left: size(69);
				top: size(131);
				animation: an_s 1.5s linear infinite;

				@keyframes an_s {
					0% {
						transform: scale(.5)translateY(0%);
						opacity: 0;
					}

					50% {
						transform: scale(.95)translateY(-30%);
						opacity: 1;
					}

					100% {
						transform: scale(1.5)translateY(-40%);
						opacity: 0;
					}
				}
			}

			.leaf2 {
				top: size(491);
				right: size(352.44);
				width: size(190.56);
			}
		}
	}
}
</style>

<script setup>
import anime from 'animejs/lib/anime.es.js';

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
			translateX: isMobile ? r(-10, 10) : r(-100, 100),
			translateY: isMobile ? r(-10, 10) : r(-100, 100),
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
