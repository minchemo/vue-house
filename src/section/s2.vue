<template>
  <article class="s2">
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
        <a :href="item.link" target="_blank" class="link" v-if="item.link"></a>
        <span :class="['t1', item.t1[0]]" v-html="item.t1[1]"></span>
        <span class="t2" v-html="item.t2"></span>
        <h3 class="t3">{{item.t3}}<span class="t4_a" v-if="item.link&$isMobile()"></span><span class="t4" v-if="item.link">下載</span></h3>
        
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
  }
  .t1{flex: 0 0 6em;font-weight: 700;background: #fff;border-radius:0.2em;text-align: center;
    &.v1{color: #470;}
    &.v2{color: #d90;}

  }
  .t2{flex: 0 0 6em;}
  .t3{flex: 1;display:flex;justify-content:space-between; align-items:flex-start;gap: .5em;}
  .t4_a{width: 5em;display: inline-block;}
  .t4{background: #9B1E44;color: #fff;border-radius:0.2em;text-align: center;display: inline-block;min-width: 5em;flex: 0 5em;}
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
        ["基地位置", "本案位於臺北市中正區仁愛路二段、仁愛路二段92巷、臨沂街57巷及臨沂街所圍街廓內之東側，以及連雲街6巷、仁愛路二段92巷、臨沂街57巷及未開闢道路所圍之完整街廓，屬跨街廓。"],
        ["都市計畫", "本案位於111年6月20日府都規字第11130026221號公告「臺北市中正區都市計畫通盤檢討(細部計畫)案」計畫範圍內。"],
        ["基地面積(㎡)", "2,391.00㎡"],
        ["使用分區", "第三之二種住宅區、第三種住宅區及道路用地"],
        ["實施方式", "協議合建"],
        ["都更規劃", "弘傑城市開發股份有限公司"],
        ["建築設計", "陳朝雄建築師事務所"],
        ["鑑價機構", "宇豐不動產估價師聯合事務所"],
    ];

const list2 = [
  {
    t1: ["v1", "已完成"],
    t2: "112/06/20",
    t3: "召開範圍內說明會及鄰地協調會",
    link:"",
  },

  {
    t1: ["v1", "已完成"],
    t2: "112/07/06",
    t3: "自行劃定更新單元申請送件",
    link:"",
  },

  {
    t1: ["v1", "已完成"],
    t2: "112/08/09",
    t3: "更新處函發退補正、公辦鄰地法令說明會開會通知單",
    link:"",
  },

  {
    t1: ["v1", "已完成"],
    t2: "112/08/24",
    t3: "召開公辦鄰地法令說明會",
    link:"",
  },
  {
    t1: ["v1", "已完成"],
    t2: "112/09/20",
    t3: "自行劃定更新單元補正送件",
    link:"",
  },
  {
    t1: ["v1", "已完成"],
    t2: "112/10/18",
    t3: "臺北市都市更新及爭議處理審議會第42次專案小組會議通過",
    link:"",
  },
  {
    t1: ["v1", "已完成"],
    t2: "112/11/09",
    t3: "自行劃定更新單元補正送件",
    link:"",
  },
  {
    t1: ["v1", "已完成"],
    t2: "112/11/09",
    t3: "自行劃定更新單元補正送件",
    link:"",
  },
  {
    t1: ["v1", "已完成"],
    t2: "112/11/22",
    t3: "自行劃定更新單元核准",
    link:"",
  },
  {
    t1: ["v1", "已完成"],
    t2: "112/12/22",
    t3: "召開自辦公聽會 自辦公聽會公告",
    link:"https://drive.google.com/file/d/1zzGhi3VHiveMBeeKvJ_KFJ7DqOwruXfJ/view?usp=drive_link",
  },
  {
    t1: ["v1", "已完成"],
    t2: "112/12/22",
    t3: "召開自辦公聽會 自辦公聽會簡報",
    link:"https://drive.google.com/file/d/1RJdD2ymIzqkgEsy9hUvxQ6uhz5Mdiolj/view?usp=drive_link",
  },

  /*
  {
    t1: ["v1", "已完成"],
    t2: "2022/06/08",
    t3: "自辦公聽會",
    link:"https://drive.google.com/drive/folders/1Wk9oMkyJczWKVRVwAVBsisMJgP1w-0vM?usp=share_link",
  },
  {
    t1: ["v1", "已完成"],
    t2: "2022/08/18",
    t3: "申請事業及權變計畫報核",
    link:"",
  },
  {
    t1: ["v2", "作業中"],
    t2: " ",
    t3: "主管機關書面審查中",
    link:"",
  },
  */
];
</script>