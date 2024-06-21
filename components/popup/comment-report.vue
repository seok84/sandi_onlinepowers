<template>
    <div class="modal modal_basic modal_m modal_full" id="commentReportView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'댓글 신고하기'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div class="cont_tit">
                        <h4 class="modal_cont_tit">신고 사유</h4>
                    </div>
                    <div class="radio_wrapper rowline_02">
                        <div class="radio_wrap whalf"><input type="radio" name="report_reason" id="radio01"
                                checked="checked">
                            <label for="radio01">영리목적/홍보성</label>
                        </div>
                        <div class="radio_wrap whalf"><input type="radio" name="report_reason" id="radio02"> <label
                                for="radio02">개인정보 노출 위험</label></div>
                        <div class="radio_wrap whalf"><input type="radio" name="report_reason" id="radio03"> <label
                                for="radio03">욕설/인신공격</label></div>
                        <div class="radio_wrap whalf"><input type="radio" name="report_reason" id="radio04"> <label
                                for="radio04">음란/선정성</label></div>
                        <div class="radio_wrap whalf"><input type="radio" name="report_reason" id="radio05"> <label
                                for="radio05">불법정보</label></div>
                        <div class="radio_wrap whalf"><input type="radio" name="report_reason" id="radio06"> <label
                                for="radio06">같은 내용 도배</label></div>
                        <div class="radio_wrap whalf"><input type="radio" name="report_reason" id="radio07"> <label
                                for="radio07">기타</label></div>
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
