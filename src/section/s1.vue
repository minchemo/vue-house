<template>
	<article class="s1 relative">
		<div class="section1">
			<div class="t">
				<img class="logo" src="@/section/s1/LOGO01.png" alt="" srcset="">
				<img class="t1" src="@/section/s1/LOGO02.png" alt="" srcset="">
				<div class="t2">楠梓高大特區最華麗的一極</div>
				<div class="t3">大台北重劃推手之王前進高雄代表作</div>
			</div>
			<video autoplay inline muted loop src="@/section/s1/01.mp4"></video>
			<div class="mask"></div>
		</div>
		<div class="line">
			<img class="i" src="@/section/s1/line.png" alt="" srcset="">
			<img src="@/section/s1/star.png" class="star" alt="" srcset="">
		</div>
		<div class="section2">
			<div class="t1">高大<span class="font-[roboto]">Σ</span>計畫</div>
			<div class="t2">台灣十大建商超遠見</div>
			<div class="bubbles">
				<div class="bubble" v-for="bubble in bubbles">
					<div class="b1 z-10" v-html="bubble.t1"></div>
					<div class="b2 z-10" v-html="bubble.t2"></div>
					<div class="b3 z-10" v-html="bubble.t3"></div>
					<div class="b4 z-10" v-html="bubble.t4"></div>
					<img class="bg" src="@/section/s1/bubble.png" alt="" srcset="">
				</div>
			</div>
			<div class="t3">｜高大Σ計畫打造科技極地理想國｜</div>
			<div class="t4">邀請你一起看見高雄的世界級</div>
			<img class="view" src="@/section/s1/view.jpg" alt="" srcset="">
			<img class="bg1" src="@/section/s1/bg1.png" alt="" srcset="">
			<img class="text1" src="@/section/s1/text1.png" alt="" srcset="">
		</div>
		<div class="section3">
			<div class="t1">科學園區+重劃區+交通建設=房價保證</div>
			<div class="t2">竹科下一站，財富增值列車啟動</div>
			<div class="swiper-section">

				<div class="swiper-box">
					<Splide ref="splide" class="swiper" :options="{
						pagination: false,
						arrows: false,
						drag: true,
						autoplay: true,
						interval: 4000,
						gap: 15,
					}" @splide:move="move">
						<SplideSlide class="slide" v-for="img, i in s3_imgs">
							<img :src="img.img" alt="" srcset="">
							<div class="caption">{{ img.caption }}</div>
						</SplideSlide>
					</Splide>
					<div class="arrows">
						<img class="prev" @click="splide.splide.go('<')" src="@/section/arrow.png" alt="" srcset="">
						<span @click="splide.splide.go(i)" v-for="item, i in s3_imgs"
							:class="{ active: currentIndex == i }"></span>
						<img class="next" @click="splide.splide.go('>')" src="@/section/arrow.png" alt="" srcset="">
					</div>
				</div>
				<div class="swiper-text">
					<div class="item">
						<div class="t1">台積電Fab22高雄廠拍板核定</div>
						<div class="t2">台積電高雄廠2奈米營運部隊已悄然成軍，旗下高雄廠正式編定為台積22廠，逾7,000億元的1.4奈米投資計畫亦可望同步轉向高大特區。</div>
					</div>
					<div class="item">
						<div class="t1">散步200米走進捷運紫線預定站</div>
						<div class="t2">高雄捷運紫線串聯高雄大學、文藻大學、高師大高科大等七所院校，同步連結「高大之森」與橋頭科學園區，4站進左營高鐵台鐵輕軌三鐵共構站。</div>
					</div>
					<div class="item">
						<div class="t1">新台17線15分鐘<br>漢神巨蛋及高雄美術館園區</div>
						<div class="t2">新台17線快速道路，預計115年全線通車，從基地至高雄美術館園區、漢神巨蛋及農16特區僅15分鐘，輕鬆三首歌時間直達高雄藝文瑰寶區。</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section4">
			<div class="t1">高大海灣行政特區</div>
			<div class="t2">左營海景對坐，後勁水岸相伴</div>
			<div class="grids">
				<div class="grid-item" v-for="item in s4_imgs">
					<img :src="item.img" alt="" srcset="">
					<div class="caption" :class="{ dark: item.darkLabel }">{{ item.caption }}</div>
				</div>
			</div>
			<p class="grid-text">Gazing across the sea, with the waterfront as a companion</p>
			<div class="intros">
				<div class="item" v-for="item in s4_text">
					<div class="t1" v-html="item.t1"></div>
					<div class="t2" v-html="item.t2"></div>
				</div>
			</div>
		</div>
		<div class="line">
			<img class="i" src="@/section/s1/line.png" alt="" srcset="">
			<img src="@/section/s1/star.png" class="star" alt="" srcset="">
		</div>
		<div class="section5">
			<div class="t1">
				<img src="@/section/s5/1.jpg" alt="" srcset="">
				<div class="caption">建築外觀3D示意參考圖</div>
			</div>
			<div class="t2">｜賀高大之森榮獲2023美國TITAN白金獎 法國NDA金獎｜</div>
			<div class="t3">我們向世界證明，這座建築配得上您</div>
			<div class="badges">
				<img src="@/section/s5/b1.png" alt="" srcset="">
				<img src="@/section/s5/b2.png" alt="" srcset="">
			</div>
			<div class="t4">
				拿下全台唯一，才擔得起高大特區首席極光地標頭銜<br>
				在2023美國TITAN Property Awards<br>
				法國Novum Design Awards (NDA)評選中<br>
				台灣十大建商茂德機構攜手國際豪宅團隊打造「高大之森」<br>
				一舉囊括國際建築室內設計白金獎及金獎</div>
			<img class="dec dec1" src="@/section/s5/dec.png" alt="" srcset="">
			<img class="dec dec2" src="@/section/s5/dec.png" alt="" srcset="">
		</div>
		<div class="section6">
			<div class="t t1">台灣十大建設集團 高雄首發</div>
			<div class="t t2">重劃推手之王　連續四年蟬聯台灣十大建設<br>
				23年來以種樹哲學　在北台灣躍建築新高峰
			</div>
			<div class="t t3">以種樹哲學 躍建築新高峰　以服務紮根 跨品牌新里程</div>
			<div class="bg"></div>
		</div>
		<div class="section7">
			<img class="t1" src="@/section/s7/t1.png" alt="" srcset="">
			<div class="visible-t"></div>
			<div class="t2">國際頂級生活，彰顯身份</div>
			<div class="t3">Experience a lifestyle of international luxury</div>
			<div class="persons">
				<div class="item" v-for="item in s7_person">
					<div class="visible-t">
						<div class="t t1" v-html="item.t1"></div>
						<div class="name">
							<div class="t t2" v-html="item.t2"></div>
							<span></span>
							<div class="t t3" v-html="item.t3"></div>
						</div>
					</div>
					<div class="hidden-t">
						<div class="t4" v-html="item.t4"></div>
						<div class="t5" v-html="item.t5"></div>
					</div>
					<img class="avatar" :src="item.img" alt="" srcset="">
				</div>
			</div>
		</div>
		<div class="section8">
			<div class="t1">最頂級的入門之道</div>
			<div class="t2">回家就是尊榮禮遇的開始</div>
			<div class="t3">從走進「高大之森」開始<br>
				您的訪客就是一路的仰望與驚嘆<br>
				建築大門堂皇華貴，超豪宅挑高迎賓大廳高度，顯示主人的品味<br>
				每一細節都是傑作之美，無價品味，從裡到外<br>
				收藏多件全球限量頂級藝術品，每一步都是驚艷<br>
				回家的方式就是一種身份與身價的宣示</div>
			<div class="t4">Arriving home marks the beginning of an honorable reception</div>
			<div class="carousell-wrapper">
				<div class="mask"></div>
				<div class="carousell-box" :class="{ paused: pausedCarousell }" @mouseleave="pausedCarousell = false"
					@mouseover="pausedCarousell = true">
					<div class="carousell" v-for="i in 3">
						<div class="item" v-for="item, i in s8_carousell" :style="{ backgroundImage: `url(${item.img})` }">
							<p>{{ item.caption }}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="t5">日系書店選書系統</div>
			<div class="t6">｜身染書屋氣自華，閱讀生活的品味｜</div>
			<div class="t7">以生活態度為目標；結合音樂和書籍的經營理念<br>
				營造不只是閱讀，而是閱讀生活品味的氣質<br>
				「高大之森」引進日系選書系統<br>
				每季新增書籍，讓社區享有文藝書香的底氣</div>
			<div class="line">
				<img class="i" src="@/section/s1/line.png" alt="" srcset="">
				<img src="@/section/s1/star.png" class="star" alt="" srcset="">
			</div>
		</div>
	</article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s1 {
	@apply w-full overflow-visible relative z-20;
	background: linear-gradient(180deg, #0A3B75 0%, #05101C 100%);

	.section1 {
		@apply w-full flex flex-col items-center justify-center relative overflow-hidden;
		max-height: size(1080);
		min-height: size(900);
		background-size: cover;
		background-position: 0 center;

		.t {
			@apply w-full flex flex-col items-center justify-center z-10;

			.logo {
				width: size(151);
				margin-bottom: size(60);
			}

			.t1 {
				width: size(536);
				margin-bottom: size(20);
			}

			.t2 {
				background: linear-gradient(236deg, #A18151 15%, #E9D9BB 46%, #8E682E 99%);
				color: #042B54;
				font-size: size(38.66);
				font-weight: 700;
				letter-spacing: size(3.48);
				padding: size(8) size(16);
				margin-bottom: size(8);
			}

			.t3 {
				color: white;
				font-size: size(29.87);
				font-weight: 700;
				letter-spacing: size(3.88);
				word-wrap: break-word
			}
		}

		video {
			@apply w-full h-auto absolute z-0;
		}

		.mask {
			@apply w-full h-[30%] absolute bottom-0 z-0;
			background-position: 0px 0px;
			background: linear-gradient(to bottom, rgba(10, 59, 117, 0%) 0%, rgba(10, 59, 117, 100%) 70%, rgba(9, 54, 108, 100%) 100%);
		}

	}

	.line {
		@apply w-full flex items-center justify-center relative;
		margin-top: -#{size(150)};

		.i {
			height: size(293);
		}

		.star {
			@apply absolute top-0 left-1/2;
			width: size(174);
			transform: translateX(-50%) scale(0.8);
			opacity: 0.35;
			animation: star 4s infinite;

			@keyframes star {
				to {
					top: 75%;
					opacity: 1;
					transform: translateX(-50%) scale(1);
				}
			}
		}
	}

	.section2 {
		@apply relative text-center text-white;
		margin-top: size(50);
		padding-bottom: size(116);

		.t1 {
			font-size: size(118.45);
			font-weight: 700;
		}

		.t2 {
			font-size: size(57.27);
			font-weight: 500;
			letter-spacing: size(4);
			word-wrap: break-word
		}

		.bubbles {
			@apply flex w-full justify-center select-none pointer-events-none;

			.bubble {
				@apply flex flex-col items-center justify-center relative;
				width: size(477);
				height: size(477);
				color: white;
				text-align: center;
				margin: 0 -#{size(30)};

				.b1 {
					font-size: size(35);
					font-weight: 700;
					letter-spacing: size(3);
				}

				.b2 {
					font-size: size(31);
					font-weight: 700;
					letter-spacing: size(2.5);
				}

				.b3 {
					font-size: size(25);
					font-weight: 400;
					letter-spacing: size(2.12);
				}

				.b4 {
					font-size: size(25);
					font-weight: 400;
					letter-spacing: size(2.12);

					.l {
						font-size: size(31);
						font-weight: 700;
						letter-spacing: size(2.63);
					}
				}

				.bg {
					@apply w-full h-full absolute left-0 top-0 mix-blend-screen;
					z-index: 1;
				}
			}
		}

		.t3 {
			color: #CCA86D;
			font-size: size(34);
			font-weight: 700;
			letter-spacing: size(18);
			margin-top: -#{size(50)};
		}

		.t4 {
			color: #CCA86D;
			font-size: size(57.27);
			font-weight: 700;
			letter-spacing: size(4)
		}

		.view {
			@apply relative;
			margin-top: size(50);
			width: size(1338);
			z-index: 20;
		}

		.bg1 {
			@apply absolute pointer-events-none select-none;
			bottom: -#{size(470)};
			left: 0;
			width: size(1258);
			mix-blend-mode: lighten
		}

		.text1 {
			@apply absolute pointer-events-none select-none;
			bottom: -#{size(44)};
			left: size(1083);
			width: size(400);
		}
	}

	.section3 {
		@apply w-full relative z-10 text-center;
		height: size(1080);
		padding-top: size(170);

		>.t1 {
			color: #CCA86D;
			font-size: size(34);
			font-weight: 700;
			letter-spacing: size(3.74);
		}

		>.t2 {
			color: white;
			font-size: size(57.27);
			font-weight: 700;
			letter-spacing: size(4);
		}

		.swiper-section {
			@apply flex items-start justify-center;
			gap: size(87);
			margin-top: size(60);

			.swiper-box {
				width: size(740);

				.swiper {
					.slide {
						width: size(740);
						height: size(518);

						img {
							@apply w-full h-full;
						}

						.caption {
							@apply absolute;
							color: white;
							font-size: size(13);
							font-weight: 400;
							right: size(15);
							bottom: size(10)
						}
					}
				}

				.arrows {
					@apply flex items-center justify-end;
					gap: size(15);
					margin-top: size(15);

					span {
						@apply block cursor-pointer bg-white rounded-full;
						width: size(5);
						height: size(5);
						box-shadow: 0px 0px size(2) size(2) #ffffff75;

						&.active {
							box-shadow: 0px 0px size(2) size(2) #33eaea71;
							background-color: #33EAEA;
						}
					}

					.prev {
						@apply cursor-pointer;
						width: size(20);
					}

					.next {
						@apply cursor-pointer;
						width: size(20);
						transform: rotate(180deg);
						transform-origin: center;
					}
				}
			}

			.swiper-text {
				@apply flex flex-col;
				gap: size(50);
				margin-top: -#{size(15)};

				.item {
					color: white;

					.t1 {
						font-size: size(26);
						font-weight: 700;
						letter-spacing: size(2.21);
					}

					.t2 {
						font-size: size(16);
						font-weight: 400;
						line-height: size(27.45);
						letter-spacing: size(1.37);
						width: size(428);
						margin-top: size(13);
					}
				}

			}
		}
	}

	.section4 {
		@apply w-full relative z-10 text-center flex flex-col items-center justify-center;
		height: size(1492);

		>.t1 {
			color: #CCA86D;
			font-size: size(34);
			font-weight: 700;
			letter-spacing: size(3.74);
		}

		>.t2 {
			color: white;
			font-size: size(57.27);
			font-weight: 700;
			letter-spacing: size(4);
		}

		.grids {
			@apply mx-auto flex flex-wrap justify-between;
			width: size(1275);
			gap: size(16);
			border-top: 0.5px solid #33EAEA;
			border-bottom: 0.5px solid #33EAEA;
			padding: size(16) 0;

			.grid-item {
				@apply relative;
				width: size(305);
				height: size(305);

				img {
					width: 100%;
					height: 100%;
				}

				.caption {
					@apply absolute;
					color: white;
					bottom: size(8);
					right: size(8);
					font-size: size(13);

					&.dark {
						color: #000;
					}
				}
			}
		}

		.grid-text {
			color: rgba(51, 234, 234, 0.35);
			font-size: size(27);
			font-weight: 700;
			letter-spacing: size(2.7);
		}

		.intros {
			@apply flex items-start justify-center;
			gap: size(64);
			margin-top: size(55);

			.item {
				@apply text-white text-left;

				.t1 {
					font-size: size(26);
					font-weight: 700;
					letter-spacing: size(2.21);
				}

				.t2 {
					margin-top: size(10);
					font-size: size(16);
					font-weight: 400;
					line-height: size(27.45);
					letter-spacing: size(1.36);
					width: size(382);
				}
			}
		}
	}

	.section5 {
		@apply w-full relative z-10 text-white flex flex-col items-center justify-center;
		height: size(1587);
		margin-top: -#{size(70)};

		.t1 {
			@apply relative;

			img {
				width: size(1278.52);
			}

			.caption {
				@apply absolute;
				font-size: size(13);
				font-weight: 400;
				left: size(15);
				bottom: size(10);
			}
		}

		.t2 {
			color: #CCA86D;
			font-size: size(34);
			font-weight: 700;
			letter-spacing: size(4.42);
			margin-top: size(70);
		}

		.t3 {
			color: #CCA86D;
			font-size: size(57.27);
			font-weight: 700;
			letter-spacing: size(4);
		}

		.badges {
			@apply flex;
			gap: size(20);
			margin-top: size(50);

			img {
				@apply mix-blend-lighten;
				width: size(261.4);
			}
		}

		.t4 {
			font-size: size(16);
			font-weight: 400;
			line-height: size(27.45);
			letter-spacing: size(1.36);
			width: size(476);
			text-align: center;
		}

		.dec {
			@apply absolute;
			width: size(86);

			&.dec1 {
				right: size(192);
				top: 0;
			}

			&.dec2 {
				transform: rotate(180deg);
				left: size(192);
				bottom: 0;
			}
		}
	}

	.section6 {
		@apply text-white text-center relative;
		margin-top: size(113);
		height: size(960);

		.t {
			@apply relative z-10;
		}

		.t1 {

			font-size: size(57.27);
			font-weight: 700;
			letter-spacing: size(4)
		}

		.t2 {
			font-size: size(16);
			font-weight: 400;
			line-height: size(27.45);
			letter-spacing: size(1.36);
			margin-top: size(33);
		}

		.t3 {
			font-size: size(24);
			font-weight: 700;
			line-height: size(41.18);
			letter-spacing: size(2);
		}

		.bg {
			@apply absolute;
			bottom: -#{size(400)};
			width: 100%;
			height: size(2000);
			background: url(@/section/s6/bg.png) no-repeat center;
			background-size: cover;
		}
	}

	.section7 {
		@apply relative z-10 flex flex-col items-center justify-center;
		padding-bottom: size(200);

		>.t1 {
			width: size(667);
		}

		>.t2 {
			color: white;
			font-size: size(57.27);
			font-weight: 700;
			letter-spacing: size(4);
		}

		>.t3 {
			color: rgba(51, 234, 234, 0.35);
			font-size: size(27);
			font-weight: 700;
			letter-spacing: size(2.16);
		}

		.persons {
			@apply flex;
			gap: size(20);
			margin-top: size(50);

			.item {
				@apply relative text-white;
				width: size(310);
				height: size(800);

				.t {
					@apply relative z-10;
				}

				.visible-t {
					@apply absolute flex w-full items-start justify-start z-10;
					top: 15%;
					left: 3.5%;
					gap: size(10);

					.t1 {
						writing-mode: vertical-lr;
						font-size: size(36);
						font-weight: 400;
						line-height: size(42);
						letter-spacing: size(3);
					}

					.name {
						@apply flex flex-col;
						font-size: size(17);
						font-weight: 700;
						line-height: size(20);
						letter-spacing: size(5);

						.t2 {
							writing-mode: vertical-lr;
						}

						span {
							@apply relative;
							width: size(17);
							height: size(17);

							&::after {
								content: '';
								position: absolute;
								top: 10%;
								left: 50%;
								transform: rotate(-45deg) translate(-50%, -50%);
								transform-origin: center;
								width: 100%;
								height: 1px;
								background-color: #fff;
							}
						}

						.t3 {
							writing-mode: vertical-lr;
						}
					}
				}

				.hidden-t {
					@apply absolute z-10 transition-all;
					opacity: 0;
					padding: 0 size(20);
					bottom: 0;
					left: 0;
					font-size: size(16);
					font-weight: 400;
					line-height: size(24);
					letter-spacing: size(1.12);

					.t4 {
						padding-bottom: size(20);
						border-bottom: 1px solid #fff;
						margin-bottom: size(20)
					}
				}

				.avatar {
					@apply absolute transition-all;
					bottom: 0;
					left: 0;
					width: 100%;
					height: auto;
				}

				&:nth-child(2n) {
					margin-top: -#{size(140)};

					.visible-t {
						top: 20%;
					}
				}

				&:hover {
					.avatar {
						filter: brightness(0.3)
					}

					.hidden-t {
						opacity: 1;
					}
				}
			}
		}
	}

	.section8 {
		@apply flex flex-col items-center justify-end;
		padding-top: size(750);
		padding-bottom: size(50);
		height: auto;
		background: url('@/section/s8/bg.png') no-repeat top center;
		background-size: 100%;
		background-color: #082D57;

		.t1 {
			color: #CCA86D;
			font-size: size(34);
			font-weight: 700;
			letter-spacing: size(3.74);
		}

		.t2 {
			color: white;
			font-size: size(57.27);
			font-weight: 700;
			letter-spacing: size(4);
		}

		.t3 {
			@apply text-center;
			color: white;
			font-size: size(16);
			font-weight: 400;
			line-height: size(27.45);
			letter-spacing: size(1.36);
			margin-top: size(33);
		}

		.t4 {
			color: rgba(51, 234, 234, 0.35);
			font-size: size(27);
			font-weight: 700;
			letter-spacing: size(2.7);
			margin-top: size(50);
		}

		.carousell-wrapper {
			@apply relative;
			margin: size(40) 0;

			.mask {
				@apply absolute z-10 left-0 top-0 w-full h-full pointer-events-none;

				&::before {
					@apply absolute w-[10%] h-full left-0 top-0;
					background: linear-gradient(to left, rgba(8, 45, 87, 0) 0%, rgba(8, 45, 87, 1) 80%, rgba(8, 45, 87, 1) 100%);
					content: '';
				}

				&::after {
					@apply absolute w-[10%] h-full right-0 top-0;
					background: linear-gradient(to right, rgba(8, 45, 87, 0) 0%, rgba(8, 45, 87, 1) 80%, rgba(8, 45, 87, 1) 100%);
					content: '';
				}
			}

			.carousell-box {
				@apply w-screen relative whitespace-nowrap z-0;

				&.paused {
					.carousell {
						animation-play-state: paused;
					}
				}

				.carousell {
					@apply w-auto inline-block relative whitespace-nowrap;
					animation: marquee 50s linear infinite;

					@keyframes marquee {
						0% {
							transform: translateX(0);
						}

						100% {
							transform: translateX(-100%);
						}
					}

					.item {
						@apply relative inline-block;
						width: size(460);
						height: size(268);
						background-size: cover;

						p {
							@apply absolute;
							right: size(10);
							bottom: size(5);
							color: #fff;
							font-size: size(13);
							font-weight: 400;
						}
					}
				}

			}
		}

		.t5 {
			color: #CCA86D;
			font-size: size(57.27);
			font-weight: 700;
			letter-spacing: size(4);
		}

		.t6 {
			color: #CCA86D;
			font-size: size(34);
			font-weight: 700;
			letter-spacing: size(4.42);
		}

		.t7 {
			@apply text-center;
			color: white;
			font-size: size(16);
			font-weight: 400;
			line-height: size(27.45);
			letter-spacing: size(1.36);
			width: size(589);
			margin-bottom: size(200);
			margin-top: size(32);
		}
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


	.s1 {}
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());
const pausedCarousell = ref(false)


const bubbles = [
	{
		t1: "<b>TSMC</b>",
		t2: "<b>台積電2奈米廠</b>",
		t3: "楠梓科學園區",
		t4: "<b class='l'>5000億產值</b>"
	},
	{
		t1: "<b>TRAFFIC</b>",
		t2: "<b>新台17線</b>",
		t3: "8分鐘台積電",
		t4: "9分鐘高鐵站"
	},
	{
		t1: "<b>KRTC</b>",
		t2: "<b>捷運紫線</b>",
		t3: "4站台積電",
		t4: "5站高鐵站"
	},
]

const splide = ref(null)

const currentIndex = ref(0)
const move = (index, index2) => {
	currentIndex.value = index2;
}

const s3_imgs = [
	{
		img: new URL("../section/s1/s3/1.jpg", import.meta.url).href,
		caption: "現場實景拍攝"
	},
	{
		img: new URL("../section/s1/s3/2.jpg", import.meta.url).href,
		caption: "現場實景拍攝"
	},
	{
		img: new URL("../section/s1/s3/3.jpg", import.meta.url).href,
		caption: "左營高鐵現場實景拍攝"
	},
	{
		img: new URL("../section/s1/s3/4.jpg", import.meta.url).href,
		caption: "現場實景拍攝"
	},
	{
		img: new URL("../section/s1/s3/5.jpg", import.meta.url).href,
		caption: "新台17線現場實景拍攝"
	},
	{
		img: new URL("../section/s1/s3/6.jpg", import.meta.url).href,
		caption: "現場實景拍攝"
	},
	{
		img: new URL("../section/s1/s3/7.jpg", import.meta.url).href,
		caption: "凹仔底森林公園現場實景拍攝"
	},
]

const s4_imgs = [
	{
		img: new URL("../section/s1/s4/1.jpg", import.meta.url).href,
		caption: "藍田公園",
		darkLabel: false
	},
	{
		img: new URL("../section/s1/s4/2.jpg", import.meta.url).href,
		caption: "右昌森林公園",
		darkLabel: false
	},
	{
		img: new URL("../section/s1/s4/3.jpg", import.meta.url).href,
		caption: "星巴克",
		darkLabel: true
	},
	{
		img: new URL("../section/s1/s4/4.jpg", import.meta.url).href,
		caption: "家樂福",
		darkLabel: false
	},
	{
		img: new URL("../section/s1/s4/5.jpg", import.meta.url).href,
		caption: "高雄都會公園",
		darkLabel: true
	},
	{
		img: new URL("../section/s1/s4/6.jpg", import.meta.url).href,
		caption: "援中港溼地公園",
		darkLabel: false
	},
	{
		img: new URL("../section/s1/s4/7.jpg", import.meta.url).href,
		caption: "援中國小",
		darkLabel: true
	},
	{
		img: new URL("../section/s1/s4/8.jpg", import.meta.url).href,
		caption: "藍田公後勁溪自行車道園",
		darkLabel: false
	},
]

const s4_text = [
	{
		t1: "9萬坪援中港溼地等<br>四座公園森情常伴",
		t2: "散步就能徜徉腹地超過9萬坪、綠覆率高達80%的援中港溼地公園，右昌森林公園、藍田公園、都會公園綠意環抱，還有82.5公頃森林、湖泊、自行車道的高雄大學城，走入科技未來，綠意休閒也能亦步亦趨。"
	},

	{
		t1: "四大商圈環繞<br>15分鐘同步漢神巨蛋商圈",
		t2: "左營海景第一排，後勁溪水岸生活，特有的生活步調，繁華便利中帶著悠閒。高大家樂福商圈、右昌德民商圈，全聯、星巴克、家樂福量販店、德民黃昏市場…等豐沛機能360度全面為您豐衣足食。"
	},
	{
		t1: "菁英苗圃 高雄大學城<br>16年完全教育學區",
		t2: "高大特區擁有規劃整齊的重劃街廓，同時也是高雄最具人文底蘊的地方，「高大之森」黃金半徑內一次匯聚援中國小、藍田雙語國小、國昌國中、中山高中、楠梓高中及高雄大學…等明星學府。"
	},

]

const s7_person = [
	{
		img: new URL("../section/s7/1.png", import.meta.url).href,
		t1: "建築的天人合一",
		t2: "台灣新世紀建築大師",
		t3: "王智右",
		t4: "被譽為台灣最有影響力與創造力的建築詩人王智右建築師，主張透過設計，將自然光影揉入建築表情與生活空間，完美調合時間、空間、自然與人的高維度度張力，讓世界領略台灣建築實力。",
		t5: "自由綠洲‧詠恆‧樂慕<br>竹城北海道‧竹城長崎"
	},
	{
		img: new URL("../section/s7/2.png", import.meta.url).href,
		t1: "成就長住久安的期待",
		t2: "圓方結構安全技師",
		t3: "黃明慧",
		t4: "沒有安全，尊貴將無法立足。沒有安全，美麗將不堪一擊。建築結構是一種專業，更是使命，堅持施工品質，黃明慧技師相信慎密的結構計劃必須靠執行者落實，看不見的地方，依然細細琢磨，構築堅若磐石的安穩制震結構。",
		t5: "國泰川青‧三豐AIT‧吉美天悅<br>誠美拾光‧聯上大喜"
	},
	{
		img: new URL("../section/s7/3.png", import.meta.url).href,
		t1: "國際建築視野",
		t2: "豪宅景觀御用設計師",
		t3: "徐世萃",
		t4: "北市億元豪宅「陶朱隱園」空中花園競圖第一名，專為頂級建築打造會呼吸的城市綠帶，完美融合建築物與環境界線，使空間與土地產生最自然連結。戶外庭園不只是家向世界延伸的舞台，更是城市中具永續生態視野的最美地景。",
		t5: "碧波白‧太陽帝國‧自慢藏<br>快樂王國‧希望城市‧城上城"
	},
	{
		img: new URL("../section/s7/4.png", import.meta.url).href,
		t1: "獲獎無數全球驚艷",
		t2: "國際空間設計大師",
		t3: "袁世賢",
		t4: "公設空間設計師袁世賢，作品多次與世界級大師等人並列，同步國際趨勢人文空間品味，構築空間與生活之間的美好生活對話，用設計實力讓全球看見台灣。<br>曾榮獲:<br>德國IF DESIGN、German Design Award、義大利A’Design等國際建築空間設計大獎",
		t5: "太陽帝國‧台北美麗信花園酒店<br>台南煙波大飯店‧桂田磐古‧璽園"
	},
]

const s8_carousell = [
	{
		img: new URL("../section/s8/1.jpg", import.meta.url).href,
		caption: "公設3D透視參考圖"
	},
	{
		img: new URL("../section/s8/2.jpg", import.meta.url).href,
		caption: "公設3D透視參考圖"
	},
	{
		img: new URL("../section/s8/3.jpg", import.meta.url).href,
		caption: "公設3D透視參考圖"
	},
	{
		img: new URL("../section/s8/4.jpg", import.meta.url).href,
		caption: "公設3D透視參考圖"
	},
	{
		img: new URL("../section/s8/5.jpg", import.meta.url).href,
		caption: "公設3D透視參考圖"
	},
	{
		img: new URL("../section/s8/6.jpg", import.meta.url).href,
		caption: "公設3D透視參考圖"
	},
	{
		img: new URL("../section/s8/7.jpg", import.meta.url).href,
		caption: "公設3D透視參考圖"
	},
	{
		img: new URL("../section/s8/8.jpg", import.meta.url).href,
		caption: "公設3D透視參考圖"
	}
]
</script>
