<template>
    <div class="nav fixed flex items-center justify-end top-0 right-0 md:w-100 z-[100] w-full"
        v-bind:class="{ 'r16-9': higherScreen }">
        <!-- <div class="logo cursor-pointer z-10" v-bind:class="{ 'open': menuOpen }" @click="scrollTo('.s1')"></div> -->
        <div class="menu-btn cursor-pointer flex items-center gap-3" @click="menuOpen = !menuOpen"
            v-bind:class="{ 'open': menuOpen }">
            <!-- <p class="uppercase text-color2 z-10">menu</p> -->
            <div class="bar"></div>
        </div>
        <div class="menu shadow-lg flex flex-col items-center justify-center" v-bind:class="{ open: menuOpen }">
            <div class="menu-item-wrapper">
                <div class="menu-item font-bold cursor-pointer font-['noto_serif_tc']" v-for="item, i in info.navList"
                    :class="{ active: activeMenuIdx === i }" @click="scrollTo(item.target, i)">
                    <!-- <img src="@/assets/menu_icon.png" alt="" srcset=""> -->
                    <span>{{ item.name }}</span>
                </div>
            </div>
            <div class="close" @click="menuOpen = !menuOpen">
                <img src="@/section/close.svg" alt="" srcset="">
            </div>
            <img class="navlogo" src="@/section/navlogo.png" alt="" srcset="">
        </div>
    </div>
    <div class="gotop fixed z-[98] cursor-pointer" v-bind:class="{ show: scrollPos > 100 }" @click="scrollTo('.s1')">
    </div>
</template>


<style lang="scss">
@import "@/assets/style/function.scss";

.nav {
    padding: 0 size(20);
    height: size(100);

    .navlogo {
        width: size(287);
    }

    .logo {
        width: size(190);
        height: size(30);
        background-image: url('@/assets/navlogo.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .menu-btn {
         background: #c41e84;
        height: size(62);
        width: size(62);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;
        // border: 1px solid #fff;

        p {
            transition: all .5s;
            font-size: size(20);
        }

        .bar {
            width: size(30);
            height: 2px;
            background-color: #fff;
            position: relative;
            transform: all .5s;

            &::after {
                content: '';
                width: 100%;
                height: 2px;
                bottom: -#{size(10)};
                position: absolute;
                background-color: #fff;
                transition: all .5s;
            }

            &::before {
                content: '';
                width: 100%;
                height: 2px;
                top: -#{size(10)};
                position: absolute;
                background-color: #fff;
                transition: all .5s;
            }
        }

        &:hover {
            &::after {
                box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: .1);
            }

            .bar {
                &::after {
                    transform: translateX(10%);
                    box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: .1);
                }

                &::before {
                    transform: translateX(-10%);
                }
            }
        }

        &.open {
            background-color: transparent;

            &::after {
                content: '';
                background-color: transparent;
                box-shadow: unset;

            }

            p {
                color: #fff;
            }
        }
    }

    .menu {
        position: fixed;
        top: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.49);
        width: size(374);
        height: 100%;
        z-index: 5;
        transform: translateX(150%);
        transition: all .5s;
        border-radius: 0;
        padding: size(100) 0;
        backdrop-filter: blur(2px);

        .menu-item-wrapper {
            @apply flex flex-col relative;
            gap: size(50);
            padding-right: size(40);
            margin-bottom: 15%;
            padding-top: 5%;

            &::after {
                content: '';
                width: 1px;
                height: 120%;
                background-color: #FF3EA1;
                position: absolute;
                right: 5%;
                top: 0;
            }
        }

        .menu-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: size(24);
            gap: size(10);
            font-family: 'Noto Sans TC';
            font-weight: 500;
            color: #FF3EA1;

            img {
                width: size(43);
            }

            &:after {
                content: '';
                position: absolute;
                bottom: -5px;
                width: 0%;
                height: size(3);
                background-color: #E7BA65;
                transition: all .35s;
            }

            &:hover {
                color :#fff;
                &:after {
                    // width: 100%;
                }
            }

            &.active {
                
                color :#fff;

                &::before {
                    content: '';
                    position: absolute;
                    width: size(20);
                    height: size(20);
                    background-color: #FF3EA1;
                    border-radius: 100%;
                    left: 125%;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }

        }

        &.open {
            transform: translateX(0);
        }

        .close {
            position: absolute;
            bottom: unset;
            top: size(60);
            right: size(60);
            width: size(44);
            height: size(44);
            cursor: pointer;

            img {
                width: 100%;
            }
        }

        .decor {
            position: absolute;
            width: size(330);
            top: -#{size(170)};
            left: size(22);
            z-index: 1;
            animation: rotate 10s infinite linear;

            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }

                to {
                    transform: rotate(360deg);
                }
            }
        }

    }
}

