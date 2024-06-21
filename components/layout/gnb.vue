<template>
    <div class="gnb-area">
        <!-- pc -->
        <div class="gnb-container">
            <div class="gnb-wrap">
                <div class="btn-menu" @click="categoryToggle = !categoryToggle">
                    <img src="@/assets/img/layouts/ico_gnb.png" alt="btn-menu">
                </div>

                <ul class="gnb gnb1">
                    <li v-for="(gnbItem, index) in gnbItems" :key="index">
                        <nuxt-link :to="gnbItem.link">{{ gnbItem.name }}</nuxt-link>
                    </li>
                </ul>
                
                <!-- 전체메뉴 category-container -->
                <div class="category-container" :class="{on: categoryToggle}" @mouseleave="categoryToggle = false">
                    <div class="col" v-for="(subCategory, index) in subCategorys" :key="index"> <!-- active 클래스 추가시 활성화 -->
                        <nuxt-link :to="subCategory.categoryLink">{{ subCategory.categoryName }}</nuxt-link>
                        
                        <ul class="sub-menu">
                            <li v-for="(subGnb, index) in subCategory.subGnbs" :key="index"> 
                                <nuxt-link :to="subGnb.subGnbLink">{{ subGnb.subGnbName }}</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- gnb2-->
            <ul class="gnb gnb2">
                <li>
                    <nuxt-link to="/">회원가입</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">로그인</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">고객센터</nuxt-link>
                </li>
            </ul>

            <!-- 브랜드 category-container -->
            <div class="brand-category-container pc" @mouseleave="closebrandList()">
                <ul class="brand_category_filter">
                    <li class="on"><a href="javascript:void(0);">전체</a></li>
                    <li><a href="javascript:void(0);">영문</a></li>
                    <li><a href="javascript:void(0);">숫자</a></li>
                    <li><a href="javascript:void(0);">ㄱ</a></li>
                    <li><a href="javascript:void(0);">ㄴ</a></li>
                    <li><a href="javascript:void(0);">ㄷ</a></li>
                    <li><a href="javascript:void(0);">ㄹ</a></li>
                    <li><a href="javascript:void(0);">ㅁ</a></li>
                    <li><a href="javascript:void(0);">ㅂ</a></li>
                    <li><a href="javascript:void(0);">ㅅ</a></li>
                    <li><a href="javascript:void(0);">ㅇ</a></li>
                    <li><a href="javascript:void(0);">ㅈ</a></li>
                    <li><a href="javascript:void(0);">ㅊ</a></li>
                    <li><a href="javascript:void(0);">ㅋ</a></li>
                    <li><a href="javascript:void(0);">ㅌ</a></li>
                    <li><a href="javascript:void(0);">ㅍ</a></li>
                    <li><a href="javascript:void(0);">ㅎ</a></li>
                </ul>
                <div class="brand_category_item_wrap scrollDesign">
                    <ul class="brand_category_item on">
                        <li><a href="javascript:void(0);">(주)대상다이브스</a></li>
                        <li><a href="javascript:void(0);">1883루틴</a></li>
                        <li><a href="javascript:void(0);">3M</a></li>
                        <li><a href="javascript:void(0);">가토</a></li>
                        <li><a href="javascript:void(0);">굳지않는 지리산 떡방앗간</a></li>
                        <li><a href="javascript:void(0);">골든디저트</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                        <li><a href="javascript:void(0);">111</a></li>
                    </ul>
                    <ul class="brand_category_item on">
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                        <li><a href="javascript:void(0);">222</a></li>
                    </ul>
                    <ul class="brand_category_item on">
                        <li><a href="javascript:void(0);">333</a></li>
                        <li><a href="javascript:void(0);">333</a></li>
                        <li><a href="javascript:void(0);">333</a></li>
                        <li><a href="javascript:void(0);">333</a></li>
                        <li><a href="javascript:void(0);">333</a></li>
                        <li><a href="javascript:void(0);">333</a></li>
                        <li><a href="javascript:void(0);">333</a></li>
                        <li><a href="javascript:void(0);">333</a></li>
                        <li><a href="javascript:void(0);">333</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- gnb mobile
        <div class="header-wrap mobile">
            <div class="gnb-container scrollNone">
                <ul class="gnb">
                    <li class="gnb-recent on">
                        <a href="javascript:void(0);">
                            <span>자주구매<img src="@/assets/img/common/ico_star_b.svg" alt="ico_star">
                            </span>
                        </a>
                    </li>
                    <li class="gnb_onlycnt on">
                        <a href="javascript:void(0);">
                            <span>전용몰</span>
                            <img src="@/assets/img/common/cnt_pick_w.svg" alt="cnt_pick">
                        </a>
                    </li>
                    <li><a href="javascript:void(0);">MD추천</a></li>
                    <li><a href="javascript:void(0);">타임딜</a></li>
                    <li><a href="javascript:void(0);">신상품</a></li>
                    <li><a href="javascript:void(0);">베스트</a></li>
                    <li><a href="javascript:void(0);">이벤트</a></li>
                    <li><a href="javascript:void(0);">기획전</a></li>
                </ul>
            </div>
            <!-- 브랜드 category-container 
            <div class="m-brand-category-container mobile">
                <ul class="search-list-top">
                    <li><img src="@/assets/img/common/ic_back.svg" alt="back" /></li>
                    <li><input type="text" placeholder="브랜드를 검색하세요"></li>
                    <li><img src="@/assets/img/common/ic_serch.svg" alt="search"></li>
                </ul>
                <div class="brand-intro on">
                    <ul class="inner">
                        <li><img src="~/static/img/sample/mc_sample_img.png" alt="brand"></li>
                        <li><img src="~/static/img/sample/mc_sample_img.png" alt="brand"></li>
                        <li><img src="~/static/img/sample/mc_sample_img.png" alt="brand"></li>
                        <li><img src="~/static/img/sample/mc_sample_img.png" alt="brand"></li>
                    </ul>
                    <div class="swiper brandIntroSwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <a href="javascript:void(0);"><img src="~/static/img/main/img_brand_logo_01.png"
                                        alt="brand_logo"></a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:void(0);"><img src="~/static/img/main/img_brand_logo_02.png"
                                        alt="brand_logo"></a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:void(0);"><img src="~/static/img/main/img_brand_logo_03.png"
                                        alt="brand_logo"></a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:void(0);"><img src="~/static/img/main/img_brand_logo_04.png"
                                        alt="brand_logo"></a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:void(0);"><img src="~/static/img/main/img_brand_logo_05.png"
                                        alt="brand_logo"></a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:void(0);"><img src="~/static/img/main/img_brand_logo_06.png"
                                        alt="brand_logo"></a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:void(0);"><img src="~/static/img/main/img_brand_logo_01.png"
                                        alt="brand_logo"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" m_brand_category inner">
                    <div class="brand_category_item_wrap">
                        <ul class="brand_category_item">
                            <li><a href="javascript:void(0);">한글</a></li>
                            <li><a href="javascript:void(0);">한글</a></li>
                            <li><a href="javascript:void(0);">한글</a></li>
                            <li><a href="javascript:void(0);">한글</a></li>
                            <li><a href="javascript:void(0);">한글</a></li>
                            <li><a href="javascript:void(0);">한글</a></li>
                            <li><a href="javascript:void(0);">한글</a></li>
                            <li><a href="javascript:void(0);">한글</a></li>
                            <li><a href="javascript:void(0);">한글</a></li>
                            <li><a href="javascript:void(0);">한글</a></li>
                            <li><a href="javascript:void(0);">apple</a></li>
                            <li><a href="javascript:void(0);">apple</a></li>
                            <li><a href="javascript:void(0);">apple</a></li>
                            <li><a href="javascript:void(0);">apple</a></li>
                            <li><a href="javascript:void(0);">apple</a></li>
                            <li><a href="javascript:void(0);">apple</a></li>
                            <li><a href="javascript:void(0);">apple</a></li>
                            <li><a href="javascript:void(0);">apple</a></li>
                            <li><a href="javascript:void(0);">apple</a></li>
                            <li><a href="javascript:void(0);">apple</a></li>
                            <li><a href="javascript:void(0);">apple</a></li>
                            <li><a href="javascript:void(0);">123</a></li>
                            <li><a href="javascript:void(0);">123</a></li>
                            <li><a href="javascript:void(0);">123</a></li>
                            <li><a href="javascript:void(0);">123</a></li>
                            <li><a href="javascript:void(0);">123</a></li>
                            <li><a href="javascript:void(0);">123</a></li>
                            <li><a href="javascript:void(0);">123</a></li>
                            <li><a href="javascript:void(0);">123</a></li>
                            <li><a href="javascript:void(0);">123</a></li>
                            <li><a href="javascript:void(0);">123</a></li>
                        </ul>
                    </div>
                    <ul class="brand_category_filter">
                        <li class="on">전체</li>
                        <li>영문</li>
                        <li>숫자</li>
                        <li>ㄱ</li>
                        <li>ㄴ</li>
                        <li>ㄷ</li>
                        <li>ㄹ</li>
                        <li>ㅁ</li>
                        <li>ㅂ</li>
                        <li>ㅅ</li>
                        <li>ㅇ</li>
                        <li>ㅈ</li>
                        <li>ㅊ</li>
                        <li>ㅋ</li>
                        <li>ㅌ</li>
                        <li>ㅍ</li>
                        <li>ㅎ</li>
                    </ul>
                </div>
            </div>
        </div> -->

    </div>

