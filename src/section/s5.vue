<template>
	<article class="s5 relative">
		<div class="sep-text" data-aos="flip-left" data-aos-delay="0">
			GREEN SPACES OF CITY
		</div>
		<div class="intro">
			<div class="l">
				<div class="t1" data-aos="fade-up" data-aos-delay="0">
					萬坪公園城 水岸生活宅
					<svg class="group-1" width="82" height="38" viewBox="0 0 82 38" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M82 -1.43945e-05L40.8057 37.2727L3.34789e-06 -2.15632e-05" stroke="#FF3EA1"
							stroke-width="2" />
					</svg>
				</div>
				<div class="t2" data-aos="fade-up" data-aos-delay="100">升等樹海第一排 住進三座公園裡</div>
				<div class="t3" data-aos="fade-up" data-aos-delay="200">
					「理享城」基地前迎約7600坪體健公園和1200坪成德公園，左擁右抱424公頃相當於16座大安森林公園的新北大都會公園，大台北沒有一區比這裡更活躍。不汲汲營營基地面積最大使用率，把60%的土地留給大樹和園藝綠化，三大公園環繞享重劃區最高綠覆，以及斥資1.2億打造的10公里樂活水岸綠廊自行車道，「理享城」把住宅融入健康生態，以「公園綠軸，親水藍軸」交融周邊環境打造萬坪生態社區，創造四季更舒適宜居微氣候住宅環境。
				</div>
			</div>
			<div class="r">
				<div class="b" @click="splide.splide.go(i)" v-for="item, i in items" :class="{ active: i == currentIdx }">
					<div class="t1">{{ item.b1 }}<span>{{ item.b1_unit }}</span></div>
					<div class="t2">{{ item.b2 }}</div>
					<div class="arrow" v-if="i == currentIdx">
						<img    src="@/section/s5/arrow.png" alt="" srcset="">
					</div>
				</div>
			</div>
		</div>
		<div class="slider-box">
			<div class="arrows">
				<img    class="prev" @click="splide.splide.go('<')" src="@/section/prev.svg" alt="" srcset="">
				<img    class="next" @click="splide.splide.go('>')" src="@/section/next.svg" alt="" srcset="">
			</div>
			<Splide ref="splide" :options="{
				arrows: false,
				pagination: false,
				type: 'loop',
				autoplay: false,
				interval: 4000,
				gap: 50
			}" @splide:move="move">
				<SplideSlide class="slide" v-for="img, i in items">
					<img    :src="img.img" alt="" srcset="">
					<p class="right">{{ img.caption }}</p>
					<div class="des">{{ img.img_des }}</div>
				</SplideSlide>
			</Splide>
			<div class="pagi">
				<div class="item" @click="splide.splide.go(i)" v-for="img, i in items" :class="{ active: i == currentIdx }">
				</div>
			</div>
		</div>
		<Anim class="bike" />
		<!-- <img class="bike" src="@/section/s5/bike.png" alt="" srcset=""> -->
	</article>
</template>

<style lang="scss" >
@import '@/assets/style/function.scss';

