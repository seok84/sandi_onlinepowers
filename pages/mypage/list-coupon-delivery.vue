<template>
    <div id="listCouponDelivery" class="myInfo">
        <h2 class="title-h2 pc">마이페이지</h2>
        <h2 class="title-h2 mobile">배송비 쿠폰</h2>
        <div class="inner">
            <etc-mypage-info />
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-mypage class="general" />
                <!-- mypage-content -->
                <div class="mypage-content">
                    <h3 class="sub_tit">배송비 쿠폰</h3>
                    <!-- mypage content start -->
                    <div class="mypage_tab_wrapper">
                        <ul>
                            <li>
                                <div class="nav_item" @click="tabIndex = 0" :class="{ 'active': tabIndex === 0 }">사용가능</div>
                            </li>
                            <li>
                                <div class="nav_item" @click="tabIndex = 1" :class="{ 'active': tabIndex === 1 }">사용완료</div>
                            </li>
                        </ul>
                    </div>
                    <div v-if="tabIndex === 0">
                        <form-filter-select />
                        <ul class="dil_coupon_wrap tab_pane">
                            <li class="dil_coupon_wrap_li">
                                <div class="coupon_wrap_top">
                                    <p class="coupon_tit">배송비 쿠폰명이 들어오는 자리입니다.</p>
                                    <p class="amount">3</p>
                                    <p class="coupon_desc">쿠폰 설명이 들어오는 자리입니다.</p>
                                </div>
                                <div class="coupon_wrap_bot">
                                    <dl>
                                        <dt>적립일</dt>
                                        <dd>2023-01-01</dd>
                                        <dt>소멸예정일</dt>
                                        <dd>2023-01-01</dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="dil_coupon_wrap_li">
                                <div class="coupon_wrap_top">
                                    <p class="coupon_tit">배송비 쿠폰명이 들어오는 자리입니다.</p>
                                    <p class="amount">3</p>
                                    <p class="coupon_desc">쿠폰 설명이 들어오는 자리입니다.</p>
                                </div>
                                <div class="coupon_wrap_bot">
                                    <dl>
                                        <dt>적립일</dt>
                                        <dd>2023-01-01</dd>
                                        <dt>소멸예정일</dt>
                                        <dd>2023-01-01</dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="dil_coupon_wrap_li">
                                <div class="coupon_wrap_top">
                                    <p class="coupon_tit">배송비 쿠폰명이 들어오는 자리입니다.</p>
                                    <p class="amount">3</p>
                                    <p class="coupon_desc">쿠폰 설명이 들어오는 자리입니다.</p>
                                </div>
                                <div class="coupon_wrap_bot">
                                    <dl>
                                        <dt>적립일</dt>
                                        <dd>2023-01-01</dd>
                                        <dt>소멸예정일</dt>
                                        <dd>2023-01-01</dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                        <div class="no_contents">
                            <p></p>
                        </div>
                        <etc-no-content txt="사용 가능한 쿠폰이 없습니다."/>
                        <div class="user_use_desc">
                            <p class="tit">쿠폰 이용안내</p>
                            <p class="info_dot">사용 기간 내에 사용하지 않은 쿠폰은 삭제됩니다.</p>
                            <p class="info_dot">사용 가능 금액 이상으로 주문 시 쿠폰 혜택 적용이 가능합니다.</p>
                            <p class="info_dot">업체배송 상품은 배송비 쿠폰 사용이 불가능 합니다.</p>
                        </div>
                        
                        <etc-pagination />
                    </div>
                    <div v-if="tabIndex === 1">
                        <form-filter-select />
                        <ul class="dil_coupon_wrap tab_pane finished">
                            <li class="dil_coupon_wrap_li">
                                <div class="coupon_wrap_top">
                                    <p class="coupon_tit">배송비 쿠폰명이 들어오는 자리입니다.</p>
                                    <p class="amount">3</p>
                                    <p class="coupon_desc">쿠폰 설명이 들어오는 자리입니다.</p>
                                </div>
                                <div class="coupon_wrap_bot">
                                    <dl>
                                        <dt>적립일</dt>
                                        <dd>2023-01-01</dd>
                                        <dt>소멸예정일</dt>
                                        <dd>2023-01-01</dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="dil_coupon_wrap_li">
                                <div class="coupon_wrap_top">
                                    <p class="coupon_tit">배송비 쿠폰명이 들어오는 자리입니다.</p>
                                    <p class="amount">3</p>
                                    <p class="coupon_desc">쿠폰 설명이 들어오는 자리입니다.</p>
                                </div>
                                <div class="coupon_wrap_bot">
                                    <dl>
                                        <dt>적립일</dt>
                                        <dd>2023-01-01</dd>
                                        <dt>소멸예정일</dt>
                                        <dd>2023-01-01</dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="dil_coupon_wrap_li">
                                <div class="coupon_wrap_top">
                                    <p class="coupon_tit">배송비 쿠폰명이 들어오는 자리입니다.</p>
                                    <p class="amount">3</p>
                                    <p class="coupon_desc">쿠폰 설명이 들어오는 자리입니다.</p>
                                </div>
                                <div class="coupon_wrap_bot">
                                    <dl>
                                        <dt>적립일</dt>
                                        <dd>2023-01-01</dd>
                                        <dt>소멸예정일</dt>
                                        <dd>2023-01-01</dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                        <etc-no-content txt="사용 가능한 쿠폰이 없습니다."/>
                        <div class="user_use_desc">
                            <p class="tit">쿠폰 이용안내</p>
                            <p class="info_dot">사용 기간 내에 사용하지 않은 쿠폰은 삭제됩니다.</p>
                            <p class="info_dot">사용 가능 금액 이상으로 주문 시 쿠폰 혜택 적용이 가능합니다.</p>
                            <p class="info_dot">업체배송 상품은 배송비 쿠폰 사용이 불가능 합니다.</p>
                        </div>
                        <etc-pagination />
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'listCouponDelivery',
    data() {
        return {
            tabIndex: 0,
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/mypage.css');
@import url("~/assets/css/pages/coupon.css");
</style>