<template>
    <div class="cat">
        <img class="cat1" src="@/section/s1/cat1.png">
        <img class="cat2" src="@/section/s1/cat2.png">
        <div class="cathead">
        <img class="cat3" src="@/section/s1/cat3.png">
        <img class="cat4" src="@/section/s1/cat3.gif">
        </div>
    </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";

.cat {
    width: 100%;
    .cat1{
    position: relative;
    display: block;
    width: 53%;}
    .cat2{
        position: absolute;
    top: 42.4%;
    left: 23.5%;
    width: 53%;
  transform-origin: 50% 0%;
  transform:skewX(-5deg);
    animation: an2 2s -.5s infinite alternate;}
    .cathead{
    position: absolute;
    top: -64.5%;
    left: 23.5%;
    width: 53%;
  transform:rotate(-10deg);
  transform-origin: 50% 80%;
    animation: an1 2s  infinite alternate;}
    .cat3{
        position: relative;
    top: 0;
    left: 0;
    width: 100%;}
    .cat4{
        position: absolute;
    top: 0;
    left: 0;
    width: 100%;}
@keyframes an1{
    to{
  transform:rotate(10deg);
    }
}
@keyframes an2{
    to{
  transform:skewX(5deg);
    }
}

}
</style>
<script setup>
</script>