<template>
    <div class="modal modal_basic modal_m " id="alarmReceiveView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'알람 수신 동의'" />
            <div class="modal_body">
                <div class="modal_content">
                    <!-- 텍스트 -->
                    <div class="modal_txt">
                        쿠폰 및 특가 등 앱 알림 메시지를 받아보시겠습니까?
                    </div>
                </div>
                <!-- 버튼 -->
                <div class="btn-wrap">
                    <button id="" class="btn btn-middle btn-default">동의안함</button>
                    <button id="" class="btn btn-middle btn-attention">동의함</button>
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
