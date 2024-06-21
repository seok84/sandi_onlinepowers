<template>
    <div class="item-cart">
        
        <!-- 장바구니 -->
        <div class="flex-vcenter cart">
            <div class="quantity-box">
                <div class="btn-quantity-box">
                    <button type="button" class="btn-minus" @click="item.count--" :disabled="item.count < 2">-</button>
                    <input type="number" title="수량" class="number" v-model="item.count" :min="1"> 
                    <button type="button" class="btn-plus" @click="item.count++">+</button>
                </div>
                <button type="button" class="btn-quantity">변경</button>
            </div>
            
            <!-- 주문/결제 -->
            <div class="price-info">
                <div class="col">
                    <span class="price">상품가 299,000</span>
                    <span class="discount">할인 : 6,000</span>
                    <p class="ea">수량 : 1개</p>
                </div>
                <div class="col">
                    <button type="button" class="btn-coupon-apply" @click="couponToggle = !couponToggle">상품쿠폰적용</button>
                </div>
            </div>

            <div class="order-area">
                <button type="button" class="btn-interest">
                    <span class="user-ico user-attention" @click="addToWishList()" :class="{ 'active': this.attention }">
                    </span>
                </button>
                <button type="button" class="btn-order">바로구매</button>
            </div>
        </div>

        <div class="coupon-input-area" v-show="couponToggle == true">
            <div class="select-wrap">
                <select>
                    <option value="null">쿠폰을 선택해주세요.</option>
                    <option value="">쿠폰1</option>
                    <option value="">쿠폰2</option>
                    <option value="">쿠폰3</option>
                </select>
            </div>

            <div class="btn-area">
                <button type="button" class="btn-cancel">취소</button>
                <button type="button" class="btn-apply">적용</button>
            </div>
        </div>

        <div class="delivery-info">
            <div class="item-price">
                <div class="title">배송정보 (배송사명)</div>
                <div class="price">
                    상품 {{ item.price }} + 배송비 {{ item.shipping }}원 = <br class="mobile"><strong>{{ item.totalPrice }}</strong>원
                    <!-- 툴팁추가 -->
                    <div class="ttip_wrapper" :class="{show: tipOpen == true}">
                        <span class="tooltip" @mouseenter="tipOpen = true" @mouseleave="tipOpen = false" @click="tipOpen = !tipOpen">?</span>

                        <div class="price_ttip">
                            <p class="tit">배송정보</p>
                            <dl class="delivery">
                                <dt>출고지 조건부 무료배송</dt>
                                <dd>출고지 상품 20,000원 이상 구매 시 무료</dd>
                                <dt>제주/도서산간</dt>
                                <dd>제주 3,000원 추가 / 도서산간 3,000원 추가</dd>
                            </dl>
                        </div>

                    </div>

                </div>
            </div>
            <div class="radio-wrap">
                <label><input type="radio" :name="'delivery-radio' + [item.index]"> 선불</label>
                <label><input type="radio" :name="'delivery-radio' + [item.index]"> 착불</label>
            </div>
            <div class="coupon-area">
                <label><input type="checkbox"> 배송비 쿠폰</label>
            </div>
        </div>
    </div>
</template>
<script>
// import TooltipDefault from '../tooltip-default.vue';

export default {
    props: {
        item: {
            type: Object,
            default: {
            }
        },
    },
    data: () => {
        return {
            attention: false,
            couponToggle: false,
            count: 1,
            tipOpen: false,
        }
    },
    methods: {
        addToWishList() {
            this.attention = !this.attention
        },
        addToBasketList() {
            this.basket = !this.basket
        },
        
        countUp(){
            this.count++
        },
        countDown(){
            this.count--
        }
        
    },
}
</script>

<style scoped>
@import url("~/assets/css/components/item/cart.css");
</style>