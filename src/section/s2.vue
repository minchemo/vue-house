<template>
  <article class="s2">
	<ul class="txt">
		<li data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">通膨時代，買屋不能只看CP值</li>
		<li data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">會賺的房子＞划算的房子<br />&nbsp;</li>
		<li data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">麗寶新購屋經濟學</li>
		<li data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">新創「好室成雙」經濟學</li> 
		<li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">開創1+1＞無限的新時代</li>
		<li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">讓您一次獲得</li>
		<li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">「成家屋主」+「收租房東」兩種身份</li>
		<li data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">成家後立即收租，邊住邊賺</li>
		<li data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">房貸輕盈了，才是真樂活<br />&nbsp;</li>
		<li data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">坐擁河岸公園景觀、一橋迅抵市心</li>
		<li data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">現在的幸福、未來的增值都為您準備好了</li>
		<li data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1000">就差您前來接待中心的那一步</li>
		<li data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000">讓好事成雙發生，</li>
		<li data-aos="fade-up" data-aos-delay="1300" data-aos-duration="1000">預約未來的雙倍幸福</li>
	</ul>
	<img src="./s1/title.svg" class="title" alt="title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" />
  <img src="./s1/3.svg" class="img3" alt="" />
  <img src="./s1/3.svg" class="img4" v-if="$isMobile()" alt="" />
  <img src="./s1/style.svg" class="style" alt="" />
  <img src="./s1/style.svg" class="style2" alt="" />
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-visible flex items-center justify-center text-white;
  width: 100%;
  height: auto;
  padding:size(90) 0 size(200) 0;
  font-size:size(25);
  gap:size(305);
  .txt{margin: auto 0 auto size(-45);
	font-weight: 400;line-height: 1.55;letter-spacing: 0.1em;
  //filter: drop-shadow(0 0 7px rgba(0, 0, 0, 1))
  z-index: 99;
  }
  .title{
  z-index: 99; 
  margin: auto 0;
  width: size(457);
  //filter: drop-shadow(0 0 7px rgba(0, 0, 0, 1))
}

.style{
  position: absolute;
  width: size(130);
  left:size(-50);
  bottom:size(350);
  transform: translateX(80px) scale(1.3, 1);
  animation: an1 8s ease-in-out alternate infinite;
}

.style2{
  position: absolute;
  width: size(130);
  right:size(30);
  bottom:size(-300);
  transform: translateX(80px) scale(1.3, 1);
  animation: an1 12s ease-in-out alternate infinite;
}

.img3{
	position: absolute;
	top:size(-120);
	right:size(-50);
	width: size(1100);
	transform: skew(-5deg, 5deg);
	transform-origin: 100% 10%;
	animation: an1 3s ease-in-out alternate infinite;
  }

  @keyframes an1 {
	to{transform: scale(1);}
}
  // flex-direction: column;
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  @apply flex-col;
  padding:sizem(50) 0 sizem(60) 0;
  font-size:sizem(14);
  gap:0;
  .txt{margin: auto 0 sizem(125) 0;line-height: 1.7;text-align: center;}
  .title{
  width: sizem(250);}

  .img3{
	position: absolute;
	top:sizem(-60);
	right:sizem(-130);
	width: sizem(650);
  }

  .img4{
	position: absolute;
	top:sizem(440);
	right:sizem(-20);
	width: sizem(410);
  }

  .style{
  width: sizem(60);
  left:sizem(-10);
  bottom:sizem(280);
}

.style2{
  width: sizem(60);
  right:sizem(30);
  bottom:sizem(-50);
}


  }

  
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const getImg = (path) => {
  if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
  return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const options = {
  rewind: false,
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

/*
const imgs = [
  {
    img:new URL("./s2/1.jpg", import.meta.url).href ,
    title:"邂逅歐式別墅心生活",
    desc:"有天有地、有大樹有鳥語，夢享人生現在開始",
    caption: "情境示意圖",
  },
  {
    img:new URL("./s2/2.jpg", import.meta.url).href ,
    title:"恣意徜徉私家花園",
    desc:"聽風和樹低語、閱讀四季表情，微笑領略新幸福",
    caption: "情境示意圖",
  },
]
*/
</script>
