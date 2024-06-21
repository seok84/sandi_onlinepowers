<template>
    <div class="modal modal_basic modal_m modal_full" id="couponProductView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'상품쿠폰'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div class="modal_fixed_top">
                        <div class="cont_tit">
                            <h4 class="modal_cont_tit">상품 쿠폰 적용하기</h4>
                            <!-- 오프라인 쿠폰등록은 마이페이지에서만 사용  -->
                            <button class="coupon_regist" @click="hideWrap($event)">오프라인 쿠폰등록</button>
                        </div>
                        <div class="inquiry_wrapper type02 hide">
                            <div class="form_inner">
                                <div class="search_area">
                                    <input type="text" placeholder="'-' 없이 쿠폰번호 입력" title="'-' 없이 쿠폰번호 입력"
                                        class="form_control">
                                </div>
                                <button type="button" class="btn btn-small btn_accent btn-black">등록</button>
                            </div>
                        </div>
                    </div>
                    <!-- 상품아이템쿠폰적용영역 -->
                    <div class="couponItem_container">
                        <div v-for="(item, index) in items" :key="index">
                            <!-- <popupItem class="couponItem" /> -->
                            <div class="item-list horizon">
                                <item-part-thumbnail :item="item.thumbnail" />
                                <item-part-info :item="item.info" />
                            </div>
                            <div class="form_line select_wrap">
                                <!-- <select name="" id="select01"
                                        class="form_control input_select input_select02">
                                        <option value="회원가입 전용 쿠폰&nbsp;&nbsp;&nbsp;-1,000원 할인 [1개 수량만]" style="color: rgb(0, 0, 0);">
                                            회원가입 전용 쿠폰&nbsp;&nbsp;&nbsp;-1,000원 할인 [1개 수량만]
                                        </option>
                                        <option value="더미02" style="color: rgb(0, 0, 0);">더미02</option>
                                        <option value="더미03" style="color: rgb(0, 0, 0);">더미03</option>
                                        <option value="더미04" style="color: rgb(0, 0, 0);">더미04</option>
                                    </select> -->
                                <select class="form_control input_select input_select02" v-model="selectedOption">
                                    <option v-for="(item, index) in optionList" :value="item.value" :key="index">{{
                                        item.name }}</option>
                                </select>
                                <p class="saled_price">
                                    <!-- 할인된 금액 노출 -->
                                    <!-- 회원가입 전용 쿠폰&nbsp;&nbsp;&nbsp;-1,000원 할인 [1개 수량만] -->
                                    {{ selectedOption }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div class="modal_fixed_bottom">
                        <div class="check_wrap">
                            <input type="checkbox" name="noneOption" id="noneOption" class="input_check">
                            <label for="noneOption">배송비: 무료(쿠폰적용)</label>
                        </div>
                        <dl class="saled_list">
                            <dt>상품쿠폰 적용 시 총 할인금액</dt>
                            <dd>-1,000원</dd>
                        </dl>
                        <!-- 버튼 -->
                        <div class="btn-wrap">
                            <button class="btn btn-middle btn-attention" id="">적용</button>
                        </div>
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

    methods: {
        hideWrap() {
            let hideArea = document.querySelector(".hide");
            hideArea.classList.toggle("show");
        },
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>
