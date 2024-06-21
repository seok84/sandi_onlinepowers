
<template>
    <div class="modal modal_basic modal_m modal_full" id="experienceApplicationView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'체험단 신청 수정'" />
            <div class="modal_body">
                <div class="modal_content">
                        <div class="cont_tit">
                            <h4 class="modal_cont_tit">신청사유</h4>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" class="form_control" placeholder="내용을 입력하세요"></textarea>
                        <div class="cont_tit">
                            <h4 class="modal_cont_tit">체험상품 배송지</h4>
                        </div>
                        <div class="col">
                            <div class="form_line">
                                <input type="text" name="" id="" placeholder="이름" value="" class="form_control" />
                            </div>
                            <div class="form_line">
                                <input type="text" name="address_01" id="address_01" placeholder="우편번호 찾기" value=""
                                    readonly="readonly" class="form_control form_search" />
                                <a href="javascript:void(0);" class="search_address">주소 검색</a>
                            </div>
                            <div class="form_line">
                                <input type="text" name="address_02" id="address_02" placeholder="기본주소" value=""
                                    class="form_control" />
                            </div>
                            <div class="form_line">
                                <input type="text" name="address_02" id="address_02" placeholder="상세주소" value=""
                                    class="form_control" />
                            </div>
                            <div class="form_line select_wrap">
                                <select name="" id="select02" class="form_control input_select w150">
                                    <option value="">010</option>
                                    <option value="">011</option>
                                    <option value="">012</option>
                                </select>
                                <input type="text" name="phoneNumber" id="phoneNumber" placeholder="12345678" minlength="6"
                                    value="" class="form_control" />
                            </div>
                        </div>
                    </div>
                    <div class="btn-wrap">
                        <button class="btn btn-middle btn-default" id="">취소</button>
                        <button class="btn btn-middle btn-attention" id="">등록</button>
                    </div>
            </div>
            <popupButton class="modal_close_w" />
        </div>
    </div>
</template>

<script>
import popupHead from "~/components/popup/part/popup-basic-head.vue";
import popupButton from "~/components/popup/part/popup-basic-button.vue";
import inputPhone from "~/components/form/input-phone.vue";


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


