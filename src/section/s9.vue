<template>
	<article class="s9 relative" ref="s9" :class="dayClass[currentDay]">
		<div class="text">
			<img src="@/section/s9/mark.png" alt="" data-aos="fade-down" data-aos-delay="0">
			<div class="t1" data-aos="fade-down" data-aos-delay="200">品生活之淳<br v-if="!$isMobile()" />賞人文之萃</div>
			<div class="t2" data-aos="fade-down" data-aos-delay="400">洗鍊優雅有機曲面禮讚白派大師建築美學<br />
				Twin Towers純白輕盈量體以輕透格局<br />
				讓建築擁抱自然光景<br />
				構築深具療癒力空間場域<br />
				如實演繹國際樣式生活之美</div>
		</div>
		<div class="caption">{{ currentDay == 0 ? '建築外觀日景3D情境示意' : '建築外觀夜景3D情境示意' }}</div>
		<div class="tip"  data-aos="fade" data-aos-delay="200" data-aos-duration="1000" :key="currentDay">白派美學</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s9 {
	@apply transition-all duration-1000;
	width: 100%;
	height: size(1020);
	background-size: cover;

	.text {
		@apply absolute flex flex-col items-center;
		gap: size(25);
		top: size(126.67);
		left: size(1258);
		img {
			width: size(201);
		}
		.t1 {
			@apply transition-all duration-1000;
			font-weight: 700;
			font-size: size(50);
			line-height: 160%;
			text-align: center;
		}
		.t2 {
			@apply transition-all duration-1000;
			font-weight: 400; 
			font-size: size(25);
			line-height: 200%;
			text-align: center;
		}
	}

	.caption {
		@apply absolute;
		right: size(10);
		bottom: size(5);
		font-weight: 400;
		font-size: size(18);
		color: #FFFFFF;
		text-shadow: 0px size(2) size(2) rgba(0, 0, 0, 0.8);
	}
	.tip {
		@apply absolute;
		font-weight: 700;
		font-size: size(50);
		letter-spacing: 0.5rem;
		color: #FFFFFF;
		writing-mode: vertical-rl;
	}
	
	&.day {
		background-image: url(@/section/s9/1.jpg);
		.text{
			.t1 {
				color: #DD0615;
			}
			.t2 {
				color: #000000;
			}
		}
		.tip {
			top: size(188.5);
			left: size(322);
		}
	}

	&.night {
		background-image: url(@/section/s9/2.jpg);
		.text{
			.t1 {
				color: #fff;
			}
			.t2 {
				color: #fff;
			}
		}
		.tip {
			top: size(420);
			left: size(366);
		}
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s9 {
	height: sizem(667);

	.text {
		@apply absolute flex flex-col items-center;
		gap: sizem(12);
		top: sizem(37);
		left: 0;
		width: 100%;
		img {
			width: sizem(92.64);
		}
		.t1 {
			font-size: sizem(25);
		}
		.t2 {
			font-size: sizem(13);
			line-height: 187%;
		}
	}

	.caption {
		right: sizem(10);
		bottom: sizem(10);
		font-size: sizem(12);
		text-shadow: 0px sizem(2) sizem(2) rgba(0, 0, 0, 0.8);
	}
	.tip {
		font-size: sizem(16);
	}
	
	&.day {
		background-image: url(@/section/s9/1_m.jpg);
		.text{
			.t1 {
				color: #DD0615;
			}
			.t2 {
				color: #000000;
			}
		}
		.tip {
			top: sizem(353);
			left: sizem(20);
		}
	}

	&.night {
		background-image: url(@/section/s9/2_m.jpg);
		.text{
			.t1 {
				color: #fff;
			}
			.t2 {
				color: #fff;
			}
		}
		.tip {
			top: sizem(414);
			left: sizem(42);
		}
	}
  }
}

</style>
<script setup>
import { onMounted, ref } from 'vue';

const s9 = ref();
const dayTimer = 5; // 日夜交替時間, 秒
const dayClass = ['day', 'night']
const currentDay = ref(0); // 預設為白天或黑夜, 預設白天

onMounted(() => {
	setInterval(() => {
		if (currentDay.value === 0) {
			currentDay.value = 1;
		} else {
			currentDay.value = 0;
		}

	}, dayTimer * 1000);
})
</script>
