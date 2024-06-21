
<template>
    <div class="modal modal_basic modal_m modal_full" id="customerApplyCancelSetView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'취소신청(세트)'" />
            <div class="modal_body">
                <div class="modal_content">
                    <!-- 아이템 -->
                    <!-- 2023.05.15 수정 -->
                    <div class="popupItemWrap">
                        <!-- 스크롤영역 구분 구조 추가 -->
                        <div class="item_wrapper">
                            <div class="item-list horizon popup-item" v-for="(item, index) in items" :key="index">
                                <item-part-thumbnail :item="item.thumbnail" />
                                <item-part-info :item="item.info" />
                            </div>
                        </div>
                        <div class="check_wrap reviewBlock customerNone couponNone couponDeleveryNone" @click="noneOption">
                            <input type="checkbox" name="noneOption" id="noneOption" class="input_check">
                            <label for="noneOption">상품옵션미노출</label>
                        </div>
                    </div>
                    <!-- 사유를 선택하세요 -->
                    <div class="form_line select_wrap">
                        <select name="" id="select01" class="form_control input_select modal_style">
                            <option value="">사유를 선택하세요</option>
                            <option value="">더미02</option>
                            <option value="">더미03</option>
                            <option value="">더미04</option>
                        </select>
                    </div>
                    <p class="info_dot">세트상품 취소 시 부분취소 불가하며 전체취소만 가능합니다.</p>
                    <p class="info_dot">주문 시 사용한 쿠폰과 포인트는 취소 시 복구됩니다. (단, 쿠폰의 경우 유효기간이 남은 쿠폰에 한함)</p>
                    <p class="info_dot">이미 상품이 발송된 것으로 확인되면 취소 요청이 자동으로 철회되며, 이 경우 상품을 받으신 후 반품신청을 하실 수 있습니다.</p>

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
                    <!-- <p class="info_dot">부분취소가 불가능한 결제방식의 경우 위에 입력하신 계좌로 취소금액을 입금해드립니다.</p>
                    <p class="info_dot">통장입금의 경우 택배가 판매자에게 도착한 후 2 ~ 3일 이내에 환불 신청하신 계좌로 입금됩니다.</p> -->
                    <!-- // 환불정보 -->

                    <!-- 그레이박스 -->
                    <div class="gray_box">
                        <dl class="jssp_align">
                            <dt>상품금액</dt>
                            <dd><span>9,999,999</span> 원</dd>
                            <dt>배송비</dt>
                            <dd><span>9,999,999</span> 원</dd>
                            <dt>총 환불금액</dt>
                            <dd><span>9,999,999</span> 원</dd>
                        </dl>
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


export default {
    name: 'popupBase',
    components: {
        popupHead,
        popupButton,
    },
    data() {
        return {
            floatingImage: require("~/static/img/sample/thumbnail_img_L.png"),
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
@import url('~/assets/css/layouts/modal-ui.css');
</style>