<template>
    <div class="modal modal_basic modal_m" id="commentBlockView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'신고/차단'" />
            <div class="modal_body">
            <div class="modal_content">
                    <div class="btn-wrap onlyBtn">
                        <button id="" class="btn btn-middle btn-default">댓글 신고</button>
                        <button id="" class="btn btn-middle btn-attention">회원 차단</button>
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
