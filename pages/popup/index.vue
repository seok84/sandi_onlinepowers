<template>
    <div class="inner modalGuide">
        <p class="guide_txt guide_title">########## 장바구니 > 주문결제 팝업</p>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="viewProductList">적용상품보기</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="addressAdd">배송지-추가</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="addressList">배송지-목록</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="couponProduct">쿠폰-상품</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="couponBasket">쿠폰-장바구니</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="couponDelivery">쿠폰-배송비</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="deliveryDirect">배송방식-직배지역</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="deliveryNotice">배송방식-알림</div>
        <viewProductList />
        <addressAdd />
        <addressList />
        <couponProduct />
        <couponBasket />
        <couponDelivery />
        <deliveryDirect />
        <deliveryNotice />

        <p class="guide_txt guide_title">########## 상품상세 팝업</p>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="detailBenefits">할인헤택</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="detailDelivery">제주/도서산간지역</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="downloadCoupon">다운로드 가능 쿠폰</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="setItem">세트상품 상세팝업</div>
        <detailBenefits />
        <detailDelivery />
        <downloadCoupon />
        <setItem />

        <p class="guide_txt guide_title">########## 마이페이지 > 주문상세 팝업</p>
        <div class="btn btn-middle btn-attention get_check" @click="openModal($event)" id="customerApplyCancel">취소신청</div>
        <div class="btn btn-middle btn-attention get_check" @click="openModal($event)" id="customerApplyCancelSet">취소신청(세트)</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="customerApplyExchange">교환신청</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="customerApplyExchangeSet">교환신청(세트)</div>
        <div class="btn btn-middle btn-attention get_check" @click="openModal($event)" id="customerApplyReturn">반품신청</div>
        <div class="btn btn-middle btn-attention get_check" @click="openModal($event)" id="customerApplyReturnSet">반품신청(세트)</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="tradingStatement">거래명세서</div>
        <div class="btn btn-middle btn-attention get_check" @click="openModal($event)" id="tradingStatement02">거래명세서02</div>
        <customerApplyCancel />
        <customerApplyCancelSet />
        <customerApplyExchange />
        <customerApplyExchangeSet />
        <customerApplyReturn />
        <customerApplyReturnSet />
        <tradingStatement />
        <tradingStatement02 />

        <!-- <p class="guide_txt guide_title">########## 마이페이지 > 체험단 팝업</p>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="experienceApplication">체험단신청수정</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="experienceReview">체험평작성</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="experienceEdit">체험평수정</div>
        <div class="btn btn-middle btn-attention get_check" @click="openModal($event)" id="experienceReport">체험단 신청내용 신고</div>
        <experienceApplication />
        <experienceReview />
        <experienceEdit />
        <experienceReport /> -->

        <p class="guide_txt guide_title">########## 마이페이지 > 후기 팝업</p>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="reviewWrite">후기작성</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="reviewReport">후기신고</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="reviewBlock">후기차단</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="reviewUnblock">후기차단해제</div>
        <reviewWrite />
        <reviewReport />
        <reviewBlock />
        <reviewUnblock />

        <p class="guide_txt guide_title">########## 이벤트/기획전페이지 > 댓글 팝업</p>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="commentReport">댓글신고</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="commentBlock">댓글차단</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="commentUnblock">댓글차단해제</div>
        <commentReport />
        <commentBlock />
        <commentUnblock />

        <p class="guide_txt guide_title">########## 고객센터 필요 팝업</p>
        <div class="btn btn-middle btn-attention get_check" @click="openModal($event)" id="applyDetail">Q&A</div>
        <div class="btn btn-middle btn-attention get_check" @click="openModal($event)" id="viewTerms">약관보기</div>
        <popup-apply-detail />
        <popup-view-terms />

        <p class="guide_txt guide_title">########## 푸터 필요 팝업</p>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="emailRefuse">이메일수집거부</div>
        <emailRefuse />
        <div class="btn btn-middle btn-attention get_check" @click="openModal($event)" id="alarmReceive">알람 수신 동의</div>
        <alarmReceive />
        <div class="btn btn-middle btn-attention get_check" @click="openModal($event)" id="appInstall">앱설치 모바일팝업</div>
        <popup-app-install />

        <p class="guide_txt guide_title">########## 텍스트만 있는 팝업</p>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="popupAlert">텍스트</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="basicTemp">기본 모양</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="basicTempButton">기본 모양 + 버튼 추가</div>
        <div class="btn btn-middle btn-attention get_check" @click="openModal($event)" id="photoThumb">포토썸네일 모달</div>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="basicTable">판매처명 리스트</div>
        <popupAlert />
        <basicTemp />
        <basicTempButton />
        <photoThumb />
        <basicTable />

        <p class="guide_txt guide_title">########## 텍스트만 있는 팝업</p>
        <div class="btn btn-middle btn-attention" @click="openModal($event)" id="bottomPopup">모바일* 하단팝업</div>
        <bottomPopup />

        
        <p class="guide_txt guide_title">########## 윈도우 팝업</p>
        <div class="btn btn-middle btn-attention" @click="windowOpenPopup">윈도우 팝업</div>
        <bottomPopup />
    </div>
