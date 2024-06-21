<template>
    <div class="item_wrapper vert"> <!-- vert 클래스 확인 -->
        <div class="item-list horizon" v-for="(item, index) in itemInfo" :key="index"> <!-- horizon 클래스 확인 -->
            <div class="check_wrap"><input type="checkbox" name="" id="" class="input_check"></div>
            <div class="horizon"> <!-- horizon 구조 추가 확인 -->
                <div class="item_thumbnail">
                    <div class="user-action" v-if="item.userActive">
                        <div class="user-attention user-ico" @click.prevent="addToWishList($event)">관심상품</div>
                        <div v-if="!item.thumbnailArea.date" class="user-basket user-ico" @click="addToWishList($event)">
                            장바구니
                        </div>
                        <div v-if="item.thumbnailArea.date" class="user-basket-disabled user-ico">장바구니</div>
                    </div>
                    <div class="sold_out_wrapper" v-show="item.thumbnailArea.date">
                        <div class="sold_out_img"></div>
                        <p class="sold_out_txt">
                            상품이 <span class="receiving_date">{{ item.thumbnailArea.date }}</span>에 입고될 예정입니다.
                        </p>
                    </div>
                    <div class="ranking" v-if="item.rank"><span class="numbering">{{ index + 1 }}</span></div>
                    <a href="javascript:void(0);">
                        <div class="thumbnail_area" v-if="item.thumbnailArea.floatingClass">
                            <img :class="item.thumbnailArea.floatingClass" :src="item.thumbnailArea.floatingImage">
                        </div>
                        <img :src="item.thumbnailArea.itemThumbnail" alt="itemThumbnail">
                    </a>

                </div>
                <div class="item_desc">
                    <a href="javascript:void(0);" class="brand_area">
                        <p class="brand">{{ item.descArea.brand }}</p>
                        <p class="title">{{ item.descArea.title }}</p>
                    </a>
                    <p v-if="item.descArea.roasting" class="production_date">로스팅일자<span>{{ item.descArea.roasting }}</span>
                    </p>
                    <div class="price_area">
                        <p class="discounted"><span>{{ item.descArea.sale }}</span>원</p>
                        <span class="price"><span>{{ item.descArea.price }}</span>원</span>
                        <span class="sale"><span>{{ item.descArea.discounted }}</span>%</span>
                    </div>
                    <div class="badge_item_wrap">
                        <div v-if="item.descArea.storage === 'COOL'" class="badge_item badge_cold"> 냉장 </div>
                        <div v-else-if="item.descArea.storage === 'ICE'" class="badge_item badge_ice"> 냉동 </div>
                        <div v-if="item.descArea.delevery === 'DIRECT_DELEVERY'" class="badge_item badge_quick">직배송</div>
                        <div v-else-if="item.descArea.delevery === 'SELLER_DELEVERY'" class="badge_item">업체배송</div>
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
                </div>
            </div>
            <div class="count_number">
                <strong><span>{{ item.count.number }}</span>회</strong>
                <span class="date">{{ item.count.date }}</span>
            </div>
            <div class="btn_wrapper">
                <div class="btn btn-small btn-tertiary ">관심상품</div>
                <div class="btn btn-small btn_accent">장바구니</div>
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