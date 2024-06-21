
<template>
    <div class="modal modal_basic modal_m modal_full" id="customerApplyReturnView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'반품신청(일반)'" />
            <div class="modal_body">
                <div class="modal_content">
                    <!-- 아이템 -->
                    <div class="popupItemWrap">
                        <div class="item_wrapper"> <!-- 스크롤 영역 -->
                            <div class="item-list horizon popup-item" v-for="(item, index) in items" :key="index">
                                <item-part-thumbnail :item="item.thumbnail" />
                                <item-part-info :item="item.info" />
                            </div>
                        </div>
                    </div>
                    <!-- 사유를 선택하세요 -->
                    <div class="form_line select_wrap">
                        <select name="" id="select01" class="form_control input_select modal_style"
                            style="color: rgb(185, 185, 185);">
                            <option value="">더미01</option>
                            <option value="">더미02</option>
                            <option value="">더미03</option>
                            <option value="">더미04</option>
                        </select>
                    </div>
                    <div class="form_line">
                        <input type="text" name="address_02" id="address_02" placeholder="사유를 입력하세요" value=""
                            class="form_control modal_style">
                    </div>
                    <div class="form-group file_area">
                        <ul>
                            <li>
                                <div><img src="/_nuxt/static/img/sample/mc_sample_img_02.png" alt="썸네일" class="img_full">
                                </div> <button type="button" class="btn_file_del"><span
                                        class="screen_out">파일삭제</span></button>
                            </li>
                            <li>
                                <div><img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full"></div>
                                <button type="button" class="btn_file_del"><span class="screen_out">파일삭제</span></button>
                            </li>
                            <li>
                                <div><img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full"></div>
                                <button type="button" class="btn_file_del"><span class="screen_out">파일삭제</span></button>
                            </li>
                            <li><input type="file" id="file1"> <label for="file1" class="btn_file_add"><span
                                        class="screen_out">파일추가</span></label></li>
                        </ul>
                        <div class="info_dot">
                            <p>5MB 이하의 사진 4장까지 첨부 가능</p>
                        </div>
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

                    <!-- 환불정보 -->
                    <div class="refund_wrap input_wrap">
                        <span class="form_title">환불정보</span>
                        <div class="form_line margin_none bank_account">
                            <input name="input_id03" id="input_id03" placeholder="예금주명" class="form_control">
                        </div>
                        <div class="form_line select_wrap"><select name="" id="select02" class="form_control input_select">
                                <option value="" disabled="" selected="">은행명</option>
                                <option value="">우리은행</option>
                                <option value="">신한은행</option>
                                <option value="">국민은행</option>
                            </select></div>
                        <div class="form_line">
                            <input name="input_id02" id="input_id02" placeholder="계좌번호" class="form_control">
                        </div>
                    </div>

                    <!-- 2023.05.23 추가-->
                    <p class="info_dot accent">주문하신 상품 수령일로부터 7일 이내만 반품이 가능합니다.</p>
                    <p class="info_dot">반품 사유에 따라 반품배송비가 발생할 수 있습니다.<br>(환불 금액에서 차감됩니다.)</p>
                    <p class="info_dot accent">1박스당 반품배송비는 6,000원 이며 업체발송건은 업체마다 반품배송비가 상이합니다.<br>(제주 및 도서산간 박스당 반품배송비
                        12,000원)</p>
                    <p class="info_dot">갓볶은 원두, 냉장/냉동상품, 업체발송 상품 중 선도유지 상품은 반품불가 합니다.</p>

                    <!-- // 환불정보 -->

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
            items: [
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        option: "[옵션값] 해당옵션 / [옵션값] 해당옵션 / [옵션값] 해당옵션 (+1,000원)",
                        optionSet: "세트 옵션이 노출되는 공간입니다",
                        // sale: "138,000",
                        price: "108,000",
                        // discounted: "27",
                        quantity: "2",
                        tag: {
                            // tag1: true,
                            // tag2: true,
                            // tag3: true,
                            // tag4: true,
                            // tag5: true,
                        }
                    },
                },
            ],
        }
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');</style>