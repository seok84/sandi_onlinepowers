
<template>
    <div class="modal modal_basic modal_m modal_full" id="customerApplyExchangeSetView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'교환신청(세트)'" />
            <div class="modal_body">
                <div class="modal_content">
                    <!-- 아이템 -->
                    <item-popup-item />
                    <!-- 사유를 선택하세요 -->
                    <div class="form_line select_wrap">
                        <select name="" id="select01" class="form_control input_select modal_style">
                            <option value="">사유를 선택하세요</option>
                            <option value="">더미02</option>
                            <option value="">더미03</option>
                            <option value="">더미04</option>
                        </select>
                    </div>
                    <!-- 반송 송장 정보 -->
                    <h4 class="modal_cont_tit">반송 송장 정보</h4>
                    <div class="radio_wrap">
                        <input type="radio" name="sample" id="radio01" class="input_radio" />
                        <label for="radio01">지정택배사 이용하기</label>
                    </div>
                    <div class="col">
                        <div class="form_line">
                            <input type="text" name="address_02" id="address_02" placeholder="상세주소" value=""
                                class="form_control" />
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
                        <!-- 전화번호 -->
                        <div class="form_line">
                            <input type="number" name="" id="" placeholder="'-'없이 전화번호 숫자만 입력" minlength="8"
                                class="form_control">
                        </div>
                    </div>

                </div>
                <!-- 버튼 -->
                <div class="btn-wrap">
                    <button class="btn btn-middle btn-default" id="">취소</button>
                    <button class="btn btn-middle btn-attention" id="">저장</button>
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
        inputPhone,
    },
    data() {
        return {
            floatingImage: require("~/static/img/sample/mc_sample_img.png"),
            itemThumbnail: require("~/assets/img/sample/sample_img.jpg"),
        }
    }
}
</script>

<style>@import url('~/assets/css/layouts/modal-ui.css');</style>