<template>
	<article class="s9 relative font-['Noto_Serif_TC']">
		<div class="left">
			<img src="@/section/s9/0.png" class="award" alt="" srcset="" v-if="!$isMobile()">
			<div class="t1" data-aos="fade-up" data-aos-delay="200" >三心建築 美好生活<br />
				春福機構×煙波大飯店</div>
			<div class="t2" data-aos="fade-up" data-aos-delay="400">「春福機構」傳承40年品牌，橫跨建築、飯店與商場<br />
				觸角與實績遍布全台，更橫跨馬來西亞，放眼國際高度<br />
				同時深化經營「三心建築」，成就每位居住者的安心支柱</div>
			<img src="@/section/s9/0.png" class="award" alt="" srcset="" v-if="$isMobile()">
		</div>
		<div class="right">
			<div class="imgs">
				<div class="img" v-for="item, i in itemsA">
					<img :src="item.img" alt="" srcset="">
					<p>{{ item.caption }}</p>
				</div>
			</div>
			<div class="imgs">
				<div class="img" v-for="item, i in itemsB">
					<img :src="item.img" alt="" srcset="">
					<p>{{ item.caption }}</p>
				</div>
			</div>
		</div>
		<div class="line"></div>
		<div class="line2" v-if="$isMobile()"></div>
		<p class="awards">AWARDS</p>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s9 {
	@apply flex items-center justify-end;
	width: 100%;
	height: size(1080);
	background-image: url(@/section/s3/bg.jpg);
	background-size: cover;
	gap: size(47.88);
	padding-right: size(47.25);
	padding-bottom: size(10);
	.left {
		padding-top: size(50);
		.award {
			width: size(554);
		}
		.t1{
			font-weight: 700;
			font-size: size(37);
			line-height: 140%;
			color: #803031;
			margin-top: -#{size(25)};
		}
		.t2{
			font-weight: 400;
			font-size: size(20);
			line-height: 150%;
			color: #000000;
			margin-top: size(25)
		}
	}
	.right {
		@apply flex flex-col;
		gap: size(69.88);
		.imgs {
			@apply flex justify-between;
			width: size(1150.75);
			.img {
				img {
					height: size(245);
				}
				p{
					font-weight: 700;
					font-size: size(15);
					line-height: 160%;
					color: #000000;
					margin-top: size(5);
				}
			}
		}
	}
	.line {
		@apply absolute z-10;
		right: 0;
		top: size(517.29);
		width: size(1810.25);
		height: size(2);
		background-color: #803031;
	}
	.awards {
		@apply absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		font-family: 'Tiro Devanagari Hindi';
		font-style: normal;
		font-weight: 400;
		font-size: size(150);
		line-height: 69%;
		text-align: center;
		letter-spacing: 0.1em;
		color: #FFFFFF;

	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

	.s9 {
	@apply flex-col justify-start;
	width: 100%;
	height: sizem(920);
	gap:0;
	padding-right: 0;
	padding-bottom: 0;
	padding-top: sizem(60) !important;
	.left {
		width: 100%;
		padding-top: 0;
		padding-left: sizem(32.5);
		padding-right: sizem(16);
		.award {
			width: 100%;
			margin-left: -#{sizem(15)};
			margin-bottom: -#{sizem(15)};
		}
		.t1{
			font-size: sizem(23);
			margin-top:0;
		}
		.t2{
			font-size: sizem(13);
			margin-top: sizem(15);
			margin-bottom: sizem(20)
		}
	}
	.right {
		@apply flex flex-col;
		gap: sizem(45.88);
		width: 100%;
		.imgs {
			@apply flex justify-between overflow-x-scroll;
			width: 100%;
			gap: sizem(8.5);
			padding: 0 sizem(9);
			
			.img {
				img {
					height: sizem(155);
				}
				p{
					font-size: sizem(12);
					margin-top: sizem(5);
				}
			}
		}
	}
	.line {
		@apply absolute z-10;
		right: 0;
		top: sizem(359.29);
		width: 100%;
		height: sizem(2);
		background-color: #803031;
	}
	.line2 {
		@apply absolute z-10;
		right: 0;
		top: sizem(585.29);
		width: 100%;
		height: sizem(2);
		background-color: #803031;
	}
	.awards {
		font-size: sizem(70);
		line-height: 69%;
	}
}
}

</style>
<script setup>
import { computed, getCurrentInstance, ref, } from 'vue';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const itemsA = [
	{
		caption: '雲端 新竹縣竹北市',
		img: new URL("../section/s9/1.jpg", import.meta.url).href
	},
	{
		caption: '大觀自若 新竹縣竹北市',
		img: new URL("../section/s9/2.jpg", import.meta.url).href
	},
	{
		caption: '若隱 新竹市東區',
		img: new URL("../section/s9/3.jpg", import.meta.url).href
	},
	{
		caption: '大觀無極 新竹縣竹北市',
		img: new URL("../section/s9/4.jpg", import.meta.url).href
	},
	{
		caption: '水容 新竹縣竹北市',
		img: new URL("../section/s9/5.jpg", import.meta.url).href
	},
]

const itemsB = [
	{
		caption: '漾煙波 台南市永康區',
		img: new URL("../section/s9/6.jpg", import.meta.url).href
	},
	{
		caption: '春上春福 台南市永康區',
		img: new URL("../section/s9/7.jpg", import.meta.url).href
	},
	{
		caption: '春福好好 台南市安南區',
		img: new URL("../section/s9/8.jpg", import.meta.url).href
	},
	{
		caption: '春福學學 台南市安南區',
		img: new URL("../section/s9/9.jpg", import.meta.url).href
	},
]
</script>
