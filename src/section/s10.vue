<template>
	<article class="s10 relative font-['Noto_Serif_TC']">
		<img v-if="!$isMobile()" class="bg" src="@/section/s10/bg.png" alt="" srcset="">
		<img v-else class="bg" src="@/section/s10/bgm.png" alt="" srcset="">
		<div class="title">
			<div class="t1" data-aos="fade-up" data-aos-delay="200">建築巨擘 大師名鑄</div>
			<div class="t2" data-aos="fade-up" data-aos-delay="400">序寫永康新品味</div>
		</div>
		<template v-if="!$isMobile()">
			<img class="info a" src="@/section/s10/1.png" alt="" srcset="" @mouseover="hoverItem = 1"
				@mouseout="hoverItem = 0" @click="activeItem = 1">
			<img class="info b" src="@/section/s10/2.png" alt="" srcset="" @mouseover="hoverItem = 2"
				@mouseout="hoverItem = 0" @click="activeItem = 2">
			<img class="info c" src="@/section/s10/3.png" alt="" srcset="" @mouseover="hoverItem = 3"
				@mouseout="hoverItem = 0" @click="activeItem = 3">
		</template>
		<template v-else>
			<img class="info a" src="@/section/s10/1m.png" alt="" srcset="" @mouseover="hoverItem = 1"
				@mouseout="hoverItem = 0" @click="activeItem = 1">
			<img class="info b" src="@/section/s10/2m.png" alt="" srcset="" @mouseover="hoverItem = 2"
				@mouseout="hoverItem = 0" @click="activeItem = 2">
			<img class="info c" src="@/section/s10/3m.png" alt="" srcset="" @mouseover="hoverItem = 3"
				@mouseout="hoverItem = 0" @click="activeItem = 3">
		</template>
		<div class="btns">
			<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" v-for="i in 3"
				@mouseover="hoverItem = i" @mouseout="hoverItem = 0" @click="activeItem = i">
				<path v-show="hoverItem == i || activeItem == i" class="st0"
					d="M55,30c0,13.8-11.2,25-25,25S5,43.8,5,30S16.2,5,30,5S55,16.2,55,30z" />
				<path fill="#803031"
					d="M52.5,30C52.5,17.6,42.4,7.5,30,7.5S7.5,17.6,7.5,30c0,12.4,10.1,22.5,22.5,22.5S52.5,42.4,52.5,30z" />
				<path fill="#FFF"
					d="M34.4,23.5v13.6L46,29.9L34.4,23.5z M19,23.7l-0.3-0.2c1.3-1.7,2.4-3.5,2.8-5.7c2.2,0.5,1.1,0.9,0.6,1C21.5,20.7,20.2,22.5,19,23.7z M20.6,20.6c1.5,0.5,1.5,0.5,0.8,0.9v7.4c0,0.5-0.8,0.5-0.8,0V20.6z M29.2,24.9c1.2,0.8,0.9,1,0.7,1h-3.8V29c0,0.5-0.8,0.5-0.8,0v-8.6h-1.1c-0.5,1.1-1.1,2-1.9,2.9L22.1,23c1.1-1.6,1.9-3.3,2.2-5.2c2.1,0.5,1.2,0.8,0.6,1c-0.2,0.5-0.3,0.9-0.5,1.2h4.4l0.7-0.7c1.4,0.9,1,1.1,0.8,1.1h-4.2v2.4h2.3l0.7-0.7c1.3,0.9,0.9,1,0.7,1h-3.8v2.4h2.3L29.2,24.9zM19.4,41.2c0-4.6,0-4.9-0.1-5.2l0.9,0.5H23l0.4-0.5c1.4,0.7,0.7,1,0.4,1.2v3.9c0,0.5-0.7,0.5-0.7,0v-0.4h-2.9v0.6C20.1,41.7,19.4,41.7,19.4,41.2z M23,40.3v-3.5h-2.9v3.5H23z M21.5,35c0-3.9,0-4.2-0.1-4.5l0.9,0.5h4.4l0.4-0.5c1.4,0.8,0.7,1,0.4,1.2v3.2c0,0.5-0.7,0.5-0.7,0v-0.3h-4.5V35C22.2,35.5,21.5,35.5,21.5,35z M26.8,34.2v-2.9h-4.5v2.9H26.8zM25.4,41.2c0-4.6,0-4.8-0.1-5.2l0.9,0.5l2.9,0l0.4-0.5c1.4,0.8,0.7,1,0.4,1.2l0,3.9c0,0.5-0.7,0.5-0.7,0v-0.4h-3.1v0.6C26.2,41.7,25.4,41.7,25.4,41.2z M29.2,40.3v-3.5h-3.1v3.5H29.2z" />
			</svg>
		</div>

	</article>
	<div class="popup" :class="{ active: activeItem > 0 }">
		<svg v-if="!$isMobile()" class="bg" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_b_504_2753)">
				<path d="M178.07 945.13V229" stroke="white" stroke-miterlimit="10" />
				<path d="M222.02 177.93H1846.07" stroke="white" stroke-miterlimit="10" />
				<path d="M69.01 876.99H1693.05" stroke="white" stroke-miterlimit="10" />
				<path d="M279.03 901H1795.07" stroke="white" stroke-miterlimit="10" />
				<path d="M150.02 159.92H1774.06" stroke="white" stroke-miterlimit="10" />
				<path
					d="M178.64 232.779C214.262 232.779 243.14 203.902 243.14 168.279C243.14 132.657 214.262 103.779 178.64 103.779C143.018 103.779 114.14 132.657 114.14 168.279C114.14 203.902 143.018 232.779 178.64 232.779Z"
					fill="white" stroke="#803031" stroke-miterlimit="10" />
			</g>
			<defs>
				<filter id="filter0_b_504_2753" x="-4" y="-4" width="1928" height="1088" filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
					<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_504_2753" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_504_2753" result="shape" />
				</filter>
			</defs>
		</svg>
		<svg v-else viewBox="0 0 375 1001" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_b_504_3076)">
				<path d="M68.0698 825.13V109" stroke="white" stroke-miterlimit="10" />
				<path d="M46.1655 92.9297H358.07" stroke="white" stroke-miterlimit="10" />
				<path d="M46.1655 778.93H358.07" stroke="white" stroke-miterlimit="10" />
				<path d="M30.02 79.9199H341.922" stroke="white" stroke-miterlimit="10" />
				<path d="M30.02 765.92H341.922" stroke="white" stroke-miterlimit="10" />
				<path class="absolute z-20"
					d="M69.01 122C95.3043 122 116.62 100.684 116.62 74.3899C116.62 48.0956 95.3043 26.7798 69.01 26.7798C42.7157 26.7798 21.3999 48.0956 21.3999 74.3899C21.3999 100.684 42.7157 122 69.01 122Z"
					fill="white" stroke="#803031" stroke-miterlimit="10" />
			</g>
			<defs>
				<filter id="filter0_b_504_3076" x="-4" y="-4" width="383" height="1009" filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
					<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_504_3076" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_504_3076" result="shape" />
				</filter>
			</defs>
		</svg>

		<svg class="close" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" @click="activeItem = 0">
			<line x1="10.3536" y1="9.99703" x2="50.3536" y2="49.997" stroke="white" />
			<line y1="-0.5" x2="56.5685" y2="-0.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 50.0001 10.3506)"
				stroke="white" />
			<rect x="0.5" y="0.850586" width="59" height="59" stroke="white" />
		</svg>
		<div class="main" v-if="activeItem > 0">
			<div v-if="!$isMobile()" class="head font-['Noto_Serif_TC']">業績<br>作品</div>
			<div v-else class="head2 font-['Noto_Serif_TC']">業績<br>作品</div>
			<div class="t1">{{ items[activeItem - 1].title }}</div>
			<ul class="case">
				<li v-for="item in items[activeItem - 1].works">{{ item.caption }}</li>
			</ul>

			<Splide class="slide-box" ref="splide" :key="activeItem" :options="{
				arrows: false,
				pagination: false,
				type: 'loop',
				autoplay: true,
				interval: 4000,
			}" @splide:move="move">
				<SplideSlide class="slide" v-for="img, i in items[activeItem - 1].works">
					<img :src="img.img" alt="" srcset="">
					<p>{{ img.caption }}</p>
				</SplideSlide>
			</Splide>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.popup {
	@apply fixed z-[9999] duration-500 will-change-auto;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	backdrop-filter: blur(size(5));
	transform: translateY(100%);
	&.active {
		transform:  translateY(0%);
	}
	.bg {
		@apply absolute;
		width: 100%;
		left: 0;
		top: 0;
	}
	.close {
		@apply absolute cursor-pointer z-20;
		width: size(60);
		height: size(60);
		right: size(30);
		top: size(30);
	}
	.main {
		@apply absolute z-20;
		left: 0;
		top: 0;
		.head {
			@apply absolute;
			left: size(140.96);
			top: size(119.42);
			font-weight: 700;
			font-size: size(36);
			line-height: 130%;
			text-align: center;
			letter-spacing: 0.03em;
			color: #803031;
			white-space: nowrap;
		}
		.t1 {
			@apply absolute;
			white-space: nowrap;
			left: size(90);
			top: size(580);
			font-weight: 900;
			font-size: size(70);
			line-height: 110%;
			color: #FFFFFF;
			opacity: 0.4;
			writing-mode: vertical-rl;
		}
		.case {
			@apply absolute font-['Noto_Serif_TC'] whitespace-nowrap flex flex-col;
			color: #fff;
			top: size(257);
			left: size(169.07);
			gap: size(28);

			li {
				@apply relative;
				font-weight: 400;
				font-size: size(20);
				padding-left: size(40);
				&::before {
					@apply absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
					content: '';
					width: size(16);
					height: size(16);
					background-color: #fff;
					border-radius: 100%;
				}
			}
		}
		.slide-box {
			@apply absolute font-['Noto_Serif_TC'];
			left: size(435);
			top: size(122);
			width: size(1280);
			.slide {
				@apply relative;
				img {
					width: size(1280);
				}
				p {
					@apply absolute;
					right: size(10);
					bottom: size(10);
					font-weight: 400;
					font-size: size(15);
					line-height: 160%;
					color: #FFFFFF;
					text-shadow: 0px size(2) size(4) rgba(0, 0, 0, 0.8);
				}
			}
		}
	}
}

