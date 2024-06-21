<template>
    <div class="modal modal_basic modal_m modal_full" id="reviewReportView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'상품후기 신고하기'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div class="cont_tit">
                        <h4 class="modal_cont_tit">신고 사유</h4>
                    </div>
                    <div class="radio_wrapper">
                        <div class="radio_wrap"><input type="radio" name="report_reason" id="radio01" checked="checked">
                            <label for="radio01">상품의 품질과 관련 없는 내용</label>
                        </div>
                        <div class="radio_wrap"><input type="radio" name="report_reason" id="radio02"> 
                            <label for="radio02">개인 및 판매자의 상업적인 홍보</label></div>
                        <div class="radio_wrap"><input type="radio" name="report_reason" id="radio03"> 
                            <label for="radio03">개인정보 노출 위험</label></div>
                        <div class="radio_wrap"><input type="radio" name="report_reason" id="radio03"> 
                            <label for="radio03">저작권 불법 도용 (타인이 작성한 글, 사진 등)</label></div>
                        <div class="radio_wrap"><input type="radio" name="report_reason" id="radio03"> 
                            <label for="radio03">기타</label></div>
                    </div>
                    <div class="cont_tit">
                        <h4 class="modal_cont_tit">신고 상세사유</h4>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="신고하시는 상세이유를 입력해주세요&#13;&#10;(최대글자는 1,000자 입니다)"
                        class="form_control"></textarea>
                    </div>
                    <div class="btn-wrap">
                        <button id="" class="btn btn-middle btn-default">취소</button>
                        <button id="" class="btn btn-middle btn-attention">저장</button>
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

<style>@import url('~/assets/css/layouts/modal-ui.css');</style>
