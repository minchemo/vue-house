<template>
	<article class="s6">
		<div class="star-1">
      <div class="star01"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star02"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star03"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star04"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star05"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star06" v-if="!isMobile"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star07" v-if="!isMobile"><img src="./s1/star1.svg" alt="star"></div>
      <div class="star08" v-if="!isMobile"><img src="./s1/star1.svg" alt="star"></div>
    </div>
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
	background-image: url(@/section/s6/bg.webp);
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
    width: 13.5vw;
    top: 5%;
    left: 33%;
	animation-delay: 0s;
    img{
		opacity:0.4;
		transform: rotate(17deg);
		filter: saturate(10%)brightness(1.2);}
  }
  .star02{
	width: 11vw;
    top: -2.5%;
    left: 40%;
	animation-delay: 0.3s;
    img{
    opacity: 0.3;
    transform: rotate(164deg);}
  }
  .star03{
    width: 5.5vw;
    top: 6%;
    left: 49%;
	animation-delay: 0.6s;
    img{
    opacity: 0.4;
    transform: rotate(172deg);
	filter:saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);
	}
  }
  .star04{
    width: 5.5vw;
    top: 15%;
    left: 58%;
	animation-delay: 0.9s;
    img{
    opacity: 0.3;
    transform: rotate(-3deg);
	}
  }
  .star05{
    width: 5vw;
    top: 16%;
    left: 64.5%;
	animation-delay: 1.2s;
    img{
    opacity: 0.3;
    transform: rotate(117deg);
	filter:saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);
	}
  }
  .star06{
    width: 8vw;
    top: -2%;
    left: 72.5%;
	animation-delay: 1.5s;
    img{
    opacity: 0.3;
    transform: rotate(79deg);}
  }
  .star07{
    width: 13vw;
    top: -7%;
    left: 77%;
	animation-delay: 1.8s;
    img{
		opacity:0.4;
		transform: rotate(96deg);
		filter: saturate(20%)brightness(1.2);}
  }
  .star08{
    width: 13.5vw;
    top: -17%;
    left: 81.5%;
	animation-delay: 2.1s;
    img{
		opacity:0.3;
		transform: rotate(67deg);}
  }
}
}

@media screen and (max-width: 767px) {
	.s6 {
		width: 100%;
		height: sizem(667);
		background-image: url(@/section/s6/bgm.webp);
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
.star-1{
  .star01{
    width: 29.5vw;
    top: 5%;
    left: 3%;
  }
  .star02{
    width: 21vw;
    top: 2.5%;
    left: 39%;
  }
  .star03{
    width: 10.5vw;
    top: 7.5%;
    left: 56%;
  }
  .star04{
    width: 11.5vw;
    top: 14%;
    left: 73%;
  }
  .star05{
    width: 10vw;
    top: 13%;
    left: 84.5%;
  }
}
}
}
</style>
<script setup>
import s6_material from '@/section/s6_material.vue';
import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());

</script>
