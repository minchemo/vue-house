<template>
  <div class="home no-padding-top">
    <Loading :loading="load" />
    <Navigation />
    <!-- <CustomNavigation /> -->
    <!-- <Indigator :viewIndex="viewIndex" /> -->
    <!-- <full-page ref="fullPage" :options="options" id="fullpage"> -->
      <vue-lazy-component class="section" id="section1" @init="init">
        <Section1 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section2" @init="init">
        <Section2 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section3" @init="init">
        <Section3 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section4" @init="init">
        <Section4 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section5" @init="init">
        <Section5 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section6" @init="init">
        <Section6 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section7" @init="init">
        <Section7 />
      </vue-lazy-component>
      <!--<vue-lazy-component class="section" id="section8" @init="init">
        <Section8 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section9" @init="init">
        <Section9 />
      </vue-lazy-component>-->



      <vue-lazy-component class="section" id="contact">
        <ContactSection />
      </vue-lazy-component>
    <!-- </full-page> -->

    <MobileNav />
  </div>
</template>

<script>
// @ is an alias to /src
import $ from "jquery";
import Navigation from "@/layouts/Navigation.vue";
import CustomNavigation from "@/layouts/CustomNavigation.vue";
import { isMobile } from "@/utils";
import SideNavigation from "@/layouts/SideNavigation.vue";
import ContactSection from "@/layouts/ContactSection.vue";
import MobileNav from "@/layouts/MobileNav.vue";
import Loading from "@/components/Loading.vue";
import AOS from "@/lib/aos/src/js/aos";

// import Indigator from '@/components/Indigator.vue'

import Section1 from "@/projects/dnls/section1.vue";
import Section2 from "@/projects/dnls/section2.vue";
import Section3 from "@/projects/dnls/section3.vue";
import Section4 from "@/projects/dnls/section4.vue";
import Section5 from "@/projects/dnls/section5.vue";
import Section6 from "@/projects/dnls/section6.vue";
import Section7 from "@/projects/dnls/section7.vue";
import Section8 from "@/projects/dnls/section8.vue";
import Section9 from "@/projects/dnls/section9.vue";

export default {
  name: "home",
  components: {
    Loading,
    // Indigator,
    Navigation,
    CustomNavigation,
    //SideNavigation,
    ContactSection,
    MobileNav,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    Section9
  },

  data() {
    return {
      isMobile,
      isSide: false,
      load: true,
      // viewIndex: 0,
      // action: {
      //   moveTo: () => {},
      // },

      // indigatorIndex: 0,
      // options: {
      //   menu: "#menu",
      //   anchors: [],
      //   scrollBar: true,
      //   // onLeave: this.onLeave,
      //   //afterLoad: this.afterLoad,
      //   continuousHorizontal: true,
      //   autoScrolling: false,
      //   fitToSection: false,
      //   verticalCentered: false,

      //   navigation: true,
      //   navigationPosition: "left",
      //   slidesNavigation: true,
      //   slidesNavPosition: "top",
      //   lazyLoading: false,
      // },
    };
  },
  created() {
    // setTimeout(() => {
    //   this.load = false
    // }, 500)
    // window.addEventListener('load', event => {
    // })

    $(document).ready(() => {
      var imagesLoaded = 0;
      var totalImages = $("img").length;

      const allImagesLoaded = () => {
        this.load = false;
      };
      const imageLoaded = () => {
        imagesLoaded++;
        

        if (imagesLoaded > totalImages * 0.5) {
          allImagesLoaded();
        }
      };
      $("img").each(function (idx, img) {
        $("<img>").on("load", imageLoaded).attr("src", $(img).attr("src"));
      });
    });
  },
  mounted() {
    AOS.init();
    // window.addEventListener('scroll', this.onScroll, false)
    // this.action = this.$refs.fullPage.api
    // if (this.isMobile) {
    //   this.$refs.fullPage.api.setResponsive(true)
    // }
    this.scrolling();
  },
  // mounted() {
  // window.addEventListener('scroll', this.onScroll, false)
  // this.action = this.$refs.fullPage.api
  // if (this.isMobile) {
  //   this.$refs.fullPage.api.setResponsive(true)
  // }
  // },
  methods: {
    init() {},
    scrolling() {
      let lastScrollTop = 0;
      $(window).on("scroll", function () {
        let st = $(this).scrollTop();
        const el = $(".floating");
        if (st < lastScrollTop) {
          el.removeClass("floating-down").addClass("floating-up");
        } else {
          el.removeClass("floating-up").addClass("floating-down");
        }

        lastScrollTop = st;
      });
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Playball&display=swap");
@import "../assets/style/variableColor.scss";

.home {
&::before {
  content: ' ';
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  //background: url("~@/projects/llcs/s1/bg.jpg") center 0 no-repeat;
  background-size: cover;
}
}

.section,
.section .fp-slide,
.section .fp-tableCell {
  height: auto !important;
}

.fp-left {
  margin-left: 12px;
}
//間隔
#fp-nav ul li,
.fp-slidesNav ul li {
  margin: 24px 0 !important;
}

#fp-nav {
  z-index: 9999 !important;
}

//基礎顏色
#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  width: 14px !important;
  height: 14px !important;
  margin: 0 !important;
  background: #fff !important;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.2));
}
//Active顏色
#fp-nav ul li a.active span,
#fp-nav ul li:hover a.active span,
.fp-slidesNav ul li a.active span,
.fp-slidesNav ul li:hover a.active span {
  background: #fff000 !important;
}

@media only screen and (max-width: 767px) {
.home {
&::before {
  //background-image: url("~@/projects/llcs/s1/bg_mo.jpg");
}
}
  .fp-left {
    display: flex;
    margin: 0 !important;
    left: 50% !important;
    top: 0 !important;
    width: 80vw;
    transform: translate(-53%, 20px) !important;
  }

  #fp-nav ul li,
  .fp-slidesNav ul li {
    margin: 0 !important;
  }

  #fp-nav ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    left: 0;
    justify-content: space-around;
  }
}
</style>
