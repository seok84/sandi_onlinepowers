<template>
    <div class="modal modal_basic modal_m modal_w" id="popupAlertView">
        <div class="modal_wrapper modal_white">
            <div class="modal_body">
                <div class="modal_content">
                    <!-- 텍스트 -->
                    <div class="modal_txt">
                        텍스트 가운데정렬
                    </div>
                </div>
                <!-- 버튼 -->
                <div class="btn-wrap">
                    <button id="" class="btn btn-middle btn-default">취소</button>
                    <button id="" class="btn btn-middle btn-attention">저장</button>
                </div>
            </div>
            <popupButton class="modal_close_b" />
        </div>
    </div>
</template>

<script>
import popupButton from "~/components/popup/part/popup-basic-button.vue";
export default {
    components: {
        popupButton,
    },
}
</script>