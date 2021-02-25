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
// import Indigator from '@/components/Indigator.vue'

import HouseInfo from "@/components/HouseInfo.vue";
import GoogleMap from "@/components/GoogleMap.vue";

import Section1 from "@/projects/yj/Section1.vue";

export default {
  name: "home",
  components: {
    Loading,
    // Indigator,
    Navigation,
    SideNavigation,
    //ContactSection,
    MobileNav,
    HouseInfo,
    GoogleMap,
    Section1
  },

  data() {
    return {
      isMobile,
      isSide: true,
      load: true
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
      $("img").each(function(idx, img) {
        $("<img>")
          .on("load", imageLoaded)
          .attr("src", $(img).attr("src"));
      });

      function generatePagination(items) {
        let pH = "<div class='item-cal-pagination'>";
        for (let i = 0; i < items; i++) {
          pH += `<div data-index="${i}" class="item-cal-pagination-dot ${
            i == 0 ? "active" : ""
          }"></div>`;
        }
        pH += "</div>";

        return pH;
      }

      $(".item").each(function(index, value) {
        let itemImg = $(value).find(".item-img");
        let maskImgSrc = $(value)
          .find(".item-img-mask")
          .attr("src");

        $(itemImg).each(function(i, val) {
          let imgSrc = $(val).attr("src");
          let box;

          let imgSize = "width:100%;";
          if (isMobile && index == 0) {
            imgSize = "height:240vw;";
          } else if (isMobile) {
            imgSize = "width:150%;";
          }

          if (index == 0 && isMobile) {
            box = `
              <div class="item-cal ${i == 0 ? "active" : ""}"
              data-index="${i}"
              style="
              mask: url(${maskImgSrc}) no-repeat center center;
              -webkit-mask: url(${maskImgSrc}) no-repeat center center;
              -webkit-mask-size: 100%;
              -webkit-mask-position: top center;
              overflow-y: hidden;
              overflow-x: scroll;
              ">
                <img style="${imgSize}" src="${imgSrc}">
              </div>
            `;
          } else {
            box = `
              <div class="item-cal ${i == 0 ? "active" : ""}"
              data-index="${i}"
              style="
              background-image:url(${imgSrc});
              background-size: cover;
              mask: url(${maskImgSrc}) no-repeat center center;
              -webkit-mask: url(${maskImgSrc}) no-repeat center center;
              mask-size: cover;
              -webkit-mask-size: cover;
              ">
                <img style="visibility:hidden;${imgSize}" src="${imgSrc}">
              </div>
            `;
          }

          $(val)
            .parent()
            .append(box);

          $(val).remove();
        });

        $(value)
          .find(".item-img-mask")
          .remove();

        $(value).append(generatePagination(itemImg.length));
      });

      $(".item-cal-pagination-dot").click(function() {
        let parent = $(this).parent();
        let item = $(this).closest(".item");
        let targetIndex = $(this).attr("data-index");

        item.find(".item-cal").removeClass("active");
        parent.find(".item-cal-pagination-dot").removeClass("active");

        item
          .find(".item-cal[data-index=" + targetIndex + "]")
          .addClass("active");

        $(this).addClass("active");
      });

      $(".item6 .photos .photo").click(function() {
        $(".item6 .photos .photo").removeClass("active");
        $(this)
          .removeClass("right left")
          .addClass("active");

        if (isMobile) {
          $(this)
            .next()
            .addClass("right");
          $(this)
            .prev()
            .addClass("left");
        }
      });

      $(".float-btn.open").click(function() {
        $(".float-menu").show();
      });

      $(".float-menu .close").click(function() {
        $(".float-menu").hide();
      });

      if (isMobile) {
        $(".item0 .item-cal").scrollLeft(320);

        $(".item0 .item-cal").on("scroll", function() {
          $(".item0 .movehere").hide();

          setTimeout(function() {
            $(".item0 .movehere").fadeIn();
          }, 200);
        });

        //photos
        let currentPhoto = 1;

        function carousellPhotos(type) {
          if (type == "prev") {
            if (currentPhoto == 1) {
              return;
            } else {
              currentPhoto = currentPhoto - 1;
            }
          } else {
            if (currentPhoto == 4) {
              return;
            } else {
              currentPhoto = currentPhoto + 1;
            }
          }

          $(".photos .square.active")
            .removeClass("next active")
            .addClass("prev");
          $(".photos .square" + currentPhoto)
            .removeClass(type)
            .addClass("active");
          $(".photos .square" + currentPhoto)
            .next()
            .removeClass("prev")
            .addClass("next");
        }

        $(".photos-arrow .photos-arrow-prev").click(function() {
          carousellPhotos("prev");
        });
        $(".photos-arrow .photos-arrow-next").click(function() {
          carousellPhotos("next");
        });
      }
    });
  },
  mounted() {
    // window.addEventListener('scroll', this.onScroll, false)
    // this.action = this.$refs.fullPage.api
    // if (this.isMobile) {
    //   this.$refs.fullPage.api.setResponsive(true)
    // }
  },
  methods: {
    init() {}
    // onScroll() {
    //   // 获取所有锚点元素
    //   const navContents = document.querySelectorAll('.section')
    //   // 所有锚点元素的 offsetTop
    //   const offsetTopArr = []
    //   navContents.forEach(item => {
    //     offsetTopArr.push(item.offsetTop)
    //   })
    //   // 获取当前文档流的 scrollTop
    //   const scrollTop =
    //     document.documentElement.scrollTop || document.body.scrollTop
    //   // 定义当前点亮的导航下标
    //   let navIndex = 0
    //   for (let n = 0; n < offsetTopArr.length; n++) {
    //     // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
    //     // 那么此时导航索引就应该是n了
    //     if (scrollTop >= offsetTopArr[n] - 100) {
    //       navIndex = n
    //     }
    //   }
    //   this.viewIndex = navIndex + 1
    // },

    // onLeave(origin, destination, direction) {
    //   if (!this.isMobile) {
    //     if (origin.isLast === true && direction === 'up') {
    //       console.log('加固')
    //       this.$refs.fullPage.api.setResponsive(false)
    //     }
    //     if (origin.isFirst === true && direction === 'down' && this.isMobile) {
    //       this.$refs.fullPage.api.setResponsive(false)
    //     }

    //     if (
    //       destination.isFirst === true &&
    //       direction === 'up' &&
    //       this.isMobile
    //     ) {
    //       this.$refs.fullPage.api.setResponsive(false)
    //     }
    //   }
    // },

    // afterLoad(origin, destination, direction) {
    //   this.indigatorIndex = destination.index
    //   if (destination.isLast === true && direction === 'down') {
    //     console.log('解除')
    //     this.$refs.fullPage.api.setResponsive(true)
    //   }
    // },
  }
};
</script>
