<template>
    <div class="nav fixed flex items-center justify-between top-0 left-0 md:w-100 z-[100] w-full"
        v-bind:class="{ 'r16-9': higherScreen }">
        <!-- <div class="logo cursor-pointer z-10" v-bind:class="{ 'open': menuOpen }" @click="scrollTo('.s1')"></div> -->
        <div class="menu-btn cursor-pointer flex items-center gap-3" @click="menuOpen = !menuOpen"
            v-bind:class="{ 'open': menuOpen }">
            <!-- <p class="uppercase text-color2 z-10">menu</p> -->
            <div class="bar"></div>
        </div>
        <div class="menu shadow-lg flex flex-col items-center justify-center" v-bind:class="{ open: menuOpen }">
            <div class="menu-item font-bold cursor-pointer text-white font-['noto_serif_tc']"
                v-for="item, i in info.navList" @click="scrollTo(item.target)">
                <img src="@/assets/menu_icon.png" alt="" srcset="">
                <span>{{ item.name }}</span>
            </div>
            <div class="close" @click="menuOpen = !menuOpen">
                <img src="@/assets/close.png" alt="" srcset="">
            </div>
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

    .logo {
        width: size(190);
        height: size(30);
        background-image: url('@/assets/navlogo.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .menu-btn {
        background-color: #C9A063;
        height: size(62);
        width: size(62);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;

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
        left: 0;
        background: rgba(5, 95, 118, 0.8);
        width: size(374);
        height: 100%;
        z-index: 5;
        transform: translateX(-150%);
        transition: all .5s;
        border-radius: 0;
        padding: size(100) 0;
        gap: size(50);
        backdrop-filter: blur(2px);

        .menu-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: size(33.25);
            gap: size(10);

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

                &:after {
                    width: 100%;
                }
            }

        }

        &.open {
            transform: translateX(0);
        }

        .close {
            position: absolute;
            bottom: size(77);
            left: size(95);
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
            gap: sizem(25);
            justify-content: flex-end;

            .menu-item {
                font-size: sizem(15);
                gap: sizem(5);

                img {
                    width: sizem(30);
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
                position: relative;
                left: unset;
                bottom: unset;
                width: sizem(44);
                height: sizem(44);
                cursor: pointer;
                margin-top: sizem(30);
                margin-bottom: sizem(40);

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


const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
    smoothScroll({
        scrollTo: document.querySelector(el)
    })
    menuOpen.value = !menuOpen.value;
}
</script>