<template>
    <div id="float-menu-container">

        <div class="float-menu-bar mobile">
            <ul>
                <li><nuxt-link to="/" class="ico-home active">홈</nuxt-link></li> <!-- active 클래스 추가시 활성화 -->
                <li><nuxt-link to="/" class="ico-menu" @click.native="floatMenuContents = true">메뉴</nuxt-link></li>
                <li><nuxt-link to="/" class="ico-mypage">마이페이지</nuxt-link></li>
                <li><nuxt-link to="/" class="ico-heart">관심상품</nuxt-link></li>
                <li><nuxt-link to="/" class="ico-recent">최근 본 상품</nuxt-link></li>
            </ul>
        </div>
        <div class="float-menu-contents" :class="{'on': floatMenuContents == true}">
            <!-- m-header -->
            <div class="m-header">
                <div>
                    <nuxt-link to="/">로그인</nuxt-link>
                    <nuxt-link to="/">회원가입</nuxt-link>
                    <!--
                    <nuxt-link to="/">로그아웃</nuxt-link>
                    <nuxt-link to="/">마이페이지</nuxt-link>
                    -->
                </div>
                <div>
                    <a href="javascript:void(0);">알림설정</a>
                    <div class="m_close_btn" @click="floatMenuContents = false"></div>
                </div>
            </div>
            <!-- 모바일 m-category-container -->
            <div class="m-category-container">
                <ul class="dep1">
                    <!-- on붙으면 활성화 -->
                    <li class="depth01" v-for="(mCategory, index) in mCategories" :key="index" :class="{ on: index === mCategoryIndex }">
                        <a href="javascript:void(0)" :class="mCategory.class" @click="itemActive(index)">{{ mCategory.name }}</a>
                    </li>
                </ul>

                <div class="dep2">
                    <!-- on붙으면 활성화: dep2보임 -->
                    <ul class="depth_02" v-for="(mCategory, index) in mCategories" :key="index" :class="{ on: index === mCategoryIndex }">
                        <!-- on붙으면 활성화: dep3보임 -->
                        <li v-for="(subGnb, indexA) in mCategory.subGnbs" :key="indexA" :class="{ on: indexA === mSubGnbIndex }">
                            <a href="javascript:void(0);" @click="togggleAcitve(indexA)">{{ subGnb.subGnbName }}</a>
                            <div class="dep3" :class="{ on: indexA === mSubGnbIndex }">
                                <ul>
                                    <li v-for="(subMenu, index) in subGnb.subMenus" :key="index">
                                        <nuxt-link to="/">{{ subMenu.subMenuName }}</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </div>

            <!-- m-footer -->
            <div class="m-footer">
                <layout-footer />
            </div>
        </div>
    </div>
</template>

