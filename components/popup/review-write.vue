<template>
    <div class="modal modal_basic modal_m modal_full" id="reviewWriteView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'후기작성'" />
            <div class="modal_body">
                <form>
                    <div class="modal_content">
                        <!-- 텍스트 -->
                        <div class="txt_center">
                            <h4 class="modal_cont_tit_lg">구매확정해 주셔서 감사합니다.</h4>
                            <p class="txt_sub">지금 바로 고객님의 소중한 후기를 남겨주세요.<br>
                                작성해 주시는 이용후기는 다른 분의 쇼핑에 소중한 정보가 됩니다.</p>
                        </div>
                        <!-- 아이템 -->
                        <div class="item-list horizon popup-item" v-for="(item, index) in items" :key="index">
                            <item-part-thumbnail :item="item.thumbnail" />
                            <item-part-info :item="item.info" />
                        </div>
                        <reviewScoreStar />
                        <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력하세요" class="form_control"></textarea>
                        <p class="info_dot">이용후기는 구매확정 된 상품에 한하여 주문일로부터 90일내 작성 가능합니다.</p>
                        <p class="info_dot"><span>일반후기 1000P / 포토후기 2000P</span>적립해드립니다.</p>
                        <reviewThumb />
                    </div>
                    <!-- 버튼 -->
                    <div class="btn-wrap">
                        <button class="btn btn-middle btn-default" id="">취소</button>
                        <button class="btn btn-middle btn-attention" id="">저장</button>
                    </div>
                </form>
            </div>
            <popupButton class="modal_close_w" />
        </div>
    </div>
</template>

<script>
import popupHead from "~/components/popup/part/popup-basic-head.vue";
import popupButton from "~/components/popup/part/popup-basic-button.vue";
import reviewScoreStar from "~/components/item/review-score-star.vue";
import popupItem from "~/components/item/popup-item.vue";
import reviewThumb from "~/components/item/review-thumb.vue";


export default {
    name: 'popupBase',
    components: {
        popupHead,
        popupButton,
        reviewScoreStar,
        popupItem,
        reviewThumb
    }, data() {
        return {
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
