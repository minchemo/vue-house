<template>
	<article class="s2 relative">
		<div class="text">
			<div class="t1" data-aos="fade-down" data-aos-delay="0">家門就是校門 開窗就像開卷</div>
			<div class="t2" data-aos="fade-down" data-aos-delay="200">雙校園 X 雙公園 X 雙捷運 X 雙商圈</div>
			<div class="t3" data-aos="fade-down" data-aos-delay="400">
				<img src="@/section/s2/t3.png" alt="" srcset="">
			</div>
			<div class="t4" data-aos="fade-down" data-aos-delay="600">30坪美式大三房</div>
			<div class="t5" data-aos="fade-down" data-aos-delay="800">開門 即校門<br />
				推窗 閱卷聲<br />
				雙校連璧 書冊成林<br />
				墨香隨步 雙捷隨行<br />
				穠翠綠洲 靜隅謐境<br />
				雙園環繞 風光入座<br />
				美式人生 雙喜臨門<br />
				知識的田 幸福的園<br />
				動靜之間 繁華與寧靜<br />
				價值與品質 資優雙修</div>
		</div>
		<img class="i i1" data-aos="fade" data-aos-delay="0" src="@/section/s2/logo.png" alt="" srcset="">
		<img class="i i2" data-aos="fade" data-aos-delay="0" src="@/section/s2/1.png" alt="" srcset="">
		<img class="i i3" data-aos="fade" data-aos-delay="0" src="@/section/s2/2.png" alt="" srcset="">
		<img class="i i4" data-aos="fade" data-aos-delay="0" src="@/section/s2/3.png" alt="" srcset="">
		<img class="i i5" v-if="!$isMobile()" src="@/section/s2/flag.png" alt="" srcset="">
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
	width: 100%;
	height: size(1507);
	.text{
		@apply absolute flex flex-col items-center;
		top: 0;
		left: size(100);
		width: size(910);
		height: 100%;
		background: #EEEEEE;
		box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
		padding-top: size(150);
		.t1 {
			font-weight: 700;
			font-size: size(50);
			line-height: 200%;
		}
		.t2 {
			font-weight: 500;
			font-size: size(35);
			line-height: 200%;
			color: #CE0615;
			padding: size(16) size(41);
			border: size(1) solid #B18A2D;
			display: inline;		
			margin-top: size(17);	
		}
		.t3 {
			margin-top: size(25);	
			img {
			width: size(623.46);
			}
		}
		.t4 {
			margin-top: size(17);	
			font-weight: 700;
			font-size: size(50);
			line-height: 200%;
			color: #000000;
		}
		.t5 {
			font-weight: 400;
			font-size: size(25);
			line-height: 290%;
			text-align: center;
			margin-top: size(70);	
		}
	}
	
	.i {
		@apply absolute z-[1];
		&.i1 {
			@apply z-[2];
			top: 0;
			right: size(95.93);
			width: size(299.04);
		}
		&.i2 {
			top: size(210);
			right: size(96);
			width: size(884);
		}
		&.i3 {
			@apply z-[2];
			top: size(594.48);
			right: size(42.75);
			width: size(412);
		}
		&.i4 {
			bottom: 0;
			right: size(0);
			width: size(1118.03);
			
		}
		&.i5 {
			bottom: 0;
			left: 0;
			width: size(399);
			
		}
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
	width: 100%;
	height: sizem(819);
	.text{
		@apply relative items-start;
		top: sizem(189);
		left: sizem(12);
		width: sizem(351);
		height: auto;
		background: #EEEEEE;
		box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
		padding-top: sizem(42);
		padding-left: sizem(19);
		padding-bottom: sizem(40);
		.t1 {
			font-size: sizem(20);
		}
		.t2 {
			font-size: sizem(18);
			padding: sizem(0) sizem(18);
			border: sizem(1) solid #B18A2D;
			margin-top: sizem(3);
		}
		.t3 {
			margin-top: sizem(12);	
			img {
				width: sizem(165);
			}
		}
		.t4 {
			margin-top: sizem(5);
			font-size: sizem(20);
		}
		.t5 {
			font-weight: 400;
			font-size: sizem(13);
			line-height: 250%;
			text-align: left;
			margin-top: sizem(12);	
		}
	}
	
	.i {
		@apply absolute z-[1];
		&.i1 {
			@apply z-[3];
			top: sizem(557);
			right: sizem(113.11);
			width: sizem(86.89);
		}
		&.i2 {
			top: sizem(46);
			right: unset;
			left: -#{sizem(15)};
			width: sizem(330);
		}
		&.i3 {
			top: sizem(334);
			right: -#{sizem(15)};
			width: sizem(185);
		}
		&.i4 {
			bottom: 0;
			right: -#{sizem(115)};
			width: sizem(315 );
		}
	}
  }
}

</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
