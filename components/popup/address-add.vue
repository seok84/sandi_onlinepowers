<template>
    <div class="modal modal_basic modal_m modal_full" id="addressAddView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'배송지 추가'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div id="address-add" class="address-add">
                        <div class="pop_address_wrap">
                            <div class="form_line">
                                <input type="text" name="address_01" id="address_01" placeholder="배송지" class="form_control"
                                    value="" />
                            </div>
                            <div class="form_line">
                                <input type="text" name="address_02" id="address_02" placeholder="받는사람" class="form_control"
                                    value="" />
                            </div>
                            <div class="form_line">
                                <input type="text" name="address_03" id="address_03" placeholder="우편번호 찾기"
                                    class="form_control form_search" value="" readonly="" />
                                <a href="javascript:void(0);" class="search_address t50">주소 검색</a>
                            </div>
                            <div class="form_line">
                                <input type="text" name="address_04" id="address_04" placeholder="기본주소" class="form_control"
                                    value="" readonly />
                            </div>
                            <div class="form_line">
                                <input type="text" name="address_05" id="address_05" placeholder="상세주소" class="form_control"
                                    value="" />
                            </div>
                            <div class="form_line">
                                <input type="number" name="address_05" id="address_06" placeholder="'-'없이 전화번호 숫자만 입력" class="form_control"
                                    value="" />
                            </div>
                            
                            <div class="check_wrap active">
                                <label>
                                    <input type="checkbox" name="check06" id="check06" class="input_check" />
                                    <span>기본 배송지로 설정</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="check07" id="check07" class="input_check" />
                                    <span>기본 정보로 가져오기</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 버튼 -->
                <div class="btn-wrap">
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