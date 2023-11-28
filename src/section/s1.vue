<template>
	<article class="s1 relative">
		<div class="caption">情境示意</div>
		<div class="title">
			<img class="logo" src="@/section/s1/logo.png" alt="" srcset="" data-aos="fade-up" data-aos-delay="0">
			<div class="t1" data-aos="fade-up" data-aos-delay="100">
				百年傳承 世代安居<br />
				放眼海線 沙鹿最好
			</div>
			<div class="t2"  data-aos="fade-up" data-aos-delay="200">
				一座百年火車站、一座市心重劃區<br />
				蛻變躍升，迎接中台灣國際門戶<br />
				新世代前進未來，圓夢人生第一屋。
			</div>
		</div>
		<div class="star" ref="starRef">
			<img class="star1" src="@/section/s1/star1.png" alt="" srcset="">
			<img class="star2" src="@/section/s1/star2.png" alt="" srcset="">
		</div>
		<Boy class="layer1" />
		<!-- <img class="layer1" src="@/section/s1/layer1.png" alt="" srcset=""> -->

	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
	@apply w-full h-screen overflow-visible relative z-20;
	max-height: size(1080);
	min-height: size(900);
	background-image: url(@/section/s1/bg.jpg);
	background-size: cover;
	background-position: 0 center;

	.caption {
		@apply absolute;
		color: white;
		font-size: size(15);
		font-weight: 400;
		right: size(16);
		bottom: size(13);
	}

	.title {
		@apply absolute flex flex-col items-center text-center left-1/2 -translate-x-1/2 z-10;
		padding-top: size(162);

		.logo {
			width: size(313);
		}

		.t1 {
			margin-top: -#{size(20)};
			color: #E97290;
			font-size: size(60);
			font-weight: 900;
			line-height: size(77.28);
		}

		.t2 {
			margin-top: size(30);
			color: #fff;
			font-size: size(24);
			font-weight: 500;
			line-height: size(40.51);
			letter-spacing: size(1.92);
		}

	}

	.star {
		@apply absolute w-full h-full inset-0;

		img {
			@apply absolute;

			&.star1 {
				width: size(751);
				top: -#{size(108)};
				right: size(180);
			}

			&.star2 {
				width: size(468);
				top: size(300);
				left: size(282);
			}
		}
	}

	.layer1 {
		@apply absolute z-10;
		width: size(90);
		top: size(455);
		left: size(428);
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


	.s1 {
		height: sizem(667);
		max-height: unset;
		background-image: url(@/section/s1/bgm.jpg);


		.caption {
			@apply absolute;
			color: white;
			font-size: sizem(12);
			font-weight: 400;
			right: sizem(9.5);
			bottom: sizem(5);
		}

		.title {
			padding-top: sizem(86);

			.logo {
				width: sizem(150);
			}

			.t1 {
				@apply whitespace-nowrap;
				margin-top: 0;
				font-size: sizem(33);
				line-height: sizem(42.5);
			}

			.t2 {
				margin-top: 10px;
				font-size: sizem(15);
				line-height: sizem(25.32);
				letter-spacing: sizem(1.2);
			}

		}

		.star {
			img {
				&.star1 {
					width: sizem(379);
					top: -#{sizem(56.41)};
					right: -#{sizem(113)};
				}

				&.star2 {
					width: sizem(168.41);
					top: sizem(256.1);
					left: -#{sizem(33)};
				}
			}
		}

		.layer1 {
			width: sizem(50);
			top: sizem(445);
			left: 50%;
			transform: translateX(-50%) !important;
		}
	}
}
</style>

<script setup>
import Boy from '@/section/boy.vue';
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

const starRef = ref(null);

function r(min, max) {
	return Math.random() * (max - min) + min;
}

const animeBubble = () => {
	const stars = starRef.value.children;
	for (const child of stars) {
		anime({
			targets: child,
			translateX: isMobile.value ? r(-100, 100) : r(-100, 100),
			translateY: isMobile.value ? r(-100, 100) : r(-100, 100),
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
