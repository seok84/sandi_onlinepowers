<template>
    <div class="info_toast_select"><!-- 자식과 동일한 클래스가 붙으면 노출됩니다 -->
        <!-- 무료배송 -->
        <div class="info_toast_wrapper free_delivery">
            <a href="javascript:void(0);" class="info_toast"></a>
            <div class="modal modal_white">
                <div class="modal_wrapper">
                    <div class="modal_content">
                        <div class="modal_body">
                            <p class="tit">무료배송</p>
                            <p class="desc">수량/주문금액에 상관없이 무료배송</p>
                        </div>
                        <!-- <button type="button" class="modal_close modal_close_b">닫기</button> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- 판매자 조건부 무료배송 -->
        <div class="info_toast_wrapper seller_delivery">
            <a href="javascript:void(0);" class="info_toast"></a>
            <div class="modal modal_white">
                <div class="modal_wrapper">
                    <div class="modal_content">
                        <div class="modal_body">
                            <p class="tit">판매자 조건부 무료배송</p>
                            <p class="desc">
                                기본 2,500원<br/>판매자 상품 10,000원 이상 구매 시 무료
                            </p>
                        </div>
                        <!-- <button type="button" class="modal_close modal_close_b">닫기</button> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- 출고지 조건부 무료배송 -->
        <div class="info_toast_wrapper release_delivery">
            <a href="javascript:void(0);" class="info_toast"></a>
            <div class="modal modal_white">
                <div class="modal_wrapper">
                    <div class="modal_content">
                        <div class="modal_body">
                            <p class="tit">출고지 조건부 무료배송</p>
                            <p class="desc">
                                동일한 출고지 상품 30,000원 이상 구매 시<br/>무료배송, 미만 구매 시 2,500원 부과
                            </p>
                        </div>
                        <!-- <button type="button" class="modal_close modal_close_b">닫기</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');



</style>