.s10 {
	width: 100%;
	height: size(1052.23);
	background-image: url(@/section/s3/bg.jpg);
	background-size: cover;

	.bg {
		@apply absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
	
	.title {
		@apply relative flex flex-col items-center;
		gap: size(45);
		top: size(113.35);
		.t1 {
			font-weight: 700;
			font-size: size(57);
			color: #803031;
		}
		.t2 {
			width: size(442.58);
			font-weight: 700;
			font-size: size(30);
			text-align: center;
			color: #FFFFFF;
			background: linear-gradient(90deg, rgba(128, 48, 49, 0) 0%, #803031 25%, #803031 75%, rgba(128, 48, 49, 0) 100%);
		}
	}

	.info {
		@apply absolute z-10 cursor-pointer;
		&.a {
			width: size(579);
			top: size(94.15);
			left: size(134.17);
		}
		&.b {
			width: size(368);
			top: size(380.65);
			left: size(739.09);
		}
		&.c {
			width: size(573);
			top: -#{size(29.36)};
			left: size(1188.03);
		}
	}

	.btns {
		@apply absolute z-20;
		top: 0;
		left: 0;
		svg {
			@apply cursor-pointer;
			&:nth-child(1) {
				left: size(439);
				top: size(813.86);
			}

			&:nth-child(2) {
				left: size(1072.6);
				top: size(847.61);
			}

			&:nth-child(3) {
				left: size(1479);
				top: size(551.42);
			}
		@apply absolute;
			width: size(67.49);
			height: size(67.49);
		
			.st0 {
						fill: none;
						stroke: #803031;
						stroke-width: 2;
						stroke-dasharray: 158;
						transform-origin: 50%;
						stroke-dashoffset: 158;
						animation: letterDraw 3s linear infinite;
					}

					@keyframes letterDraw {
						48% {
							stroke-dashoffset: 0;
							transform: rotate(360deg);
						}

						52% {
							stroke-dashoffset: 0;
							transform: rotate(360deg);
						}

						100% {
							stroke-dashoffset: 158;
							transform: rotate(1080deg);
						}
					}
		}
	}

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.popup {
	backdrop-filter: blur(sizem(5));
	.bg {
		width: sizem(336.67);
	}
	.close {
		width: sizem(30);
		height: sizem(30);
		right: sizem(15);
		top: sizem(15);
	}
	.main {
		@apply absolute z-20;
		left: 0;
		top: 0;
		.head2 {
			@apply absolute z-30 flex items-center justify-center;
			left: sizem(21.4);
			top: sizem(26.78);
			font-size: sizem(23);
			width: sizem(95.22);
			height: sizem(95.22);
			border-radius: 100%;
			background: #fff;
			font-weight: 700;
			font-size: sizem(23);
			line-height: 130%;
			text-align: center;
			letter-spacing: 0.03em;
			color: #803031;
			border: sizem(1) solid #803031
			
		}
		.t1 {
			left: sizem(147.8);
			top: sizem(34.7);
			font-size: sizem(37.25);
			line-height: 110%;
			color: #FFFFFF;
			opacity: 0.4;
			writing-mode: horizontal-tb;
		}
		.case {
			@apply absolute font-['Noto_Serif_TC'] whitespace-nowrap flex flex-col;
			color: #fff;
			top: sizem(373);
			left: sizem(60);
			gap: sizem(15);

			li {
				font-size: sizem(14);
				padding-left: sizem(40);
				&::before {
					width: sizem(16);
					height: sizem(16);
				}
			}
		}
		.slide-box {
			@apply absolute font-['Noto_Serif_TC'];
			left: 0;
			top: sizem(113.54);
			width: sizem(375);
			.slide {
				@apply relative;
				img {
			width: sizem(375);
				}
				p {
					right: sizem(10);
					bottom: sizem(5);
					font-size: sizem(12);
					text-shadow: 0px sizem(2) sizem(4) rgba(0, 0, 0, 0.8);
				}
			}
		}
	}
}

.s10 {
	height: sizem(1253);

	
	.title {
		gap: sizem(15);
		top: sizem(61);
		.t1 {
			font-size: sizem(29);
		}
		.t2 {
			width: sizem(310);
			font-size: sizem(16);
		}
	}

	.info {
		@apply absolute z-10 cursor-pointer;
		&.a {
			width: sizem(316);
			top: sizem(156.57);
			left: sizem(25.5);
		}
		&.b {
			width: sizem(209);
			top: sizem(497.31);
			left: sizem(56.74);
		}
		&.c {
			width: sizem(312.5);
			top: sizem(786);
			left: sizem(36);
		}
	}

	.btns {
		@apply absolute z-20;
		top: 0;
		left: 0;
		svg {
			@apply cursor-pointer;
			&:nth-child(1) {
				left: sizem(188.66);
				top: sizem(452.31);
			}

			&:nth-child(2) {
				left: sizem(245.74);
				top: sizem(726);
			}

			&:nth-child(3) {
				left: sizem(192.55);
				top: sizem(1083);
			}
		@apply absolute;
			width: sizem(40);
			height: sizem(40);
		}
	}

}
}

</style>
<script setup>
import { computed, getCurrentInstance, ref, } from 'vue';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const hoverItem = ref(0)
const activeItem = ref(0)

const items = [
	{
		title: '建築規劃',
		cover: isMobile ? new URL("../section/s10/1m.png", import.meta.url).href : new URL("../section/s10/1.png", import.meta.url).href,
		works: [
			{
				caption: '藏美建設 表參道',
				img: new URL("../section/s10/1/1.jpg", import.meta.url).href,
			},
			{
				caption: '巴巴事業 文元及第',
				img: new URL("../section/s10/1/2.jpg", import.meta.url).href,
			},
			{
				caption: '仁發建築 總圖匯',
				img: new URL("../section/s10/1/3.jpg", import.meta.url).href,
			},
			{
				caption: '三發地產 夢世代',
				img: new URL("../section/s10/1/4.jpg", import.meta.url).href,
			},
		]
	},
	{
		title: '結構工程',
		cover: isMobile ? new URL("../section/s10/2m.png", import.meta.url).href : new URL("../section/s10/2.png", import.meta.url).href,
		works: [
			{
				caption: '鼎宇森之丘',
				img: new URL("../section/s10/2/0.jpg", import.meta.url).href,
			},
			{
				caption: '春福年年',
				img: new URL("../section/s10/2/1.jpg", import.meta.url).href,
			},
			{
				caption: '春福御邸',
				img: new URL("../section/s10/2/2.jpg", import.meta.url).href,
			},
			{
				caption: '美術高峰會',
				img: new URL("../section/s10/2/3.jpg", import.meta.url).href,
			},
			{
				caption: '悅讀天悅',
				img: new URL("../section/s10/2/4.jpg", import.meta.url).href,
			},
		]
	},
	{
		title: '公設美學',
		cover: isMobile ? new URL("../section/s10/3m.png", import.meta.url).href : new URL("../section/s10/3.png", import.meta.url).href,
		works: [
			{
				caption: '埔里 漸湛居然',
				img: new URL("../section/s10/3/1.jpg", import.meta.url).href,
			},
			{
				caption: '總太建設 2020',
				img: new URL("../section/s10/3/2.jpg", import.meta.url).href,
			},
			{
				caption: '總太建設 織築',
				img: new URL("../section/s10/3/3.jpg", import.meta.url).href,
			},
			{
				caption: '詠丞建設 悅品川',
				img: new URL("../section/s10/3/4.jpg", import.meta.url).href,
			},
		]
	},
]
</script>