<script>
    /*
    import Swiper from "swiper";
    import "swiper/swiper-bundle.css";
    import SwiperCore, {
        Navigation,
        Pagination,
        Autoplay,
        Scrollbar
    } from "swiper/core";
    SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);
    */
    export default {
        name: 'FloatMenu',
        data() {
            return {
                //m_specialSwiper: null,
                floatMenuContents: false,
                mCategoryIndex: 0,
                mSubGnbIndex: 0,
                mCategories:  [
                    { 
                        name: "Asset", class: "ico-building",
                        subGnbs: [
                            { subGnbName: "중소형빌딩관리", subGnbLink: "/",
                                subMenus: [
                                    { subMenuName: "카테고리1", subMenuLink: "/" },
                                    { subMenuName: "카테고리2", subMenuLink: "/" },
                                    { subMenuName: "카테고리3", subMenuLink: "/" },
                                ]
                            }
                        ]
                    },
                    { 
                        name: "Interior", class: "ico-painting",
                        subGnbs: [
                            { subGnbName: "오피스인테리어", subGnbLink: "/",
                                subMenus: [
                                    { subMenuName: "카테고리1", subMenuLink: "/" },
                                    { subMenuName: "카테고리2", subMenuLink: "/" },
                                    { subMenuName: "카테고리3", subMenuLink: "/" },
                                ]
                            }
                        ]
                    },
                    { 
                        name: "Clean", class: "ico-cleaning",
                        subGnbs: [
                            { subGnbName: "청소/소독/방역", subGnbLink: "/",
                                subMenus: [
                                    { subMenuName: "카테고리1", subMenuLink: "/" },
                                    { subMenuName: "카테고리2", subMenuLink: "/" },
                                    { subMenuName: "카테고리3", subMenuLink: "/" },
                                ]
                            }
                        ]
                    },
                    { 
                        name: "Safe", class: "ico-safe",
                        subGnbs: [
                            { subGnbName: "시설/안전", subGnbLink: "/",
                                subMenus: [
                                    { subMenuName: "카테고리1", subMenuLink: "/" },
                                    { subMenuName: "카테고리2", subMenuLink: "/" },
                                    { subMenuName: "카테고리3", subMenuLink: "/" },
                                ]
                            },
                            { subGnbName: "출입/보안", subGnbLink: "/",
                                subMenus: [
                                    { subMenuName: "카테고리1", subMenuLink: "/" },
                                    { subMenuName: "카테고리2", subMenuLink: "/" },
                                    { subMenuName: "카테고리3", subMenuLink: "/" },
                                ]
                            }
                        ]
                    },
                    { 
                        name: "Life", class: "ico-life",
                        subGnbs: [
                            {
                                subGnbName: "청소/소독/방역", subGnbLink: "/",
                                subMenus: [
                                    { subMenuName: "카테고리1", subMenuLink: "/" },
                                    { subMenuName: "카테고리2", subMenuLink: "/" },
                                    { subMenuName: "카테고리3", subMenuLink: "/" },
                                ]
                            },
                            {
                                subGnbName: "오피스물류", subGnbLink: "/",
                                subMenus: [
                                    { subMenuName: "카테고리1", subMenuLink: "/" },
                                    { subMenuName: "카테고리2", subMenuLink: "/" },
                                    { subMenuName: "카테고리3", subMenuLink: "/" },
                                ]
                            },
                            {
                                subGnbName: "구매/렌탈", subGnbLink: "/",
                                subMenus: [
                                    { subMenuName: "카테고리1", subMenuLink: "/" },
                                    { subMenuName: "카테고리2", subMenuLink: "/" },
                                    { subMenuName: "카테고리3", subMenuLink: "/" },
                                ]
                            },
                            {
                                subGnbName: "간식", subGnbLink: "/",
                                subMenus: [
                                    { subMenuName: "카테고리1", subMenuLink: "/" },
                                    { subMenuName: "카테고리2", subMenuLink: "/" },
                                    { subMenuName: "카테고리3", subMenuLink: "/" },
                                ]
                            },
                            {
                                subGnbName: "커피(머신)", subGnbLink: "/",
                                subMenus: [
                                    { subMenuName: "카테고리1", subMenuLink: "/" },
                                    { subMenuName: "카테고리2", subMenuLink: "/" },
                                    { subMenuName: "카테고리3", subMenuLink: "/" },
                                ]
                            },
                            {
                                subGnbName: "커피(원두)", subGnbLink: "/",
                                subMenus: [
                                    { subMenuName: "카테고리1", subMenuLink: "/" },
                                    { subMenuName: "카테고리2", subMenuLink: "/" },
                                    { subMenuName: "카테고리3", subMenuLink: "/" },
                                ]
                            }
                        ]
                    },
                    { 
                        name: "Parking", class: "ico-parking",
                        subGnbs: [
                            {
                                subGnbName: "세차", subGnbLink: "/",
                                subMenus: [
                                    { subMenuName: "카테고리1", subMenuLink: "/" },
                                    { subMenuName: "카테고리2", subMenuLink: "/" },
                                    { subMenuName: "카테고리3", subMenuLink: "/" },
                                ]
                            },
                            {
                                subGnbName: "주차 서비스", subGnbLink: "/",
                                subMenus: [
                                    { subMenuName: "카테고리1", subMenuLink: "/" },
                                    { subMenuName: "카테고리2", subMenuLink: "/" },
                                    { subMenuName: "카테고리3", subMenuLink: "/" },
                                ]
                            }
                        ]
                    }
                ],
            }
        },
        /* 
        setup() {
            return {
                modules: [Pagination, Navigation],
            };
        },*/
        mounted() {
            /*
            this.m_specialSwiper = new Swiper(".m_specialSwiper", {
                slidesPerView: 1.5,
                spaceBetween: 30,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                },
            });*/
        },
        methods: {
            itemActive(index) {
                this.mCategoryIndex = index;
            },

            togggleAcitve(index) {
                this.mSubGnbIndex = index
            }
        }
    }
</script>

<style>
    @import url('~/assets/css/components/layout/float-menu.css');
</style>