<template>
    <header id="header-ui" :class="{ bannerOn: topBanner == true }" :data-page=[currentPage]>
        <!-- top-banner -->
        <div class="top-banner" :class="{ on: topBanner == true }" style="background-color: #fc53d1">
            <div class="inner">
                <nuxt-link to="/">
                    <img src="https://sandi.onlinepowers.com/upload/display/top-banner/0/thumb/202311091402111490.png"
                        alt="이미지">
                </nuxt-link>
                <button type="button" @click="topBanner = false" class="btn_close">닫기</button>
            </div>
        </div>

        <!-- header-top -->
        <div class="header-top inner">
            <!-- backBtnNone 클래스 추가 시 뒤로가기 없음 -->
            <div class="btn-back mobile backBtnNone">
                <nuxt-link to="/"><img src="@/assets/img/common/ic_back.svg" alt="back" /></nuxt-link>
            </div>
            <h1>
                <nuxt-link to="/"><img src="@/assets/img/common/brand.png" alt="SANDI"></nuxt-link>
            </h1>
            <!-- util-menu -->
            <ul class="util-menu">
                <!-- 검색영역  -->
                <li class="search searchEl" @click="searchListToggle = !searchListToggle, categoryToggle = false">
                    <input type="text" class="pc" placeholder="검색어를 입력해주세요." />
                    <button>
                        <img src="@/assets/img/common/ico_search_pink.svg" alt="검색">
                        <span>검색하기</span>
                    </button>
                </li>
                <!-- 상단 사용자 퀵 아이콘 리스트  -->
                <li class="btn-mypage pc">
                    <nuxt-link to="/">
                        <img src="@/assets/img/common/ico_mypage.svg" alt="마이페이지">
                        <span>마이페이지</span>
                    </nuxt-link>
                </li>
                <!-- 카운팅: count로 제어 -->
                <li class="btn-heart pc on">
                    <nuxt-link to="/">
                        <img src="@/assets/img/common/ico_heart.svg" alt="관심상품">
                        <span class="count">999</span>
                        <span>관심상품</span>
                    </nuxt-link>
                </li>
                <!-- 카운팅: count로 제어 -->
                <li class="btn-bag on">
                    <nuxt-link to="/">
                        <img src="@/assets/img/common/ico_basket.svg" alt="장바구니">
                        <span class="count">999</span>
                        <span>장바구니</span>
                    </nuxt-link>
                </li>
            </ul>

            <!-- search -->
            <div class="search-list-container" :class="{ on: searchListToggle }">
                <div class="mobile">
                    <ul class="search-list-top">
                        <li><button><img src="@/assets/img/common/ic_serch.svg" alt="search"></button></li>
                        <li><input type="text" placeholder="검색어를 입력해주세요." tabindex="0"></li>
                        <li @click="searchListToggle = false" class="search-list-close">닫기</li>
                    </ul>
                </div>
                <div class="search-list-wrap">
                    <div class="col">
                        <div class="list-title">
                            <p>최근검색어</p>
                            <a class="list-remove-all" @click="clearList()">모두지우기</a>
                        </div>
                        <div class="recent-list">
                            <nuxt-link to="/" class="recent-item"><span>딸기</span><span class="list-remove"></span>
                            </nuxt-link>
                            <nuxt-link to="/" class="recent-item"><span>크래커</span><span class="list-remove"></span>
                            </nuxt-link>
                            <nuxt-link to="/" class="recent-item"><span>딸기시럽</span><span class="list-remove"></span>
                            </nuxt-link>
                            <nuxt-link to="/" class="recent-item"><span>포도시럽</span><span class="list-remove"></span>
                            </nuxt-link>
                            <nuxt-link to="/" class="recent-item"><span>초코시럽</span><span class="list-remove"></span>
                            </nuxt-link>
                        </div>
                        <div class="list-empty"><!-- on 클래스 추가시 활성화 -->
                            <p>최근 검색내역이 없습니다.</p>
                        </div>
                    </div>

                    <div class="col">
                        <div class="list-title">
                            <p>인기검색어</p>
                        </div>
                        <div class="popular-list">
                            <nuxt-link to="/" class="popular-item"><span>딸기</span></nuxt-link>
                            <nuxt-link to="/" class="popular-item"><span>코코넛밀크</span></nuxt-link>
                            <nuxt-link to="/" class="popular-item"><span>그린티파우더</span></nuxt-link>
                            <nuxt-link to="/" class="popular-item"><span>과일청</span></nuxt-link>
                            <nuxt-link to="/" class="popular-item"><span>달고나</span></nuxt-link>
                        </div>
                    </div>

                </div>
                <div class="list-close pc">
                    <span @click="searchListToggle = false">닫기</span>
                </div>
            </div>
        </div>

        <!-- gnb-->
        <layout-gnb />

    </header>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Scrollbar
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);


const BACK_BUTTON_HIDE_URLS = [
    '/'
];

export default {
    name: 'HeaderUi',
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
    data() {
        return {
            shinebrandSwiper: null,
            isVisible: false,
            topBanner: true,
            searchListToggle: false,
            mobileBackButtonFlag: false,
            currentPage: '',

        }
    },
    computed: {},

    watch: {
        $route(to, from) {
            this.$common.processSessionTimeout(this);
            // location.reload();
            this.currentPage = to.name;
        }
    },

    mounted() {

        const listRemove = document.querySelectorAll(".list-remove");
        for (let i = 0; i < listRemove.length; i++) {
            listRemove[i].addEventListener("click", (e) => {
                e.target.parentNode.remove()
                const recentItem = document.querySelectorAll(".recent-item");
                if (recentItem.length === 0) {
                    const listEmpty = document.querySelector(".list-empty");
                    listEmpty.classList.add("on");
                }
            })
        }

        const categoryFilter = document.querySelectorAll('.brand_category_filter li');
        for (let i = 0; i < categoryFilter.length; i++) {
            categoryFilter[i].addEventListener("click", (e) => {
                for (let i = 0; i < categoryFilter.length; i++) {
                    categoryFilter[i].classList.remove("on")
                }
                e.target.classList.add("on");
            })
        }
        this.brandIntroSwiper = new Swiper(".brandIntroSwiper", {
            slidesPerView: 3.5,
            spaceBetween: 15,
        });


        // 페이지
        this.currentPage = this.$route.name;
    },

    methods: {

    }
}
</script>

<style>
@import url('@/assets/css/components/layout/header.css');
</style>