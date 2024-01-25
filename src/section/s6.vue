<template>
	<article class="s6">
		<div class="text-box">
			<div class="t" v-if="!isMobile">
				<img class="t1" src="@/section/s6/brand.png" alt="" srcset="" data-aos="fade-up" data-aos-delay="0">
				<div class="t-m">
					<div class="t2" data-aos="fade-up" data-aos-delay="200">三步慢慢</div>
					<div class="t3" data-aos="fade-up" data-aos-delay="400">光和樹住進家</div>
				</div>
			</div>
			<div class="t4" data-aos="fade-up" data-aos-delay="0">精實品牌｜上市公司宏璟建設 土城新作</div>
			<div class="t5" data-aos="fade-up" data-aos-delay="200">日月光集團-宏璟建設（2527）<br><br>
				以精準的眼光選地，用溫柔的心做建築，坐擁集團硬實力，仔細的了解在地需求，不疾不徐的把房子做到最好，以慢成就細心精工，成為每個顧客最穩固的靠山、不變的依靠。
			</div>
			<div class="t6-m">
				<div class="t6" data-aos="fade-up" data-aos-delay="0">
					<span>經典建案：</span><br v-if="isMobile"/>
					2015 南港｜東方金鑽<br />
					2017 汐止｜宏璟麗園<br />
					2018 土城｜日月光<br />
					2019 新莊｜宏景榮華<br />
					2019 台北｜帝璟苑
				</div>
				<img src="@/section/s6/cmyk.png" class="cmyk" alt="" srcset="">
			</div>
		</div>
		<div class="slide-box">
			<div class="pagi">
				<span v-for="img, i in imgs" :class="{ 'active': i == currentIdx }" @click="splide.go(i)"></span>
			</div>
			<Slide ref="splide"  :arrow_m="true" :gap="20" :imgs="imgs" :w="665" :h="673" :w_m="311" :h_m="314" :dot="false"
				@slideIndex="onMoved" />
		</div>
		<div class="t" v-if="isMobile">
			<img class="t1" src="@/section/s6/brand.png" alt="" srcset="" data-aos="fade-up" data-aos-delay="0">
			<div class="t-m">
				<div class="t2" data-aos="fade-up" data-aos-delay="200">三步慢慢</div>
				<div class="t3" data-aos="fade-up" data-aos-delay="400">光和樹住進家</div>
			</div>
		</div>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s6 {
	@apply w-full relative flex items-center justify-center;
	height: size(949);
	padding: 0 size(277);
	gap: size(98);
	background: #A77C22;

	.text-box {
		@apply text-white;

		.t {
			@apply w-full flex flex-col items-start justify-center whitespace-nowrap;

			.t1 {
				width: size(251);
			}

			.t-m {
				@apply flex items-end justify-center leading-none;
				gap: size(24);

				.t2 {
					@apply font-['Noto_Serif_TC'];
					font-size: size(64);
					font-weight: 500;
					letter-spacing: size(5.76);
				}

				.t3 {
					font-size: size(48);
					font-family: Noto Sans TC;
					font-weight: 500;
					letter-spacing: size(4.32);
				}
			}
		}

		.t4 {
			font-size: size(32);
			font-weight: 900;
			letter-spacing: size(2.88);
			margin-top: size(75);
		}

		.t5 {
			font-size: size(17);
			font-weight: 500;
			line-height: size(30);
			letter-spacing: size(1.53);
			width: size(595);
		}

		.t6-m {
			@apply flex items-center justify-between;
			margin-top: size(39);

			.t6 {
				span {
					@apply block;
					font-size: size(20);
					font-weight: 700;
					line-height: size(30);
					letter-spacing: size(1.8);
				}

				font-size: size(17);
				font-weight: 500;
				line-height: size(30);
				letter-spacing: size(1.53);
			}

			.cmyk {
				width: size(145);
			}
		}
	}

	.slide-box {
		@apply relative;
		width: size(665);
		height: size(673);

		.pagi {
			@apply flex items-center justify-center absolute left-0 z-10 w-full;
			gap: size(9);
			bottom: size(14);

			span {
				@apply block cursor-pointer hover:opacity-50;
				width: size(9);
				height: size(9);
				background-color: #D9D9D9;

				&.active {
					background-color: #A77C22;
				}
			}
		}
	}

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
	.s6 {
		@apply w-full relative flex flex-col-reverse items-start justify-end;
		height: auto;
		padding: sizem(33) sizem(31);
		gap: 0;

		.t {
			@apply text-white;

			.t1 {
				width: sizem(129);
			}

			.t-m {
				@apply flex items-end justify-center leading-none;
				gap: sizem(12);
				margin-top: sizem(10);

				.t2 {
					@apply font-['Noto_Serif_TC'];
					font-weight: 500;
					font-size: sizem(22);
					letter-spacing: sizem(2);
				}

				.t3 {
					font-family: Noto Sans TC;
					font-weight: 500;
					font-size: sizem(15);
					letter-spacing: sizem(1.35);
				}
			}
		}

		.text-box {
			@apply text-white;

			.t4 {
				font-size: sizem(14);
				font-weight: 900;
				letter-spacing: sizem(1.26);
				margin-top: sizem(17);
			}

			.t5 {
				font-size: sizem(13);
				font-weight: 500;
				line-height: sizem(20.41);
				letter-spacing: sizem(1.53);
				width: 100%;
				margin-top: sizem(10)
			}

			.t6-m {
				@apply flex items-end justify-between;
				margin-top: sizem(39);

				.t6 {
					span {
						@apply block;
						font-size: sizem(13);
						font-weight: 700;
						line-height: sizem(20.41);
						letter-spacing: 1;
					}

					font-size: sizem(13);
					font-weight: 500;
					line-height: sizem(20.41);
					letter-spacing: 1;
				}

				.cmyk {
					width: sizem(79);
				}
			}
		}

		.slide-box {
			@apply relative;
			width: sizem(311);
			height: sizem(314);
			margin-top: sizem(25);

			.pagi {
				@apply hidden;
			}
		}
	}
}
</style>

<script setup>
import Slide from "@/components/slide.vue";
import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());

const splide = ref(null)
const currentIdx = ref(0)
const imgs = [
	{
		img: new URL("../section/s6/1.jpg", import.meta.url).href,
		caption: "2018 土城｜日月光",
	},
	{
		img: new URL("../section/s6/2.jpg", import.meta.url).href,
		caption: "2019 台北｜帝璟苑",
	},
]
const onMoved = (idx) => {
	currentIdx.value = idx;
}


</script>
