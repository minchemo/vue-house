<template>
  <article class="s2">
	<ul class="txt">
		<li>世界級收藏家都知道</li>
		<li>唯一和絕版，有錢也買不到<br />　</li>
		<li>中華路X中原路十字軸</li>
		<li>面迎中港清溪川第一排</li>
		<li>雙面臨路黃金方正角地</li>
		<li>百利唯一地，眾勢成一王</li>
		<li>新莊副都心這一席不會再有了<br /> </li>
		<li>因為視野不一樣、格局不一樣</li>
		<li>正如同全世界沒有兩個你</li>
		<li>也沒有兩部一模一樣的哈雷</li>
		<li>在豪宅大坪數限定的唯一角地</li>
		<li>成就絕無僅有的小坪數和你的不一樣<br /> </li>
		<li>副都中心最精華的0.00187平方公里</li>
		<li>蘇富比也買不到的才值得你的收藏<br /> </li>
	</ul>
	<img src="./s1/title.svg" class="title" alt="" />
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden flex items-center justify-center text-white;
  width: 100%;
  height: auto;
  padding:size(90) 0 size(200) 0;
  font-size:size(25);
  gap:size(95);
  .txt{margin: auto 0 auto size(-45);
	font-weight: 400;line-height: 1.55;letter-spacing: 0.1em;
  filter: drop-shadow(0 0 7px rgba(0, 0, 0, 1))}
  .title{margin: auto 0;
  width: size(457);
  filter: drop-shadow(0 0 7px rgba(0, 0, 0, 1))
}
  // flex-direction: column;
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  @apply flex-col;
  padding:sizem(110) 0 sizem(60) 0;
  font-size:sizem(14);
  gap:sizem(35);
  .txt{margin: auto 0 auto 0;line-height: 1.7;text-align: center;}
  .title{
  width: sizem(190);}
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
