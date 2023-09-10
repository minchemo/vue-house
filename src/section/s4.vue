<template>
	<article class="s4 relative">
		<div class="section">
			<div class="slider-box">
				<Splide :options="{
					arrows: false,
					pagination: false,
					autoplay: false,
				}">
					<SplideSlide class="slide" v-for="img, i in items[0]">
						<img :src="img.img" alt="" srcset="">
						<p class="left">{{ img.caption }}</p>
					</SplideSlide>
				</Splide>
			</div>
			<div class="title">
				<div class="t1">大直再進化<br />水岸宜居新盛世<svg class="group-1" width="82" height="38" viewBox="0 0 82 38"
						fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M82 -1.43945e-05L40.8057 37.2727L3.34789e-06 -2.15632e-05" stroke="#FF3EA1"
							stroke-width="2" />
					</svg>
				</div>
				<div class="t2">北車10分鐘<br />
					重劃╳水岸╳捷運╳公園╳商圈</div>
				<div class="t3">
					128公頃新北大都會公園與水岸原生美地親吻的地方，發現台北後花園，繁華與自然兩全其美，機場線、環狀線已一一兌現，接續而來的五泰輕軌將串聯起大台北運輸網絡，交通樞紐已然成形，引領新一波軌道經濟，新蘆特區新國際地標，「快樂王國」NO.2理享城風華落款。
				</div>
			</div>
		</div>
		<div class="sep-text">
			GOOD LIFE FUNCTIONS
		</div>
		<div class="section">
			<div class="title">
				<div class="t1">
					<img class="b" src="@/section/s4/b.png" alt="" srcset="">
				</div>
				<div class="t2">新蘆特區黃金半徑<br />
					雙學區╳3商圈</div>
				<div class="t3">
					凌雲路、成泰路雙商圈以及蘆洲最熱鬧的長榮路商圈，金融、超市、餐飲豐盈日常生活採買散步5-7分鐘。成洲國小、蘆洲國小、還有鷺江國中、蘆洲國中明星學區，走路上學放學免接送。還有國民運動中心就近為伴，是全家運動休閒好去處。
				</div>
			</div>
			<div class="slider-box">
				<div class="arrows">
					<img class="prev" @click="splide.splide.go('<')" src="@/section/prev.png" alt="" srcset="">
					<img class="next" @click="splide.splide.go('>')" src="@/section/next.png" alt="" srcset="">
				</div>
				<Splide ref="splide" :options="{
					arrows: false,
					pagination: false,
					type: 'loop',
					autoplay: true,
					interval: 4000,
					gap: 50
				}" @splide:move="move">
					<SplideSlide class="slide" v-for="img, i in items[1]">
						<img :src="img.img" alt="" srcset="">
						<p class="right">{{ img.caption }}</p>
					</SplideSlide>
				</Splide>
				<div class="pagi">
					<div class="item" @click="splide.splide.go(i)" v-for="img, i in items[1]" :class="{active: i == currentIdx}"></div>
				</div>
			</div>
		</div>
	</article>
</template>

<style lang="scss" scoped >
@import '@/assets/style/function.scss';

.s4 {
	width: 100%;
	height: size(1884);
	background-image: url(@/section/s4/bg.jpg);
	background-size: cover;
	padding-top: size(162);

	.section {
		@apply flex items-center justify-center; 
		gap: size(50);
		.slider-box {
			@apply relative;
			width: size(1059.13);
			.slide {
				@apply relative overflow-hidden;
				border-radius: size(100);
				img {
					width: size(1059.13);
				}
				p {
					@apply absolute;
					bottom: size(10);
					font-weight: 400;
					font-size: size(14);
					color: #FFFFFF;
					text-shadow: 0px size(2) size(4) rgba(0, 0, 0, 0.8);

					&.left {

						left: size(80);
					}
					&.right {
						right: size(80);

					}
				}
			}
			.arrows {
				@apply absolute z-20 flex items-center justify-between;
				width: 100%;
				padding: 0 size(30);
				bottom: 50%;
				transform: translateY(50%);
				img {
					@apply cursor-pointer;
					margin: unset;
				}
			}
			.pagi {
				@apply absolute flex;
				gap: size(13);
				bottom: -#{size(30)};
				left: size(100);
				.item {
					@apply cursor-pointer hover:opacity-100;
					border-radius: 100%;
					width: size(13);
					height: size(13);
					background-color: #B81B70;
					opacity: 0.5;
					
					&.active {
						opacity: 1;
					}
				}
			}
		}
		.title {
			.t1 {
				@apply relative;
				color: #C3398D;
				font-size: size(55);
				font-weight: 700;
				line-height: size(70);
			}
			.t2 {
				margin-top: size(125);
				color: black;
				font-size: size(30);
				font-weight: 500;
				letter-spacing: size(0.75);
			}
			.t3 {
				margin-top: size(19);
				width: size(421);
				color: black;
				font-size: size(16);
				font-weight: 400;
				line-height: size(30.40);
				text-align: justify;
			}
		}

		&:nth-child(1 of .section) {
			svg {
					@apply absolute left-0;
					bottom: -#{size(60)};
				}
		}
		&:nth-child(2 of .section) {
			.title {
				@apply relative;
				padding-top: size(200);
				.t1 {
					@apply absolute;
					right: 140%;
					top: -15%;
					.b {
						@apply absolute inset-0;
						width: size(610);
					}
				}
			}
		}
	}

	.sep-text {
		@apply relative;
		text-align: center;
		color: #FF3EA1;
		font-size: size(27);
		font-family: 'Noto Serif TC';
		font-weight: 700;
		letter-spacing: size(31.18);
		margin: size(50) 0;

		&::before {
			content: '';
			width: size(462);
			height: 1px;
			background-color: #FF3EA1;
			position: absolute;
			top: 50%;
			margin-top: -0.5px;
			left: 0;
		}

		&::after {
			content: '';
			width: size(478);
			height: 1px;
			background-color: #FF3EA1;
			position: absolute;
			top: 50%;
			margin-top: -0.5px;
			right: 0;
			
		}
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

 
.s4 {
	width: 100%;
	height: sizem(860);
	}
}

</style>
<script setup>
import { computed, getCurrentInstance, onMounted, ref, } from 'vue';
import inView from 'in-view';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());



const splide = ref();
const currentIdx = ref(0)
const move = (newIdx, prevIdx, destIdx) => {
	currentIdx.value = prevIdx
}

const items = [
	[
		{
			caption: '水岸公園實景',
			img: new URL("../section/s4/a1.jpg", import.meta.url).href
		},
	],
	[
		{
			caption: '成洲國小實景',
			img: new URL("../section/s4/b1.jpg", import.meta.url).href
		},
		{
			caption: '宏匯廣場實景',
			img: new URL("../section/s4/b2.jpg", import.meta.url).href
		},
		{
			caption: '家樂福實景',
			img: new URL("../section/s4/b3.jpg", import.meta.url).href
		},
		{
			caption: '徐匯廣場實景',
			img: new URL("../section/s4/b4.jpg", import.meta.url).href
		},
		{
			caption: '全聯福利中心實景',
			img: new URL("../section/s4/b5.jpg", import.meta.url).href
		},]
]

onMounted(() => {

})
</script>
