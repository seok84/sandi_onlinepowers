<template>
    <div id="customer-faq" class="customerPages">
        <h2 class="title-h2">고객센터</h2>
        <div class="inner">
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <Lnb class="customer2" />
                <!-- mypage-content 
                -->
                <div class="mypage-content">
                    <TitleMore :to="'javascript:void(0);'" :titleMain="'FAQ'" class="pc" />
                    <div class="form_title type02">
                        <p>전체<span class="counter">49</span>
                        </p>
                    </div>
                    <div class="inquiry_wrapper ">
                        <div class="form_inner type03">
                            <div class="wrap_inquiry ">
                                <select class="form_control input_select">
                                    <option value="">문의유형을 설정해주세요.</option>
                                    <option value="">1개월</option>
                                    <option value="">3개월</option>
                                    <option value="">6개월</option>
                                </select>
                            </div>
                            <button type="button" class="btn btn-small btn_accent btn-black">
                                조회
                            </button>
                        </div>
                        <form action="">
                        </form>
                    </div>
                    <div class="faq_list">
                        <ul>
                            <li class="list_area">
                                <div class="list_in hide_title">
                                    <div class="tit-area">
                                        <div class="title ">
                                            <span class="category">회원/정보관리</span>
                                            <span class="titleLine01 tit">
                                                회원 탈퇴시 회원정보는 모두 삭제되나요?
                                            </span>

                                        </div>
                                    </div>
                                    <div class="hide_wrap">
                                        <div class="administrator_answer">
                                            <div class="qna_manager">
                                                <span class="qa">A.</span>샌디
                                            </div>
                                            <div class="text_area">
                                                안녕하세요 고객님. 샌디 고객센터 입니다. <br>
                                                저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.<br>
                                                소중한 경험을 리뷰로 남겨주셔서 감사합니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list_area">
                                <div class="list_in hide_title">
                                    <div class="tit-area">
                                        <div class="title ">
                                            <span class="category">교환문의</span>
                                            <span class="titleLine01 tit">
                                                오프라인 매장에서 구매한 상품 교환하고싶어요.
                                            </span>

                                        </div>
                                    </div>
                                    <div class="hide_wrap">
                                        <div class="administrator_answer">
                                            <div class="qna_manager">
                                                <span class="qa">A.</span>샌디
                                            </div>
                                            <div class="text_area">
                                                주문 상태가 "주문접수", "결제완료" 의 경우
                                                <a href="javascript:void(0);" target="_blank">마이페이지</a>
                                                <span style="color:#000;"> - </span>
                                                <a href="javascript:void(0);" target="_blank">주문조회</a>
                                                및 변경에서 직접 취소 접수가 가능합니다. <br />
                                                참고로 "배송준비단계"는 물류센터에서 포장 중인 상태로 취소가 되지 않는 점 안내드립니다.<br />

                                                ※주문완료 후 제품 변경, 수량 변경, 옵션 변경, 결제방법, 배송 방법 등은 변경되지 않는 점 안내드립니다. 변경을
                                                원하시는 경우 전체 취소 후 다시 주문해 주셔야 합니다.<br />
                                                참고로, 취소 시 사용하신 적립금은 즉시 반환되나, 쿠폰을 이용하여 주문하였을 경우, 취소 시 사용된 쿠폰은 재발행 되지
                                                않음을 안내드립니다. (쿠폰은 1회 사용만 가능합니다)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                        </ul>
                    </div>
                    <etc-pagination />
                    <etc-no-content txt="질문내역이 없습니다." />
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
    name: 'customer-faq',
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
    mounted() {
        common.openContent()
    }
}
</script>

<style>
@import url('~/assets/css/pages/customer.css');
</style>