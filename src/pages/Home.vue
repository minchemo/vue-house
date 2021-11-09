<template>
  <div class="home no-padding-top">
    <Loading :loading="load" />
    <!--<SideNavigation v-if="isSide" />
    <Navigation v-else />-->
    <!-- <Indigator :viewIndex="viewIndex" /> -->
    <!-- <full-page
      ref="fullPage"
      :options="options"
      id="fullpage"
    > -->

    <vue-lazy-component class="section" id="section1" @init="init">
      <Section1 />
    </vue-lazy-component>

    <div class="item item-contact" data-aos="fade" data-aos-delay="200">
      <div class="section" id="contact">
        <ContactSection />
      </div>
    </div>
    <div class="section" @init="init">
      <GoogleMap />
    </div>
    <div class="section" @init="init">
      <HouseInfo />
    </div>

    <MobileNav />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Playball&display=swap");
@import "../assets/style/variableColor.scss";

.section,
.section .fp-slide,
.section .fp-tableCell {
  height: auto !important;
}
</style>

<script>
// @ is an alias to /src
import $ from "jquery";
import Navigation from "@/layouts/Navigation.vue";
import { isMobile } from "@/utils";
import SideNavigation from "@/layouts/SideNavigation.vue";
import MobileNav from "@/layouts/MobileNav.vue";
import Loading from "@/components/Loading.vue";
import ContactSection from "@/layouts/ContactSection.vue";
// import Indigator from '@/components/Indigator.vue'

import HouseInfo from "@/components/HouseInfo.vue";
import GoogleMap from "@/components/GoogleMap.vue";

import Hammer from "hammerjs";

import Section1 from "@/projects/yj/Section1.vue";

export default {
  name: "home",
  components: {
    Loading,
    // Indigator,
    Navigation,
    SideNavigation,
    ContactSection,
    MobileNav,
    HouseInfo,
    GoogleMap,
    Section1,
  },

  data() {
    return {
      isMobile,
      isSide: true,
      load: true,
      // viewIndex: 0,
      // action: {
      //   moveTo: () => {},
      // },

      // indigatorIndex: 0,
      // options: {
      //   menu: '#menu',
      //   anchors: [],
      //   scrollBar: true,
      //   onLeave: this.onLeave,
      //   afterLoad: this.afterLoad,
      //   continuousHorizontal: true,

      //   // navigation: true,
      //   // sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
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
    // window.addEventListener('scroll', this.onScroll, false)
    // this.action = this.$refs.fullPage.api
    // if (this.isMobile) {
    //   this.$refs.fullPage.api.setResponsive(true)
    // }
    this.landingPage()
  },
  methods: {
    init(){

    },
    landingPage() {
      this.$loadScript("https://jscdn.appier.net/aa.js?id=yj-h35.tw")
        .then(() => {
          window.appier_q = window.appier_q || [];
          window.appier_q.push(
            { t: "register", content: { id: "3e02", site: "yj-h35.tw" } },
            {
              t: "type_landing",
              action_id: "ViewLanding_4173",
              track_id: "74515ad51b639f9",
              opts: { unique_key: "true" },
            }
          );
        })
        .catch(() => {
          console.log("landing page script load fail");
        });
    },
  },
};
</script>
