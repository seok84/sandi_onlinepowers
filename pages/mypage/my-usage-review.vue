<template>
    <div id="myUsageWrapper" class="myInfo">
        <h2 class="title-h2 pc">마이페이지</h2>
        <h2 class="title-h2 mobile">이용후기</h2>
        <div class="inner">
            <etc-mypage-info />
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-mypage class="general" />
                <!-- mypage-content -->
                <div class="mypage-content">
                    <div class="sub_tit pc">
                        <h3>이용후기</h3>
                    </div>
                    <!-- 조회기간 -->
                    <div class="form_title type02">
                        <p>전체<span class="counter">49</span>
                        </p>
                    </div>

                    <div class="inquiry_wrapper">

                        <div class="form_inner">
                            <div class="form_line select_wrap ">
                                <!-- 
                                        form_control    공용스타일
                                        input_select    셀렉트 공용스타일
                                        input_select02  셀렉트 화살표 변경
                                        search_area     레이아웃 
                                        -->
                                <select name="" id="select01" class="form_control input_select input_select02 search_area">
                                    <option value="">찾고자 하는 날짜를 설정해주세요</option>
                                    <option value="">1주일</option>
                                    <option value="">1달</option>
                                    <option value="">1년</option>
                                </select>
                                <button type="button" class="btn btn-small btn_accent btn-black">
                                    조회
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- // 조회기간 -->
                    <div class="order-list-container">
                        <div class="order-list-wrap" v-for="(item, index) in items" :key="index">
                            <div class="order-list-item">
                                <div class="item-list horizon">
                                    <item-part-thumbnail :item="item.thumbnail" />
                                    <item-part-info :item="item.info" />
                                </div>
                            </div>
                            <div class="usage_review_desc">
                                <div class="review_top_wrap">
                                    <div class="rating_star">
                                        <span class="on"></span>
                                        <span class="on"></span>
                                        <span class="on"></span>
                                        <span class="on"></span>
                                        <span class=""></span>
                                        <p class="counter">5.0</p>
                                    </div>
                                    <span class="product_date">2022-12-13</span>
                                </div>
                                <div class="review_desc_wrap review_option">
                                    <p class="product_option">
                                        선택한 옵션 : 옵션명 - 선택한 옵션 01 / 옵션명 - 선택한 옵션 02
                                        / 옵션명 - 선택한 옵션 03 / 옵션명 - 선택한 옵션 04 / 옵션명 -
                                        선택한 옵션 05 / 옵션명 - 선택한 옵션 06 / 옵션이 두 줄이 됩니다
                                        / 옵션이 두 줄이 됩니다 / 옵션이 두 줄이 됩니다
                                    </p>
                                </div>
                                <!-- usage_hide_wrap : 신고 시 가려지는 영역 -->
                                <div class="usage_hide_wrap">
                                    <div class="review_desc_wrap review_comment">
                                        <span class="review_desc">
                                            잘받았습니다. 감사합니다<br> 앙버터부쉬맨빵은유통과정때문인지 버터가
                                            깨져서 손님들께서 직접 받았을경우 아쉬울것같았습니다.
                                        </span>
                                    </div>
                                    <div class="review_thumbnail_wrap">
                                        <span class="close">닫기</span>
                                        <ul>
                                            <li><img src="~/assets/img/sample/sample_img.jpg" alt=""></li>
                                            <li><img src="~/assets/img/sample/sample_img.jpg" alt=""></li>
                                            <li><img src="~/assets/img/sample/sample_img.jpg" alt=""></li>
                                            <li><img src="~/assets/img/sample/sample_img.jpg" alt=""></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="thumbs_up">
                                    <span>도움됐어요</span>
                                    <div class="thumbs_btn">
                                        <span class="thumbs_img"></span>
                                        <span class="thumbs_count">99+</span>
                                    </div>
                                    <div class="thumbs_btn on">
                                        <span class="thumbs_img"></span>
                                        <span class="thumbs_count">8</span>
                                    </div>
                                </div>
                                <div class="hide_wrap">
                                    <div class="administrator_answer">
                                        <di class="qna_manager"><span class="qa">A.</span>샌디</di>
                                        <div class="text_area">
                                            안녕하세요 고객님. 샌디 고객센터 입니다. <br />
                                            저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.<br />
                                            소중한 경험을 리뷰로 남겨주셔서 감사합니다.
                                        </div>
                                        <p class="product_date">
                                            답변일&nbsp;&nbsp;:&nbsp;&nbsp;<span>2022-06-14</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="btn_right_wrap">
                                    <button class="btn btn-default btn-small btn_sm">수정</button>
                                    <!-- <button class="btn btn-default btn-small btn_sm">삭제</button> -->
                                </div>
                            </div>
                        </div>
                        <div class="order-list-wrap">
                            <div class="usage_review_desc">
                                <!-- usage_hide_wrap : 신고 시 가려지는 영역 -->
                                <div class="usage_hide_wrap">
                                    <div class="no_content reported on">
                                        <p>신고 후 검토 결과, 게시 중단 되었습니다.</p>
                                    </div>
                                    <div class="btn_right_wrap">
                                        <button class="btn btn-default btn-small btn_sm">수정</button>
                                        <!-- <button class="btn btn-default btn-small btn_sm">삭제</button> -->
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <!-- ////////////////////pagination//////////////////// -->
                    <etc-pagination />
                    <etc-no-content txt="작성한 리뷰가 없습니다." />
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'myUsageWrapper',
    data() {
        return {
            items: [
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
                        option: "[옵션값] 해당옵션 / [옵션값] 해당옵션 / [옵션값] 해당옵션 (+1,000원)",
                        optionSet: "세트 옵션이 노출되는 공간입니다",
                        // sale: "138,000",
                        price: "108,000",
                        // discounted: "27",
                        quantity: "2",
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
                        option: "[옵션값] 해당옵션 / [옵션값] 해당옵션 / [옵션값] 해당옵션 (+1,000원)",
                        optionSet: "세트 옵션이 노출되는 공간입니다",
                        // sale: "138,000",
                        price: "108,000",
                        // discounted: "27",
                        quantity: "2",
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
                        option: "[옵션값] 해당옵션 / [옵션값] 해당옵션 / [옵션값] 해당옵션 (+1,000원)",
                        optionSet: "세트 옵션이 노출되는 공간입니다",
                        // sale: "138,000",
                        price: "108,000",
                        // discounted: "27",
                        quantity: "2",
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
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/mypage.css');
</style>