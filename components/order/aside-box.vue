<template>
    <div class="cart-bot cart-right-wrapper" ref="cartRightWrapper"> 
        <div class="cart-aside-box" :class="{ 'fixed': isFixed, 'offset': isOffset }">
            <!-- 장바구니 -->
            <div class="cart">
                <h3 class="total-items">전체상품 : <span>10</span>건</h3>
                <dl class="cart-receipt">
                    <dt class="product-amount">상품금액
                    </dt>
                    <dd><span>110,300</span>원</dd>
                    <dt class="delivery-charge">배송비
                    </dt>
                    <dd><span>0</span>원</dd>
                    <dt class="discount-benefits">할인혜택
                    </dt>
                    <dd><span>-10,000</span>원</dd>
                </dl>
                <div class="total-order border-line gray">
                    <dl>
                        <dt class="order-amount">총 주문금액
                        </dt>
                        <dd class="order-totalprice">100,300원</dd>
                    </dl>
                </div>
                <div class="info-txt">
                    <p>
                        장바구니에 담긴 상품은 30일 동안 보관됩니다.<br>
                        30일이 초과된 상품은 자동으로 삭제됩니다.<br>
                        더 오래 보관하고 싶은 상품은 관심상품으로 전환하시기 바랍니다.
                    </p>

                </div>
                <div class="btn-wrap-basic">
                    <button class="btn btn-order">주문하기</button>
                    <!--
                    <button class="btn btn-tertiary btn-print pc">견적서 출력(금액표기)</button>
                    <button class="btn btn-tertiary btn-print pc">견적서 출력(금액 미표기)</button>
                    -->
                </div>
            </div>
 
            <!-- 주문 -->
            <div class="order">
                <h3 class="total-items">전체상품 : <span>6</span>건</h3>
                <dl class="order-price">
                    <dt>총 상품금액</dt>
                    <dd><span class="price">100,300</span>원</dd>
                </dl>
                <div class="discount">
                    <dl>
                        <dt>세트할인</dt>
                        <dd>0원</dd>
                        <dt>상품할인</dt>
                        <dd>0원</dd>
                        <dt>회원할인(등급)</dt>
                        <dd>0원</dd>
                        <dt>배송비 할인</dt>
                        <dd>0원</dd>
                    </dl>
                    <dl class="user-discount">
                        <dt><strong>쿠폰할인</strong></dt>
                        <dd><strong>1,000원</strong></dd>
                        <dt><strong>포인트 사용</strong></dt>
                        <dd><strong>1,000원</strong></dd>
                    </dl>
                    <p class="text-right">적립예정 포인트 9,999,999P</p>
                </div>
                
                <dl class="total-order">
                    <dt class="order-amount">최종 결제 금액</dt>
                    <dd class="order-totalprice">100,300원</dd>
                </dl>
            </div>
            
            <div class="order-agree">
                <label><input type="checkbox"> <span>개인정보 제 3자 제공 동의</span> <i @click="isActive = !isActive"></i></label>
                <div class="box" :class="{hidden: isActive == false}">
                    개인정보 제 3자 제공 동의 텍스트입니다.<br>
                    개인정보 제 3자 제공 동의 텍스트입니다.<br>
                    개인정보 제 3자 제공 동의 텍스트입니다.
                </div>
                <label><input type="checkbox"> <span>주문할 상품의 상품명, 상품가격, 배송 정보를 확인하였으며, 구매에 동의 하시겠습니까?</span></label>
            </div>
            <div class="btn-wrap-basic">
                <button class="btn btn-order">100,300원 결제하기</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            isFixed: false,
            isOffset: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);

    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const target = this.$refs.cartRightWrapper;
            const rect = target.getBoundingClientRect();
            const headerH = document.querySelector("header").offsetHeight
            const contentH = document.querySelector(".cart-left-wrapper").offsetHeight
            const cartAsideBox = document.querySelector(".cart-aside-box")
            const cartAsideBoxH = document.querySelector(".cart-aside-box").offsetHeight

            //console.log("rect:: ", rect.y)
            //console.log("scroll:: ", window.scrollY)
            //console.log("contentH:: ", contentH)
            //console.log("cartAsideBoxH:: ", cartAsideBoxH)

            if (contentH > cartAsideBoxH) {
                if (window.scrollY > headerH) {
                    cartAsideBox.classList.add('fixed')

                    if (window.scrollY > contentH - cartAsideBoxH) {
                        cartAsideBox.classList.add('offset')
                        cartAsideBox.classList.remove('fixed')
                        cartAsideBox.style.top = (contentH - cartAsideBoxH - headerH + 67)/10  + "rem"
                    } else {
                        cartAsideBox.classList.remove('offset')
                        cartAsideBox.classList.add('fixed')
                        cartAsideBox.style.top = null
                    }
                    
                } else {
                    cartAsideBox.classList.remove('fixed')
                }

                
            }

        },
    }
}
</script>
<style scoped>
.cart-aside-box .payment-schedule {
    margin: 3rem 0 2rem;
    padding: 2rem 3rem 3rem;
    line-height: 3.6rem;
    background-color: #fafafa;
    width: 100%;
}


.payment-schedule .main_tit dt,
.payment-schedule .main_tit dd {
    line-height: 3.6rem;
    font-size: 2.4rem;
    font-weight: 700;
    color: #000;
    height: auto;
    margin-bottom: 0;
}

.payment-schedule dd span {
    
    font-weight: 700;
    margin-right: .6rem;
}


.payment-schedule .point-desc {
    padding: 1.2rem 0 0;
    margin-top: 1.2rem;
    border-top: 1px solid #d9d9d9;
}
</style>