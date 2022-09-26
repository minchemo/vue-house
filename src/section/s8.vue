<template>
  <article class="s8 font-['noto_sans_tc']">
    <div class="title text-center  text-white" data-aos="fade-up" data-aos-delay="0">
      建築能量 拓開眼界
    </div>
    <img class="ring1" src="@/section/ring2.svg" alt="">
    <div class="title text-center text-[#595757]" data-aos="fade-up" data-aos-delay="200">
      簡練色系 鋪敘大器
    </div>
    <div class="subtitle" data-aos="fade-up" data-aos-delay="400">
      以白色框架，敘說沉穩的建築個性，<br />
      利用黑白框架與高低配置，<br />
      豐富了建築天際線。
    </div>
    <div class="line"></div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s8 {
  position: relative;
  width: 100%;
  height: size(1184);
  background-color: #7BA9D3;
  background-image: url('@/section/s8/bg.png');
  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;


  .title {
    font-weight: 700;
    font-size: size(40);
    line-height: size(58);
    letter-spacing: 0.07em;
  }

  .ring1 {
    width: size(48);
    margin-top: size(20);
    margin-bottom: size(30);
  }

  .subtitle {
    font-weight: 400;
    font-size: size(20);
    line-height: size(29);
    text-align: center;
    letter-spacing: 0.07em;
    color: #fff;
    margin-top: size(30);
  }

  .line {
    margin-top: size(27);
    background-color: #fff;
    height: size(110);
    width: size(1.5);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s8 {
    position: relative;
    width: 100%;
    height: size-m(530);
    background-image: url('@/section/s8/bg_m.png');
    background-size: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: size-m(50);

    .title {
      font-size: size-m(20);
      line-height: 1;
    }

    .ring1 {
      width: size-m(18);
      margin-top: size-m(15);
      margin-bottom: size-m(20);
    }

    .subtitle {
      font-weight: 400;
      font-size: size-m(12);
      line-height:2;
      text-align: center;
      letter-spacing: 0.07em;
      margin-top: size-m(10);
    }

    .line {
      margin-top: size-m(15);
      height: size-m(38);
      width: size-m(1.5);
    }
  }

}
</style>
<script setup>
</script>