</template>

<script>
// ########## 장바구니 > 주문결제 팝업
// 1) 적용상품보기
// 2) 배송지-추가
// 3) 배송지-목록
// 4) 쿠폰-상품
// 5) 쿠폰-장바구니
// 6) 쿠폰-배송비
// 7) 배송방식-직배지역
// 8) 배송방식-알림
import viewProductList from "~/components/popup/view-product-list.vue";
import addressAdd from "~/components/popup/address-add.vue";
import addressList from "~/components/popup/address-list.vue";
import couponProduct from "~/components/popup/coupon-product.vue";
import couponBasket from "~/components/popup/coupon-basket.vue";
import couponDelivery from "~/components/popup/coupon-delivery.vue";
import deliveryDirect from "~/components/popup/delivery-direct.vue";
import deliveryNotice from "~/components/popup/delivery-notice.vue";

// ########## 상품상세 팝업
// 1) 할인헤택
// 2) 제주/도서산간지역
// 3) 다운로드 가능 쿠폰
import detailBenefits from "~/components/popup/detail-benefits.vue";
import detailDelivery from "~/components/popup/detail-delivery.vue";
import downloadCoupon from "~/components/popup/download-coupon.vue";
import setItem from "~/components/popup/set-item.vue";

// ########## 마이페이지 > 주문상세 팝업
// 1-1) 취소신청
// 1-2) 취소신청(세트)
// 2-1) 교환신청
// 2-2) 교환신청(세트)
// 3-1) 반품신청
// 3-2) 반품신청(세트)
// 4) 거래명세서 팝업
// 5) 주문견적서 팝업
import customerApplyCancel from "~/components/popup/customer-apply-cancel.vue";
import customerApplyCancelSet from "~/components/popup/customer-apply-cancelSet.vue";
import customerApplyExchange from "~/components/popup/customer-apply-exchange.vue";
import customerApplyExchangeSet from "~/components/popup/customer-apply-exchangeSet.vue";
import customerApplyReturn from "~/components/popup/customer-apply-return.vue";
import customerApplyReturnSet from "~/components/popup/customer-apply-returnSet.vue";
import tradingStatement from "~/components/popup/trading-statement.vue";
import tradingStatement02 from "~/components/popup/trading-statement02.vue";

// ########## 마이페이지 > 후기 팝업
// 1) 후기 작성
// 2) 후기 신고
// 3) 후기 차단
// 4) 후기 해제
import reviewWrite from "~/components/popup/review-write.vue";
import reviewReport from "~/components/popup/review-report.vue";
import reviewBlock from "~/components/popup/review-block.vue";
import reviewUnblock from "~/components/popup/review-unblock.vue";

