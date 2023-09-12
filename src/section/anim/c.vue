<template>
    <div class="img imgc">
        <img class="box" src="@/section/anim/box.png">
        <img class="img1" src="@/section/anim/03/01.png">
        <img class="img2" src="@/section/anim/03/03.png">
        <img class="img3" src="@/section/anim/03/02.png">
        <img class="img4" src="@/section/anim/03/04.png">
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

.imgc {
    .img1 {
        width: 43.9%;
        top: 50.4%;
        left: 24.2%;
    }

    .img2 {
        width: 42%;
        top: 0%;
        left: 58%;
        transform: rotate(-1deg) skewX(1deg);
        transform-origin: 60% 95%;
        animation: an 2s ease-in-out infinite alternate;
    }

    .img3 {
        width: 32.6%;
        top: 17.7%;
        left: 0%;
        transform: rotate(4deg);
        transform-origin: 60% 80%;
        animation: an 1.5s ease-in-out infinite alternate;
    }

    .img4 {
        width: 33%;
        top: 10.5%;
        left: 24.9%;
        transform: skewX(-3deg);
        transform-origin: 60% 100%;
        animation: an 2s ease-in-out infinite alternate;
    }

    .img5 {
        width: 14.1%;
        top: 25.1%;
        left: 42.3%;
        transform: rotate(-5deg);
        transform-origin: 8% 97%;
        animation: an 2s ease-in-out infinite alternate;
    }
}</style>