<template>
    <div class="modal modal_basic modal_m modal_full" id="couponDeliveryView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'배송비 쿠폰'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div class="cont_tit">
                        <h4 class="modal_cont_tit">배송비 쿠폰</h4>
                    </div>
                    <div class="item-list horizon popup-item" v-for="(item, index) in items" :key="index">
                        <item-part-thumbnail :item="item.thumbnail" />
                        <item-part-info :item="item.info" />
                    </div>
                    <p class="info_dot">업체배송 상품은 배송비 쿠폰 사용이 불가능 합니다</p>
                    <div class="check_wrap">
                        <input type="checkbox" name="noneOption" id="noneOption" class="input_check">
                        <label for="noneOption">배송비: 무료(쿠폰적용)</label>
                    </div>
                    <dl class="saled_list">
                        <dt>상품쿠폰 적용 시 총 할인금액</dt>
                        <dd>-1,000원</dd>
                        <dt>적용한 배송비 쿠폰</dt>
                        <dd>5장</dd>
                        <dt>상품쿠폰 적용 시 총 할인금액</dt>
                        <dd>-1,000원</dd>
                    </dl>
                </div>
                <!-- 버튼 -->
                <div class="btn-wrap">
                    <button class="btn btn-middle btn-attention" id="">적용</button>
                </div>
            </div>
            <popupButton class="modal_close_w" />
        </div>
    </div>
</template>

<script>
import popupHead from "~/components/popup/part/popup-basic-head.vue";
import popupButton from "~/components/popup/part/popup-basic-button.vue";
import popupItem from "~/components/item/popup-item.vue";



export default {
    name: 'popupBase',
    components: {
        popupHead,
        popupButton,
        popupItem
    },
    data() {
        return {
            selectedOption: "",
            optionList: [
                { name: '회원가입 전용 쿠폰   -1,000원 할인 [1개 수량만]', value: "" },
                { name: '1,000원 할인', value: "1,000원 할인" },
                { name: '2,000원 할인', value: "2,000원 할인" },
                { name: '3,000원 할인', value: "3,000원 할인" }
            ],
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
    },

}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>