.gotop {
    width: size(49.4);
    height: size(49.4);
    right: size(20);
    bottom: size(50);
    background-image: url('@/assets/top.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transform: translateY(200%);
    transition: all .5s;

    &.show {
        transform: translateY(0%);
    }
}

@media screen and (max-width:768px) {

    .gotop {
        width: sizem(34.24);
        height: sizem(34.24);
        right: sizem(20);
        bottom: sizem(80);
    }

    .navlogo {
        width: sizem(185) !important;
    }

    .nav {
        width: sizem(350);
        left: sizem(12.5);
        top: sizem(12.5);
        padding: 0 sizem(8);
        height: sizem(35);
        border-radius: 9999px;

        .logo {
            width: sizem(101.83);
            height: sizem(16);
            transition: all .2s;

            &.open {
                filter: brightness(0) invert(1);
            }
        }

        .menu-btn {
            width: sizem(30);
            height: sizem(30);
            padding: sizem(5);

            p {
                font-size: sizem(14);
                font-weight: 100;
            }

            .bar {
                width: sizem(17);

                &::after {
                    bottom: -#{sizem(5)};
                }

                &::before {
                    top: -#{sizem(5)};
                }
            }

            &.open {
                display: none;
                p {
                    color: #fff;
                }

                .bar {
                    height: 0;

                    &::after {
                        content: '';
                        width: 100%;
                        height: 2px;
                        bottom: 50%;
                        margin-bottom: -1px;
                        position: absolute;
                        background-color: #fff;
                        transition: all .5s;
                        transform: rotate(135deg);
                    }

                    &::before {
                        content: '';
                        width: 100%;
                        height: 2px;
                        top: 50%;
                        margin-top: -1px;
                        position: absolute;
                        background-color: #fff;
                        transition: all .5s;
                        transform: rotate(-135deg);
                    }
                }
            }
        }

        .menu {
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            transform: translateX(150%);
            transition: all .5s;
            border-radius: 0;
            padding: 0;
            gap: sizem(40);
            justify-content: flex-start;
            padding-top: sizem(100);
            background: rgba(77.75, 0, 41.98, 0.81);

            .menu-item-wrapper {
                @apply flex flex-col relative;
                gap: sizem(38);
                padding-right: 0;
                margin-bottom: sizem(10);
                padding-top: 0;

                &::after {
                @apply hidden;
                    }
            }

            .menu-item {
                font-size: sizem(18);
                gap: sizem(5);

                img {
                    width: sizem(30);
                }

                &.active {
                    &::before {
                        @apply hidden;
                    }
                }

            }

            &.open {
                transform: translateX(0);
                left: unset;
            }

            .decor {
                width: 30vh;
                left: 50%;
                margin-left: -15vh;
                top: -15vh;
                animation: rotate 10s infinite linear;
            }

            .close {
                position: absolute;
                left: unset;
                bottom: unset;
                top: 15px;
                right: 15px;
                width: sizem(30);
                height: sizem(30);
                cursor: pointer;
                margin-top: 0;
                margin-bottom: 0;

                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>

<script setup>
import { inject, getCurrentInstance, onMounted, ref } from 'vue';
import info from "@/info"

const menuOpen = ref(false)

const globals = getCurrentInstance().appContext.config.globalProperties
const higherScreen = ref(true)

const scrollPos = ref(0)

onMounted(() => {
    const ratio = window.innerHeight / window.innerWidth

    // if (!globals.$isMobile() && ratio > 0.46875) {
    //     higherScreen.value = true
    // }

    window.addEventListener('scroll', (event) => {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        scrollPos.value = scroll
    });
})

const activeMenuIdx = ref(0)

const smoothScroll = inject('smoothScroll')
const scrollTo = (el, index) => {
    smoothScroll({
        scrollTo: document.querySelector(el)
    })
    activeMenuIdx.value = index;
    menuOpen.value = !menuOpen.value;
}
</script>