<template>
    <div class="item_wrapper order_item">
        <div class="item-list horizon" v-for="(item, index) in itemInfo" :key="index">
            <div class="item_thumbnail">
                <div class="user-action">
                    <div class="user-attention user-ico" @click.prevent="addToWishList($event)">관심상품</div>
                    <div v-if="!item.thumbnailArea.date" class="user-basket user-ico" @click="addToWishList($event)">장바구니</div>
                    <div v-if="item.thumbnailArea.date" class="user-basket-disabled user-ico">장바구니</div>
                </div>
                <div class="sold_out_wrapper" v-show="item.thumbnailArea.date">
                    <div class="sold_out_img"></div>
                    <p class="sold_out_txt">
                        상품이 <span class="receiving_date">{{ item.thumbnailArea.date }}</span>에 입고될 예정입니다.
                    </p>
                </div>
                <div class="ranking" v-if="item.rank"><span class="numbering">{{ index+ 1 }}</span></div>
                <a href="javascript:void(0);">
                    <div class="thumbnail_area" v-if="item.thumbnailArea.floatingClass">
                        <img :class="item.thumbnailArea.floatingClass" :src="item.thumbnailArea.floatingImage">
                    </div>
                    <img :src="item.thumbnailArea.itemThumbnail" alt="itemThumbnail">
                </a>
            </div>
            <div class="item_desc">
                <a href="javascript:void(0);" class="brand_area">
                    <p class="brand">{{item.descArea.brand}}</p>
                    <p class="title">{{item.descArea.title}}</p>
                    <p v-if="item.descArea.roasting" class="production_date">로스팅일자<span>{{ item.descArea.roasting }}</span></p>
                    <p v-if="item.descArea.orderlist" class="product_option">
                        [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                        [옵션3] 그린 옵션명 옵션명( +1,000원 )
                    </p>
                </a>
                <div class="price_area02" v-if="item.orderlist">
                    <div class="price">
                        <p class="product_price">상품가<span>299,000</span>원</p>
                        <span class="divider">|</span>
                        <p class="sale">할인 <span>6,000</span>원</p>
                    </div>
                    <div class="saled_price">
                        <p>할인적용가 <span>43,900</span>원</p>
                    </div>
                </div>
                <div class="badge_item_wrap">
                    <div v-if="item.descArea.storage === 'COOL'" class="badge_item badge_cold"> 냉장 </div>
                    <div v-else-if="item.descArea.storage === 'ICE'" class="badge_item badge_ice"> 냉동 </div>
                    <div v-if="item.descArea.delevery==='DIRECT_DELEVERY'" class="badge_item badge_quick">직배송</div>
                    <div v-else-if="item.descArea.delevery==='SELLER_DELEVERY'" class="badge_item">업체배송</div>
                </div>
                <div class="badge_tag_wrap">
                    <span v-if="item.descArea.new === true" class="badge_tag badge_new">신상품</span>
                    <span v-if="item.descArea.recommend === true" class="badge_tag badge_recommend">MD추천</span>
                    
                    <span v-if="item.descArea.freeDelivery === true" class="badge_tag badge_freedelivery">무료배송</span>
                    <span v-if="item.descArea.best === true" class="badge_tag badge_best">베스트</span>
                    <span v-if="item.descArea.onlycnt === true" class="badge_tag badge_onlycnt">ONLY SANDI</span>
                    <span v-if="item.descArea.deal === true" class="badge_tag badge_deal">행사상품</span>
                    <span v-if="item.descArea.limited === true" class="badge_tag badge_limited">한정수량</span>
                </div>
                <div class="ect_area" v-if="item.orderlist">
                    <div class="shipping_info_wrap">
                        <div class="shipping_info">
                            <span>배송정보</span>
                            <a href="javascript:void(0);" class="info_toast"></a>
                            <span class="company">본사</span>
                        </div>
                        <span class="delivery_condition">무료배송</span>
                    </div>
                    <div class="quantity_wrapper">
                        <div class="btn btn-default btn-small btn_lm">
                            수량 : <span class="number">3</span>개
                        </div>
                        <button type="button" class="btn btn_done btn-small btn_lm show_product">구성상품보기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    props: {
        itemInfo: {
            type: [Array],
            default: () => {
                return []
            }
        },
    },
    methods: {
        addToWishList(e) {
            const toast = document.querySelector('.toast_wrap')
            e.target.classList.toggle('active')
            toast.classList.add('on')
            setTimeout(() => {
                toast.classList.remove('on');
            }, 1500)
        },
    },
}
</script>

<style>

</style>