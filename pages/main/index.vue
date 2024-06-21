<template>
    <div id="MainView">
        <!-- 메인배너 -->
        <section class="main-mainBanner">
            <!-- pc -->
            <div class="swiper mainSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="javascript:void(0);">
                            <img src="~/assets/img/main/img_main_slide_01.png" alt="banner" />
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:void(0);">
                            <img src="~/assets/img/main/img_main_slide_01.png" alt="banner" />
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:void(0);">
                            <img src="~/assets/img/main/img_main_slide_01.png" alt="banner" />
                        </a>
                    </div>

                </div>
                <span class="swiper-pause" @click.prevent="autoplaySlideMain($event)"></span>
                <div class="swiper-button swiper-button-prev"></div>
                <div class="swiper-button swiper-button-next"></div>
                <div class="swiper-pagination"></div>
            </div>
        </section>

        <!-- 베스트 -->
        <section class="main-best inner">
            <h2 class="title-main">
                <span>베스트</span>
                <nuxt-link to="/" class="more">더보기</nuxt-link>
            </h2>
            <div class="swiper bulletSwiper bullet-container visible_swiper swiper_hidden_side">
                <ul class="swiper-wrapper bullet-wrap">
                    <li class="swiper-slide bullet" v-for="(item, index) in bullet" :key="index" @click="setActive(index)"
                        :class="{ on: activeIndex === index }">
                        {{ item }}
                    </li>
                </ul>
                <div class="swiper_inner pc">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>

            </div>
            <!-- pc -->
            <div class="pc">
                <div class="item-list-container pc">
                    <div class="item-list vert" v-for="(item, index) in itemsBest" :key="index">
                        <item-part-thumbnail :item="item.thumbnail" />
                        <item-part-info :item="item.info" />
                    </div>
                </div>
            </div>
            <!-- mobile -->
            <div class="mobile">
                <div class="swiper bestSwiper visible_swiper swiper_hidden_side">
                    <div class="swiper-wrapper">
                        <div class="item-list vert swiper-slide" v-for="(item, index) in itemsBest" :key="index">
                            <item-part-thumbnail :item="item.thumbnail" />
                            <item-part-info :item="item.info" />
                        </div>
                    </div>
                    <div class="swiper_inner pc">
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                    <!-- <div class="swiper-scrollbar"></div> -->
                </div>
            </div>
        </section>

        <!-- 신상품 -->
        <section class="main-new inner">
            <h2 class="title-main">
                <span>신상품</span>
                <nuxt-link to="/" class="more">더보기</nuxt-link>
            </h2>
            <div class="item-list-container list2">
                <div class="item-list horizon" v-for="(item, index) in itemsNew" :key="index">
                    <item-part-thumbnail :item="item.thumbnail" />
                    <item-part-info :item="item.info" />
                    <ul class="item-tag">
                        <li class="tag tag1"><span>태그1</span></li>
                        <li class="tag tag2"><span>태그2</span></li>
                        <li class="tag tag3"><span>태그3</span></li>
                        <li class="tag tag4"><span>태그4</span></li>
                        <li class="tag tag5"><span>태그5</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 배너1 -->
        <section class="main-ad-banner main-ad-banner1">
            <div class="inner">
                <div class="swiper adBannerSwiper1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in itemsBanner" :key="index">
                            <!-- 1차 개발: 이미지형 -->
                            <div class="banner-img">
                                <img :src="item" alt="배너 이미지">
                            </div>

                            <!-- 2차 개발: 이미지+텍스트 따로 -->
                            <!-- <div class="banner-list">
                                <div class="banner-img">
                                    <img :src="item.img" alt="배너 이미지">
                                </div>
                                <div class="banner-desc">
                                    <p>
                                        {{ item.title }}
                                        <br>
                                        {{ item.title2 }}
                                    </p>
                                    <p>{{ item.desc }}</p>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="swiper_inner pc">
                        <div class="swiper-button-prev none-bg"></div>
                        <div class="swiper-button-next none-bg"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 타임딜 -->
        <section class="main-timedeal inner">
            <h2 class="title-main">
                <span>타임딜</span>
                <nuxt-link to="/" class="more">더보기</nuxt-link>
            </h2>
            <div class="swiper timedealSwiper visible_swiper swiper_hidden_side">
                <div class="swiper-wrapper">
                    <div class="item-list vert swiper-slide" v-for="(item, index) in itemsTimedeal" :key="index">
                        <!-- 타임딜 카운터 -->
                        <div class="timedeal-timer">
                            <div class="timedeal-sail">
                                TIME<br>SALE
                            </div>
                            <div class="timedeal-time">
                                <p>09:38~11:59</p>
                                <p>월·화·수·목·금·토·일</p>
                            </div>
                        </div>
                        <!-- 아이템 썸네일 -->
                        <item-part-thumbnail :item="item.thumbnail" />
                        <!-- 아이템 정보 -->
                        <item-part-info :item="item.info" />
                    </div>
                </div>
                <div class="swiper_inner pc">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        </section>


        <!-- 샌디추천 -->
        <section class="main-MD inner">
            <h2 class="title-main">
                <span>샌디추천</span>
                <nuxt-link to="/" class="more">더보기</nuxt-link>
            </h2>
            <!-- pc는 스와이퍼 -->
            <div class="swiper MDSwiper visible_swiper swiper_hidden_side">
                <span class="swiper-pause" @click.prevent="autoplaySlideMD($event)"></span>
                <div class="swiper-pagination"></div>
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in itemsMD" :key="index">
                        <div class="item-list vert">
                            <!-- 아이템 썸네일 -->
                            <item-part-thumbnail :item="item.thumbnail" />
                            <!-- 아이템 정보 -->
                            <item-part-info :item="item.info" />
                        </div>
                        <!-- 모바일에서 2단으로 총4개 노출하기 위해 아이템리스트 더 만듦-->
                        <div class="item-list vert mobile">
                            <item-part-thumbnail :item="item.thumbnail" />
                            <item-part-info :item="item.info" />
                        </div>
                        <div class="item-list vert mobile">
                            <item-part-thumbnail :item="item.thumbnail" />
                            <item-part-info :item="item.info" />
                        </div>
                        <div class="item-list vert mobile">
                            <item-part-thumbnail :item="item.thumbnail" />
                            <item-part-info :item="item.info" />
                        </div>
                    </div>
                </div>
                <div class="swiper_inner pc">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        </section>

        <!-- 배너2 -->
        <section class="main-ad-banner main-ad-banner2">
            <div class="inner">
                <div class="swiper adBannerSwiper2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in itemsBanner" :key="index">
                            <!-- 1차 개발: 이미지형 -->
                            <div class="banner-img">
                                <img :src="item" alt="배너 이미지">
                            </div>

                            <!-- 2차 개발: 이미지+텍스트 따로 -->
                            <!-- <div class="banner-list">
                                <div class="banner-img">
                                    <img :src="item.img" alt="배너 이미지">
                                </div>
                                <div class="banner-desc">
                                    <p>
                                        {{ item.title }}
                                        <br>
                                        {{ item.title2 }}
                                    </p>
                                    <p>{{ item.desc }}</p>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="swiper_inner pc">
                        <div class="swiper-button-prev none-bg"></div>
                        <div class="swiper-button-next none-bg"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 기획전 -->
        <section class="main-event inner">
            <h2 class="title-main">
                <span>기획전</span>
                <nuxt-link to="/" class="more">더보기</nuxt-link>
            </h2>
            <div class="event-wrap">
                <div class="event-item" v-for="(item, index) in itemsExhibition" :key="'itemsExhibition' + index">
                    <!-- 1차 개발: 이미지형 -->
                    <nuxt-link to="/">
                        <img :src="item" alt="eventImg" />
                    </nuxt-link>

                    <!-- 2차 개발: 이미지+텍스트 따로 -->
                    <!-- <nuxt-link to="/">
                        <div class="event-txt">
                            <p class="event-tag ing" v-if="item.status">진행중</p>
                            <p class="event-tag end" v-else>종료</p>
                            <p class="event-title">이벤트명이 노출되는 영역입니다 {{ item.title }}</p>
                            <p class="event-desc">설명글이 노출되고 있습니다. {{ item.desc }}</p>
                        </div>
                        <img class="event-img" :src="item.img" alt="eventImg" />
                    </nuxt-link> -->
                </div>
            </div>
        </section>

        <!-- 이벤트 -->
        <section class="main-exhibition">
            <div class="inner">
                <h2 class="title-main">
                    <span>이벤트</span>
                    <nuxt-link to="/" class="more">더보기</nuxt-link>
                </h2>
                <div class="swiper exhibitionSwiper visible_swiper swiper_hidden_side">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide exhibition-list" v-for="(item, index) in itemsEvent" :key="index">
                            <!-- 1차 개발: 이미지형 -->
                            <div class="exhibition-img">
                                <img :src="item" alt="기획전 이미지">
                            </div>
                            <!-- <div class="exhibition-img">
                                <img :src="item.img" alt="기획전 이미지">
                            </div>
                            <div class="exhibition-desc">
                                <p>
                                    {{ item.title }}
                                    <br>
                                    {{ item.title2 }}
                                </p>
                                <p>{{ item.desc }}</p>
                            </div>
                        </div> -->
                        </div>
                    </div>
                    <div class="swiper_inner pc">
                        <div class="swiper-button-prev none-bg"></div>
                        <div class="swiper-button-next none-bg"></div>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>


