<template>
    <div id="inquiryOrderCancel" class="myInfo">
        <h2 class="title-h2 pc">마이페이지</h2>
        <h2 class="title-h2 mobile">취소/반품/교환 신청</h2>
        <div class="inner">
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-mypage class="general" />
                <!-- mypage-content -->
                <div class="mypage-content">
                    <div class="sub_tit">
                        <h3>취소/반품/교환 신청</h3>
                    </div>
                    <div class="lnb_content_wrapper_top">
                        <div class="order_status_wrap">
                            <li class="nav_item" @click="tabIndex = 0" :class="{ 'active': tabIndex === 0 }">
                                <span>취소신청</span>
                            </li>
                            <li class="nav_item" @click="tabIndex = 1" :class="{ 'active': tabIndex === 1 }">
                                <span>반품신청</span>
                            </li>
                            <li class="nav_item" @click="tabIndex = 2" :class="{ 'active': tabIndex === 2 }">
                                <span>교환신청</span>
                            </li>
                        </div>
                    </div>
                    <div v-if="tabIndex === 0" class="tab_pane">
                        <periodSearch />
                        <div class="order-list-container">
                            <div class="order-list-wrap">
                                <div v-for="(item, index) in itemsPurchase" :key="index" class="order-list-item">
                                    <!-- 취소/반품/교환 신청에서는 condition-wrap 노출되지 않음 -->
                                    <!-- <div class="condition-wrap">
                                        <div class="condition-item">입금대기중</div>
                                        <div class="condition-delivery">롯데택배 123 123 123 123</div>
                                    </div> 
                                    -->
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
                    </div>
                    <div v-if="tabIndex === 1" class="tab_pane">
                        <periodSearch />
                        <div class="order-list-container">
                            <div class="order-list-wrap">
                                <div v-for="(item, index) in itemsPurchase" :key="index" class="order-list-item">
                                    <!-- 취소/반품/교환 신청에서는 condition-wrap 노출되지 않음 -->
                                    <!-- <div class="condition-wrap">
                                        <div class="condition-item">입금대기중</div>
                                        <div class="condition-delivery">롯데택배 123 123 123 123</div>
                                    </div> 
                                    -->
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
                    </div>
                    <div v-if="tabIndex === 2" class="tab_pane">
                        <periodSearch />
                        <div class="order-list-container">
                            <div class="order-list-wrap">
                                <div v-for="(item, index) in itemsPurchase" :key="index" class="order-list-item">
                                    <!-- 취소/반품/교환 신청에서는 condition-wrap 노출되지 않음 -->
                                    <!-- <div class="condition-wrap">
                                        <div class="condition-item">입금대기중</div>
                                        <div class="condition-delivery">롯데택배 123 123 123 123</div>
                                    </div> 
                                    -->
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
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import periodSearch from "~/components/form/period-search.vue";


export default {
    name: 'inquiryOrderCancel',
    components: {
        periodSearch
    },
    data() {
        return {
            tabIndex: 0,
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