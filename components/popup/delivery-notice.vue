<template>
    <div class="modal modal_basic modal_m" id="deliveryNoticeView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'알림'" />
            <div class="modal_body">
                <div class="modal_content">
                    <p class="modal_txt">업체배송상품은 방문수령이 불가하여 <span class="divider"></span> 별도로 발송됩니다.</p>
                </div>
                <!-- 버튼 -->
                <div class="btn-wrap">
                    <button class="btn btn-middle btn-attention" id="">확인</button>
                </div>
            </div>
            <popupButton class="modal_close_w" />
        </div>
    </div>
</template>

<script>
import popupHead from "~/components/popup/part/popup-basic-head.vue";
import popupButton from "~/components/popup/part/popup-basic-button.vue";


export default {
    name: 'popupBase',
    components: {
        popupHead,
        popupButton,
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>
