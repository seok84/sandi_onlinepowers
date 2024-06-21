<template>
    <div id="orderStep02">
        <h2 class="title-h2">주문/결제</h2>
        <div class="inner">
            <div class="order_comp_top">
                <div class="check_animation">
                    <div class="twinkle_wrap">
                        <span class="twinkle twinkle_L"></span>
                        <span class="twinkle twinkle_R"></span>
                    </div>
                    <div class="circle_img">
                        <img src="~/assets/img/common/circle_check.png" alt="">
                    </div>
                </div>
                <p class="desc">
                    고객님의 주문이 정상적으로
                    <span class="divider"></span>
                    완료되었습니다.
                </p>
                <div class="dl_wrapper">
                    <div class="link">
                        <span>주문번호</span>
                        <a href="javascript:void(0);" class="linked_arr">K12345678901349</a>
                    </div>
                    <p class="date">2019-12-17 12:00:00</p>
                </div>
            </div>
            <div class="order_comp_bot">

                <div class="dl_wrapper layout_jspb">
                    <p class="tit">결제정보</p>
                    <dl class="payment_info">
                        <dt class="payment_way">결제수단</dt>
                        <dd class="payment_way_result">신용카드</dd>
                        <dt class="state">결제상태</dt>
                        <dd class="state_result">결제완료</dd>
                        <dt class="date">결제일</dt>
                        <dd class="date_result">2023-01-01 12:00:00</dd>
                    </dl>
                </div>
                <!-- <div class="dl_wrapper">
                    <p class="tit">배송지 정보</p>
                    <dl class="order_info">
                        <dt class="name">이름</dt>
                        <dd class="name_result">김엔티</dd>
                        <dt class="phoneNum">연락처</dt>
                        <dd class="phoneNum_result">010-1234-5678</dd>
                        <dt class="email">이메일</dt>
                        <dd class="email_result">cntmart1@naver.com</dd>
                    </dl>
                </div> -->
                <div class="dl_wrapper">
                    <p class="tit">배송지 정보</p>
                    <dl class="delivery_info">
                        <dt class="recipient">받는분</dt>
                        <dd class="recipient_result">김엔티</dd>
                        <dt class="delivery_way">배송방식</dt>
                        <dd class="delivery_way_result">택배</dd>
                        <dt class="address">주소</dt>
                        <dd class="address_result">[08381] 서울 구로구 디지털로27길 24(벽산디지털밸리) 711호 온라인파워스</dd>
                        <dt class="contact">연락처</dt>
                        <dd class="contact_result">010-1234-5678</dd>
                        <dt class="message">요청사항</dt>
                        <dd class="message_result">경비실에 맡겨주세요.</dd>
                    </dl>
                </div>
                <div class="btn-wrap">
                    <button class="btn btn-middle btn-default">주문내역 확인</button>
                    <button class="btn btn-middle btn-primary">쇼핑 계속하기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    name: 'orderStep02',
    data() {
        return {
            titleMain: "주문/결제",
        };
    },
    methods: {

    }

}

</script>

<style>
@import url('~/assets/css/pages/cart.css');
</style>