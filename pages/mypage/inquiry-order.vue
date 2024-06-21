<template>
    <div id="inquiryOrder" class="myInfo inquiry_order">
        <h2 class="title-h2 pc">마이페이지</h2>
        <h2 class="title-h2 mobile">주문/배송 조회</h2>
        <div class="inner">
            <etc-mypage-info />
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-mypage class="general" />
                <!-- mypage-content -->
                <div class="mypage-content">
                    <div class="sub_tit">
                        <h3>주문/배송 조회</h3>
                    </div>

                    <div class="lnb_content_wrapper_top">
                            <searchWrap class="" />
                    </div>

                    <div class="order-list-container">
                        <div class="order-list-wrap">
                            <div v-for="(item, index) in itemsPurchase" :key="index" class="order-list-item">
                                <div class="order-inquiry">
                                    <nuxt-link to="/" class="order-number">주문번호<span>K0000000001</span></nuxt-link>
                                    <span class="dates">2019-12-17 12:00:00</span>
                                </div>
                                <div class="condition-wrap">
                                    <div class="condition-item">입금대기중</div>
                                    <div class="condition-delivery">롯데택배 123 123 123 123</div>
                                </div>
                                <div class="item-list horizon">
                                    <item-part-thumbnail :item="item.thumbnail" />
                                    <item-part-info :item="item.info" />
                                </div>
                                <div class="btn_right_wrap">
                                    <a class="btn btn-small btn-default btn_sm btn_lg">주문상세 보기</a>
                                </div>
                                <!-- <div class="btn_right_wrap">
                                        <a class="btn btn-small btn-default btn_sm btn_lg only-disabled">교환/반품 불가</a>
                                    </div> -->
                                <!-- <div class="btn_right_wrap">
                                    <a class="btn btn-small btn_sm btn-primary btn_confirm"><span>구매확정</span></a>
                                    <a class="btn btn-small btn-default btn_sm">배송조회</a>
                                    <a class="btn btn-small btn-default btn_sm">교환신청</a>
                                    <a class="btn btn-small btn-default btn_sm">주문취소</a>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <etc-pagination />

                    <!-- 노컨텐츠 -->
                    <etc-no-content txt="주문내역이 없습니다." />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import searchWrap from "~/components/form/period-search.vue"


export default {
    name: 'inquiryOrder',
    components: {
        searchWrap,
    },
    data() {
        return {
            titleMain: "마이페이지",
            titleMain2: "주문/배송 조회",
            itemsPurchase: [
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
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
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
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
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
}
</script>

<style>
@import url('~/assets/css/pages/mypage.css');
</style>