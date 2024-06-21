<template>
    <div class="item-info">
        <div class="item-title-wrap"  :class="!item.brand?'on': ''">
            <div class="item-brand-area" :class="!item.brand?'none-brand': ''">
                <nuxt-link to="/" class="" v-if="item.brand">
                    <p class="brand">{{ item.brand }}</p>
                </nuxt-link>
                <div class="user-action">
                    <span class="user-ico user-attention" @click="addToWishList()" :class="{ 'active': this.attention }">
                    </span>
                    <span class="user-ico user-basket" @click="addToBasketList()" :class="{ 'active': this.basket }">
                    </span>
                </div>
            </div>
            <nuxt-link to="/" class="title-pr">
                <p class="title">{{ item.title }}</p>
            </nuxt-link>
            <div class="item-option" v-if="item.option">
                {{ item.option }}
            </div>
            <div class="item-set-option"  v-if="item.optionSet">
                {{ item.optionSet }}
            </div>
            <div class="item-gift" v-if="item.gift">
                {{ item.gift }}
            </div>
            <button type="button" class="btn-rpq" v-if="item.rpq">견적문의</button>
        </div>
        <div class="btn-estimate" v-if="item.showContact">견적문의</div>
        <div class="item-price">
            <p class="discounted" v-if="item.sale"><span>{{ item.sale }}</span>원</p>
            <p class="price" v-if="item.price"><span>{{ item.price }}</span>원</p>
            <p class="quantity" v-if="item.quantity">/ 수량 <span>{{item.quantity}}</span>개</p>
            <p class="sale" v-if="item.discounted"><span>{{ item.discounted }}</span>%</p>
        </div>
        <ul class="item-tag" v-if="item.tag">
            <li v-if="item.tag.tag1" class="tag tag1"><span>태그1</span></li>
            <li v-if="item.tag.tag2" class="tag tag2"><span>태그2</span></li>
            <li v-if="item.tag.tag3" class="tag tag3"><span>태그3</span></li>
            <li v-if="item.tag.tag4" class="tag tag4"><span>태그4</span></li>
            <li v-if="item.tag.tag5" class="tag tag5"><span>태그5</span></li>
        </ul>
    </div>
</template>
<script>
// import TooltipDefault from '../tooltip-default.vue';

export default {
    props: {
        item: {
            type: Object,
            default: {
                showContact: false,
                // showContact: true,
                brand: "브랜드명",
                title: "상품명",
                option: "",
                optionSet: "",
                gift: "",
                sale: "138,000",
                price: "108,000",
                discounted: "27",
                quantity: "",
                tag: {
                    tag1: true,
                    tag2: true,
                    tag3: true,
                    tag4: true,
                    tag5: true,
                }
            }
        },
    },
    data: () => {
        return {
            attention: false,
            basket: false,
        }
    },
    computed: {  },
    methods: {
        addToWishList() {
            this.attention = !this.attention
        },
        addToBasketList() {
            this.basket = !this.basket
        }
    },
    // components: { TooltipDefault }
}
</script>

<style scoped>
@import url("~/assets/css/components/item/info.css");

</style>