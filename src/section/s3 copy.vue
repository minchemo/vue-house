<template>
	<article class="s3">
		<div class="viewbox">
			<fullview />
			<div class="caption">環境3D示意參考圖</div>
		</div>
		<div class="t1" data-aos="fade-up" data-aos-delay="0">Evolution of City</div>
		<div class="t2" data-aos="fade-up" data-aos-delay="200" v-if="isMobile">北高雄最具潛力地段<br><span>立足城市希望之地</span></div>
		<div class="t2" data-aos="fade-up" data-aos-delay="200" v-else>北高雄最具潛力地段｜立足城市希望之地</div>
		<div class="t3" data-aos="fade-up" data-aos-delay="400">【北城之星】要居「高科技S廊道」關鍵樞紐<br>
			讓您買對地點、預見未來，搶當台積電鄰居趁現在！</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
	@apply w-full overflow-visible relative z-10 flex flex-col justify-start items-center;
	height: size(1140);
	padding-top: size(46);
	background: #000034;

	.viewbox {
		@apply relative;
		width: 100%;
		height: size(730);

		&:before {
			@apply absolute left-0 z-10 mix-blend-screen pointer-events-none;
			content: '';
			width: 100%;
			height: size(80);
			background-image: url('@/section/s3/light.webp');
			background-size: cover;
			top: -#{size(35)};
			z-index: 99;
		}

		&:after {
			@apply absolute left-0 z-10 mix-blend-screen pointer-events-none;
			content: '';
			width: 100%;
			height: size(80);
			background-image: url('@/section/s3/light.webp');
			background-size: cover;
			bottom: -#{size(40)};
			z-index: 99;
		}

		.caption {
				@apply absolute z-10;
				right: 10px;
				bottom: 5px;
				color: white;
				font-size: size(12);
				font-weight: 400;
				word-wrap: break-word
			}
	}

	.t1 {
		margin-top: size(31);
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
	.s3 {
		@apply w-full overflow-visible relative z-10 flex flex-col justify-start items-center;
		height: sizem(676);
		padding-top: size(46);
		background: #000034;

		.viewbox {
			@apply overflow-visible;
			height: sizem(455);

			&:before {
				@apply absolute left-1/2 -translate-x-1/2 z-10 mix-blend-screen pointer-events-none;
				content: '';
				width: 115%;
				height: size(80);
				background-image: url('@/section/s3/light.png');
				background-size: cover;
				top: -#{size(40)};
			}

			&:after {
				@apply absolute left-1/2 -translate-x-1/2 z-10 mix-blend-screen pointer-events-none;
				content: '';
				width: 115%;
				height: size(80);
				background-image: url('@/section/s3/light.png');
				background-size: cover;
				bottom: -#{size(40)};
			}

			.caption {
				@apply absolute z-10;
				right: 10px;
				bottom: 5px;
				color: white;
				font-size: sizem(12);
				font-weight: 400;
				word-wrap: break-word
			}
		}

		.t1 {
			margin-top: sizem(19);
			color: white;
			font-size: sizem(34);
			font-family: 'Noto Serif TC';
			font-weight: 700;
		}

		.t2 {
			font-size: sizem(20);
			letter-spacing: 0;

			span {
				letter-spacing: sizem(2.8);
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
import fullview from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());

</script>
