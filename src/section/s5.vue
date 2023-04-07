<template>
	<article class="s5 relative font-['Noto_Serif_TC']">
		<div class="main">
			
			<div class="imgbox">
			<img class="left" src="@/section/s5/1.jpg" alt="" srcset="">
			<div class="caption">永康交流道航拍實景圖</div>
			</div>
			<div class="right">
				<div class="t1" data-aos="fade-up" data-aos-delay="200">國道上線即刻<br>
					下班湯還溫熱</div>
				<div class="t2" data-aos="fade-up" data-aos-delay="400">近取1高2快3轉運</div>
				<div class="t3" data-aos="fade-up" data-aos-delay="600">■ 國道1號永康交流道<br>
					■ 通聯國道8號(台南環線)<br>
					■ 北外環3期→南科聯絡道&台江大道 (10月通車)<br>
					■ 永康物流、永安轉運站 客運進台南市區第一站<br>
					(預計2024完工)</div>
			</div>
		</div>
		<img class="slash" src="@/section/slash.svg" alt="" srcset="">
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
	width: 100%;
	height: size(1138);
	background-image: url(@/section/s3/bg.jpg);
	background-size: cover;
	padding-top: size(102.28);
	padding-right: size(80.94);

	.main {
		@apply flex flex-row-reverse items-center justify-start;
		gap: size(74.97);
		.imgbox{
			position: relative;

			.left {
			margin: unset;
			width: size(1094);
			}

			.caption{
					position: absolute;
					right: size(10);
						bottom: size(10);
						font-weight: 400;
						font-size: size(15);
						line-height: 160%;
						color: #FFFFFF;
						text-shadow: 0px size(2) size(4) rgba(0, 0, 0, 0.8);
				}
		}
		.right {
			.t1 {
				margin-top: size(101.40);
				padding-left: -#{size(13)};
				font-weight: 700;
				font-size: size(37);
				line-height: 140%;
				color: #803031;
			}
			.t2 {
				margin-top: size(33);
				padding-left: -#{size(13)};
				font-weight: 700;
				font-size: size(30);
				line-height: 160%;
				color: #000000;
			}
			.t3 {
				margin-top: size(30);
				padding-left: -#{size(13)};
				width: size(445.47);
				font-weight: 400;
				font-size: size(20);
				line-height: 150%;
				color: #000000;
			}
		}
	}

	.slash {
		@apply absolute z-10;
		top: size(281.22);
		left: size(487);
		width: size(176.77);
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

	.s5 {
	width: 100%;
	height: sizem(638);
	padding-top: 0;
	padding-right: 0;

	.main {
		@apply flex-col;
		gap: sizem(58);
		

			.imgbox{

				.left {
				margin: unset;
				width: 100%;
				}

			.caption{
					right: sizem(10);
					bottom: sizem(5);
					font-size: sizem(12);
					text-shadow: 0px sizem(2) sizem(4) rgba(0, 0, 0, 0.8);
				}
		}
		
		.right {
			.t1 {
				margin-top: 0;
				padding-left:0;
				font-size: sizem(23);
			}
			.t2 {
				margin-top: sizem(16);
				padding-left:0;
				font-size: sizem(16);
			}
			.t3 {
				margin-top: sizem(16);
				padding-left: 0;
				width: auto;
				font-size: sizem(14);
			}
		}
	}

	.slash {
		@apply absolute z-10;
		top: sizem(313.47);
		left: sizem(181);
		width: sizem(118);
	}
}
}

</style>
<script setup>
import { computed, getCurrentInstance, ref, } from 'vue';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
</script>
