<template>
  <div class="footer-box">
    <!-- <img
      class="footer-img"
      v-if="isMobile"
      src="@/projects/cm/footer_m.jpg"
      alt="力麒天沐"
      srcset=""
    /> -->
    <!-- <img
      class="footer-img"
      v-else
      src="@/projects/cm/footer.jpg"
      alt="力麒天沐"
      srcset=""
    /> -->
    <div class="footer">
      <a href="https://www.lixin.com.tw/" target="_blank"
        ><img src="../assets/img/footerLogo.gif" alt="立炘數位"
      /></a>
      <a href="https://www.h35.tw/admin/test/login.php" target="_blank"
        >網頁製作</a
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer-box {
  display: flex;
  flex-direction: column;
}
.footer-img {
  width: 100%;
  object-fit: cover;
}
.footer {
  width: 100%;
  height: 40px;
  background: #302626;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;

  img {
    width: 50px;
    margin-right: 20px;
  }

  p {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    margin-right: 15px;
    margin-bottom: 0;
  }

  a {
    font-size: 12px;
    color: #fff;
    text-decoration: none;
  }
}

@media screen and (max-width: 767px) {
  .footer-box {
    margin-bottom: 63px;
}
  .footer {
    margin-bottom: 0;
  }
}

@media only screen and (max-width: 767px) {
  .footer-box {
    margin-bottom: 63px;
}
  .footer {
    margin-bottom: 0;
  }
.footer-img {
  height:calc(10000vw / 375);
}
}
</style>

<script>
import { isMobile } from "@/utils";
export default {
  name: "adminFooter",
  components: {},

  data() {
    return {
      isMobile,
    };
  },

  methods: {},
};
</script>
