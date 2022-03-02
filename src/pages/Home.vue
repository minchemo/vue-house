<template>
  <div class="home no-padding-top">
    <CustomNavigation :scrollInstance="locomotive" v-if="isMobile" />
    <Navigation v-else />
    <div id="locomotive">
      <Section1 class="section" data-scroll />
      <ContactSection />
    </div>
    <Loading :loading="load" data-scroll />
    <MobileNav />
  </div>
</template>

<script>
// @ is an alias to /src
import $ from "jquery";
import Navigation from "@/layouts/Navigation.vue";
import { isMobile } from "@/utils";
import SideNavigation from "@/layouts/SideNavigation.vue";
import ContactSection from "@/layouts/ContactSection.vue";
import CustomNavigation from "@/layouts/CustomNavigation.vue";
import MobileNav from "@/layouts/MobileNav.vue";
import Loading from "@/components/Loading.vue";
import AOS from "@/lib/aos/src/js/aos";

// import CustomFooter from "@/layouts/CustomFooter.vue";

// import Indigator from '@/components/Indigator.vue'

import Section1 from "@/projects/dh/s1.vue";
import LocomotiveScroll from "locomotive-scroll";

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

export default {
  name: "home",
  components: {
    Loading,
    // Indigator,
    Navigation,
    //SideNavigation,
    CustomNavigation,
    ContactSection,
    // CustomFooter,
    MobileNav,
    Section1,
  },

  data() {
    return {
      isMobile,
      isSide: false,
      load: true,
      locomotive: null,
      // viewIndex: 0,
      // action: {
      //   moveTo: () => {},
      // },

      // indigatorIndex: 0,
      // options: {
      //   menu: "#menu",
      //   anchors: [],
      //   scrollBar: false,
      //   // onLeave: this.onLeave,
      //   //afterLoad: this.afterLoad,
      //   continuousHorizontal: true,
      //   autoScrolling: true,
      //   fitToSection: true,
      //   verticalCentered: false,

      //   navigation: false,
      //   navigationPosition: "left",
      //   slidesNavigation: false,
      //   slidesNavPosition: "top",
      //   lazyLoading: false,
      //   onLeave: function () {
      //     $(".section [data-aos]").each(function () {
      //       $(this).removeClass("aos-animate");
      //     });
      //   },
      //   onSlideLeave: function () {
      //     $(".slide [data-aos]").each(function () {
      //       $(this).removeClass("aos-animate");
      //     });
      //   },
      //   afterSlideLoad: function () {
      //     $(".slide.active [data-aos]").each(function () {
      //       $(this).addClass("aos-animate");
      //     });
      //   },
      //   afterLoad: function () {
      //     $(".section.active [data-aos]").each(function () {
      //       $(this).addClass("aos-animate");
      //     });
      //   },
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

    this.locomotive = new LocomotiveScroll({
      el: document.querySelector("#locomotive"),
      smooth: false,
      repeat: true,
      offset: ["45%", "45%"],
      tablet: {
        smooth: false,
        breakpoint: 250,
      },
      smartphone: {
        smooth: false,
      },
      lerp: 0.05,
    });

    this.locomotive.on("scroll", (obj) => {
      // $(".is-inview [data-aos]").addClass("aos-animate");
    });

    // let imgs = document.images;

    // [].forEach.call(imgs, function (img) {
    //   if (img.complete) update_();
    //   else img.addEventListener("load", update_, false);
    // });

    const self = this;

    setInterval(() => {
      update_();
    }, 1000);

    function update_() {
      self.locomotive.update();
    }

    this.scrolling();
    AOS.init({
      duration: 1000,
    });
  },
  methods: {
    init() {
      this.locomotive.update();
    },
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
@import "../assets/style/variableColor.scss";

.home {
  background-color: #fff !important;
  &::before {
    content: " ";
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    //background: url("~@/projects/llcs/s1/bg.jpg") center 0 no-repeat;
    background-size: cover;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}

.section,
.section .fp-slide,
.section .fp-tableCell {
  // will-change: transform, opacity;
}
/*
.section {
  background-image: url("../projects/tm/bg.jpg");
  background-position: center;
  background-repeat: repeat;
}
*/
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
    background-color: #000 !important;
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
  /*
  .section {
    background-image: url("../projects/tm/bg-mo.jpg");
  }
  */
}
</style>
