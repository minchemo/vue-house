<template>
    <div class="img imga">
        <img class="box" src="@/section/anim/box.png">
        <img class="img1" src="@/section/anim/01/05.png">
        <img class="img2" src="@/section/anim/01/02.png">
        <img class="img3" src="@/section/anim/01/03.png">
        <img class="img4" src="@/section/anim/01/04.png">
        <img class="img5" src="@/section/anim/01/06.png">
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

.imga {
    .img1 {
        width: 34.8%;
        top: 15.5%;
        left: 0%;
        transform: rotate(-5deg);
        transform-origin: 80% 5%;
        animation: an 2s ease-in-out infinite alternate;
    }

    .img2 {
        width: 100%;
        top: 0%;
        left: 0%;
    }

    .img3 {
        width: 10.5%;
        top: 15.1%;
        left: 8.5%;
        transform: rotate(5deg);
        transform-origin: 80% 95%;
        animation: an 2s ease-in-out infinite alternate;
    }

    .img4 {
        width: 29.4%;
        top: 39%;
        left: 40.8%;
        transform: rotate(4deg);
        transform-origin: 20% 5%;
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
}
</style>