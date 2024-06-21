<template>
    <div class="modal modal_basic modal_m modal_full" id="photoThumbView">
        <div class="modal_wrapper">
            <div class="modal_body">
                <div class="modal_content">
                    <div class="swiper reviewThumbnailSwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="~/assets/img/sample/sample_img.jpg" alt="상품후기사진" />
                            </div>
                            <div class="swiper-slide">
                                <img src="~/static/img/sample/thumbnail_img.jpg" alt="상품후기사진" />
                            </div>
                            <div class="swiper-slide">
                                <img src="~/static/img/sample/sample_thumbnail_img.jpg" alt="상품후기사진" />
                            </div>
                            <div class="swiper-slide">
                                <img src="~/static/img/sample/mc_sample_img.png" alt="상품후기사진" />
                            </div>
                        </div>
                        <div class="swiper-button swiper-button-prev "></div>
                        <div class="swiper-button swiper-button-next "></div>
                    </div>
                </div>
            </div>
            <popupButton class="modal_close_w" />
        </div>
    </div>
</template>

<script>
import popupHead from "~/components/popup/part/popup-basic-head.vue";
import popupButton from "~/components/popup/part/popup-basic-button.vue";

//스와이퍼
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);


export default {
    name: 'popupBase',
    components: {
        popupHead,
        popupButton,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
    data() {
        return {
            reviewThumbnailSwiper: null,
        }
    },
    mounted() {
        this.reviewThumbnailSwiper = new Swiper(".reviewThumbnailSwiper", {
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: ".reviewThumbnailSwiper .swiper-button-next",
                prevEl: ".reviewThumbnailSwiper .swiper-button-prev",
            },
        });
    },
    methods: {
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>
