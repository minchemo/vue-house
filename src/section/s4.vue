<template>
	<article class="s4">
		<div class="title">
			<div class="t1" data-aos="fade-up" data-aos-delay="0">
				產業聚<span>人口紅利增</span>
			</div>
			<img src="@/section/s4/t2.png" class="t2" alt="" srcset="" data-aos="fade-up" data-aos-delay="200">
			<div class="t3" data-aos="fade-up" data-aos-delay="400">位處中部科技走廊與臨港產業鏈中央，全台最密集的產業聚落，囊括大台中80%工作機會，<br v-if="!isMobile">超過20萬就業人口，沙鹿成為中台灣購屋移居首選。</div>
		</div>
		<img ref="starRef" src="@/section/s4/star.png" class="star" alt="" srcset="">
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
	@apply flex justify-center relative bg-cover;
	width: 100%;
	height: size(1080);
	background-image: url(@/section/s4/bg.webp);

	.title {
		@apply flex flex-col items-center relative z-10;
		padding-top: size(117);

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
			width: size(663);
		}

		.t3 {
			text-align: center;
			margin-top: size(21);
			color: black;
			font-size: size(20);
			font-weight: 500;
			line-height: size(35);
		}
	}


	.star {
		@apply select-none absolute;
		width: size(536);
		right: size(231.5);
		top: size(205);
	}
}

@media screen and (max-width: 767px) {
	.s4 {
		width: 100%;
		height: sizem(678);
		background-image: url(@/section/s4/bgm.webp);
		padding: 0 sizem(32);


		.title {
			@apply items-start ;
			padding-top: sizem(50);

			.t1 {
				font-size: sizem(33);

				span {
					font-size: sizem(30);
					margin-left: sizem(10);
				}
			}

			.t2 {
				margin-top: 8px;
				width: 100%;
			}

			.t3 {
				text-align: justify;
				margin-top: 20px;
				color: black;
				font-size: sizem(15);
				line-height: sizem(25.5);
			}
		}


		.star {
			@apply select-none absolute;
			width: size(536);
			right: size(231.5);
			top: size(205);
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
