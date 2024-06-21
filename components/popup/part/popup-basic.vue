<template>
    <!-- 팝업 틀 확인용 -->
    <div class="modal modal_basic modal_m">
        <div class="modal_wrapper">
            <div class="modal_body">
                <popupHead :popupHeadTitle="'팝업타이틀'" />
                <div class="modal_content">
                    <popupTxt  :popupHeadTitle="'팝업텍스트'"/>
                </div>
                <popupButton />
            </div>
        </div>
    </div>
</template>

<script>
import popupHead from "~/components/popup/part/popup-basic-head.vue";
import popupTxt from "~/components/popup/part/popup-basic-txt.vue";
import popupButton from "~/components/popup/part/popup-basic-button.vue";


export default {
    name: 'popupBase',
    components: {
        popupHead,
        popupTxt,
        popupButton,
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>