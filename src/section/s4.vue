<template>
	<article class="s4 relative font-['Noto_Serif_TC']">
		<div class="main">
			<img class="left" src="@/section/s4/1.jpg" alt="" srcset="">
			<div class="right">
				<img v-if="!$isMobile()" class="img" src="@/section/s4/2.jpg" alt="" srcset="">
				<img v-else class="img" src="@/section/s4/2m.jpg" alt="" srcset="">
				<div class="t1" data-aos="fade-up" data-aos-delay="200">得重劃得天下<br>
					永康鹽行就緒</div>
				<div class="t2" data-aos="fade-up" data-aos-delay="400">上選永康國際雙語特區</div>
				<div class="t3" data-aos="fade-up" data-aos-delay="600">稀有！放眼全台，少數交通、文教先行到位的重劃特區，密集商圈圍繞、景觀綠馥一次就緒！<br><br>
					潛力！南科園區持續開發、產值爆發，不僅經濟領頭、上萬就業，更帶動週邊發展無窮！<br><br>
					舒適！新設鹽行國中推動雙語國際教育，週圍景觀綠蔭、生活純境，學區、特區輕鬆兼得！</div>
			</div>
		</div>

		<svg :key="isInView" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 435 139" xml:space="preserve" class="logo">
			<g id="a">
				<defs>
					<path id="SVGID_a"
						d="M72.4,55.9C55.6,94,18.3,118.3,7,105.2c-20.3-23.7,9-75,28.5-92.4C61.2-10.1,94,7.1,72.4,55.9z M54.3,12.8
													C31.2,11.2-9.6,93.4,19.2,96.6c16.7,1.8,35.2-22.7,42.5-37.3C68.8,45,79.8,14.5,54.3,12.8z M149.9,73.5
													c-7,14.6-30.2,19.6-45.2,22.7c-4.4,0.9-13.4,6.1-13.6-1.7c-0.3-10.8,14.9-7.7,18.1-9.5c8-4.7,19-24.8,17.9-34.5
													c-2.4-22-31.5,22.1-40.2,38.7c-5.6,19.7-9.8,46.3-14.9,48.9c-9.7,4.8-1.7-17.4-0.6-21.2c6.8-23.1,13.4-46.5,16.4-70.3
													c0.8-5.9,7.6-11.6,8.9-4.8c1.2,6.2-5.4,21.3-6.1,30.3c31.1-58.7,67.8-42.8,26.4,12.6C139.9,80,150.7,68,149.9,73.5L149.9,73.5z" />
				</defs>
				<clipPath id="SVGID_a0">
					<use xlink:href="#SVGID_a" style="overflow:visible;" />
				</clipPath>

				<path class="l an1" style="clip-path:url(#SVGID_a0);stroke-width:14;"
					d="M61.8,8.9c-37.4-12.5-84.9,111.7-35,90.9C65.8,83.6,89.4,17.9,63,9.1" />

				<path class="l an2" style="clip-path:url(#SVGID_a0);"
					d="M94.2,38.7C82,71.9,71.9,125.7,71,133.3c8.8-58.7,54-112.6,60.3-87.2c4.3,17.2-28,49.3-45.5,41.7c3.6,12.7,36.8,5.7,61.7-14.1" />
			</g>
			<g id="b">
				<defs>
					<path id="SVGID_b" d="M387.2,69.8c-13.9,17.5-31.6,28-27.8,5.6
													c5.2-30.8-1.2-34.3-12.5-25.4c-9,7.1-16.1,22.9-24.3,29.4c-0.7-9.7,14.7-32.8,9.9-38.9c-3.6-0.8-8.9,10-13,22.6
													c-27.5,31.7-55.5,58-32.6-12.2c1.9-5.8,3.1-12.8-4.2-6.3c-4.2,3.7-5.1,8.7-6.6,14.1c-56.6,68.9-20.8-13.6-38.9-13.3
													C223.7,45.4,214.5,74,202.7,84c-0.7-8.1,18.1-42.5,10.7-43c-4.4-0.4-6.1,5-8.4,11.3c-15.1,21.1-57.1,59.9-54.3,27
													c43.1-34.8,32.2-59.2,19.8-50.9c-12.6,8.4-19.8,24.4-24.4,38.3c-12.7,38.9,9,46.8,35.1,19.8c7.3-7.4,15.2-15.8,21.2-24.7
													c-8.6,23.3-12,44.9-3.2,36.7c17.8-16.6,40-68.1,35.5-22.9c-3.9,39,22.3,17.3,37.6-3.8c-5.4,25.6-3.3,63.7,43.5,3.8
													c-2.9,12-4.6,28.9,2.2,21.1c18.4-21,39.4-60.7,34-21.7c-7.4,53.4,40.2,4.6,48.1-16.7C403.4,49.3,389.3,68.5,387.2,69.8z M173,42.7
													c-3.1,11.6-12.4,18.9-20.7,27.3C152,64.6,173.2,22.8,173,42.7z" />
				</defs>
				<clipPath id="SVGID_b0">
					<use xlink:href="#SVGID_b" style="overflow:visible;" />
				</clipPath>

				<path class="l an3" style="clip-path:url(#SVGID_b0);" d="M155.6,74.6c10.4-7.8,25.9-27.4,19.2-43.2c-3.6-8.6-35.8,35.4-28.7,58.1c8,25.4,42.9-15.3,62.2-48.6c7,4-18.3,47.8-13.9,57.1
												c3.8,8,47.1-74.8,43.5-40.8c-4.9,47.2,7.2,51.1,46.3-15.3c-17,57.2-15.1,98.9,45.8,0c-12.1,26.8-17.2,43.7-13.3,51.2
												c0,0,46.9-71.4,41.1-29.8c-6.3,45,3.1,41.5,41.1-6.9" />
			</g>
			<g id="c">
				<defs>
					<path id="SVGID_c" d="M290.4,12.7c0.9-4.9,5.2-11,9.6-12.7
													c3.9,0.1,5.4,1.3,4.5,5.6l0,0c-1,4.6-3.4,10.6-8.4,10.7C294.3,16.2,289.7,15.5,290.4,12.7z M433.7,44.1c3.6-8.6-6.1-12.7-14.7-7.3
													c-13.4,8.4-29.1,26-34.1,40.8c-10,29.6,10.5,23.9,32.5,0.6c-4.1,14.3-11.9,57.6-30.7,50.2c-8.2-3.2-15-16.6-17.9-11.8
													c-3.5,5.9,8.3,18.3,13.2,20.7c13.4,6.6,26.6-10.7,32.7-24.6C424.1,91.6,425.5,64,433.7,44.1z M425.7,44.5
													c-2.2,8.4-3.8,18.8-7.4,26.6c-8.3,7.9-28,23.2-28,13.7C390.2,79.6,414.9,37,425.7,44.5L425.7,44.5z" />
				</defs>
				<clipPath id="SVGID_c0">
					<use xlink:href="#SVGID_c" style="overflow:visible;" />
				</clipPath>
				<path class="l an4" style="clip-path:url(#SVGID_c0);"
					d="M426.5,38.4c-14.3-1.6-46.8,39.1-40.1,53.1c4.3,8.9,36.4-20,43.6-52c-4.4,29.3-25.4,134.1-61.1,77.1" />
				<path class="l an5" style="clip-path:url(#SVGID_c0);" d="M301.1,3.4c-4.5,5.1-4.9,11.5-4.9,11.5" />
			</g>
		</svg>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
	width: 100%;
	height: size(1138);
	background-image: url(@/section/s3/bg.jpg);
	background-size: cover;
	padding-top: size(100);

	.logo {
		@apply absolute;
		width: size(642.53);
		transform: rotate(90deg);
		transform-origin: center;
		bottom: size(250);
		right: -#{size(200)};
			.l {
						fill: none;
						stroke: #fff;
						stroke-linecap: round;
						stroke-linejoin: round;
						stroke-miterlimit: 10;
						stroke-width: 13;
					}

					.an1 {
						stroke-dasharray: 253;
						stroke-dashoffset: 253;
						animation: letterDraw 0.504s 0s linear forwards;
					}

					.an2 {
						stroke-dasharray: 360;
						stroke-dashoffset: 360;
						animation: letterDraw 0.716s 0.504s linear forwards;
					}

					.an3 {
						stroke-dasharray: 811;
						stroke-dashoffset: 811;
						animation: letterDraw 1.622s 1.22s linear forwards;
					}

					.an4 {
						stroke-dasharray: 280;
						stroke-dashoffset: 280;
						animation: letterDraw 0.56s 2.842s linear forwards;
					}

					.an5 {
						stroke-dasharray: 13;
						stroke-dashoffset: 13;
						animation: letterDraw 0.026s 3.402s linear forwards;
					}

					@keyframes letterDraw {
						to {
							stroke-dashoffset: 0;
						}
					}
	}

	.main {
		@apply flex items-start justify-start z-10 relative;
		gap: size(121.8);
		.left {
			margin: unset;
			width: size(1094);
		}
		.right {
			.img {
				width: size(569);
			}
			.t1 {
				margin-top: size(101.40);
				padding-left: -#{size(13)};
				font-weight: 700;
				font-size: size(37);
				line-height: 140%;
				color: #803031;
			}
			.t2 {
				margin-top: size(33);
				padding-left: -#{size(13)};
				font-weight: 700;
				font-size: size(30);
				line-height: 160%;
				color: #000000;
			}
			.t3 {
				margin-top: size(30);
				padding-left: -#{size(13)};
				width: size(445.47);
				font-weight: 400;
				font-size: size(20);
				line-height: 150%;
				color: #000000;
			}
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
	padding-top: sizem(100);

	.main {
		@apply flex-col;
		gap: sizem(60);
		.left {
			margin: unset;
			width: 100%;
		}
		.right {
			padding-left: sizem(32.5);
			.img {
				@apply absolute;
				width: sizem(160);
				right: 0;
				top: sizem(407);
			}
			.t1 {
				margin-top: 0;
				padding-left:0;
				font-size: sizem(23);
			}
			.t2 {
				margin-top: sizem(15);
				padding-left:0;
				font-size: sizem(16);
			}
			.t3 {
				margin-top: sizem(16);
				padding-left:0;
				width: auto;
				font-size: sizem(14);
				width: sizem(242.5);
			}
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

const isInView = ref(false)

onMounted(() => {
	inView('.s4')
		.on('enter', () => {
			isInView.value = true
		})
		.on('exit', () => {
			isInView.value = false
		});
})
</script>
