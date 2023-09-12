<template>
    <div class="img imgb">
        <img class="box" src="@/section/anim/box.webp">
        <img class="img1" src="@/section/anim/02/02.webp">
        <img class="img2" src="@/section/anim/02/02.webp">
        <img class="img3" src="@/section/anim/02/01.webp">
    </div>
</template>

<style scoped lang="scss">
.img {
    position: relative;
    width: 100%;
    display: inline-block;

    //底下都不用動
    @keyframes an {
        to {
            transform: rotate(0);
        }
    }

    img {
        position: absolute;

        &.box {
            width: 100%;
            position: relative;
        }
    }
}

.imgb {

    .img1,
    .img2 {
        transform: rotate(360deg);
        transform-origin: 50% 50%;
        animation: an 7s linear infinite;
    }

    .img1 {
        width: 27.8%;
        top: 55%;
        left: 0%;
    }

    .img2 {
        width: 27.8%;
        top: 55%;
        left: 72%;
    }

    .img3 {
        width: 77.8%;
        top: 0%;
        left: 10.5%;
    }
}</style>