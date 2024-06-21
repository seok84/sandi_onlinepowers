<template>
    <div class="modal modal_basic modal_m" id="viewTermsView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'약관동의'" />
            <div class="modal_body">
            <div class="modal_content">
                          <!-- 텍스트 -->
                          <div class="modal_txt">
                            약관 내용
                        </div>
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
