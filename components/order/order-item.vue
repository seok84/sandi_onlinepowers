<template>
    <div class="item_wrapper order_item">
        <div class="item-list horizon">
            <div class="item_thumbnail">
                <a href="javascript:void(0);">
                    <div class="thumbnail_area">
                        <div class="center_center">중간</div>
                        <div class="top_left">좌상</div>
                        <div class="top_right">우상</div>
                        <div class="bottom_left">좌하</div>
                        <div class="bottom_right">우하</div>
                    </div>
                    <img src="~/assets/img/sample/sample_img.jpg" />
                </a>
            </div>
            <div class="item_desc">
                <a href="javascript:void(0);" class="brand_area">
                    <p class="brand">스트로베리 쇼콜라 갸또</p>
                    <p class="title">
                        묵직한 초콜릿 풍미의 갸또 시트에 밀크 가나슈 생크림과 연유 생크림, 새콤달콤 딸기가 조화를 이룬 케이크
                    </p>
                    <!-- <p class="production_date">로스팅일자<span>{{ item.descArea.roasting }}</span></p> -->
                    <p class="product_option">
                        [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                        [옵션3] 그린 옵션명 옵션명( +1,000원 )
                    </p>
                </a>
                <div class="price_area02">
                    <div class="price">
                        <p class="product_price">상품가<span>299,000</span>원</p>
                        <span class="divider">|</span>
                        <p class="sale">할인 <span>6,000</span>원</p>
                    </div>
                    <div class="saled_price">
                        <p>할인적용가 <span>43,900</span>원</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="ect_area">
            <div class="shipping_info_wrap">
                <div class="shipping_info">
                    <span>배송정보</span>
                    <infoToast class="seller_delivery"/>
                    <!-- 
                        무료배송        free_delivery
                        판매자 조건부   seller_delivery
                        출고지 조건부   release_delivery
                    -->
                    <span class="company">본사</span>
                </div>
                <span class="delivery_condition">무료배송</span>
            </div>

            <div class="quantity_wrapper">
                <div class="btn btn-default btn-small btn_lm">
                    수량 : <span class="number">3</span>개
                </div>
                <div class="btn btn_done btn-small btn_lm show_product" @click="openPopup($event)">구성상품보기</div>
            </div>

        </div>
    </div>
</template>

<script>
import infoToast from "~/components/popup/cart-delivery-toast.vue";

export default {
    components:{
        infoToast
    },
    itemInfo: {
            type: [Array],
            default: () => {
                return []
            }
        },
}
</script>

<style>

</style>