<template>
    <div class="modal modal_basic modal_m modal_full" id="basicTempButtonView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'기본 모양 확인 버튼 추가'" />
            <div class="modal_body">
                <!-- //////////////////////  modal_content ////////////////////// -->
                <div class="modal_content">
                    <!-- 텍스트 -->
                    <div class="modal_txt">
                        내부 텍스트
                    </div>
                </div>
                <!-- ////////////////////// 버튼 ////////////////////// -->
                <div class="btn-wrap">
                    <!-- <button id="" class="btn btn-middle btn-default">취소</button> -->
                    <button id="" class="btn btn-middle btn-attention">확인</button>
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
