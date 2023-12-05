<template>
	<article class="s1 relative">
		<div class="caption">情境示意</div>
		<div class="title">
			<img class="logo" src="@/section/s1/logo.svg" alt="" srcset="" data-aos="fade-up" data-aos-delay="0">
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
    <div class="star-1">
      <div class="star01"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star02"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star03"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star04"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star05"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star06"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star07"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star08"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star09"><img src="./s1/star1.svg" alt="star"></div>
    </div>


		<Boy class="layer1" />

	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
	@apply w-full h-screen overflow-visible relative z-20;
	max-height: size(1080);
	min-height: size(900);
	background-image: url(@/section/s1/bg.webp);
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
	
@keyframes star {	
	0%{
	transform: scale(.5)translateY(30%);
    opacity: 0;
   }
   10%{
	transform: scale(1);
    opacity: 1;
   }
   65%{
	transform: scale(1)translateY(-10%);
    opacity: 1;
   }
   75%{
	transform: scale(1.5)translateY(-30%);
    opacity: 0;
   }
   100%{
	transform: scale(.5)translateY(0%);;
    opacity: 0;
   }
}
.star-1{position: absolute;left: 0;top: 0;width: 100%;height: 100%;
> div {position: absolute;
	transform: scale(.5);
    opacity: 0;
	animation:star 8s ease-in-out infinite;
img{width: 100%;}}
  .star01{
    width: 14.5vw;
    top: 43%;
    left: 17.5%;
	animation-delay: 0s;
    img{
		opacity:0.2;
		transform: rotate(5deg);
		filter: saturate(50%)brightness(1.1);}
  }
  .star02{
    width: 8.5vw;
    top: 38%;
    left: 16.5%;
	animation-delay: 0.3s;
    img{
    opacity: 0.4;
    transform: rotate(134deg);}
  }
  .star03{
    width: 14.5vw;
    top: 45%;
    left: 25.5%;
	animation-delay: 0.6s;
    img{
    opacity: 0.4;
    transform: rotate(122deg);}
  }
  .star04{
    width: 5.5vw;
    top: 9%;
    left: 52%;
	animation-delay: 0.9s;
    img{
    opacity: 0.3;
    transform: rotate(2deg);
	filter:saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);
	}
  }
  .star05{
    width: 6vw;
    top: 6%;
    left: 58%;
	animation-delay: 1.2s;
    img{
    opacity: 0.3;
    transform: rotate(27deg);}
  }
  .star06{
    width: 5.5vw;
    top: 9%;
    left: 62%;
	animation-delay: 1.5s;
    img{
    opacity: 0.5;
    transform: rotate(2deg);
	filter:saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);
	}
  }
  .star07{
    width: 16vw;
    top: -6%;
    left: 66%;
	animation-delay: 1.8s;
    img{
		opacity:0.15;
		transform: rotate(-25deg);
		filter: saturate(50%)brightness(1.1);}
  }
  .star08{
    width: 12vw;
    top: 14%;
    left: 72%;
	animation-delay: 2.1s;
    img{
		opacity:0.4;
		transform: rotate(-23deg);}
  }
  .star09{
    width: 14vw;
    top: -4%;
    left: 74%;
	animation-delay: 2.4s;
    img{
		opacity:0.3;
		transform: rotate(-25deg);
		filter: saturate(10%)brightness(1.1);}
  }
}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


	.s1 {
		height: sizem(667);
		max-height: unset;
		background-image: url(@/section/s1/bgm.webp);


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

		.star-1{
			.star01{
    width: 25.5vw;
    top: 45%;
    left: -3.5%;
  }
  .star02{
    width: 15.5vw;
    top: 42%;
    left: -5.5%;
  }
  .star03{
    width: 28.5vw;
    top: 45.5%;
    left: 9.5%;
  }
  .star04{
    width: 14.5vw;
    top: 6%;
    left: 32%;
  }
  .star05{
    width: 16vw;
    top: 4%;
    left: 47%;
  }
  .star06{
    width: 15.5vw;
    top: 12%;
    left: 74%;
  }
  .star07{
    width: 39vw;
    top: -4%;
    left: 68%;
  }
  .star08{
    width: 31vw;
    top: 9%;
    left: 83%;
  }
  .star09{
    width: 34vw;
    top: -3%;
    left: 88%;
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
</script>
