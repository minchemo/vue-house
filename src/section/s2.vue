<template>
  <article class="s2" id="s2">
    <div class="box box1">
      <h2 class="title font-['noto_Serif_tc']">一、基本資料</h2>
      <div class="list" v-for="item in list1">
        <span class="t1" v-html="item[0]"></span>
        <span class="t2" v-html="item[1]"></span>
      </div>

    </div>
    <div class="box box2">
      <h2 class="title font-['noto_Serif_tc']">二、辦理歷程</h2>
      <section class="list ti" v-if="!$isMobile()">
        <span class="t1">執行情形</span>
        <span class="t2">時間</span>
        <h3 class="t3">內容</h3>
        <span class="t4">相關檔案</span>
      </section>
      <section class="list" v-for="item in list2">
        <a :href="item.link" class="link" v-if="item.link&&!item.link.startsWith('#')"></a>
        <span :class="['t1', item.t1[0]]" v-html="item.t1[1]"></span>
        <span class="t2" v-html="item.t2"></span>
        <h3 class="t3">{{item.t3}}<span class="t4_a" v-if="item.link&&$isMobile()"></span><span class="t4" v-if="item.link">下載</span></h3>
        
      </section>
      <!-- <a class="download" href="https://drive.google.com/drive/folders/1Wk9oMkyJczWKVRVwAVBsisMJgP1w-0vM?usp=share_link" target="_blank">公開資料下載</a> -->
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden w-full;
font-size: 15px;
line-height: 1.5;
padding: size(98) 0;
}
.box{margin: auto;max-width:900px;width: 85%;
display: flex;
flex-direction: column;text-align: justify;
align-items: center;}
.title{
font-size: 2.8em;
font-weight: 900;
letter-spacing: 0.1em;
margin: auto auto .5em auto;
width: 100%;
color: #9B1E44;}
.list{
display: flex;
flex-direction: row;
align-items: baseline;
width: 100%;}
.box1{border-top:1px solid #0003;border-bottom:1px solid #0003;padding: 2em 0;gap: 1em;
  .t1{
  font-weight: 700;flex: 0 0 8em;
  color: #9B1E44;
  &::before{content: "";width:.6em;height: .6em;border-radius: 50%;background: currentColor;display: inline-block;margin: 0 0.8em 0.1em 0;}
  }
}
.box2{
  margin:5em auto;
  .list{border-bottom: 1px solid #CCC;padding: 0.67em 0;gap:0.67em;position: relative;
  &.ti{background:#BCBCBC;color: #fff;
  .t1,.t4{background: none;font-weight: 500;}}}
  .link{position: absolute;top: 0;left: 0;width: 100%;z-index: 2;height: 100%;
    transition:background .2s;
    &:hover{background: #0001;}
    ~ .t3 .t4{background: #9B1E44;}
  }
  .t1{flex: 0 0 6em;font-weight: 700;background: #fff;border-radius:0.2em;text-align: center;
    &.v1{color: #470;}
    &.v2{color: #d90;}

  }
  .t2{flex: 0 0 6em;}
  .t3{flex: 1;display:flex;justify-content:space-between; align-items:flex-start;gap: .5em;}
  .t4_a{width: 5em;display: inline-block;}
  .t4{
    background: #aaa;
    //background: #9B1E44;    
    color: #fff;border-radius:0.2em;text-align: center;display: inline-block;min-width: 5em;flex: 0 5em;}
.download{display: block;background: #9B1E44;
  color: #fff;width: 10em;padding: .5em 0;
  text-align: center;margin: 1em auto;border-radius: .5em;
  letter-spacing: 0.06em;transition:transform .5s,background 1s;
&:hover{
background: #790024;transform: scale(1.2);
}
}

}

// @media screen and (max-width: 767px) { 平常我們手機的設定
@media screen and (max-width: 767px) {
  .s2 {
font-size:13px;
padding: sizem(90) 0;

.title{
font-size: 2em;}
.box2{
.list{
  flex-wrap: wrap;
 }
 .t2{flex: 0 1 calc(100% - 7em);}
  .t3{display: block;}
  .t4{position: absolute;right: 0;bottom: .6em;}
 }}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const list1 = [
        ["實施者", "統一工商綜合區開發股份有限公司"],
        ["基地位置", "更新單元位於新北市永和區，北側臨環河西路二段，東側以保福路三段為界，西側以新生路121巷為界，南側臨保安路，非屬完整街廓"],
        ["更新地區", "位於99年4月29日公告實施「擬定臺北縣永和市大陳義胞地區都市更新計畫劃定都市更新地區案」範圍內"],
        ["基地面積(㎡)", "10,673.99㎡"],
        ["使用分區", "住宅區"],
        ["更新規劃", "城林都市更新股份有限公司"],
        ["建築設計", "何慶三建築師事務所"],
        ["鑑價機構", "宇豐不動產估價師聯合事務所"],
    ];

const list2 = [
  {
    t1: ["v1", "已完成"],
    t2: "110/10/5",
    t3: "統一工商綜合區開發股份有限公司獲選為大陳更新單元5最優申請人",
    link:"",
  },
  {
    t1: ["v1", "已完成"],
    t2: "110/12/21",
    t3: "新北市政府與統一工商綜合區開發股份有限公司簽訂實施契約",
    link:"",
  },
  {
    t1: ["v2", "準備中"],
    t2: "113/03/12",
    t3: "自辦公聽會",
    link:"https://drive.google.com/drive/folders/12l5cKU4cLSsySCx_WGbTXDvtKjJiQDQW?usp=sharing",
  },  
  //link 設定#開頭  不會另開 放網址才會另開視窗
];

</script>