<template>
    <div class="img_area" @click="isActive = !isActive" :class="{ active: isActive }">
        <div class="review_thumbnail_wrap thumbnailSwiper" @click="modalClose">
            <span class="mobile show_photo">
                <img src="~/assets/img/items/ico_img_more.svg" alt="사진리뷰 전체보기">
            </span>
            <span class="close">닫기</span>
            <ul class="swiper-wrapper">
                <li class="swiper-slide">
                    <img src="~/static/img/sample/thumbnail_img.jpg" alt="" />
                </li>
                <li class="swiper-slide">
                    <img src="~/static/img/sample/thumbnail_img.jpg" alt="" />
                </li>
                <li class="swiper-slide">
                    <img src="~/static/img/sample/thumbnail_img.jpg" alt="" />
                </li>
                <li class="swiper-slide">
                    <img src="~/static/img/sample/thumbnail_img.jpg" alt="" />
                </li>
                <!-- <li v-for=" item in images " :key="item.id" class="swiper-slide">
                    <img :src="require('~/static/img/sample/thumbnail_img.jpg')" alt="item.name">
                </li> -->
            </ul>
            <div class="swiper-button swiper-button-prev "></div>
            <div class="swiper-button swiper-button-next "></div>

        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/core";
SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

export default {
    data() {
        return {
            isActive: false,
            isSwiper: false,
            thumbnailSwiper: null,
        }
    },
    setup() {
        return {
            modules: [Navigation, Pagination, Autoplay, Scrollbar],
        };
    },
    methods: {
        modalClose() {
            this.isActive = this.isActive;
            this.isSwiper = this.isSwiper;
        }
    },
    mounted() {
        this.thumbnailSwiper = new Swiper(".active .thumbnailSwiper", {
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: true,
            loopAdditionalSlides: 1,
            autoplay: {
                delay: 3000
            },
            autoplayDisableOnInteraction: false,
            navigation: {
                nextEl: ".thumbnailSwiper .swiper-button-next",
                prevEl: ".thumbnailSwiper .swiper-button-prev",
            },
            autoHeight: true,
            breakpoints: {
                768: {
                    centeredSlides: true,
                }
            },
        })
    }
}
</script>

<style scoped>
.review_origin .img_area,
.review_origin .review_thumbnail_wrap {
    display: inline-block;
    margin-right: auto;
}

.img_area .review_thumbnail_wrap .swiper-button {
    display: none;
}

.img_area.active .review_thumbnail_wrap .swiper-button {
    display: inline-block;
    z-index: 11;
}


.img_area.active .review_thumbnail_wrap {
    position: fixed;
    z-index: 2001;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0;
    padding: 2rem;
}

.img_area.active .review_thumbnail_wrap ul {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after,
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
    display: none;
}

.swiper-button {
    width: 4.8rem;
    height: 4.8rem;
    background-repeat: no-repeat;
    background-position: center;
}


@media (max-width:480px) {

    .review_origin .img_area,
    .review_origin .review_thumbnail_wrap {
        width: 100%;

    }

    .review_origin .review_thumbnail_wrap {
        position: relative;
    }

    .show_photo {
        position: absolute;
        top: 1.6rem;
        right: 1.6rem;
        width: 12.5%;
        height: 12.5%;
        z-index: 4;
    }

    .img_area.active .review_thumbnail_wrap ul {
        width: 100%;
    }
    .img_area.active .review_thumbnail_wrap .show_photo{
        display: none;
    }
}
</style>