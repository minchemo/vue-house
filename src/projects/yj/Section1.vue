<template>
  <div class="section1">
    <div class="main">
      <img class="building-1" src="./s1/building-1.png" alt="" />
      <img
        class="building-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        src="./s1/building-2.png"
        alt=""
      />
      <img
        class="building-3"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
        src="./s1/building-3.png"
        alt=""
      />
      <img
        class="train fadejs"
        data-aos="fade-left"
        data-aos-delay="1200"
        fadejs-data="opacity: 0.92"
        src="./s1/train.png"
        alt=""
      />
      <img
        class="tree"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="1000"
        src="./s1/tree.png"
        alt=""
      />
      <img
        class="cloud"
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="3000"
        src="./s1/cloud.png"
        alt=""
      />
      <img
        v-if="isMobile"
        class="cloud-2"
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="3000"
        src="./s1/cloud-2.png"
        alt=""
      />
      <img
        class="t1"
        data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-duration="1000"
        src="./s1/t1.png"
        alt=""
      />
<svg version="1.1" id="圖層_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" class="t2" viewBox="0 0 775.5 354.4" enable-background="new 0 0 775.5 354.4" xml:space="preserve">
<g>
	<g class="svgt1">
		<path fill="#FFFF00" d="M140.2,83.6c-1.3-3.3-3-7.1-5-11.3c-55.1,5.3-64.9,6.3-72,9.3c-0.8-3-2.8-8.9-4.8-14.6l-7,3.3
			c-1.2-4.5-3.1-10.4-5.3-16.7v105.8H22.3V66c-1.2,7.3-2.6,14.2-4.1,19.9L0,79.3C3.6,68,6.5,49.5,7.6,35.4l14.7,2V2.2h23.8v31.9
			l11.4-4.8c2.6,6.1,5.8,13.4,8.3,20l0.2-0.2c3.8-5.5,14.6-26.5,20.7-46.8l25.2,6.5c-6.1,15.7-14.4,31.6-22.7,45l34.1-2.5
			c-3.6-5.8-7.4-11.6-11.3-16.6l19-9.9c11.8,14.6,23.8,33.8,29.5,47L140.2,83.6z M66.4,88.6h80.1v70.7h-23v-6.5H88.2v6.5H66.4V88.6z
			 M88.2,109.6v22.2h35.3v-22.2H88.2z"
         data-aos="fade" data-aos-delay="600" />
		<circle fill="#FFFF00" cx="80" cy="200.9" r="12.1" 
        data-aos="fade" data-aos-delay="400"  />
	</g>
	<g class="svgt2">
		<path fill="#FFFF00" d="M346.6,78c-6,4.6-12.6,9.3-19,13.7c6,17.9,17.5,33.3,35.6,40.7c-5.3,4.5-12.4,13.6-15.7,19.7
			c-19.2-9.6-31.1-26.5-38.9-48.3l-3.3,2c4,19.2,0.2,37.4-8.1,44.9c-6.1,6.6-11.9,8.6-21.2,8.8c-3.8,0.2-8.4,0-13.1-0.2
			c-0.3-6.3-2.2-15.2-6.1-21.7c-12.7,6.1-26.3,11.6-38.4,15.4c-2.6-6-7.8-14.6-12.4-19.9c26.2-5.6,57.6-19,74.2-32.4
			c-0.3-1.2-0.8-2.3-1.3-3.5c-16.7,10.1-40.4,20.4-58.9,26c-2.6-5.3-7.4-13.4-11.8-18.4c20.4-4,47-13.6,61.4-22.7
			c-0.8-1-1.7-2-2.6-3c-14.1,7-29.8,12.4-44.9,16.2c-2.3-4.6-8.3-14.2-12.1-18.7c17.4-3.1,35.3-8.1,49.5-15.1h-22.8V41.4h91.7v20.2
			h-34.4c-2.6,2.5-5.6,4.8-8.9,7c5.5,5.3,9.8,11.1,13.1,17.4c10.4-7.4,21.2-16.2,28.8-23.8L346.6,78z M233.6,54.1h-23.5V14.4h59.1
			c-1-2.5-2-5-3-7.1L291.8,0c2.3,4.3,5,9.6,6.6,14.4h57.6v39.7h-24.7v-18h-97.8V54.1z M279.4,133.1c1.7-1.8,3-5.5,3.5-10.3
			c-7.4,5-15.9,9.6-24.7,13.9c5.1,0.5,9.4,0.7,13.1,0.7C274.9,137.4,277.4,136.7,279.4,133.1z"
         data-aos="fade" data-aos-delay="1000" />
		<circle fill="#FFFF00" cx="280.8" cy="200.9" r="12.1"
         data-aos="fade" data-aos-delay="800" />
	</g>
	<g class="svgt3">
		<path fill="#FFFF00" d="M471.1,104.6c-4.8,1.3-9.8,2.5-14.7,3.8v51h-22.7V114l-20.2,5l-5.8-24.5c7.3-1.2,16.2-2.8,26-4.8V56.3
			h-7.1c-1.5,7.6-3.1,14.6-5.1,20.2c-3.8-2.2-12.2-5.1-16.7-6.5c5.1-13.2,7.9-34.8,9.1-54.6l17.7,2.6c-0.3,5.1-0.8,10.3-1.5,15.4
			h3.6V2.2h22.7v31.3h12.9v22.8h-12.9v28.8l12.2-2.6L471.1,104.6z M502.2,36.7h-29.3V15.1h29.3V2h23.8v13.1H558v21.7h-31.9V47h25.5
			v22.2h-73.2V47h23.8V36.7z M561.6,103.5h-14.1v30c0,11.4-2,17.7-9.6,21.4c-7.3,3.6-17,4.1-29.5,4.1c-0.8-7-4.1-17-7.1-23.7
			c7.1,0.3,16.4,0.3,19,0.3c2.5,0,3.3-0.5,3.3-2.6v-29.5h-24.8c6.5,7,13.7,15.7,17.2,22l-18.9,12.4c-3.3-7-11.4-17.7-18-25.5
			l14.2-8.9h-20.5v-22h50.8V72h23.8v9.4h14.1V103.5z"
         data-aos="fade" data-aos-delay="1400" />
		<circle fill="#FFFF00" cx="481.5" cy="200.9" r="12.1"
         data-aos="fade" data-aos-delay="1200" />
	</g>
	<g class="svgt4">
		<path fill="#FFFF00" d="M728,132.4c11.4,0,25-1,32.4-2.5c0.7,5.8,2,16.7,3.1,22.3c-7.3,2-23.2,2.2-36.9,2.2h-61.1
			c-31.6,0-46.2-9.6-46.2-43.7V28H613V7h142.4v21H642.9v84.4c0,14.6,4.1,20,20.7,20H728z M647.2,80.1h47.2v46h-47.2V80.1z
			 M730.8,75.1h-67.2V33.9h67.2V75.1z M666.4,110.4h7.6V95.8h-7.6V110.4z M707,49.2h-21v10.6h21V49.2z M748,126.1h-48.3v-46H748
			V126.1z M727.3,95.8h-8.1v14.6h8.1V95.8z"
         data-aos="fade" data-aos-delay="1800" />
		<circle fill="#FFFF00" cx="689.2" cy="200.9" r="12.1"
         data-aos="fade" data-aos-delay="1600" />
	</g>
	<path fill="#FFFFFF" d="M53.6,326.5c16.3-14.4,24.7-25.1,24.7-34.2c0-6-3.2-10.1-9.4-10.1c-4.3,0-7.9,2.8-10.9,6.1l-4.9-4.8
		c4.7-5.1,9.6-8.2,16.8-8.2c10.1,0,16.6,6.6,16.6,16.6c0,10.6-8.5,21.7-20.2,32.8c2.8-0.3,6.3-0.5,9-0.5h13.8v7.3H53.6V326.5z
		 M95.7,307.1h14.8v6.4H95.7V307.1z M115.2,324.9l4.2-5.5c3.2,3.3,7.3,6.1,13,6.1c6.2,0,10.5-3.4,10.5-9.1c0-6.1-3.9-10.1-16.3-10.1
		v-6.4c10.9,0,14.5-4.1,14.5-9.7c0-4.9-3.2-7.9-8.5-8c-4.3,0.1-7.9,2.2-11,5.2l-4.5-5.4c4.3-3.9,9.4-6.7,15.8-6.7
		c9.9,0,16.9,5.1,16.9,14.2c0,6.4-3.7,10.8-9.5,13v0.4c6.4,1.6,11.4,6.4,11.4,13.8c0,10-8.3,15.8-18.4,15.8
		C124.5,332.5,118.9,329,115.2,324.9z M195,311.5c-0.2,1.8-0.5,3.4-0.9,5h25.2c0,0-0.1,1.8-0.1,2.6c-1,9.9-1.9,14.2-3.9,16.2
		c-1.4,1.3-3.1,1.8-5.3,1.9c-2,0.2-5.7,0.2-9.6,0c-0.1-1.8-0.9-4.2-1.9-5.8c3.6,0.4,7.1,0.4,8.5,0.4c1.3,0,1.9-0.1,2.6-0.6
		c1-1,1.7-3.6,2.4-9.2h-19.6c-2.9,7-8.5,12.1-19.6,15.5c-0.6-1.6-2.4-4.2-3.8-5.4c14.1-3.8,17.6-10.8,19-20.6h-14.7
		c-1,9.4-3.7,19.3-9.6,26.5c-1-1.4-3.7-4.1-5.1-4.9c7.9-9.9,8.5-24.3,8.5-35.1v-23.6h0.1c16.8-1,36.4-2.9,47.7-5.5l5.3,5.2
		c-12.5,2.8-30.1,4.6-46.2,5.5v3.3h47.7v17h-47.7c0,1.9-0.1,4-0.2,6.2h21.6c-0.7-1.6-1.6-3.3-2.5-4.6l6.7-1.6
		c1.3,1.8,2.5,4.2,3.4,6.2h23.5v5.5H195z M174.1,288.2v6.1h40.8v-6.1H174.1z"
         data-aos="fade" data-aos-delay="1800"/>
	<g class="o1"
         data-aos="fade" data-aos-delay="2000">
		<circle fill-rule="evenodd" clip-rule="evenodd" fill="#FF453C" cx="330.1" cy="304.8" r="49.6"/>
		<g>
			<path fill="#FFFFFF" d="M324.2,311.2c3.8,6.1,8.4,14.2,10.3,19.2l-6.4,3.4c-0.7-1.9-1.7-4.3-3-7c-18.3,6.1-21,7.3-22.8,8.6
				c-0.5-2.1-1.6-5.5-2.8-7.1c1.4-0.7,3.3-2.2,3.3-4.9v-51h29.8v35.7H310v16.7l12.3-3.7c-1.3-2.5-2.6-4.9-4-7L324.2,311.2z
				 M310,278.6v8.3h15.7v-8.3H310z M325.6,302v-8.8H310v8.8H325.6z M363.6,315.7c0,3.4-0.6,5.5-2.8,6.5c-2.3,1.2-5.7,1.3-10.8,1.3
				c-0.2-1.9-1-4.8-2-6.6c3.3,0.1,6.5,0.1,7.4,0.1c1-0.1,1.3-0.4,1.3-1.3v-36.3h-11.5v58.1h-7V273h25.3V315.7z"/>
		</g>
	</g>
	<g class="o2"
         data-aos="fade" data-aos-delay="2200">
		<circle fill-rule="evenodd" clip-rule="evenodd" fill="#19D0C5" cx="444.9" cy="304.8" r="49.6"/>
		<g>
			<path fill="#FFFFFF" d="M429.7,268.7h6.4v68.7h-6.4v-25.7h-6.9v1c0,6.3-0.8,17.3-5.5,24.8c-1.2-1-3.7-2.6-5.2-3.4
				c4-6.6,4.6-16,4.6-21.7v-0.8h-3.9v-6.1h16.9v-9.7H416v-24.3h6.1v18.2h7.6V268.7z M481.3,312.8h-9.1v16c0,3.6-0.7,5.6-3.1,6.7
				c-2.5,1-6.2,1.2-12.1,1.2c-0.2-1.9-1-4.8-2-6.7c4.1,0.2,8,0.2,9.1,0.2c1.2-0.1,1.6-0.3,1.6-1.3v-15.9h-27.1v-6.1h3.3
				c-0.8-1.6-2.3-3.7-3.4-5c7.6-1.8,15.2-5.1,21.4-9.7c-2-2.9-5.3-6.4-8.5-9.3c-3.2,2.2-6.7,4.2-10.2,5.8c-0.9-1.2-3-3.2-4.3-4.3
				c8.6-3.4,16.7-9.7,20.9-15.5l6.7,1.8c-1,1.5-2.4,2.9-3.7,4.3h13.2l1.1-0.2l4.3,2.1c-6.4,16.2-21.1,25.4-36.9,30h23.2v-9.8h6.6
				v9.8h9.1V312.8z M454,293.4c-5.2,0.9-10.1,1.6-14.5,2.4l-1.1-5c4.1-0.4,9.4-1.3,15.3-2.1L454,293.4z M448.7,313.7
				c3.6,3.5,7.7,8.5,9.4,11.8l-5.7,3.5c-1.6-3.4-5.6-8.5-9.1-12.2L448.7,313.7z M455.7,279.7c3.1,2.6,6.3,5.8,8.3,8.5
				c2.8-2.5,5-5.4,6.7-8.5H455.7z"/>
		</g>
	</g>
	<g class="o3"
         data-aos="fade" data-aos-delay="2400">
		<circle fill-rule="evenodd" clip-rule="evenodd" fill="#FF74A2" cx="559.7" cy="304.8" r="49.6"/>
		<g>
			<path fill="#FFFFFF" d="M555.3,273c-5.3,12.2-13.8,24.5-22,32.1c-1.2-1.4-4.3-4.3-6.1-5.8c8.2-6.7,16-17.7,20.5-28.7L555.3,273z
				 M576.4,308c6,8.1,13,18.6,16.6,25.3l-7,3.8c-1-2.2-2.3-4.6-4-7.3c-37.5,2.8-42,3.1-45.3,4.3c-0.3-1.6-1.7-5.5-2.8-7.5
				c2.2-0.6,4.3-2.8,7.2-6.3c3.1-3.3,12.6-16.3,18.6-28.9l8.1,3.3c-6.1,10.9-13.6,21.8-21.1,30.4l31.4-1.9
				c-2.8-4.3-5.7-8.7-8.3-12.4L576.4,308z M577.8,270.5c3.4,11.2,10.6,22.2,19.6,27.7c-1.6,1.6-4.1,4.7-5.4,6.9
				c-8.5-6.4-15.4-16.9-19.5-27.5h-13v-7.1H577.8z"/>
		</g>
	</g>
	<g class="o4"
         data-aos="fade" data-aos-delay="2600">
		<circle fill-rule="evenodd" clip-rule="evenodd" fill="#FFB80B" cx="674.4" cy="304.8" r="49.6"/>
		<g>
			<path fill="#FFFFFF" d="M651.9,297.2v40.2H645v-65.8h27.8v25.6H651.9z M651.9,276.8v5h14.4v-5H651.9z M666.3,292.1v-5.5h-14.4
				v5.5H666.3z M686.1,319.9V336h-6.2v-16.1h-9.1c-0.6,5-3,12.7-9.8,17.2c-1-1.3-3.1-3.1-4.5-4.1c5.5-3.4,7.6-9,8.2-13.1h-8.5v-5.8
				h8.8V307h-7.4v-5.5h36.3v5.5h-7.8v7.1h9.3v5.8H686.1z M679.9,314.2V307H671v7.1H679.9z M706.9,328.9c0,3.8-0.8,5.8-3.2,7
				c-2.4,1.1-6.1,1.3-11.8,1.3c-0.2-1.9-1.2-5-2.2-6.9c3.8,0.1,7.6,0.1,8.8,0.1c1.1-0.1,1.5-0.5,1.5-1.6v-31.5h-21.5v-25.7h28.4
				V328.9z M685.2,276.8v5h14.8v-5H685.2z M700.1,292.2v-5.6h-14.8v5.6H700.1z"/>
		</g>
	</g>