</template>

<script>
export default {
    data() {
        return {
            categoryToggle: false,
            gnbItems:  [
                { name: "MD추천", link: "/" },
                { name: "타임딜", link: "/" },
                { name: "신상품", link: "/" },
                { name: "베스트", link: "/" },
                { name: "이벤트", link: "/" },
                { name: "기획전", link: "/" }
            ],
            subCategorys: [
                {
                    categoryName: "Asset", categoryLink: "/",
                    subGnbs: [
                        { subGnbName: "중소형빌딩관리", subGnbLink: "/" }
                    ]
                },
                {
                    categoryName: "Interior", categoryLink: "/",
                    subGnbs: [
                        { subGnbName: "오피스인테리어", subGnbLink: "/" }
                    ]
                },
                {
                    categoryName: "Safe", categoryLink: "/",
                    subGnbs: [
                        { subGnbName: "청소/소독/방역", subGnbLink: "/" }
                    ]
                },
                {
                    categoryName: "Asset", categoryLink: "/",
                    subGnbs: [
                        { subGnbName: "시설/안전", subGnbLink: "/" },
                        { subGnbName: "출입/보안", subGnbLink: "/" }
                    ]
                },
                {
                    categoryName: "Life", categoryLink: "/",
                    subGnbs: [
                        { subGnbName: "청소/소독/방역", subGnbLink: "/" },
                        { subGnbName: "오피스물류", subGnbLink: "/" },
                        { subGnbName: "구매/렌탈", subGnbLink: "/" },
                        { subGnbName: "간식", subGnbLink: "/" },
                        { subGnbName: "커피(머신)", subGnbLink: "/" },
                        { subGnbName: "커피(원두)", subGnbLink: "/" }
                    ]
                },
                {
                    categoryName: "Parking", categoryLink: "/",
                    subGnbs: [
                        { subGnbName: "세차", subGnbLink: "/" },
                        { subGnbName: "주차 서비스", subGnbLink: "/" }
                    ]
                }
                
            ],

        }
    }

}
</script>