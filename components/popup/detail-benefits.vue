<template>
    <div class="modal modal_basic" id="detailBenefitsView">
        <div class="modal_wrapper"
            style="justify-content: center; align-items: center;  width: 100%; height: 100%; display: flex;">

            <!-- 
        style="display:block;" 은 현행에서 사용되지 않습니다
        상품상세 페이지에 hover 시 노출되도록 css 작성되어있습니다
    -->
            <div class="price_ttip" style="display:block;">
                <p class="tit">할인혜택</p>
                <dl class="price_desc">
                    <dt class="top">판매가</dt>
                    <dd class="top"><span>50,000</span>원</dd>
                    <dt class="indent">상품할인</dt>
                    <dd><span>-2,500</span>원</dd>
                    <dt class="indent">세트할인</dt>
                    <dd><span>0</span>원</dd>
                    <dt class="indent">회원할인</dt>
                    <dd><span>0</span>원</dd>
                </dl>
                <dl class="price_total">
                    <dt>최대혜택가</dt>
                    <dd><span>47,500</span>원</dd>
                </dl>
            </div>
            <popupButton class="modal_close_b" />
        </div>
        <!-- <div class="modal_wrapper modal_white">
            <div class="modal_body">
                <div class="modal_content">

                </div>
            </div>
        </div> -->

    </div>
</template>

<script>
import popupButton from "~/components/popup/part/popup-basic-button.vue";



export default {
    name: 'popupBase',
    components: {
        popupButton,
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>