// ########## 이벤트/기획전페이지 > 댓글 팝업
// 1) 댓글 신고하기
// 2) 댓글 신고/차단
// 3) 댓글 신고/차단 해제
import commentReport from "~/components/popup/comment-report.vue";
import commentBlock from "~/components/popup/comment-block.vue";
import commentUnblock from "~/components/popup/comment-unblock.vue";


// ########## 고객센터 필요 팝업
// 1) Q&A
import applyDetail from "~/components/popup/apply-detail.vue";

// ########## 푸터 필요 팝업
// 1) 이메일 수집 거부
// 2) 알람 수신 동의
import emailRefuse from "~/components/popup/email-refuse.vue";
import alarmReceive from "~/components/popup/alarm-receive.vue";

// ########## 텍스트만 있는 팝업
import popupAlert from "~/components/popup/popup-alert.vue";
import basicTemp from "~/components/popup/basic-template.vue";
import basicTable from "~/components/popup/basic-table.vue";
import basicTempButton from "~/components/popup/basic-template-button.vue";

// ##########  상품후기 사진 리뷰 팝업 모달
import photoThumb from "~/components/popup/photo-thumbnail.vue";

// ##########  하단에 배치되는 모달
import bottomPopup from "~/components/popup/popup-bottom.vue";

export default {
    name: 'popupDesign',
    layout: "base",
    components: {
        // 장바구니 > 주문결제 팝업
        viewProductList,
        addressAdd,
        addressList,
        couponProduct,
        couponBasket,
        couponDelivery,
        deliveryDirect,
        deliveryNotice,

        // 상품상세 팝업
        detailBenefits,
        detailDelivery,
        downloadCoupon,
        setItem,

        // 마이페이지 > 주문상세 팝업
        customerApplyCancel,
        customerApplyCancelSet,
        customerApplyExchange,
        customerApplyExchangeSet,
        customerApplyReturn,
        customerApplyReturnSet,
        tradingStatement,
        tradingStatement02,

        // 마이페이지 > 체험단 팝업
        // experienceApplication,
        // experienceReview,
        // experienceEdit,
        // experienceReport,

        // 마이페이지 > 후기 팝업
        reviewWrite,
        reviewReport,
        reviewBlock,
        reviewUnblock,

        // 이벤트/기획전페이지 > 댓글 팝업
        commentReport,
        commentBlock,
        commentUnblock,

        // 고객센터 필요 팝업

        applyDetail,

        // 푸터 필요 팝업
        emailRefuse,
        alarmReceive,

        // 텍스트만 있는 팝업
        popupAlert,
        basicTemp,
        basicTable,
        basicTempButton,

        //상품후기 사진 확대모달
        photoThumb,

        bottomPopup,
    },
    mounted() {
    },
    methods: {
        openModal(e) {
            const body = document.querySelector("body");
            const modalId = e.target.getAttribute('id');
            const target = document.getElementById(modalId + "View");
            const modalDim = document.createElement("div");
            body.classList.add("scrollNone");
            target.classList.add("show"); 
            modalDim.classList.add("dimmed_bg");
            target.appendChild(modalDim);
        },
        closeModalDim() {
            const modalDim = document.querySelector(".dimmed_bg");
            modalDim.remove();
        },
        closeModal() {
            const body = document.querySelector("body");
            const modal = document.querySelectorAll(".modal_basic");
            body.classList.remove("scrollNone");
            modal.forEach((e) => {
                e.classList.remove("show");
            });
            this.closeModalDim();
        },
        
        // invoice popup
        windowOpenPopup() {
            this.pop = window.open("/popup/popup", "windowOpenPopup", "width=350, height=380");
        },

    }

}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');

.guide_txt {
    text-align: center;
}

.guide_title {
    background-color: blueviolet;
    color: white;
}

.modalGuide .btn-attention {
    margin: 1rem;
}

.get_check {
    position: relative;
}

.get_check::after {
    content: '추가';
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    background-color: #000;
    color: #fff;
    border-radius: 2rem;
    font-size: 1.4rem;
    transform-origin: center;
    transform: translate(10%, -25%);
}
</style>