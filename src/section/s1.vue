<template>
  <article class="s1" id="s1">
    <!-- 

    <img src="./s1/mo.jpg" class="t0">
    <img src="./s1/pc.jpg" class="t0">

    -->



    <div class="txt-box">
     
     <img src="./s1/new/title_m.svg" alt="title" class="title" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1500"  v-if="isMobile">
     <img src="./s1/new/title.svg" alt="title" class="title" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1500" v-else>
    </div>
  <!-- Modal -->
  <input type="checkbox" v-model="s1banner" id="s1banner" class="modal-toggle s1banner" />
  <div class="modal" data-aos="zoom-out" >
    <label for="s1banner" class="absolute top-0 left-0 right-0 bottom-0"></label>
    <div class="relative box">
      <label for="s1banner" class="btn btn-sm btn-circle absolute right-0">✕</label>
      <img src="./s1/new/pc1.jpg" v-if="!$isMobile()">
      <img src="./s1/new/mo1.jpg" v-else>
    </div>
  </div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}


.s1 {
  
  @apply relative w-full h-screen;
  min-height: size(1080);
  max-height: size(1080);
  display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  font-size:size(36);
  //background: #E60012;
  background: url("./s1/new/group.webp") center;
  background-size: 100%;

  .txt-box{
    position: absolute;
      width: size(451);
      right: size(20);
      top: size(53);
     }
    

.box{
  .btn{
    top:-3em;
  }
  img{width:size(800);}
}
}


  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(667);
    max-height: sizem(667);
    font-size:sizem(15);
    background: url("./s1/new/group_m.webp") center;
    background-size: 100%;
    .img{position: absolute;width: sizem(455);right:sizem(-20);
   // top:calc(50% + #{size(320 - 540)});
   bottom:sizem(-15);
    z-index: 99;
    }


    .logo{
    width: sizem(260);
    margin-bottom: 1.3em;
  }

  .txt-box{
    position: absolute;
      width: sizem(315);
      right: sizem(30);
      top: sizem(383);
     }


.txt1{
  font-size:sizem(23);
  margin-bottom: 4.8em;
.t1{ width: 10em;
  letter-spacing:0.2em;
  margin: auto auto .5em auto;
}
.t2{
  font-size:1.2em;
}

.t3{
  font-size:1.3em;
}


}
.box{
  .btn{
    top:-3em;
  }
  img{width:sizem(300);}
}

}

  
}
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';

const s1banner = ref(true);

const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>