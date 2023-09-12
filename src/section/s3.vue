<template>
	<article class="s3 relative z-20">
		<img class="cloud" src="@/section/s3/cloud.png" alt="" srcset="" v-if="!$isMobile()">
		<img class="cloud" src="@/section/s3/cloud_m.png" alt="" srcset="" v-else>
		<div class="sep-text" data-aos="flip-left" data-aos-delay="100">
			THE WONDERLAND
		</div>

		<div class="intro">
			<div class="t1" data-aos="fade-up" data-aos-delay="0">蘆洲下一站 萬坪公園城</div>
			<div class="t2" data-aos="fade-up" data-aos-delay="100">年度鉅獻 敬邀珍藏 夢想與理想一次到位</div>
			<div class="t3" data-aos="fade-up" data-aos-delay="200">一期夢想實現，二期理想啟城</div>
			<div class="t4" v-if="!$isMobile()" data-aos="fade-up" data-aos-delay="200">「快樂王國」NO.1夢享城熱銷，信手拈來公園水岸捷運美好總和<br />
				NO.2理享城以國際眼界的視角，於蘆洲捷運、五泰輕軌黃金雙軸<br />
				用萬坪公園造鎮的氣魄倚水為貴 ，共譜蘆洲下一站世紀建築傳奇<br />
			</div>
			<div class="t4" v-else data-aos="fade-up" data-aos-delay="300">
				「快樂王國」NO.1夢享城熱銷，信手拈來公園水岸捷運美好總和，NO.2理享城以國際眼界的視角，於蘆洲捷運、五泰輕軌黃金雙軸，用萬坪公園造鎮的氣魄倚水為貴
				，共譜蘆洲下一站世紀建築傳奇。
			</div>
		</div>
		<div class="content">
			<div class="l">
				<div class="t1"> 洲子洋最大萬坪公園造鎮計畫</div>
				<div class="t2">勇奪美法澳洲四大設計獎 榮耀國際建築頂尖工藝</div>
				<div class="t3" v-if="$isMobile()">
					「快樂王國」夢享城與理享城<br />
					獲獎殊榮，捷報不斷，從建築到公設<br />
					連續榮獲美國泰坦地產、法國NDA設計獎<br />
					澳洲雪梨設計獎、美國MUSE設計獎四大殊榮肯定<br />
					不凡品味並肩國際視野與創新設計<br />
					實現與自然萬物共處的建築理想
				</div>
				<div class="divi" v-if="$isMobile()"></div>
				<img class="logos" src="@/section/s3/logos.png" alt="" srcset="">
			</div>
			<div class="divi" v-if="!$isMobile()"></div>
			<div class="r" v-if="!$isMobile()" data-aos="fade-up" data-aos-delay="0">「快樂王國」夢享城與理享城<br />
				獲獎殊榮，捷報不斷，從建築到公設<br />
				連續榮獲美國泰坦地產、法國NDA設計獎<br />
				澳洲雪梨設計獎、美國MUSE設計獎四大殊榮肯定<br />
				不凡品味並肩國際視野與創新設計<br />
				實現與自然萬物共處的建築理想
			</div>
		</div>
		<C class="per" />
		<!-- <img class="per" src="@/section/s3/p.png" alt="" srcset=""> -->
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
	
	width: 100%;
	height: size(1553);
	background-image: url(@/section/s3/bg.jpg);
	background-size: cover;

	.per {
		@apply absolute;
		width: size(626);
		right: size(163);
		bottom: -#{size(210)};
	}

	.cloud {
		@apply absolute;
		left: -#{size(123)};
		bottom: size(1103.73);
		width: size(2120.63);
	}

	
	.sep-text {
		@apply absolute z-10 w-full;
		text-align: center;
		color: #FF3EA1;
		font-size: size(27);
		font-family: 'Noto Serif TC';
		font-weight: 700;
		letter-spacing: size(34.37);
		top: size(197.24);
		left: 0
	}

	.intro {
		@apply absolute;
		top: size(330);
		left: size(296);
		.t1 {
			color: white;
			font-size: size(55);
			font-weight: 700;
		}
		.t2 {
			color: white;
			font-size: size(30);
			font-weight: 500;
		}
		.t3 {
			color: black;
			font-size: size(20);
			font-weight: 700;
			padding-left: size(5);
			margin-top: size(50);
		}
		.t4 {
			color: black;
			font-size: size(16);
			font-weight: 400;
			letter-spacing: size(0.4);
			margin-top: size(12);
			line-height: 2
		}
	}
	
	.content {
		@apply absolute left-1/2 -translate-x-1/2 flex;
		bottom: size(127);
		width: size(1450);
		padding: size(55) size(68);
		background: rgba(9, 36, 23, 0.47);
		.l {
			.t1 {
				color: white;
				font-size: size(55);
				font-weight: 700;
			}
			.t2 {
				color: white;
				font-size: size(30);
				font-weight: 500;
			}
			.logos {
				margin-top: size(38);
				width: size(734);
			}
		}
		.divi {
			width: 1px;
			height: size(257);
			background-color: #fff;
			margin-right: size(63);
			margin-left: size(158);
		}
		.r {
			color: white;
			font-size: size(16);
			font-weight: 400;
			line-height: 2;
		}
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
	width: 100%;
	height: sizem(932);
	background-image: url(@/section/s3/bg_m.jpg);
	background-size: cover;
	padding: 0 sizem(30);


	.cloud {
		@apply absolute;
		left: -#{sizem(92)};
		bottom: unset;
		top: -#{sizem(120)};
		width: sizem(722.01);
	}
	
	.sep-text {
		@apply absolute z-10 w-full;
		text-align: center;
		color: #FF3EA1;
		font-size: sizem(14);
		font-family: 'Noto Serif TC';
		font-weight: 700;
		letter-spacing: sizem(12.39);
		top: sizem(10.24)
	}


	.intro {
		@apply relative;
		top: sizem(75);
		left: auto;
		.t1 {
			font-size: sizem(25);
		}
		.t2 {
			font-size: sizem(16);
		}
		.t3 {
			color: black;
			font-size: sizem(15);
			font-weight: 700;
			padding-left: 0;
			margin-top: sizem(15);
		}
		.t4 {
			color: black;
			font-size: sizem(13);
			font-weight: 400;
			letter-spacing: sizem(0.33);
			margin-top: sizem(5);
			line-height: 1.5
		}
	}
	
	.content {
		@apply flex flex-col;
		bottom: unset;
		top: sizem(500);
		width: 100%;
		padding: 0 sizem(30);
		background: transparent;
		.l {
			.t1 {
				font-size: sizem(22);
			}
			.t2 {
				font-size: sizem(13);
				margin-top: sizem(6);
			}
			.logos {
				width: 100%;
			}
			.t3 {
				margin-top: sizem(16);
				color: white;
				font-size: sizem(13);
				font-family: Noto Sans TC;
				font-weight: 400;
				word-wrap: break-word;
				line-height: 2;
			}
		}
		.divi {
			width: 100%;
			height: 1px;
			margin-right: 0;
			margin-left: 0;
			margin: sizem(30) 0;
		}
	}
  }
}

</style>
<script setup>
import { computed, getCurrentInstance, ref, } from 'vue';
import C from '@/section/anim/c.vue';

const globals = getCurrentInstance().appContext.config.globalProperties;

</script>
