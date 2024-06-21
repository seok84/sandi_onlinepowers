<template>
    <div id="my-product-Inquiry" class="myInfo">
        <h2 class="title-h2 pc">마이페이지</h2>
        <h2 class="title-h2 mobile">상품문의</h2>
        <div class="inner">
            <etc-mypage-info />
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-mypage class="general" />
                <!-- mypage-content -->
                <div class="mypage-content">
                    <div class="sub_tit">
                        <h3>상품문의</h3>
                    </div>

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
                                    <option value="">문의유형을 선택해 주세요</option>
                                    <option value="">문의유형1</option>
                                    <option value="">문의유형2</option>
                                </select>
                                <button type="button" class="btn btn-small btn_accent btn-black">
                                    조회
                                </button>
                            </div>
                        </div>

                    </div>

                    <div class="order-list-container">
                        <div class="order-list-wrap">
                            <div v-for="(item, index) in items" :key="index" class="order-list-item">
                                <div class="badge_tag_wrap">
                                    <div class="btn_ss btn-primary">답변대기</div>
                                    <div class="btn_ss btn_done">답변완료</div>
                                    <p class="date">2022-12-13</p>
                                </div>
                                <div class="item-list horizon">
                                    <item-part-thumbnail :item="item.thumbnail" />
                                    <item-part-info :item="item.info" />
                                </div>
                                <div class="usage_review_desc">
                                    <!-- usage_hide_wrap : 신고 시 가려지는 영역 -->
                                    <div class="board_wrap basic_board">

                                        <!-- <input id="board01" type="checkbox" class="tab_toggle" /> -->
                                        <a href="#" class="tab_title" @click.prevent="tabToggle($event)">
                                            <span class="inquiry_type">환불문의</span>
                                            <span>제목 영역입니다. 글이 접히면 이렇게 됩니다. 제목 영역입니다. 글이 접히면 이렇게 됩니다.제목 영역입니다. 글이 접히면
                                                이렇게
                                                됩니다.</span>
                                        </a>
                                        <div class="tab_contents">
                                            <!-- 내용자리 -->
                                            <div class="administrator_answer">
                                                <div class="text_area customer_q">
                                                    고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다.
                                                    고객이 남기는 질문 상세 내용 영역입니다.
                                                    고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다.
                                                    고객이 남기는 질문 상세 내용 영역입니다.
                                                    <div class="img_area">
                                                        <div class="review_thumbnail_wrap">
                                                            <span class="close">닫기</span>
                                                            <ul>
                                                                <li>
                                                                    <img src="~/assets/img/sample/sample_item3.png" alt="">
                                                                </li>
                                                                <li>
                                                                    <img src="~/assets/img/sample/sample_item2.png" alt="">
                                                                </li>
                                                                <li>
                                                                    <img src="~/assets/img/sample/sample_item3.png" alt="">
                                                                </li>
                                                                <li>
                                                                    <img src="~/assets/img/sample/sample_item1.png" alt="">
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="qna_manager_wrap">
                                                    <div class="qna_manager"><span class="qa">A.</span>SANDI</div>
                                                    <div class="text_area">
                                                        판매자가 남기는 질문 답변 내용 영역입니다. 판매자가 남기는 질문 답변 내용 영역입니다. 판매자가 남기는 질문 답변 내용
                                                        영역입니다.
                                                        판매자가 남기는 질문 답변 내용 영역입니다. 판매자가 남기는 질문 답변 내용 영역입니다. 판매자가 남기는 질문 답변 내용
                                                        영역입니다.
                                                        판매자가 남기는 질문 답변 내용 영역입니다. 판매자가 남기는 질문 답변 내용 영역입니다. 판매자가 남기는 질문 답변 내용
                                                        영역입니다.
                                                    </div>
                                                    <p class="product_date">
                                                        답변일&nbsp;&nbsp;:&nbsp;&nbsp;<span>2023-11-01</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn_right_wrap">
                                    <button class="btn btn-small btn-default btn_sm">삭제</button>
                                </div>
                            </div>
                        </div>


                        <div class="order-list-wrap">

                            <div class="no_content on">
                                <p>아직 문의한 내역이 없습니다.</p>
                            </div>
                        </div>
                    </div>



                    <!-- ////////////////////pagination//////////////////// -->
                    <etc-pagination />
                    <etc-no-content txt="문의내역이 없습니다." />
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'my-product-Inquiry',
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
                        // option: "[옵션값] 해당옵션 / [옵션값] 해당옵션 / [옵션값] 해당옵션 (+1,000원)",
                        // optionSet: "세트 옵션이 노출되는 공간입니다",
                        // sale: "138,000",
                        // price: "108,000",
                        // discounted: "27",
                        // quantity: "2",
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
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        // option: "[옵션값] 해당옵션 / [옵션값] 해당옵션 / [옵션값] 해당옵션 (+1,000원)",
                        // optionSet: "세트 옵션이 노출되는 공간입니다",
                        // sale: "138,000",
                        // price: "108,000",
                        // discounted: "27",
                        // quantity: "2",
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
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        // option: "[옵션값] 해당옵션 / [옵션값] 해당옵션 / [옵션값] 해당옵션 (+1,000원)",
                        // optionSet: "세트 옵션이 노출되는 공간입니다",
                        // sale: "138,000",
                        // price: "108,000",
                        // discounted: "27",
                        // quantity: "2",
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
        };
    },
    methods: {
        tabToggle(e) {
            let titleOn = e.target.closest(".tab_title");
            titleOn.classList.toggle("on");

        }

    }
}




</script>

<style>
@import url('~/assets/css/pages/mypage.css');
</style>