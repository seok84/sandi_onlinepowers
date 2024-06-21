
<template>
    <div class="modal modal_basic modal_m modal_full" id="customerApplyExchangeView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'교환신청(일반)'" />
            <div class="modal_body">
                <div class="modal_content">
                    <!-- 아이템 -->
                    <!-- <div class="item-list horizon">
                        <div class="item_thumbnail">
                            <a href="javascript:void(0);">
                                <div class="thumbnail_area">
                                    <img class="center_center" :src="floatingImage" alt="floatingImage">
                                </div>
                                <img :src="itemThumbnail" alt="itemThumbnail">
                            </a>
                        </div>
                        <div class="item_desc"><a href="javascript:void(0);" rel="" class="brand_area">
                                <p class="brand">브랜드네임</p>
                                <p class="title">
                                    제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                    제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄 제목줄
                                    제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                    제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                    제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                    제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                </p>
                                <p class="product_date">로스팅일자 2022. 11. 25</p>
                                <p class="product_option">
                                    [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                    [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                </p>
                            </a>
                            <div class="price_area"><span class="price"><span
                                        class="number">49,900</span><span>원</span></span> <span class="divider">/</span>
                                <span class="item_count">수량<span>999</span>개</span>
                            </div>
                            <div class="etc_control">
                                <div class="amt_box">
                                    <div class="btn_amt_box form_control">
                                        <button type="button" class="btn_minus"></button>
                                        <input type="number" title="수량" value="1" class="number" />
                                        <button type="button" class="btn_plus"></button>
                                    </div>
                                </div>
                                <button type="button" class="btn btn_accent btn-small btn_lm btn_edit">
                                    변경
                                </button>
                            </div>
                        </div>
                    </div> -->
                    <item-popup-item/>
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
                            <input type="number" name="" id="" placeholder="'-'없이 전화번호 숫자만 입력" minlength="8" class="form_control">
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
        inputPhone
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