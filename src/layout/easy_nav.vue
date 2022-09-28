<template>
    <div class="nav" v-bind:class="{'open': menuOpen}">
        <div class="nav-item" v-for="item, i in info.navList" @click="scrollTo(item.target)">
            <span>{{ item.name }}</span>
        </div>
        <img v-if="$isMobile()" class="close-menu" src="@/section/form/close.png" alt="" srcset=""
            @click="menuOpen = false">
    </div>
    <div class="gotop fixed z-[98] cursor-pointer" v-bind:class="{ show: scrollPos > 100 }" @click="scrollTo('.s1')">
    </div>
    <img v-if="$isMobile()" class="open-menu" src="@/section/form/menu.png" alt="" srcset="" @click="menuOpen = true">
</template>


<style lang="scss">
@import "@/assets/style/function.scss";

.nav {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    height: size(60);
    background: linear-gradient(90deg, #D9D9D9 4.89%, rgba(217, 217, 217, 0) 94.79%);
    z-index: 9999;
    padding: 0 size(250);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: size(46);

    .nav-item {
        position: relative;
        font-weight: 400;
        font-size: size(14);
        letter-spacing: 0.08em;
        color: #969696;

        &::before {
            content: '';
            width: size(1.5);
            height: 105%;
            background-color: #969696;
            position: absolute;
            left: -10%;
        }

        &::after {
            content: '';
            width: size(1.5);
            height: 105%;
            background-color: #969696;
            position: absolute;
            right: -10%;
        }

        &:hover {
            cursor: pointer;
            font-weight: 700;
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
    .open-menu {
        position: fixed;
        top: 0;
        right: -1px;
        width: size-m(70);
        z-index: 9998;
    }

    .nav {
        width: 100%;
        height: 100%;
        background: rgba(164, 164, 164, 0.9);
        padding: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: size-m(40);
        border-radius: 0;
        transform: translateX(100%);
        transition: all .5s;

        &.open {
            transform: translateX(0%);
        }

        .nav-item {
            font-size: size-m(18);
            color: #fff;

            &::before {
                content: '';
                display: none;
            }

            &::after {
                content: '';
                width: 130%;
                height: 1px;
                background-color: #CFCFCF;
                position: absolute;
                right: 50%;
                bottom: -50%;
                transform: translate(50%);
            }

            &:hover {
                cursor: pointer;
                font-weight: 700;
            }

            &:last-child {

                &::after {
                    content: '';
                    display: none;
                }
            }
        }

        .close-menu {
            position: absolute;
            top: 0;
            right: -1px;
            width: size-m(70);
            z-index: 99998;
        }
    }

    .gotop {
        width: size-m(34.24);
        height: size-m(34.24);
        right: size-m(20);
        bottom: size-m(80);
    }
}
</style>

<script setup>
import { inject, getCurrentInstance, onMounted, ref } from 'vue';
import info from "@/info"

const menuOpen = ref(false)
const scrollPos = ref(0)

onMounted(() => {
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
    menuOpen.value = false;
}
</script>