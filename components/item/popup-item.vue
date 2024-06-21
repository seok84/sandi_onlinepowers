<template>
    <!-- reviewItem customerItem couponItem couponDeleveryItem-->
    <div class="popupItemWrap">
        <div class="item_wrapper"><!-- 스크롤영역 구분 구조 추가 -->
            <div class="item-list horizon popup-item" v-for="(item, index) in items" :key="index">
                <item-part-thumbnail :item="item.thumbnail" />
                <item-part-info :item="item.info" />
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            floatingImage: require("~/static/img/sample/mc_sample_img.png"),
            itemThumbnail: require("~/assets/img/sample/sample_img.jpg"),
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
    methods: {
        noneOption() {
            const priceOption = document.querySelector(".popupItemWrap .noneOption")
            priceOption.classList.toggle('on')
        }
    },
}
</script>

<style>


</style>