<template>
    <div id="customer-apply" class="customerPages">
        <h2 class="title-h2">고객센터</h2>
        <div class="inner">
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <Lnb class="customer3" />
                <!-- mypage-content 
                -->
                <div class="mypage-content">
                    <TitleMore :to="'javascript:void(0);'" :titleMain="'Q&A'" class="pc" />
                    <div class="form_title type02">
                        <p>전체<span class="counter">49</span>
                        </p>
                        <a href="/customer/apply-detail">Q&A하기</a>
                    </div>
                    <div class="inquiry_wrapper">
                        <div class="form_inner type03">
                            <div class="wrap_inquiry">
                                <select class="form_control input_select">
                                    <option value="">문의 유형을 설정해주세요.</option>
                                    <option value="">회원정보</option>
                                    <option value="">상품관련</option>
                                    <option value="">주문결제</option>
                                    <option value="">배송</option>
                                    <option value="">교환반품수리</option>
                                    <option value="">포인트</option>
                                    <option value="">기타</option>
                                </select>
                            </div>
                            <button type="button" class="btn btn-small btn_accent btn-black">
                                조회
                            </button>
                        </div>
                        <form action="">
                        </form>
                    </div>
                    <div class="apply_list">
                        <ul>
                            <li class="list_area">
                                <div class="list_in hide_title">
                                    <div class="tit-area tit-area_01">
                                        <div class="title">
                                            <span class="btn_ss btn_done badge_apply">답변완료</span>
                                            <span class="date">2022-12-13</span>
                                        </div>
                                    </div>
                                    <div class="tit-area tit_ar">
                                        <div class="title">
                                            <span class="category">회원/정보관리</span>
                                            <span class="titleLine01 tit">
                                                회원 탈퇴시 회원정보는 모두 삭제되나요?
                                            </span>

                                        </div>
                                    </div>
                                    <div class="hide_wrap">
                                        <div class="customer_answer">
                                            <div class="text_area">
                                                고객이 남기는 질문 상세 내용 영역입니다. 답변 없이 질문만 있는 상태입니다. 고객이 남기는 질문 상세 내용 영역입니다.
                                                답변 없이 질문만 있는 상태입니다. 고객이 남기는 질문 상세 내용 영역입니다.
                                            </div>
                                            <div class="img_area">
                                                <div class="review_thumbnail_wrap">
                                                    <span class="close">닫기</span>
                                                    <ul>
                                                        <li>
                                                            <img src="~/assets/img/sample/thumb.png" alt="">
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/thumb.png" alt="">
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/thumb.png" alt="">
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/thumb.png" alt="">
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="administrator_answer">
                                            <div class="qna_manager"><span class="qa">A.</span>샌디
                                            </div>
                                            <div class="text_area">
                                                안녕하세요 고객님. 샌디 고객센터 입니다. <br>
                                                저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.<br>
                                                소중한 경험을 리뷰로 남겨주셔서 감사합니다.
                                            </div>
                                            <p class="product_date">
                                                답변일&nbsp;&nbsp;:&nbsp;&nbsp;<span>2022-06-14</span></p>
                                        </div>
                                    </div>

                                    <div class="btn_right_wrap delete_content_btn">
                                        <div class="btn btn-small btn-default">삭제</div>
                                    </div>
                                </div>
                            </li>
                            <li class="list_area">
                                <div class="list_in hide_title">
                                    <div class="tit-area tit-area_01">
                                        <div class="title">
                                            <span class="btn_ss btn-primary badge_apply">답변대기</span>
                                            <span class="date">2022-12-13</span>
                                        </div>
                                    </div>
                                    <div class="tit-area tit_ar">
                                        <div class="title">
                                            <span class="category">회원/정보관리</span>
                                            <span class="titleLine01 tit">
                                                회원 탈퇴시 회원정보는 모두 삭제되나요?
                                            </span>

                                        </div>
                                    </div>
                                    <div class="hide_wrap">
                                        <div class="customer_answer">
                                            <div class="text_area">
                                                고객이 남기는 질문 상세 내용 영역입니다. 답변 없이 질문만 있는 상태입니다. 고객이 남기는 질문 상세 내용 영역입니다.
                                                답변 없이 질문만 있는 상태입니다. 고객이 남기는 질문 상세 내용 영역입니다.
                                            </div>

                                        </div>
                                    </div>

                                    <div class="btn_right_wrap delete_content_btn">
                                        <div class="btn btn-small btn-default">삭제</div>
                                    </div>
                                </div>
                            </li>
                            <li class="list_area">
                                <div class="list_in hide_title">
                                    <div class="tit-area tit-area_01">
                                        <div class="title">
                                            <span class="btn_ss btn-primary badge_apply">답변대기</span>
                                            <span class="date">2022-12-13</span>
                                        </div>
                                    </div>


                                    <div class="tit-area tit-area_02">
                                        <div class="title">
                                            <span class="category">회원/정보관리</span>
                                            <span class="titleLine01 tit">
                                                회원 탈퇴시 회원정보는 모두 삭제되나요?
                                            </span>

                                        </div>
                                    </div>



                                    <div class="hide_wrap">
                                        <div class="customer_answer">
                                            <div class="text_area">
                                                고객이 남기는 질문 상세 내용 영역입니다. 답변 없이 질문만 있는 상태입니다. 고객이 남기는 질문 상세 내용 영역입니다.
                                                답변 없이 질문만 있는 상태입니다. 고객이 남기는 질문 상세 내용 영역입니다.
                                            </div>
                                            <div class="img_area">
                                                <div class="review_thumbnail_wrap">
                                                    <span class="close">닫기</span>
                                                    <ul>
                                                        <li>
                                                            <img src="~/assets/img/sample/thumb.png" alt="">
                                                        </li>
                                                        <li>
                                                            <img src="~/static/img/sample/thumbnail_img.jpg" alt="">
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/thumb.png" alt="">
                                                        </li>
                                                        <li>
                                                            <img src="~/static/img/sample/thumbnail_img.jpg" alt="">
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="btn_right_wrap delete_content_btn">
                                        <div class="btn btn-small btn-default">삭제</div>
                                    </div>
                                </div>    
                            </li>
                        </ul>
                    </div>
                    <etc-pagination />
                    <etc-no-content txt="아직 문의한 내역이 없습니다." />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TitleD1 from "~/components/text/title-default.vue";
import Lnb from "~/components/layout/lnb-customer.vue";
import TitleMore from "~/components/text/title-more.vue";

import common from "~/assets/js/common.js"

export default {
    name: 'customer-apply',
    components: {
        TitleD1,
        Lnb,
        TitleMore,

    },
    data() {
        return {
            titleMain: "고객센터",
        };
    },
    methods: {},
    mounted() {
        common.openContent()
        common.deleteContent()
        common.checkEmpty()
    }
}
</script>

<style>
@import url('~/assets/css/pages/customer.css');
@import url('~/assets/css/pages/mypage.css');
</style>