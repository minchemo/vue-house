<template>
  <div class="section3">
    <div  data-aos="fade" data-aos-duration="1000" data-aos-delay="0"   class="title">
     <h3 class="title1">國門新都心 超越副都心<span>預見2025開發完成 預約增值美景</span></h3>
     <p class="desc1">398公頃城市願景，超越副都心的城市氣魄，這裡是未來機場捷運跨入新北市的門面，更是新北都會中心點，迎接2025開發完成，預約不可限量增值前景。</p>
     <p class="desc2"><b>旗艦開發：</b>398公頃規模超越副都心<br>
<b>預約完工：</b>第一期2025年預定完成<br>
<b>寬闊綠地：</b>公園綠地超過41公頃</p>
    </div>
    <GodModView />
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section3 {
  height: auto;
  .title{
    position: absolute;
    z-index: 1;
    top:1.65em;
    right: 0;
    width: 83.5em;
    text-align: left;
    line-height: 1.6;
    font-size: calc(2000vw / 1920);
    display: flex;
    justify-content:space-between;

    .title1{
      font-size:2.8em;
      color: #FFF000;
      font-family: "Noto Serif TC";
      flex: 0 0 11em;
      white-space: nowrap;
      line-height: 1.3;
      span{
        display:block;
        font-size:0.73em;
        color: #FFF;     
        font-family: 'Noto Sans TC', serif;
        font-weight: 500;
        transform: scaleX(0.96);
        transform-origin: 0 0;
      }
    }
    .desc1{
      font-size: 1.1em;
      color: #FFF;    
      flex: 0 0 23em;
      padding: 0.2em 0 0 0;
      line-height: 1.9;
      text-align: justify;
      margin: 0 2em 0 0;
    }
    .desc2{
      color: #000;
      background: #fff000;  
      flex: 1 1;   
      height: 100%;
      margin: 0.6em 0 0 0;
      padding: 0.3em;
      b::before{content: "";width: 0.6em;height: 0.6em;margin: 0 0.3em;background: currentColor;display: inline-block;} 
    }
    
    }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section3 {
    height: auto;
  max-height:initial;
  min-height:0;
  
      .title{
    width:22.6em;
    font-size: calc(1500vw / 375);
    top:2.2em;
  //  flex-direction:column;
   flex-wrap: wrap;
    .title1{
      font-size:1.96em;
   flex: 0 0 100%;
    }
    .desc1{
   flex: 0 0 89%;
    line-height: 1.55;margin: 0.7em 0 0.5em 0;

    }
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
import GodModView from "@/components/GodModView";

export default {
  name: "section3",
  components: {
    GodModView,
  },
  data() {
    return {
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
