<template>
    <div class="img imgd">
        <img class="box" src="@/section/anim/box.png">
        <img class="img1" src="@/section/anim/04/01.png">
        <img class="img2" src="@/section/anim/04/03.png">
        <img class="img3" src="@/section/anim/04/02.png">
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

.imgd {
    .img1 {
        width: 100%;
        top: 0;
        left: 0;
    }

    .img2 {
        width: 20.8%;
        top: 0%;
        left: 75.5%;
        transform: rotate(-2deg) skewX(2deg);
        transform-origin: 60% 90%;
        animation: an 2s ease-in-out infinite alternate;
    }

    .img3 {
        width: 34%;
        top: 1.3%;
        left: 37.8%;
        transform: rotate(-3deg);
        transform-origin: 10% 100%;
        animation: an 1.5s ease-in-out infinite alternate;
    }
}
</style>