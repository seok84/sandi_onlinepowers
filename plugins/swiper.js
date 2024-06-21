import Vue from 'vue';
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/core";
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

Vue.prototype.$swiper = SwiperCore;