<template>
    <div class="modal modal_basic modal_m " id="couponBasketView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'장바구니쿠폰'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div class="form_line select_wrap">
                        <select name="" id="select01" class="form_control input_select input_select02">
                            <option value="" style="color: rgb(0, 0, 0);">
                                회원가입 전용 쿠폰&nbsp;&nbsp;&nbsp;-1,000원 할인 [1개 수량만]
                            </option>
                            <option value="" style="color: rgb(0, 0, 0);">더미02</option>
                            <option value="" style="color: rgb(0, 0, 0);">더미03</option>
                            <option value="" style="color: rgb(0, 0, 0);">더미04</option>
                        </select>
                    </div>
                    <dl class="saled_list">
                        <dt>상품쿠폰 적용 시 총 할인금액</dt>
                        <dd>-1,000원</dd>
                    </dl>
                </div>
                <!-- 버튼 -->
                <div class="btn-wrap">
                    <button class="btn btn-middle btn-attention" id="">적용</button>
                </div>
            </div>

            <popupButton class="modal_close_w" />
        </div>
    </div>
</template>

<script>
import popupHead from "~/components/popup/part/popup-basic-head.vue";
import popupButton from "~/components/popup/part/popup-basic-button.vue";
import popupItem from "~/components/item/popup-item.vue";


export default {
    name: 'popupBase',
    components: {
        popupHead,
        popupButton,
        popupItem
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>
