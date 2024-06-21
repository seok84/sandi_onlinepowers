<template>
    <div class="modal modal_basic modal_m" id="setItemView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'세트 구성상품'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div class="item_wrapper vert">
                        <div class="item-list horizon">
                            <div class="item_thumbnail"><a href="javascript:void(0);"><img
                                        src="~/assets/img/sample/sample_img.jpg"></a></div>
                            <div class="item_desc"><a href="javascript:void(0);" rel="" class="brand_area">
                                    <p class="title">
                                        앙버터 부쉬맨 120g 1박스(10개) 앙버터 부쉬맨 120g
                                        1박스(10개)
                                    </p>
                                </a>
                                <div class="price_area"><span class="price"><span>108,000</span>원</span> <span
                                        class="quantity"><span>10</span>개</span></div>
                            </div>
                        </div>
                        <div class="item-list horizon">
                            <div class="item_thumbnail"><a href="javascript:void(0);"><img
                                        src="~/assets/img/sample/sample_img.jpg"></a></div>
                            <div class="item_desc"><a href="javascript:void(0);" rel="" class="brand_area">
                                    <p class="title">
                                        앙버터 부쉬맨 120g 1박스(10개) 앙버터 부쉬맨 120g
                                        1박스(10개)
                                    </p>
                                </a>
                                <div class="price_area"><span class="price"><span>108,000</span>원</span> <span
                                        class="quantity"><span>10</span>개</span></div>
                            </div>
                        </div>
                        <div class="item-list horizon">
                            <div class="item_thumbnail"><a href="javascript:void(0);"><img
                                        src="~/assets/img/sample/sample_img.jpg"></a></div>
                            <div class="item_desc"><a href="javascript:void(0);" rel="" class="brand_area">
                                    <p class="title">
                                        앙버터 부쉬맨 120g 1박스(10개) 앙버터 부쉬맨 120g
                                        1박스(10개)
                                    </p>
                                </a>
                                <div class="price_area"><span class="price"><span>108,000</span>원</span> <span
                                        class="quantity"><span>10</span>개</span></div>
                            </div>
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
// import transactionSheet from "~/components/popup/transaction-sheet.vue";


export default {
    name: 'popupBase',
    data() {
        return {
            popupHeadTitle: "팝업타이틀",
        }
    },
    components: {
        popupHead,
        popupButton,
        // transactionSheet
    }
}
</script>

<style>@import url('~/assets/css/layouts/modal-ui.css');</style>