</g>
</svg>


   <!--   <img
        class="t2"
        data-aos="zoom-in"
        data-aos-delay="1600"
        data-aos-duration="1000"
        src="./s1/t2.png"
        alt=""
      /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.svgt1,.svgt2,.svgt3,.svgt4{
  path{transform: translateY(-50%) scale(0.3);
  transform-origin: 50% 100%;}
  circle{transform: scale(0.3);
  transform-origin: 50% 50%;}
  }
  .o1,
  .o2,
  .o3,
  .o4{transform:scaleX(-1)}
  .o1{transform-origin: 42% 60%;}
  .o2{transform-origin: 55% 60%;}
  .o3{transform-origin: 70% 60%;}
  .o4{transform-origin: 85% 60%;}
.section1 {
  .main {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: rgb(196, 255, 237);
    background: linear-gradient(
      30deg,
      rgba(196, 255, 237, 1) 20%,
      rgba(41, 102, 255, 1) 100%
    );
    overflow: hidden;

    .t1 {
      z-index: 1;
      width: 32vh;
      position: absolute;
      top: 21vh;
      right: 39vh;
    }

    .t2 {
      z-index: 1;
      width: 72vh;
      position: absolute;
      top: 39vh;
      right: 19vh;
    }

    .building-1 {
      z-index: 0;
      width: 45vw;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .building-2 {
      z-index: 2;
      width: 18.5vw;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .building-3 {
      z-index: 1;
      width: 100vw;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .tree {
      z-index: 2;
      width: 44vw;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .cloud {
      z-index: 1;
      width: 60vw;
      position: absolute;
      right: 0;
      top: 15%;
      animation: cloud 8s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    .train {
      z-index: 1;
      width: 45vw;
      position: absolute;
      right: 60%;
      bottom: 3vw;
      transform: all 0.3s;
      animation: train 7.5s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    @keyframes train {
      0% {
        right: -60%;
      }
      65%,
      70% {
        right: 65%;
      }
      100% {
        right: 100%;
      }
    }

    @keyframes cloud {
      0% {
        right: 0%;
        top: 15%;
      }
      40% {
        right: 1%;
        top: 14%;
      }
      70% {
        right: 1%;
        top: 16%;
      }
      100% {
        top: 15%;
        right: 0%;
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
    .main {
      position: relative;
      width: 100vw;
      height: calc(100vh - 63px);

      .t1 {
        width: 20vh;
        top: 21vh;
        right: 50%;
        margin-right: -10vh;
      }

      .t2 {
        width: 80vw;
        top: 31vh;
        right: 50%;
        margin-right: -40vw;
      }

      .building-1 {
        width: 90vw;
        left: -18vw;
      }

      .building-2 {
        width: 39.5vw;
        left: -20vw;
      }

      .building-3 {
        width: 200vw;
      }

      .tree {
        width: 80vw;
        left: -12vw;
      }

      .cloud {
        width: 120vw;
      }

      .cloud-2 {
        z-index: 1;
        width: 22vw;
        position: absolute;
        right: 10%;
        bottom: 18%;
        animation: cloud-2 8s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
      }

      .train {
        width: 90vw;
        bottom: 6.5vw;
        right: -80%;
      }

      @keyframes train {
        0% {
          right: -100%;
        }
        65%,
        70% {
          right: 45%;
        }
        100% {
          right: 150%;
        }
      }

      @keyframes cloud-2 {
        0% {
          bottom: 18%;
          right: 10%;
        }
        40% {
          bottom: 17%;
          right: 11%;
        }
        70% {
          bottom: 18%;
          right: 12%;
        }
        100% {
          bottom: 18%;
          right: 10%;
        }
      }
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";

export default {
  name: "section1",

  data() {
    return {
      isMobile
    };
  },

  methods: {},

  created() {}
};
</script>
