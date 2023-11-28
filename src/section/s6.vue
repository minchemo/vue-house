<template>
	<article class="s6">
		<img src="@/section/s6/star.png" class="star" ref="starRef" alt="" srcset="" v-if="!isMobile">
		<img src="@/section/s6/starm.png" class="star" ref="starRef" alt="" srcset="" v-else>
		<div class="title">
			<div class="t1" data-aos="fade-up" data-aos-delay="0">
				住更好<span>超優質建材</span>
			</div>
			<img src="@/section/s6/building.png" class="t2" alt="" srcset="" data-aos="fade-up" data-aos-delay="200">
		</div>
		<s6_material />
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s6 {
	@apply flex flex-col relative bg-cover z-10;
	width: 100%;
	height: size(1080);
	background-image: url(@/section/s6/bg.jpg);
	padding-top: size(135);

	.star {
		@apply absolute select-none;
		top: -#{size(300)};
		right: size(45);
		width: size(1239.85);
	}

	.title {
		@apply flex flex-col items-center relative z-10;

		.t1 {
			color: #E97290;
			font-size: size(80);
			font-weight: 900;

			span {
				font-size: size(64);
				margin-left: size(20);
				font-weight: 500
			}
		}

		.t2 {
			margin-top: -#{size(5)};
			width: size(466);
		}

	}
}

@media screen and (max-width: 767px) {
	.s6 {
		width: 100%;
		height: sizem(667);
		background-image: url(@/section/s6/bgm.jpg);
		padding-top: sizem(68);

		.star {
			top: sizem(5);
			right: sizem(6);
			width: sizem(282);
		}

		.title {
			.t1 {
				font-size: sizem(33);

				span {
					font-size: sizem(30);
					margin-left: 10px;
				}
			}

			.t2 {
				margin-top: 5px;
				width: sizem(202);
			}

		}
	}
}
</style>
<script setup>
import s6_material from '@/section/s6_material.vue';
import anime from 'animejs/lib/anime.es.js';
import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());

const starRef = ref(null);

function r(min, max) {
	return Math.random() * (max - min) + min;
}

const animeS = () => {
	anime({
		targets: starRef.value,
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


onMounted(() => {
	animeS();
})
</script>
