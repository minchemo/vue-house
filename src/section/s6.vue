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
			<div class="sep-text" data-aos="flip-left" data-aos-delay="100">
				GOOD PUBLIC TRANSPORT
			</div>
			<div class="t1" data-aos="fade-up" data-aos-delay="0">
				蘆洲下一站 到站就到家
				<svg class="group-1" width="82" height="38" viewBox="0 0 82 38" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M82 -1.43945e-05L40.8057 37.2727L3.34789e-06 -2.15632e-05" stroke="#FF3EA1" stroke-width="2" />
				</svg>
			</div>
			<div class="t2" data-aos="fade-up" data-aos-delay="100">新北重磅軌道建設，五泰輕軌增值列車啟動</div>
			<div class="t3" data-aos="fade-up" data-aos-delay="200">
				買房跟著捷運走，財富一定有！洲子洋將迎來連貫新北市最重要的交通骨幹五泰輕軌，今年4月已正式拍板核定，預計6年內完工通車，未來不僅銜接含金量最高的板南線，打造交通燙金區，同時串聯捷運中和新蘆線、捷運北環段、機場捷運線。「理享城」散步3分鐘就到捷運F06站，5分鐘蘆洲捷運一站到家，不管出國門或是連結松江南京、士林石牌、台北車站，都能快速悠遊。
			</div>
		</div>
		<div class="slider-box">
			<div class="arrows" v-if="$isMobile()">
				<img class="prev" @click="splide.splide.go('<')" src="@/section/prev.svg" alt="" srcset="">
				<img class="next" @click="splide.splide.go('>')" src="@/section/next.svg" alt="" srcset="">
			</div>
			<Splide ref="splide" :options="{
				arrows: false,
				pagination: false,
				type: $isMobile() ? 'loop' : null,
				drag: $isMobile() ? true : false,
				autoplay: $isMobile() ? true : false,
				interval: 4000,
				perPage: $isMobile() ? 1 : 3,
				gap: 0
			}" @splide:move="move">
				<SplideSlide class="slide" v-for="img, i in items" data-aos="fade" :data-aos-delay="(i * 100) + 200">
					<img :src="img.img" alt="" srcset="">
					<p class="right">{{ img.caption }}</p>
					<div class="des">{{ img.img_des }}</div>
				</SplideSlide>
			</Splide>
			<div class="pagi" v-if="$isMobile()">
				<div class="item" @click="splide.splide.go(i)" v-for="img, i in items" :class="{ active: i == currentIdx }">
				</div>
			</div>
		</div>
		<div class="tip" data-aos="fade-up" data-aos-delay="200">
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

.arrows {
	@apply absolute z-20 flex items-center justify-between;
	width: 100%;
	padding: 0 size(30);
	bottom: 50%;
	transform: translateY(50%);

	img {
		@apply cursor-pointer;
		margin: unset;
		width: size(21);
	}
}

.pagi {
	@apply absolute flex justify-center;
	gap: size(13);
	bottom: -#{size(30)};
	left: 0;
	width: 100%;

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
	height: sizem(1336);
	padding: 0 sizem(30);
	padding-top: 0;

	.map {
		@apply absolute; 
		left: 0;
		top: sizem(350);

		img {
			@apply absolute;
		}

		.train {
			width: sizem(400);
			left: -#{sizem(230)};
			top: sizem(102.7);
		}

		.rings {
			top: 0;
			left: -#{sizem(150)};
			width: sizem(481);
		}

		.spotA {
			top: sizem(20);
			left: sizem(120);
			width: sizem(94);
		}

		.spotB {
			top: sizem(110);
			left: sizem(210);
			width: sizem(110);
		}

		.spotC {
			top: sizem(220);
			left: sizem(250);
			width: sizem(94);
		}

		.spotD {
			top: sizem(305);
			left: sizem(240);
			width: sizem(94);
		}
	}

	.intro {
		@apply flex flex-col items-start;

		.t1 {
				@apply relative;
				color: #C3398D;
				font-size: sizem(25);
				line-height: sizem(31);
				width: 100%;

				svg {
					@apply absolute left-auto right-0;
					width: sizem(50.2);
					bottom:0;
				}
			}

		.t2 {
				margin-top: sizem(25);
				font-size: sizem(15);
				letter-spacing: sizem(0.38);
		}

		.t3 {
				margin-top: sizem(11);
				width: 100%;
				color: black;
				font-size: sizem(13);
				font-weight: 400;
				line-height: sizem(24.7);
				text-align: justify;
		}

		.sep-text {
			@apply relative;
			font-size: sizem(13);
			font-family: 'Noto Serif TC';
			letter-spacing: sizem(7.1);
			margin: sizem(30) 0;
			margin-bottom: sizem(30);
			text-align: center;
			white-space: nowrap;
			margin-left: -#{sizem(30)};
			width: sizem(375);
		}
	}

	.slider-box {
		@apply relative;
		width: 100%;
		height: sizem(203.4);
		margin-top: sizem(450);

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
				width: 100%;
				height: 100%;
			}

			p {
					@apply absolute;
					bottom: sizem(5);
					font-weight: 400;
					font-size: sizem(12);
					color: #FFFFFF;
					text-shadow: 0px sizem(2) sizem(4) rgba(0, 0, 0, 0.8);

					&.left {
						left: sizem(10);
					}
					&.right {
						right: sizem(10);
					}
				}

		}
		.arrows {
				@apply absolute z-20 flex items-center justify-between;
				width: 100%;
				padding: 0 sizem(10);
				bottom: 50%;
				transform: translateY(50%);
				img {
					@apply cursor-pointer;
					margin: unset;
					width: sizem(8.6);
				}
			}

			.pagi {
				@apply absolute flex w-full justify-center;
				gap: sizem(6);
				bottom: -#{sizem(20)};
				left:0;
				.item {
					@apply cursor-pointer hover:opacity-100;
					border-radius: 100%;
					width: sizem(6.67);
					height: sizem(6.67);
					background-color: #B81B70;
					opacity: 0.5;
					
					&.active {
						opacity: 1;
					}
				}
			}
	}

	.tip {
		@apply flex flex-col items-center justify-center;
		margin-top: sizem(56);
		background-color: #B81B70;
		width: 100%;

		.t1 {
			padding: sizem(8) 0;
			font-size: sizem(15);
			font-weight: 700;
			letter-spacing: sizem(0.75);
			flex-basis: auto;
			white-space: nowrap;
			text-align: center;
		}

		.t2 {
			flex: 1;
			color: #000;
			font-size: sizem(13);
			font-weight: 400;
			line-height: sizem(24.7);
			border: 1px solid #B81B70;
			padding: sizem(10) sizem(16);
			background-color: #fff;
		}
	}
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
		img: isMobile.value ? new URL("../section/s6/1m.jpg", import.meta.url).href : new URL("../section/s6/1.jpg", import.meta.url).href
	},
	{
		caption: '五泰輕軌',
		img: isMobile.value ? new URL("../section/s6/2m.jpg", import.meta.url).href : new URL("../section/s6/2.jpg", import.meta.url).href
	},
	{
		caption: '國道一號',
		img: isMobile.value ? new URL("../section/s6/3m.jpg", import.meta.url).href : new URL("../section/s6/3.jpg", import.meta.url).href
	},
]

onMounted(() => {

})
</script>
