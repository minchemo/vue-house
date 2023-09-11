<template>
	<article class="s6 relative">
		<div class="map">
			<img class="train" src="@/section/s6/mrt.png" alt="" srcset="">
			<img class="rings" src="@/section/s6/ring.png" alt="" srcset="">
			<img class="spotA" src="@/section/s6/1.png" alt="" srcset="">
			<img class="spotB" src="@/section/s6/logo.png" alt="" srcset="">
			<img class="spotC" src="@/section/s6/2.png" alt="" srcset="">
			<img class="spotD" src="@/section/s6/3.png" alt="" srcset="">
		</div>
		<div class="intro">
			<div class="sep-text">
				GOOD PUBLIC TRANSPORT
			</div>
			<div class="t1">
				蘆洲下一站 到站就到家
				<svg class="group-1" width="82" height="38" viewBox="0 0 82 38" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M82 -1.43945e-05L40.8057 37.2727L3.34789e-06 -2.15632e-05" stroke="#FF3EA1" stroke-width="2" />
				</svg>
			</div>
			<div class="t2">新北重磅軌道建設，五泰輕軌增值列車啟動</div>
			<div class="t3">
				買房跟著捷運走，財富一定有！洲子洋將迎來連貫新北市最重要的交通骨幹五泰輕軌，今年4月已正式拍板核定，預計6年內完工通車，未來不僅銜接含金量最高的板南線，打造交通燙金區，同時串聯捷運中和新蘆線、捷運北環段、機場捷運線。「理享城」散步3分鐘就到捷運F06站，5分鐘蘆洲捷運一站到家，不管出國門或是連結松江南京、士林石牌、台北車站，都能快速悠遊。
			</div>
		</div>
		<div class="slider-box">
			<!-- <div class="arrows">
				<img class="prev" @click="splide.splide.go('<')" src="@/section/prev.png" alt="" srcset="">
				<img class="next" @click="splide.splide.go('>')" src="@/section/next.png" alt="" srcset="">
			</div> -->
			<Splide ref="splide" :options="{
				arrows: false,
				pagination: false,
				// type: 'loop',
				drag: false,
				autoplay: false,
				interval: 4000,
				perPage: 3,
				gap: 0
			}" @splide:move="move">
				<SplideSlide class="slide" v-for="img, i in items">
					<img :src="img.img" alt="" srcset="">
					<p class="right">{{ img.caption }}</p>
					<div class="des">{{ img.img_des }}</div>
				</SplideSlide>
			</Splide>
			<!-- <div class="pagi">
				<div class="item" @click="splide.splide.go(i)" v-for="img, i in items" :class="{ active: i == currentIdx }">
				</div>
			</div> -->
		</div>
		<div class="tip">
			<div class="t1">3國道╳4特快，全台移動輕鬆縱橫</div>
			<div class="t2">
				沿著成泰路，出門轉個彎直上台64快速道路，瞬接國道1號、汐五高、五楊高，配合台65、新北環快，台1甲快速道路，來北往東西行都暢快無比，新北最便利兩條快速道路左右候駕，高效往來大台北各區，通行全台無往不利。</div>
		</div>
	</article>
</template>

<style lang="scss" scoped >
@import '@/assets/style/function.scss';

.s6 {
	width: 100%;
	height: size(1334);
	padding: 0 size(219);
	padding-top: size(145);

	.map {
		@apply absolute;
		left: 0;
		top: 0;

		img {
			@apply absolute;
		}

		.train {
			width: size(858);
			left: -#{size(273)};
			top: size(162.43);
		}

		.rings {
			top: size(18);
			left: size(111.5);
			width: size(848);
		}

		.spotA {
			top: size(53.39);
			left: size(571.56);
			width: size(120.5);
		}

		.spotB {
			top: size(220.77);
			left: size(747.55);
			width: size(157.8);
		}

		.spotC {
			top: size(409.2);
			left: size(809.72);
			width: size(120.5);
		}

		.spotD {
			top: size(560.332);
			left: size(800.16);
			width: size(120.5);
		}
	}

	.intro {
		@apply flex flex-col items-end;

		.t1 {
			@apply relative;
			color: #C3398D;
			font-size: size(55);
			font-weight: 700;
			line-height: size(70);

			svg {
				@apply absolute left-0;
				width: size(82);
				bottom: -#{size(80)};
			}
		}

		.t2 {
			margin-top: size(100);
			color: black;
			font-size: size(30);
			font-weight: 500;
			letter-spacing: size(0.75);
			margin-right: -#{size(20)};
		}

		.t3 {
			margin-top: size(19);
			width: size(563);
			color: black;
			font-size: size(16);
			font-weight: 400;
			line-height: size(30.40);
			text-align: justify;
		}

		.sep-text {
			@apply relative;
			color: #FF3EA1;
			font-size: size(27);
			font-family: 'Noto Serif TC';
			font-weight: 700;
			letter-spacing: size(27.675);
			margin-right: -#{size(20)};
			margin-bottom: size(30)
		}
	}

	.slider-box {
		@apply relative;
		width: 100%;
		height: size(314.71);
		margin-top: size(60);

		.slide {
			@apply relative overflow-hidden;
			padding: 0 size(12);

			&:first-child {
				padding-left: 0;
			}

			&:last-child {
				padding-right: 0;
			}

			img {
				width: size(487.23);
				height: size(314.71);
			}

			p {
				@apply absolute;
				bottom: size(7);
				font-weight: 400;
				font-size: size(14);
				color: #FFFFFF;
				text-shadow: 0px size(2) size(4) rgba(0, 0, 0, 0.8);

				&.left {
					left: size(10);
				}

				&.right {
					right: size(20);

				}
			}

		}
	}

	.tip {
		@apply flex items-center;
		margin-top: size(37);
		background-color: #B81B70;
		width: 100%;

		.t1 {
			padding: size(19) size(56);
			background: #B81B70;
			color: #fff;
			font-size: size(30);
			font-weight: 700;
			letter-spacing: size(0.75);
			flex-basis: size(579);
			white-space: nowrap;
			text-align: center;
		}

		.t2 {
			flex: 1;
			color: #000;
			font-size: size(16);
			font-weight: 400;
			line-height: 190%;
			border: 1px solid #B81B70;
			padding: size(16) size(18);
			background-color: #fff;
		}
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


	.s6 {
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
	{
		caption: '捷運站實景',
		img: new URL("../section/s6/1.jpg", import.meta.url).href
	},
	{
		caption: '五泰輕軌',
		img: new URL("../section/s6/2.jpg", import.meta.url).href
	},
	{
		caption: '國道一號',
		img: new URL("../section/s6/3.jpg", import.meta.url).href
	},
]

onMounted(() => {

})
</script>