.s5 {
	width: 100%;
	height: size(1470);
	padding: 0 size(219);
	z-index: 10;

	.sep-text {
		@apply relative;
		text-align: left;
		color: #FF3EA1;
		font-size: size(27);
		font-family: 'Noto Serif TC';
		font-weight: 700;
		letter-spacing: size(31.18);
		margin: size(50) 0;
		margin-bottom: size(90)
	}

	.bike {
		@apply absolute;
		width: size(550);
		right: size(175);
		top: -#{size(180)};
	}

	.intro {
		@apply flex items-end;
		gap: size(125);
		margin-bottom: size(30);

		.l {
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
		}

		.r {
			@apply flex items-center;
			gap: size(40);
			padding-bottom: size(50);

			.b {
				@apply relative flex flex-col items-center justify-center;
				width: size(226);
				height: size(226);
				border: #FF3EA1 1px solid;
				border-radius: 100%;
				color: #FF3EA1;

				.t1 {
					font-size: size(65.534);
					font-weight: 400;
					border-bottom: 1px solid #FF3EA1;

					span {
						font-size: size(38.835);
						font-weight: 500;
					}
				}

				.t2 {
					font-size: size(24);
					font-weight: 700;
					letter-spacing: 0.24px;
					margin-top: size(5)
				}

				.arrow {
					@apply absolute;
					width: size(57);
					bottom: -#{size(55)};
					left: 50%;
					transform: translateX(-50%);

					img {
						width: 100%;
					}
				}

				&.active {
					background-color: #FF3EA1;
					color: #fff;

					.t1 {
						border-color: #fff;
					}
				}

				&:hover {
					background-color: #FF3EA1;
					color: #fff;
					cursor: pointer;

					.t1 {
						border-color: #fff;
					}
				}
			}
		}
	}

	.slider-box {
		@apply relative;
		width: size(1482);
		height: size(713);

		.slide {
			@apply relative overflow-hidden;

			img {
				width: size(1482);
				height: size(713);
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

			.des {
				@apply absolute;
				right: size(62);
				top: size(27);
				color: #000;
				font-size: size(16);
				font-weight: 400;
				line-height: 190%;
				width: size(436);
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
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

	.s5 {
		width: 100%;
		height: sizem(1076);
		padding: 0;
		z-index: 10;

		.sep-text {
			@apply relative;
			font-size: sizem(13);
			font-family: 'Noto Serif TC';
			letter-spacing: sizem(9.16);
			margin: sizem(30) 0;
			margin-bottom: sizem(30);
			text-align: center
		}

		.bike {
			@apply hidden;
		}

		.intro {
			@apply flex flex-col items-start;
			gap: sizem(33.59);
			margin-bottom: size(50);
			width: 100%;
			padding: 0 sizem(30);

			.l {
				.t1 {
					@apply relative;
					color: #C3398D;
					font-size: sizem(25);
					line-height: sizem(31);

					svg {
						@apply absolute left-auto right-0;
						width: sizem(50.2);
						bottom: 0;
					}
				}

				.t2 {
					margin-top: sizem(33);
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
			}

			.r {
				@apply flex items-center;
				gap: sizem(9.74);
				padding-bottom: sizem(30);

				.b {
					width: sizem(98.2);
					height: sizem(98.2);

					.t1 {
						font-size: sizem(22.53);

						span {
							font-size: sizem(15.83);
						}
					}

					.t2 {
						font-size: sizem(13);
						letter-spacing: 0.13px;
						margin-top: sizem(2);
						max-width: 80%;
						text-align: center;
					}

					.arrow {
						@apply absolute;
						width: sizem(30);
						bottom: -#{sizem(25)};
						left: 50%;
						transform: translateX(-50%);

						img {
							width: 100%;
						}
					}

					&.active {
						background-color: #FF3EA1;
						color: #fff;

						.t1 {
							border-color: #fff;
						}
					}

					&:hover {
						background-color: #FF3EA1;
						color: #fff;
						cursor: pointer;

						.t1 {
							border-color: #fff;
						}
					}
				}
			}
		}

		.splide__track {
			overflow: visible;
		}

		.slider-box {
			@apply relative;
			width: 100%;
			height: sizem(378);

			.slide {
				@apply relative overflow-visible;

				img {
					width: 100%;
					height: sizem(378);
					object-fit: cover;
					object-position: center
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

				.des {
					@apply absolute;
					right: 0;
					top: 110%;
					color: #000;
					font-size: sizem(12);
					font-weight: 400;
					line-height: 190%;
					width: 100%;
					padding: 0 sizem(30);
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
				left: 0;

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
	}
}
</style>
<script setup>
import { computed, getCurrentInstance, onMounted, ref, } from 'vue';
import inView from 'in-view';
import Anim from '@/section/anim/b.vue';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const splide = ref();
const currentIdx = ref(0)
const move = (newIdx, prevIdx, destIdx) => {
	currentIdx.value = prevIdx
}

const items = [
	{
		b1: '7600',
		b1_unit: '坪',
		b2: '體健公園',
		img_des: '7600坪大綠覆場域，是全五股最大最豐富共融主題公園，彩虹澑滑梯、花海、籃球場等設施打造自在舒適的全齡化休閒環境',
		caption: '體健公園',
		img: isMobile.value ? new URL("../section/s5/1m.jpg", import.meta.url).href : new URL("../section/s5/1.jpg", import.meta.url).href
	},
	{
		b1: '1200',
		b1_unit: '坪',
		b2: '成德公園',
		img_des: '佔地1200坪，具溜滑梯、蹺蹺板等多項兒童遊戲設施，是大人小孩一齊同樂的最佳所在',
		caption: '成德公園',
		img: isMobile.value ? new URL("../section/s5/2m.jpg", import.meta.url).href : new URL("../section/s5/2.jpg", import.meta.url).href
	},
	{
		b1: '424',
		b1_unit: '公頃',
		b2: '新北大都會公園',
		img_des: '424公頃水岸綠帶，是全台最大的河濱公園，7公里長的濱水自行車道，相當於16座大安森林公園的豪闊綠海，是大台北最珍貴的都會綠洲',
		caption: '新北大都會公園',
		img: isMobile.value ? new URL("../section/s5/3m.jpg", import.meta.url).href : new URL("../section/s5/3.jpg", import.meta.url).href
	},
]

onMounted(() => {

})
</script>
