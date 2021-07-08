<template>
  <div class="footer">
     <a href="https://www.lixin.com.tw/" target="_blank"><img src="../assets/img/footerLogo.gif" alt="立炘數位" /></a>
     <a href="https://www.h35.tw/admin/test/login.php" target="_blank">網頁製作</a>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 40px;
  margin-bottom: 0px;
  background: #302626;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  font-size: 12px;
  vertical-align: middle;
  position: relative;

  img {
    height: 1.2em;
    margin-right: 20px;
    vertical-align: inherit;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    margin-right: 15px;
    margin-bottom: 0;
    vertical-align: inherit;
  }

  a {
    color: #fff;
    text-decoration: none;
    vertical-align: inherit;
  }
}

@media screen and (max-width: 767px) {
  .footer {
     margin-bottom: 63px;
  }
}

@media only screen and (max-width: 767px) {
  .footer {
     margin-bottom: 63px;
  }
}
</style>

<script>
export default {
  name: 'adminFooter',
  components: {},

  methods: {},
}
</script>
