<template>
  <div class="home no-padding-top">
    <Loading :loading="load" />
    <!-- <Navigation /> -->
    <!-- <Indigator :viewIndex="viewIndex" /> -->
    <full-page ref="fullPage" :options="options" id="fullpage">
      <vue-lazy-component class="section" id="section1" @init="init">
        <Section1 />
      </vue-lazy-component>
      <vue-lazy-component
        class="section_"
        id="section2"
        @init="init"
        v-show="false"
      >
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

      <vue-lazy-component class="section" id="contact">
        <ContactSection />
      </vue-lazy-component>
    </full-page>

    <MobileNav />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Playball&display=swap");
@import "../assets/style/variableColor.scss";

.home {
  background: #fff !important;
}

.section,
.section .fp-slide,
.section .fp-tableCell {
  height: auto !important;
}

.with-mask {
  mask: url("~@/projects/aries/s1/section_mask.svg");
  mask-size: cover;
}

.floating {
  transition: all 1.8s;

  &.floating-up {
    transform: translateY(50px);
  }
  &.floating-down {
    transform: translateY(-50px);
  }
}

.rotating {
  animation: rotating 40s infinite;

  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
}

.fp-left {
  margin-left: 12px;
}
//間隔
#fp-nav ul li,
.fp-slidesNav ul li {
  margin: 24px 0 !important;
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
  .with-mask {
    mask: unset;
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

<script>
// @ is an alias to /src
import $ from "jquery";
import Navigation from "@/layouts/Navigation.vue";
import { isMobile } from "@/utils";
import SideNavigation from "@/layouts/SideNavigation.vue";
import ContactSection from "@/layouts/ContactSection.vue";
import MobileNav from "@/layouts/MobileNav.vue";
import Loading from "@/components/Loading.vue";
import AOS from "@/lib/aos/src/js/aos";
// import Indigator from '@/components/Indigator.vue'

import Section1 from "@/projects/aries/section1.vue";
import Section2 from "@/projects/aries/section2.vue";
import Section3 from "@/projects/aries/section3.vue";
import Section4 from "@/projects/aries/section4.vue";
import Section5 from "@/projects/aries/section5.vue";
import Section6 from "@/projects/aries/section6.vue";
import Section7 from "@/projects/aries/section7.vue";

export default {
  name: "home",
  components: {
    Loading,
    // Indigator,
    Navigation,
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
      options: {
        menu: "#menu",
        anchors: [],
        scrollBar: true,
        onLeave: this.onLeave,
        afterLoad: this.afterLoad,
        continuousHorizontal: true,
        autoScrolling: false,
        fitToSection: false,
        verticalCentered: false,

        navigation: true,
        navigationPosition: "left",
        slidesNavigation: true,
        slidesNavPosition: "top",
        lazyLoading: false,
      },
    };
  },
  created() {
    // setTimeout(() => {
    //   this.load = false
    // }, 500)
    // window.addEventListener('load', event => {

    // })

    $(document).ready(() => {
      // Images loaded is zero because we're going to process a new set of images.
      var imagesLoaded = 0;
      // Total images is still the total number of <img> elements on the page.
      var totalImages = $("img").length;

      const allImagesLoaded = () => {
        this.load = false;
      };
      const imageLoaded = () => {
        imagesLoaded++;
        if (imagesLoaded == totalImages) {
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
          el.removeClass('floating-down').addClass('floating-up');
        } else {
          el.removeClass('floating-up').addClass('floating-down');
        }

        lastScrollTop = st;
      });
    },
  },
};
</script>
