<template>
	<article class="s4 relative">
		<div class="left">
			<div class="t1" data-aos="fade-down" data-aos-delay="0">20%純住宅內限量1%<br />
				稀貴價值造就高感品質</div>
			<div class="t2" data-aos="fade-down" data-aos-delay="200">猶如皇冠上的寶石，副都心商業區繁華富域<br />
				純住宅區比例僅占20％<br />
				其中座擁雙校園、雙公園、雙捷運、雙商圈<br v-if="$isMobile()" />的土地更僅有1%<br />
				珍稀，是價值唯一真諦</div>
			<div class="t3" data-aos="fade" data-aos-delay="0" @click="viewerOpened = true">
				<p>點圖看詳細生機圖</p>
			</div>
		</div>
		<div class="right" data-aos="fade" data-aos-delay="0">
			<p v-if="!$isMobile()">基地周邊林蔭步道實景</p>
		</div>
		<img class="i1" src="@/section/s4/flag.png" alt="" srcset="">
	</article>
	<div class="viewer" :class="{ active: viewerOpened }">
		<img src="@/section/s4/map-l.jpg" alt="" srcset="">
		<div class="close" :key="viewerOpened" @click="viewerOpened = false">關閉</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
	width: 100%;
	height: size(1215);
	@apply flex items-end justify-end;
	gap: size(46);
	padding-bottom: size(92);
	.left {
		.t1 {
			font-weight: 700;
			font-size: size(50);
			line-height: 160%;
			color: #FFCE88;
			padding-left: size(140);
		}
		.t2 {
			font-weight: 400;
			font-size: size(25);
			line-height: 200%;
			color: #FFFFFF;
			margin-top: size(30);
			padding-left: size(140);
		}
		.t3 {
			@apply flex items-center justify-center cursor-pointer transition-all;
			font-weight: 700;
			font-size: size(25);
			color: #00437D;
			width: size(984);
			height: size(485);
			background-image:url(@/section/s4/map.jpg);
			background-size: cover;
			margin-top: size(72);
			filter: drop-shadow(0px size(5) size(20) rgba(0, 0, 0, 0.3));
			&:hover {
				font-size: size(32);
			}
		}
	}
	.right{
			@apply flex items-end justify-end ;
			padding: size(10);
			width: size(803);
			height: size(1123);
			background-image:url(@/section/s4/1.jpg);
			background-size: cover;
			font-weight: 400;
			font-size: size(18);
			line-height: size(20);
			text-align: right;
			color: #FFFFFF;
			text-shadow: 0px size(2) size(2) rgba(0, 0, 0, 0.8);
			
		
	}
	.i1 {
		@apply absolute;
		bottom: size(979.32);
		left: -#{size(44)};
		width: size(520.92);
	}
}

.viewer {
	@apply transition-all duration-100 backdrop-blur-lg text-center;
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(255,255,255,0.9);
	left: 0;
	top: 0;
	display: none;

	&.active {
		display: block;
		z-index: 999999;
	}

	img {
		@apply relative;
		max-width: 100%;
		max-height: 100%;
		top: 50%;
		transform: translateY(-50%);
	}

	.close {
		position: absolute;
		z-index: 9999;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 18px;
		width: 80px;
		background-color: #000;
		color: #fff;
		border-radius: 50px;
		padding: 5px 10px;
		@apply cursor-pointer;
		&:hover {
			background-color: rgba(0,0,0,0.9);
		}
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
	height: sizem(578);
	@apply flex items-end justify-center;
	gap: 0;
	padding-bottom: sizem(15);
	.left {
		@apply relative z-10;
		padding-bottom: sizem(0);
		.t1 {
			font-size: sizem(20);
			line-height: 163%;
			padding-left: sizem(20);
		}
		.t2 {
			font-size: sizem(13);
			line-height: 187%;
			margin-top: sizem(12);
			padding-left: sizem(20);
		}
		.t3 {
			font-size: sizem(25);
			width: sizem(349);
			height: sizem(270);
			background-image:url(@/section/s4/map_m.jpg);
			margin-top: sizem(40);
			filter: drop-shadow(0px sizem(3) sizem(15) rgba(0, 0, 0, 0.3));
		}
	}
	.right{
		@apply absolute;
		right: 0;
		top: 0;
			padding: 0;
			width: sizem(63);
			height: sizem(577);
			background-image:url(@/section/s4/1_m.jpg);
		
	}
	.i1 {
		@apply absolute z-10;
		bottom: -#{sizem(26)};
		left: -#{sizem(30)};
		width: sizem(178);
	}

  }

.viewer {
	@apply overflow-x-scroll overflow-y-hidden;
	img {
		max-width: unset;
		width: auto;
		height: 90%;
		transform: translateY(0%);
		top:0;
	}
	.close {
		position: sticky;
		z-index: 9999;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 18px;
		width: 80px;
		background-color: #000;
		color: #fff;
		border-radius: 50px;
		padding: 5px 10px;
		margin-top: 10px;
		@apply cursor-pointer;
		&:hover {
			background-color: rgba(0,0,0,0.9);
		}
	}
}
}

</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const viewerOpened = ref(false);
</script>
