<template>
    <div class="rabbit">
        <div  class="rabbithead">
            <img src="./s1/2.png" alt="rabbit" />
            <img src="./s1/1.png" alt="rabbit" />
            <img src="./s1/rabbithead.png" alt="rabbit" />
            <img src="./s1/1.gif" alt="rabbit" />
        </div>

<!-- 
        <img src="./s1/rabbit.gif" alt="rabbit" v-if="!$isMobile()">
        <img src="./s1/rabbit_m.gif" alt="rabbit" v-else> -->
        <img src="./s1/rabbit.png" alt="rabbit">
    </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";

.rabbit {

    img {
        width: 100%;
        vertical-align: bottom;
    }
    .rabbithead{width: 100%;
    img{position: absolute;
        &:nth-child(1){
            width: 41.7%;
            top: 5.5%;
            right: 10.3%;
            animation: an 2s  infinite alternate;
            transform-origin: 10% 90%;
  transform:rotate(-10deg);
        }
        &:nth-child(2){
            width: 39.85%;
            top: 4.4%;
            left: 12.62%;
            animation: an 2s  infinite alternate;
            transform-origin: 90% 90%;
  transform:rotate(10deg);
        }
        &:nth-child(3){position: relative;}
        &:nth-child(4){top:0;left: 0;}

    }
    
    }
@keyframes an{
    20%{
  transform:rotate(0);
    }
    100%{
  transform:rotate(0);
    }
}

}
</style>
<script setup>
</script>