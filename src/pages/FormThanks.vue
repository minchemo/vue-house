<template>
  <div class="thanks">
    <img
      src="https://bcp.crwdcntrl.net/5/c=13578/b=78113418"
      width="1"
      height="1"
    />
    <a href="/">
      <img src="~@/assets/img/thank-img.png" alt="" class="img" />
      <img src="~@/assets/img/thank-img-hover.png" alt="" class="img-hover" />
    </a>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";
.thanks {
  width: 100vw;
  height: 100vh;
  background: $phone_thanks_bg;
  background-size: cover;
  background-position: center;
  // background-image: linear-gradient(to top, rgba(0, 0, 0, 0.24), rgba(156, 30, 35, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    .img {
      position: absolute;
      opacity: 1;
    }
    .img-hover {
      opacity: 0;
    }

    &:hover {
      .img {
        opacity: 0;
      }
      .img-hover {
        opacity: 1;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .thanks {
    a {
      .img,
      .img-hover {
        width: 90vw;
      }
    }
  }
}
</style>

<script>
export default {
  name: "formThanks",
  components: {},

  methods: {},
  mounted() {
    this.VueScript2.load("https://jscdn.appier.net/aa.js?id=yj-h35.tw").then(
      function () {
        window.appier_q = window.appier_q || [];
        window.appier_q.push(
          { t: "register", content: { id: "3e02", site: "yj-h35.tw" } },
          {
            t: "type_conversion",
            content: "submit",
            action_id: "Conversion_8ccd",
            track_id: "74515ad51b639f9",
            opts: { unique_key: "true" },
          }
        );
      }
    );
  },
};
</script>
