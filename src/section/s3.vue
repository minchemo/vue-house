<template>
	<article class="s3 relative">
		<div class="title">
			<span class="number font-['Lusitana']"  data-aos="fade-up" data-aos-delay="200">{{ currentIdx + 1 }}</span>
			<span class="t" v-html="items[currentIdx].t1"  data-aos="fade-up" data-aos-delay="400"></span>
		</div>
		<Splide ref="splide" :options="{
			arrows: false,
			pagination: false,
			type: 'loop',
			autoplay: true,
			interval: 7000,
			perPage: $isMobile() ? 3 : 7,
			padding: '10%',
			focus: 'center',
			gap: $isMobile() ? 0 : 0,
			isNavigation: true,
			wheel: true,
			updateOnMove: true
		}" @splide:move="move" class="slide-box">
			<SplideSlide class="slide" v-for="img, i in items">
				<div class="icon">
					<img loading="lazy" :src="img.img" alt="" srcset="">
				</div>
			</SplideSlide>
		</Splide>
		<div class="info flex flex-col items-center justify-center">
			<div class="t1" data-aos="fade">永康首選春福 十大必BUY優勢</div>
			<div class="t2" data-aos="fade" data-aos-delay="200" v-html="items[currentIdx].t2"></div>
		</div>
		<img v-if="!$isMobile()" class="mask" src="@/section/s3/bg2.png" alt="" srcset="">
		<img v-else class="mask" src="@/section/s3/bg2m.png" alt="" srcset="">
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
	width: 100%;
	height: size(1080);
	background-image: url(@/section/s3/bg.jpg);
	background-size: cover;

	
    .slide-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
		z-index: 10;
        .slide {
            // width: size(200);
            height: size(240);
            display: flex;
            align-items: center;
            justify-content: center;
            .icon {
				position: relative;
                width: size(147.8);
                height: size(147.8);
                border-radius: 999px;
                display: flex;
                align-items: center;
                transition: all .3s;
                justify-items: center;
                background: #A19C9C;
                img {
                    max-width: 100%;
					// width: 100%;
                    max-height: 100%;
					filter: invert(23%) sepia(74%) saturate(770%) hue-rotate(300deg) brightness(46%) contrast(92%);
                }
            }
            &.is-active {
                .icon {
                    width: size(177.36);
                    height: size(177.36);
					box-shadow: size(6) size(6) size(10) rgba(0, 0, 0, 0.5);
                    background: #803031;
					img {
                    	max-width: 150%;
						// width: 150%;
						filter: unset;
					}
                }
            }
            &:hover {
                .icon {
                    background: #527a6b;
					box-shadow: size(6) size(6) size(10) rgba(0, 0, 0, 0.5);
                    background: #803031;
                    cursor: pointer;
					img {
						filter: unset;
					}
                }
            }
        }
    }
    .title {
		@apply absolute z-10 flex flex-col items-center; 
		left: 50%;
		transform: translateX(-50%);
		top: size(128.28);
		color: #803031;
		.number {
			font-weight: 400;
			line-height: 80%;
			font-size: size(250);
		}
		.t {
			font-weight: 500;
			font-size: size(46);
			line-height: 100%;
			text-align: right;
			letter-spacing: 0.4em;
			margin-right: -0.4em;
			display:block;
		}
    }
    .info {
        position: absolute;
        top: size(665.42);
        left: 50%;
        transform: translateX(-50%);
		z-index: 1;
        .t1 {
			font-family: 'Noto Serif TC';
			font-weight: 700;
			font-size: size(38);
			text-align: center;
			color: #803031;
            &::after {
                content: '';
                height: size(0.8);
                width: size(75);
                right: 104%;
                background-color: #803031;
                position: absolute;
                top: 60%;
                transform: translateY(-50%);
            }
            &::before {
                content: '';
                height: size(0.8);
                width: size(75);
                left: 104%;
                background-color: #803031;
                position: absolute;
                top: 60%;
                transform: translateY(-50%);
            }
        }
        .t2 {
			margin-top: size(9);
			font-family: 'Noto Serif TC';
			font-weight: 700;
			font-size: size(20);
			line-height: 160%;
			text-align: center;
			color: #555555;
        }
    }
	.mask {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
	height: sizem(604);

    .slide-box {
		top: sizem(280);
        .slide {
            height: sizem(200);
            .icon {
                width: sizem(70.48);
                height: sizem(70.48);
            }
            &.is-active {
                .icon {
                    width: sizem(84.57);
                    height: sizem(84.57);
					box-shadow: sizem(6) sizem(6) sizem(10) rgba(0, 0, 0, 0.5);
					img {
                    	max-width: 100%;
                    	max-height: 100%;
						width: 100%;
						filter: unset;
					}
                }
            }
            &:hover {
                .icon {
					box-shadow: sizem(6) sizem(6) sizem(10) rgba(0, 0, 0, 0.5);
                }
            }
        }
    }
    .title {
		top: sizem(85.58);
		.number {
			font-weight: 400;
			line-height: 80%;
			font-size: sizem(120);
		}
		.t {
			font-size: sizem(21);
		}
    }
    .info {
        top: sizem(360.54);
        .t1 {
			@apply whitespace-nowrap;
			font-size: sizem(23);
            &::after {
				top: 50%;
                height: sizem(0.8);
                width: sizem(75);
            }
            &::before {
				top: 50%;
                height: sizem(0.8);
                width: sizem(75);
            }
        }
        .t2 {
			margin-top: sizem(9);
			font-size: sizem(14);
        }
    }
	.mask {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
	}
  }
}

