<template>
    <div id="secondary-category">
        <div class="swiper categorySwiper">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="(item, index) in category" :key="index" @click="setActive(index)">
                    <nuxt-link :to="item.link" :class="{ on: activeIndex === index }">{{ item.menu }}</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);
export default {
    setup() {
        return {
            modules: [Navigation],
        };
    },
    data: () => {
        return {
            activeIndex: 0,
            category: [
                {
                    menu: "청소/소독/방역",
                    link: "/item",
                },
                {
                    menu: "오피스물류",
                    link: "/item",
                },
                {
                    menu: "구매/렌탈",
                    link: "/item",
                },
                {
                    menu: "간식",
                    link: "/item",
                },
                {
                    menu: "커피(머신)",
                    link: "/item",
                },
                {
                    menu: "커피(원두)",
                    link: "/item",
                },
            ],
            categorySwiper: null,
        }
    },
    mounted() {
        this.swiper = new Swiper(".categorySwiper", {
            slidesPerView: "auto",
            spaceBetween: 40,
            watchOverflow: true,
            navigation: {
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
            },
            breakpoints: {
                768: {
                    slidesPerView: 7,

                },
                1023: {
                    slidesPerView: 8,
                },
            },
            observer: true, //DOM변화시, 스와이퍼 초기화시켜줌
            observeParents: true,
        });
    },
    methods: {
        setActive(index) {
            this.activeIndex = index;
        },
    }
}
</script>

<style scoped>
#secondary-category {
    position: relative;
    width: 100%;
    max-width: 119.4rem;
    margin: 0 auto;
}

.categorySwiper {
    width: 100%;
    margin-bottom: 4rem;
    padding-left: 0;
    border-top: 1px solid var(--color-lightblue-bg);
    border-bottom: 1px solid var(--color-lightblue-bg);
    overflow: hidden;
}

.categorySwiper .swiper-wrapper.on {
    justify-content: center;
}

.categorySwiper .swiper-slide {
    width: auto !important;
    padding-right: 6rem;
    margin: 0 !important;
}

.categorySwiper .swiper-slide a {
    display: inline-block;
    text-align: center;
    height: 5.3rem;
    line-height: 5.3rem;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: -.4px;
    color: #333333;
    border-bottom: 2px solid transparent;
}

.categorySwiper .swiper-slide a.on {
    font-weight: 600;
    color: var(--color-main-pink);
    border-color: var(--color-main-pink);
}

.categorySwiper .swiper-slide:last-child {
    padding-right: 0;
}


@media (min-width: 780px) {
    .categorySwiper .swiper-wrapper {
        justify-content: center;
    }
}

@media (max-width: 780px) {
    #secondary-category {
        max-width: 100%;
        padding: 0;
    }

    .categorySwiper .swiper-slide:first-child {
        padding-left: 2rem;
    }

    .categorySwiper .swiper-slide {
        padding-right: 4rem;
    }
}

@media (max-width: 480px) {}</style>