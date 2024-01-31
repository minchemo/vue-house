<template>
	<article class="s8">
	 <!--  -->
	 <div class="txt">
	  <h3 class="title" data-aos="fade-up" data-aos-delay="0">擁抱三重最開闊的天際</h3>
	  <h4 class="subtitle" data-aos="fade-up" data-aos-delay="0">A2機捷三重站+新北大都會公園</h4>
	  <p class="desc" data-aos="fade-up" data-aos-delay="100">當水岸遇見公園，當三重開始懂得森活；<br v-if="$isMobile()">世界台北都在掌心悠遊。</p>
		</div>
	  <Fullview />
	  <div class="caption">空拍實景</div>
	</article>
  </template>
  
  <style lang="scss" >
  @import '@/assets/style/function.scss';
  
  .s8 {
	@apply relative overflow-hidden bg-[#008DD5];
	width: 100%;
	height: size(1310);
	padding-top:0;
	font-size:size(18);
  .caption{
      top: auto;
      bottom: .5em;
	}
	.txt {
	  @apply absolute z-10;
	  top: 8em;
	  left:0;right: 0;text-align: center;
	  font-weight: 500;
	  letter-spacing: 0;
	  line-height: 1.7;
	  color: #fff;
	  //text-shadow: 0 0 5px
  .title{font-size: 2.65em;
    font-weight: 300;margin: 0;}
  .subtitle{
    font-size: 1.35em;
    font-weight: 500;
    margin: .7em 0 0em;
    // line-height: 1.5;
  }
	.desc{
    font-weight: 300;
	}
	}
  }
  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
  
  @media screen and (max-width: 767px) {
  
	.s8 {
	  height: sizem(730);
	font-size:sizem(14);
	.txt {
	  top: 4em;
  .title{font-size: 1.55em;}
  .subtitle{
    font-size: 1.1em;
    font-weight: 500;
    margin: .5em 0 .3em;
  }
	.desc{
	  font-size: 1em;
	  letter-spacing: .06em;
	}
	}
	.caption {
	  font-size: sizem(12);
	}
	}
  }
  </style>
  <script setup>
  import { computed, getCurrentInstance, ref } from 'vue';
  import Fullview from '../components/fullview.vue';
  const globals = getCurrentInstance().appContext.config.globalProperties;
  
  const isMobile = computed(() => globals.$isMobile());
  </script>
  