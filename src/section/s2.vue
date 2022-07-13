<template>
    <div class="s2 relative ">
        <div class="t1 z-10">三重最漾＊<br v-if="$isMobile()">下樓就是千坪公園綠</div>
        <lazy-component>
            <img class="z-10 absolute logo" data-aos="fade-up" data-aos-delay="0" src="@/section/s2/logo.svg" alt="" srcset="">
            <img class="z-10 absolute en" src="@/section/s2/en.png" alt="" srcset="">
            <img class="z-10 absolute logo2" src="@/section/s2/logo_2.png" alt="" srcset="">
        </lazy-component>
        <lazy-component class="leaf">
            <img v-if="!$isMobile()" class="r" src="@/section/s2/leaf_r.png" alt="" srcset="">
            <img v-else class="r" src="@/section/s2/leaf_r_m.png" alt="" srcset="">
            <img v-if="!$isMobile()" class="l" src="@/section/s2/leaf_l.png" alt="" srcset="">
            <img v-else class="l" src="@/section/s2/leaf_l_m.png" alt="" srcset="">
        </lazy-component>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
    width: 100%;
    height: size(1080);
    background-color: #469B6D;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(155.16deg, #FFFFFF 1.66%, rgba(255, 255, 255, 0.78) 15.58%, rgba(255, 255, 255, 0.25) 48.49%, rgba(255, 255, 255, 0) 62.41%);
        opacity: 0.2;
    }

    .t1 {
        position: absolute;
        color: #004B37;
        font-weight: 700;
        font-size: size(69);
        left: size(171);
        top: size(92);
        letter-spacing: 0.18em;
    }

    .logo {
        width: size(702.65);
        left: size(609);
        top: size(245);
    }

    .en {
        width: size(1025.06);
        left: size(652);
        top: size(911);
    }

    .logo2 {
        width: size(182);
        left: size(1677);
        top: size(1004);
    }

    .leaf {
        img {
            position: absolute;
        }

        .r {
            width: size(531);
            left: size(1389);
            top: 0;
            animation: ani1 4s infinite alternate-reverse ease-in-out;
            transform-origin: right;
        }

        .l {
            width: size(753);
            left: -#{size(150)};
            top: size(496);
            animation: ani2 5s infinite alternate-reverse ease-in-out;
            transform-origin: bottom left;
        }

        @keyframes ani1 {
            from {
                transform: skewY(5deg);
            }

            to {
                transform: skewY(0deg);
            }
        }

        @keyframes ani2 {
            from {
                transform: skewX(5deg);
            }

            to {
                transform: skewX(0deg);
            }
        }
    }

}

@media screen and (max-width:768px) {

    .s2 {
        width: 100%;
        height: size-m(667);

        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(155.16deg, #FFFFFF 1.66%, rgba(255, 255, 255, 0.78) 15.58%, rgba(255, 255, 255, 0.25) 48.49%, rgba(255, 255, 255, 0) 62.41%);
            opacity: 0.2;
        }

        .t1 {
            position: absolute;
            color: #004B37;
            font-weight: 700;
            font-size: size-m(20);
            left: size-m(33);
            top: size-m(88);
            letter-spacing: 0.18em;
        }

        .logo {
            width: size-m(256);
            left: size-m(60);
            top: size-m(197);
        }

        .en {
            width: size-m(310);
            left: size-m(33);
            top: size-m(438);
        }

        .logo2 {
            width: size-m(131);
            left: size-m(233);
            top: size-m(627);
        }

        .leaf {
            img {
                position: absolute;
            }

            .r {
                width: size-m(221);
                left: size-m(175);
                top: 0;
                animation: ani1 4s infinite alternate-reverse ease-in-out;
                transform-origin: right;
            }

            .l {
                width: size-m(240);
                left: 0;
                top: size-m(503);
                animation: ani2 5s infinite alternate-reverse ease-in-out;
                transform-origin: bottom left;
            }

            @keyframes ani1 {
                from {
                    transform: skewY(5deg);
                }

                to {
                    transform: skewY(0deg);
                }
            }

            @keyframes ani2 {
                from {
                    transform: skewX(5deg);
                }

                to {
                    transform: skewX(0deg);
                }
            }
        }

    }

}
</style>

<script setup>
</script>