</style>
<script setup>
import { computed, getCurrentInstance, ref, } from 'vue';

const globals = getCurrentInstance().appContext.config.globalProperties;

const splide = ref();
const currentIdx = ref(0)
const move = (newIdx, prevIdx, destIdx) => {
	currentIdx.value = prevIdx
}

const isMobile = computed(() => globals.$isMobile());
const items = [
	{
		t1: '副都定位',
		t2: '永康緊鄰東區、北區與安南區<br/>成就大台南重點發展潛力新都心',
		img: new URL("../section/s3/1.svg", import.meta.url).href
	},
	{
		t1: '咫尺南科',
		t2: '10min永康交流道輕抵南科園區<br/>近享通勤便利•起漲人口紅利',
		img: new URL("../section/s3/2.svg", import.meta.url).href
	},
	{
		t1: '重劃特區',
		t2: '「鹽行國中重劃區」公共建設、道路拓寬<br/>造就生活適居新風貌',
		img: new URL("../section/s3/3.svg", import.meta.url).href
	},
	{
		t1: '景觀綠馥',
		t2: '區域永康大排規劃水岸綠廊、滯洪公園<br/>鹽水溪河堤低密度景觀',
		img: new URL("../section/s3/4.svg", import.meta.url).href
	},
	{
		t1: '運動文教',
		t2: '近台灣史博館、台南新總圖、國際棒球場<br/>親子休閒兼教育養成',
		img: new URL("../section/s3/5.svg", import.meta.url).href
	},
	{
		t1: '煙波血統',
		t2: '40 年春福機構橫跨建築、飯店經營<br/>用品牌賦予消費者安心保證',
		img: new URL("../section/s3/6.svg", import.meta.url).href
	},
	{
		t1: '豪宅經驗',
		t2: '春福水岸豪宅經驗，從精工規格到空間美學<br/>讓生活感就是價值感',
		img: new URL("../section/s3/7.svg", import.meta.url).href
	},
	{
		t1: '自家營造',
		t2: '自家啟森營造為甲級營造廠<br/>管控品質有保障，恪遵工期安心交屋',
		img: new URL("../section/s3/8.svg", import.meta.url).href
	},
	{
		t1: '保固承諾',
		t2: '結構15 年、防水10年、<br/>地壁磚5 年(專有部分)、景觀1年等20 大保證',
		img: new URL("../section/s3/9.svg", import.meta.url).href
	},
	{
		t1: '深耕台南',
		t2: '春福就愛台南人情味，2019 年起改變市區<br/>如今延續永康，只會更好',
		img: new URL("../section/s3/10.svg", import.meta.url).href
	},
]
</script>
