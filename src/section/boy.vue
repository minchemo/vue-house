<template>
    <div class="boy" data-aos="fade-up" data-aos-delay="0"><img src="@/section/boy.svg" alt="boy">
        <div class="star13" data-aos="fade-up" data-aos-delay="800"><img src="@/section/star.svg" alt="star"></div>
        <div class="star14" data-aos="fade-up" data-aos-delay="600"><img src="@/section/star.svg" alt="star"></div>
        <div class="star15" data-aos="fade-up" data-aos-delay="400"><img src="@/section/star.svg" alt="star"></div>
        <div class="star16" data-aos="fade-up" data-aos-delay="200"><img src="@/section/star.svg" alt="star"></div>
    </div>
</template>
  
<style lang="scss" scoped>  @import '@/assets/style/function.scss';

  @keyframes light1 {
      to {
          transform: translateY(0);
      }
  }

  .boy {
      position: absolute;

      >div {
          position: absolute;
      }

      img {
          width: 100%;
      }

      .star13 {
          width: 30%;
          top: -61%;
          left: 39%;

          img {
              filter: invert(55%) sepia(100%) saturate(2649%) hue-rotate(84deg) brightness(118%) contrast(126%);
              animation: light1 5s 1s ease-in-out infinite alternate;
              transform: translateY(-30%);
          }
      }

      .star14 {
          width: 26.5%;
          top: -22%;
          left: 5%;

          img {
              filter: invert(22%) sepia(71%) saturate(7110%) hue-rotate(351deg) brightness(89%) contrast(121%);
              animation: light1 5s 1.5s ease-in-out infinite alternate;
              transform: translateY(-70%);
          }
      }

      .star15 {
          width: 74.5%;
          top: -38%;
          left: 71%;

          img {
              filter: invert(82%) sepia(89%) saturate(467%) hue-rotate(348deg) brightness(100%) contrast(98%);
              animation: light1 5s ease-in-out infinite alternate;
              transform: translateY(-30%);
          }
      }

      .star16 {
          width: 34.5%;
          top: 21%;
          left: 108%;

          img {
              filter: invert(19%) sepia(87%) saturate(2026%) hue-rotate(201deg) brightness(89%) contrast(104%);
              animation: light1 5s .5s ease-in-out infinite alternate;
              transform: translateY(-50%);
          }
      }


  }

  @media screen and (max-width: 767px) {
      .boy {}
  }
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
</script>