
<template>
    <div class="modal modal_basic modal_m modal_full" id="experienceReviewView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'체험평 작성'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div id="experience-review" class=" experience-review">
                        <div class="cont_tit">
                            <h4 class="modal_cont_tit">상품은 만족 하셨나요?</h4>
                        </div>
                        <div class="radio_wrap">
                            <input type="radio" name="evaluate" id="evaluate-01" class="input_radio" checked="" />
                            <label for="evaluate-01">만족</label>
                            <input type="radio" name="evaluate" id="evaluate-02" class="input_radio" checked="" />
                            <label for="evaluate-02">보통</label>
                            <input type="radio" name="evaluate" id="evaluate-02" class="input_radio" checked="" />
                            <label for="evaluate-02">아쉬움</label>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" class="form_control" placeholder="내용을 입력하세요"></textarea>
                        <reviewThumb />
                    </div>
                </div>
                <div class="btn-wrap">
                    <button class="btn btn-middle btn-default" id="">취소</button>
                    <button class="btn btn-middle btn-attention" id="">등록</button>
                </div>
                <div class="txt_center">
                    <div class="info_dot">
                        등록하신 체험평은 해당 상품페이지의 체험평 영역에도 함께 노출됩니다.
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
import reviewThumb from "~/components/item/review-thumb.vue";


export default {
    name: 'popupBase',
    components: {
        popupHead,
        popupButton,
        reviewThumb
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>


