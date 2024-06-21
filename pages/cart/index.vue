<template>
    <div id="cart">
        <h2 class="title-h2">장바구니</h2>
        <div class="inner cart-inner">
            <div class="cart-left-wrapper" ref="cartLeftWrapper">
                <div class="check-delete-wrapper">
                    <div class="check-wrap">
                        <input type="checkbox" name="allCheck" id="allCheck" class="input-check" v-model="allSelected">
                        <label for="allCheck">전체 (1,000)</label>
                    </div>
                    <div class="btn-wrap">
                        <button class="btn btn-del" @click="removeSelectItem()">삭제</button>
                    </div>
                </div>

                <div class="cart-container">
                    <div class="item-list-container">
                        <div class="item-list vert" v-for="(item, index) in items" :key="index">
                            <button type="button" class="btn-remove" @click="removeItem(index)">삭제</button>
                            <input type="checkbox" class="input-check" v-model="item.checked">
                            <item-part-thumbnail :item="item.thumbnail" />
                            <item-part-info :item="item.info" />
                            <item-part-cart :item="item.info" />
                        </div>

                        <div class="package">
                            <div class="item-list vert" v-for="(packageItem, indexA) in packageItems" :key="indexA">
                                <button type="button" class="btn-remove" @click="removeItem(index)">삭제</button>
                                <input type="checkbox" class="input-check" v-model="packageItem.checked">
                                <item-part-thumbnail :item="packageItem.thumbnail" />
                                <item-part-info :item="packageItem.info" />
                                <item-part-cart :item="packageItem.info" />
                            </div>
                        </div>

                    </div>
                    <div class="cart-null hidden">
                        <p>장바구니에 담긴 상품이 없습니다.</p>
                    </div>
                </div>

            </div>

            <!-- ///////////////////// cart-left-wrapper //////////////////// -->

            <!-- ///////////////////// cart-bot cart-aside //////////////////// -->
            <order-asideBox />

        </div>


        <!-- ///////////////////// cart-bot cart-bottom-wrapper //////////////////// -->
        <div class="cart-bot cart-bottom-wrapper" ref="cartBottomWrapper"><!-- 장바구니 -->
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
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'cart',
    components: {
    },
    data() {
        return {
            titleMain: "장바구니",
            btnShow: true, //세트상품
            isFixed: false,
            items: [
                {
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "1",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        rpq: true,
                        count: '1',
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "2",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        rpq: false,
                        count: '2',
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "3",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        rpq: false,
                        count: '1',
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "4",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        rpq: false,
                        count: '1',
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "5",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        rpq: false,
                        count: '1',
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "5",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        rpq: false,
                        count: '1',
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "6",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        rpq: false,
                        count: '1',
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "7",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        rpq: false,
                        count: '1',
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
            ],
            packageItems: [
                {
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "1",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        rpq: true,
                        count: '1',
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "2",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        rpq: false,
                        count: '2',
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
            ],

        };
    },
    methods: {

        // remove UI
        removeItem(index) {
            // console.log("remove Item: ", index);
            this.items.splice(index, 1);
        },

        removeSelectItem() {
            let checkedLeng = [].slice.call(document.querySelectorAll(".input-check")).filter(function (e) { return e.checked; }).length;
            //console.log('select checkbox :::: ',leng)

            this.items.forEach((checkbox) => {
                if (checkbox.checked == true) {
                    //console.log('select checkbox :: ', checkbox.info.index - 1)
                    this.items.splice(checkbox.info.index - 1, checkedLeng);
                }
            });
        },

    },
    computed: {
        allSelected: {
            //getter
            get: function () {
                return this.items.checked = false
            },
            //setter
            set: function (e) {
                const allCheck = document.getElementById("allCheck").checked;
                if (allCheck == true) {
                    this.items.forEach((checkbox) => {
                        checkbox.checked = false
                        if (checkbox.checked == false) {
                            checkbox.checked = true
                        }
                    });
                } else {
                    this.items.forEach((checkbox) => {
                        checkbox.checked = false
                    });
                }
            },
        },
    },
}


</script>

<style>
@import url('~/assets/css/pages/cart.css');
</style>