<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/core";
SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

let MainFlag = true;
let MDFlag = true;

export default {
    name: 'Main',
    components: {
    },
    setup() {
        return {
            modules: [Navigation, Pagination, Autoplay, Scrollbar],
        };
    },
    data: () => {
        return {
            mainSwiper: null,
            bulletSwiper: null,
            bestSwiper: null,
            timedealSwiper: null,
            MDSwiper: null,
            exhibitionSwiper: null,
            adBannerSwiper1: null,
            adBannerSwiper2: null,
            bullet: [
                "전체",
                "메뉴1",
                "메뉴2",
                "메뉴3",
                "메뉴4",
                "메뉴5",
                "메뉴6",
                "메뉴7",
                "메뉴8",
            ],
            activeIndex: 0,
            itemsBest: [
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_img.jpg"),
                        soldOut: false,
                        rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        // brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_img.jpg"),
                        soldOut: false,
                        rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        // sale: "138,000",
                        // price: "108,000",
                        // discounted: "27",
                        showContact: true,
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_img.jpg"),
                        soldOut: false,
                        rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        // brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        // sale: "138,000",
                        // price: "108,000",
                        // discounted: "27",
                        showContact: true,
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_img.jpg"),
                        soldOut: false,
                        rank: "01",
                        // time: "1",
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_img.jpg"),
                        soldOut: false,
                        rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item1.png"),
                        soldOut: true,
                        rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item2.png"),
                        soldOut: false,
                        rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
            ],
            itemsNew: [
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item1.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            // tag1: true,
                            // tag2: true,
                            // tag3: true,
                            // tag4: true,
                            // tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item2.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        // brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            // tag1: true,
                            // tag2: true,
                            // tag3: true,
                            // tag4: true,
                            // tag5: true,
                        }
                    },
                },

                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_img.jpg"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            // tag1: true,
                            // tag2: true,
                            // tag3: true,
                            // tag4: true,
                            // tag5: true,
                        }
                    },
                },
            ],
            itemsMD: [
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_img.jpg"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        // brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item2.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
            ],
            itemsTimedeal: [
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        time: "1"
                    },
                    info:
                    {
                        // brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
                        // rank: "01",
                        time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
            ],
            itemsEvent: [
                require("~/assets/img/sample/sample_img.jpg"),
                require("~/assets/img/sample/sample_img.jpg"),
                require("~/assets/img/sample/sample_img.jpg"),
                require("~/assets/img/sample/sample_img.jpg"),
                // {
                //     img: require("~/assets/img/sample/sample_event.png"),
                //     status: true,
                //     title: "제목",
                //     desc: "설명글",
                // },
                // {

                //     img: require("~/assets/img/sample/sample_event.png"),
                //     status: false,
                //     title: "제목",
                //     desc: "설명글",
                // },
                // {

                //     img: require("~/assets/img/sample/sample_event.png"),
                //     status: false,
                //     title: "제목",
                //     desc: "설명글",
                // },
                // {

                //     img: require("~/assets/img/sample/sample_event.png"),
                //     status: true,
                //     title: "제목",
                //     desc: "설명글",
                // },
            ],
            itemsExhibition: [
                require("~/assets/img/main/sample_exhibition.png"),
                require("~/assets/img/main/sample_exhibition.png"),
                require("~/assets/img/main/sample_exhibition.png"),
                require("~/assets/img/main/sample_exhibition.png"),
                // {
                //     img: require("~/assets/img/sample/sample_exhibition2.png"),
                //     title: "전문가가 필요하신가요?",
                //     title2: "파워소싱 의뢰요청부터 비교견적까지",
                //     desc: "설명글이 노출되고 있습니다.",
                // },
                // {
                //     img: require("~/assets/img/sample/sample_exhibition2.png"),
                //     title: "전문가가 필요하신가요?",
                //     title2: "",
                //     desc: "설명글이 노출되고 있습니다.",
                // },
                // {
                //     img: require("~/assets/img/sample/sample_exhibition2.png"),
                //     title: "전문가가 필요하신가요?",
                //     title2: "파워소싱 의뢰요청부터 비교견적까지",
                //     desc: "설명글이 노출되고 있습니다.",
                // },
                // {
                //     img: require("~/assets/img/sample/sample_exhibition2.png"),
                //     title: "전문가가 필요하신가요?",
                //     title2: "",
                //     desc: "설명글이 노출되고 있습니다.",
                // },
            ],
            itemsBanner: [
                require("~/assets/img/main/sample_banner.png"),
                require("~/assets/img/main/sample_banner.png"),
                require("~/assets/img/main/sample_banner.png"),
                require("~/assets/img/main/sample_banner.png"),
                // {
                //     img: require("~/assets/img/sample/sample_exhibition2.png"),
                //     title: "사무 공간이 쾌적한 공간으로",
                //     title2: "맞춤형 오피스 식물관리 서비스",
                //     desc: "식물관리 서비스",
                // },
                // {
                //     img: require("~/assets/img/sample/sample_exhibition2.png"),
                //     title: "사무 공간이 쾌적한 공간으로",
                //     title2: "맞춤형 오피스 식물관리 서비스",
                //     desc: "식물관리 서비스",
                // },
                // {
                //     img: require("~/assets/img/sample/sample_exhibition2.png"),
                //     title: "사무 공간이 쾌적한 공간으로",
                //     title2: "맞춤형 오피스 식물관리 서비스",
                //     desc: "식물관리 서비스",
                // },
                // {
                //     img: require("~/assets/img/sample/sample_exhibition2.png"),
                //     title: "사무 공간이 쾌적한 공간으로",
                //     title2: "맞춤형 오피스 식물관리 서비스",
                //     desc: "식물관리 서비스",
                // },
            ],
            eventMore: false,

        }
    },
    beforeDestroy() { },
    mounted() {
        // mainSwiper
        this.mainSwiper = new Swiper(".mainSwiper", {
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: true,
            loopAdditionalSlides: 1,
            autoplay: {
                delay: 3000
            },
            autoplayDisableOnInteraction: false,
            pagination: {
                el: ".mainSwiper .swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".mainSwiper .swiper-button-next",
                prevEl: ".mainSwiper .swiper-button-prev",
            },
            autoHeight: true,
            breakpoints: {
                768: {
                    centeredSlides: true,
                }
            },
        });

        this.setSwiper();
        window.addEventListener("scroll", this.handleScroll);

    },
    methods: {
        setSwiper() {
            this.bulletSwiper = new Swiper(".bulletSwiper", {
                slidesPerView: 4,
                spaceBetween: 15,
                pagination: {
                    el: ".bulletSwiper .swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    prevEl: ".bulletSwiper .swiper-button-prev",
                    nextEl: ".bulletSwiper .swiper-button-next",
                },
                breakpoints: {
                    768: {
                        slidesPerView: 6,  //브라우저가 768보다 클 때
                        spaceBetween: 30,
                    },
                },
            });
            this.bestSwiper = new Swiper(".bestSwiper", {
                slidesPerView: 1.2,
                spaceBetween: 15,
                pagination: {
                    el: ".bestSwiper .swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    prevEl: ".bestSwiper .swiper-button-prev",
                    nextEl: ".bestSwiper .swiper-button-next",
                },
                scrollbar: {
                    el: ".bestSwiper .swiper-scrollbar",
                    hide: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2.5,  //브라우저가 768보다 클 때
                        spaceBetween: 30,
                    },
                },
            });
            this.timedealSwiper = new Swiper(".timedealSwiper", {
                slidesPerView: 1.2,
                spaceBetween: 15,
                pagination: {
                    el: ".timedealSwiper .swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    prevEl: ".timedealSwiper .swiper-button-prev",
                    nextEl: ".timedealSwiper .swiper-button-next",
                },
                breakpoints: {
                    768: {
                        slidesPerView: 3,  //브라우저가 768보다 클 때
                        spaceBetween: 30,
                    },
                },
            });
            this.MDSwiper = new Swiper(".MDSwiper", {
                slidesPerView: 1,
                // slidesPerColumn: 2, // 버전 안 맞아서 사용 못함
                spaceBetween: 15,
                loop: true,
                autoplayDisableOnInteraction: false,

                pagination: {
                    el: ".MDSwiper .swiper-pagination",
                    type: "fraction",
                    clickable: true,
                },

                navigation: {
                    prevEl: ".MDSwiper .swiper-button-prev",
                    nextEl: ".MDSwiper .swiper-button-next",
                },
                breakpoints: {
                    768: {
                        slidesPerView: 4,  //브라우저가 768보다 클 때  
                        slidesPerGroup: 4,
                        spaceBetween: 30,
                        autoplay: {
                            delay: 4000,
                        },
                    },
                },
            });
            this.exhibitionSwiper = new Swiper(".exhibitionSwiper", {
                slidesPerView: 1.2,
                spaceBetween: 15,
                pagination: {
                    el: ".exhibitionSwiper .swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    prevEl: ".exhibitionSwiper .swiper-button-prev",
                    nextEl: ".exhibitionSwiper .swiper-button-next",
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1,  //브라우저가 768보다 클 때
                        spaceBetween: 30,
                        autoplay: {
                            delay: 4000,
                        },
                    },
                },
            });
            this.adBannerSwiper1 = new Swiper(".adBannerSwiper1", {
                slidesPerView: 1,
                loop: true,
                autoplay: {
                    delay: 3000,
                },
                pagination: {
                    el: ".adBannerSwiper1 .swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    prevEl: ".adBannerSwiper1 .swiper-button-prev",
                    nextEl: ".adBannerSwiper1 .swiper-button-next",
                },
            });
            this.adBannerSwiper2 = new Swiper(".adBannerSwiper2", {
                slidesPerView: 1,
                loop: true,
                autoplay: {
                    delay: 3000,
                },
                pagination: {
                    el: ".adBannerSwiper1 .swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    prevEl: ".adBannerSwiper2 .swiper-button-prev",
                    nextEl: ".adBannerSwiper2 .swiper-button-next",
                },
            });

        },

        autoplaySlide(e, flag, swiper) {
            this.flag = !this.flag;
            if (this.flag) {
                e.target.classList.add("on");
                swiper.autoplay.stop();
            } else {
                e.target.classList.remove("on");
                swiper.autoplay.start();
            }
        },

        autoplaySlideMain(e) {
            this.autoplaySlide(e, MainFlag, this.mainSwiper);
        },

        autoplaySlideMD(e) {
            this.autoplaySlide(e, MDFlag, this.MDSwiper);
        },



        setActive(index) {
            this.activeIndex = index;
        },
    },
}
</script>

<style scoped>
@import url('~/assets/css/pages/main.css');
</style>
