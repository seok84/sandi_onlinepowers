<template>
    <div id="aboutView">
        <h2 class="title-h2">회사소개</h2>


        <div class="about_top">
            <!-- <h3>샌디몰 소개</h3> -->
            <img src="https://fakeimg.pl/1791x405/ccc/909090?text=Sample+image" alt="샌디">

        </div>
        <div class="inner">
            <ul class="about_wrap">
                <li>
                    <div class="ico_box">
                        <!-- <img src="~/assets/img/footer/cnt_start.svg" alt="국내 최초 커피 종합몰"> -->
                    </div>
                    <div class="right_box">
                        <p class="eng_tit">Start, SANDI</p>
                        <p class="kr_tit">샌디 종합몰</p>
                        <p class="desc">샌디 종합몰 소개글입니다.</p>
                    </div>
                </li>
                <li>
                    <div class="ico_box">
                        <!-- <img src="~/assets/img/footer/cnt_trend.svg" alt="합리적인 가격과 편리한 구매"> -->
                    </div>
                    <div class="right_box">
                        <p class="eng_tit">Trend, SANDI Service</p>
                        <p class="kr_tit">샌디 서비스</p>
                        <p class="desc">샌디 서비스 소개글입니다.</p>
                    </div>
                </li>
                <li>
                    <div class="ico_box">
                        <!-- <img src="~/assets/img/footer/cnt_new.svg" alt="고객중심의 마인드"> -->
                    </div>
                    <div class="right_box">
                        <p class="eng_tit">New, SANDI Culture</p>
                        <p class="kr_tit">고객중심의 마인드</p>
                        <p class="desc">샌디는 고객 여러분께 자세를 낮추고 귀를 활짝 열어놓겠습니다. 고객 여러분의 제안과 수요를 열심히 경청하고 수용하여, 카페문화
                            관련상품의 품질과 독창성에 대한 새로운 표준을 만들어 가고자 노력하겠습니다.</p>
                    </div>
                </li>
            </ul>
            <div class="consult_wrap">
                <h4 class="tit">Consulting</h4>
                <ul class="consult_list">
                    <li>
                        <div class="about_img_box">
                            <span>기업고객 대량구매 지원</span>
                            <img src="https://fakeimg.pl/590x300/ccc/909090?text=기업고객+대량구매+지원" class="pc" alt="기업고객 대량구매 지원">
                            <img src="https://fakeimg.pl/492x300/ccc/909090?text=기업고객+대량구매+지원" class="mobile" alt="기업고객 대량구매 지원">
                        </div>
                        <div class="right_box">
                            <p class="info_dot">“One-Stop” 기업&프랜차이즈 사업 지원</p>
                            <p class="info_dot">기업회원에 특화된 상품 추천 및 최저가 공급</p>
                        </div>
                    </li>
                    <li>
                        <div class="about_img_box">
                            <span>사업자 지원</span>
                            <img src="https://fakeimg.pl/590x300/ccc/909090?text=사업자+지원" class="pc" alt="사업자 지원">
                            <img src="https://fakeimg.pl/492x300/ccc/909090?text=사업자+지원" class="mobile" alt="사업자 지원">
                        </div>
                        <div class="right_box">
                            <p class="info_dot">창업자본에 맞는 합리적 비용으로 컨설팅 및 오픈 가이드</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="box">
                <h4 class="ico_location">본사 주소</h4>
                <p class="address">서울특별시 구로구 디지털로 27길 24 (벽산디지털밸리 1차) 405호</p>
                <div class="linked_wrap">
                    <a href="javascript:void(0);" class="linked_arr">주소복사</a>
                    <a href="javascript:void(0);" class="linked_arr">지도보기</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TitleD1 from "~/components/text/title-default.vue";
import Lnb from "~/components/layout/lnb-customer.vue";
import TitleMore from "~/components/text/title-more.vue";


export default {
    name: 'about',
    components: {
        TitleD1,
        Lnb,
        TitleMore,
        

    },
    data() {
        return {
            titleMain: "회사소개",
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/customer.css');
@import url('~/assets/css/pages/footer-site.css');


</style>