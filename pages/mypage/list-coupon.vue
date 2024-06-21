<template>
    <div id="listCoupon" class="myInfo">
        <h2 class="title-h2 pc">마이페이지</h2>
        <h2 class="title-h2 mobile">배송비 쿠폰</h2>
        <div class="inner">
            <etc-mypage-info />
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-mypage class="general" />
                <!-- mypage-content -->
                <div class="mypage-content">
                    <h3 class="sub_tit">쿠폰</h3>
                    <!-- mypage content start -->
                    <!-- ## 사용가능 쿠폰 -->
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
                    <div class="btn_right_wrap">
                        <!-- 모든 쿠폰 다운 -->
                        <div class="btn btn-small btn_lm btn-primary coupon_down">
                            <span>모든 쿠폰 다운</span>
                            <img src="~/assets/img/common/ico_down.svg">
                        </div>
                        <!-- 다운로드가능 쿠폰 컴포넌트 위치 -->
                        <downloadCoupon />
                        <!-- 오프라인쿠폰등록 -->
                        <div class="btn btn-small btn_lm btn-default" @click="hideWrapOpen($event)">
                            <span>오프라인쿠폰등록</span>
                        </div>
                        <div class="offline_coupon_regist hide">
                            <div class="inquiry_wrapper type02">
                                <form action="">
                                    <div class="form_inner">
                                        <div class="search_area">
                                            <input type="text" class="form_control" placeholder="'-'없이 쿠폰 번호를 입력하세요"
                                                title="'-'없이 쿠폰 번호를 입력하세요">
                                        </div>
                                        <button type="button" class="btn btn-small btn_accent btn-black">
                                            등록
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div v-if="tabIndex === 0" class="tab_pane">
                        <form-filter-select />
                        <ul class="coupon_wrap">
                            <li class="coupon_wrap_li coupon_product_lg">
                                <div class="coupon_wrap_top">
                                    <p class="coupon_tit">SANDI 상품쿠폰</p>
                                    <p class="coupon_sub">홈페이지 리뉴얼 3,000원 쿠폰 증정</p>
                                </div>
                                <div class="coupon_wrap_bot">
                                    <div class="coupon_price_wrapper">
                                        <p class="coupon_price"><span>10,000</span>원</p>
                                        <a href="javascript:void(0);" class="linked_arr">적용상품보기</a>
                                    </div>
                                </div>
                                <div class="coupon_desc_wraper">
                                    <p class="coupon_desc">50,000원 이상 구매시 사용가능</p>
                                    <p class="coupon_desc">2022-09-28 ~ 2022-10-31</p>
                                    <dl class="expired">
                                        <dt>만료일</dt>
                                        <dd>2022-10-31</dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="coupon_wrap_li coupon_product_lg">
                                <div class="coupon_wrap_top">
                                    <p class="coupon_tit">SANDI 상품쿠폰</p>
                                    <p class="coupon_sub">홈페이지 리뉴얼 3,000원 쿠폰 증정</p>
                                </div>
                                <div class="coupon_wrap_bot">
                                    <div class="coupon_price_wrapper">
                                        <p class="coupon_price"><span>10,000</span>원</p>
                                        <a href="javascript:void(0);" class="linked_arr">적용상품보기</a>
                                    </div>
                                </div>
                                <div class="coupon_desc_wraper">
                                    <p class="coupon_desc">50,000원 이상 구매시 사용가능</p>
                                    <p class="coupon_desc">2022-09-28 ~ 2022-10-31</p>
                                    <dl class="expired">
                                        <dt>만료일</dt>
                                        <dd>2022-10-31</dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="coupon_wrap_li coupon_product_lg">
                                <div class="coupon_wrap_top">
                                    <p class="coupon_tit">
                                        쿠폰 두줄 확인 쿠폰 두줄 확인 쿠폰 두줄 확인 쿠폰 두줄 확인 쿠폰
                                        두줄 확인
                                    </p>
                                    <p class="coupon_sub">홈페이지 리뉴얼 3,000원 쿠폰 증정</p>
                                </div>
                                <div class="coupon_wrap_bot">
                                    <div class="coupon_price_wrapper">
                                        <p class="coupon_price"><span>10,000</span>원</p>
                                        <a href="javascript:void(0);" class="linked_arr">적용상품보기</a>
                                    </div>
                                </div>
                                <div class="coupon_desc_wraper">
                                    <p class="coupon_desc">50,000원 이상 구매시 사용가능</p>
                                    <p class="coupon_desc">2022-09-28 ~ 2022-10-31</p>
                                    <dl class="expired">
                                        <dt>만료일</dt>
                                        <dd>2022-10-31</dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="coupon_wrap_li coupon_product_lg">
                                <div class="coupon_wrap_top">
                                    <p class="coupon_tit">
                                        쿠폰 두줄 확인 쿠폰 두줄 확인 쿠폰 두줄 확인 쿠폰 두줄 확인 쿠폰
                                        두줄 확인
                                    </p>
                                    <p class="coupon_sub">홈페이지 리뉴얼 3,000원 쿠폰 증정</p>
                                </div>
                                <div class="coupon_wrap_bot">
                                    <div class="coupon_price_wrapper">
                                        <p class="coupon_price"><span>10,000</span>원</p>
                                        <a href="javascript:void(0);" class="linked_arr">적용상품보기</a>
                                    </div>
                                </div>
                                <div class="coupon_desc_wraper">
                                    <p class="coupon_desc">50,000원 이상 구매시 사용가능</p>
                                    <p class="coupon_desc">2022-09-28 ~ 2022-10-31</p>
                                    <dl class="expired">
                                        <dt>만료일</dt>
                                        <dd>2022-10-31</dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                        <etc-no-content txt="사용 가능한 쿠폰이 없습니다." />
                        <div class="user_use_desc">
                            <p class="tit">쿠폰 이용안내</p>
                            <p class="info_dot">사용 기간 내에 사용하지 않은 쿠폰은 삭제됩니다.</p>
                            <p class="info_dot">사용 가능 금액 이상으로 주문 시 쿠폰 혜택 적용이 가능합니다.</p>
                        </div>
                        <etc-pagination />
                    </div>

                    <div v-if="tabIndex === 1" class="tab_pane">
                        <form-filter-select />
                        <ul class="coupon_wrap">
                            <li class="coupon_wrap_li coupon_product_lg deact">
                                <div class="coupon_wrap_top">
                                    <p class="coupon_tit">SANDI 상품쿠폰</p>
                                    <p class="coupon_sub">홈페이지 리뉴얼 3,000원 쿠폰 증정</p>
                                </div>
                                <div class="coupon_wrap_bot">
                                    <div class="coupon_price_wrapper">
                                        <p class="coupon_price"><span>10,000</span>원</p>
                                        <a href="javascript:void(0);" class="linked_arr">적용상품보기</a>
                                    </div>
                                </div>
                                <div class="coupon_desc_wraper">
                                    <p class="coupon_desc">50,000원 이상 구매시 사용가능</p>
                                    <p class="coupon_desc">2022-09-28 ~ 2022-10-31</p>
                                    <dl class="expired">
                                        <dt>만료일</dt>
                                        <dd>2022-10-31</dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="coupon_wrap_li coupon_product_lg deact">
                                <div class="coupon_wrap_top">
                                    <p class="coupon_tit">SANDI 상품쿠폰</p>
                                    <p class="coupon_sub">홈페이지 리뉴얼 3,000원 쿠폰 증정</p>
                                </div>
                                <div class="coupon_wrap_bot">
                                    <div class="coupon_price_wrapper">
                                        <p class="coupon_price"><span>10,000</span>원</p>
                                        <a href="javascript:void(0);" class="linked_arr">적용상품보기</a>
                                    </div>
                                </div>
                                <div class="coupon_desc_wraper">
                                    <p class="coupon_desc">50,000원 이상 구매시 사용가능</p>
                                    <p class="coupon_desc">2022-09-28 ~ 2022-10-31</p>
                                    <dl class="expired">
                                        <dt>만료일</dt>
                                        <dd>2022-10-31</dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="coupon_wrap_li coupon_product_lg deact">
                                <div class="coupon_wrap_top">
                                    <p class="coupon_tit">
                                        쿠폰 두줄 확인 쿠폰 두줄 확인 쿠폰 두줄 확인 쿠폰 두줄 확인 쿠폰
                                        두줄 확인
                                    </p>
                                    <p class="coupon_sub">홈페이지 리뉴얼 3,000원 쿠폰 증정</p>
                                </div>
                                <div class="coupon_wrap_bot">
                                    <div class="coupon_price_wrapper">
                                        <p class="coupon_price"><span>10,000</span>원</p>
                                        <a href="javascript:void(0);" class="linked_arr">적용상품보기</a>
                                    </div>
                                </div>
                                <div class="coupon_desc_wraper">
                                    <p class="coupon_desc">50,000원 이상 구매시 사용가능</p>
                                    <p class="coupon_desc">2022-09-28 ~ 2022-10-31</p>
                                    <dl class="expired">
                                        <dt>만료일</dt>
                                        <dd>2022-10-31</dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="coupon_wrap_li coupon_product_lg deact">
                                <div class="coupon_wrap_top">
                                    <p class="coupon_tit">
                                        쿠폰 두줄 확인 쿠폰 두줄 확인 쿠폰 두줄 확인 쿠폰 두줄 확인 쿠폰
                                        두줄 확인
                                    </p>
                                    <p class="coupon_sub">홈페이지 리뉴얼 3,000원 쿠폰 증정</p>
                                </div>
                                <div class="coupon_wrap_bot">
                                    <div class="coupon_price_wrapper">
                                        <p class="coupon_price"><span>10,000</span>원</p>
                                        <a href="javascript:void(0);" class="linked_arr">적용상품보기</a>
                                    </div>
                                </div>
                                <div class="coupon_desc_wraper">
                                    <p class="coupon_desc">50,000원 이상 구매시 사용가능</p>
                                    <p class="coupon_desc">2022-09-28 ~ 2022-10-31</p>
                                    <dl class="expired">
                                        <dt>만료일</dt>
                                        <dd>2022-10-31</dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                        <etc-no-content txt="사용 가능한 쿠폰이 없습니다." />
                        <div class="user_use_desc">
                            <p class="tit">쿠폰 이용안내</p>
                            <p class="info_dot">사용 기간 내에 사용하지 않은 쿠폰은 삭제됩니다.</p>
                            <p class="info_dot">사용 가능 금액 이상으로 주문 시 쿠폰 혜택 적용이 가능합니다.</p>
                        </div>
                        <etc-pagination />
                    </div>
                    <!-- mypage content end -->

                </div>
            </div>
        </div>

    </div>
</template>
<script>
import downloadCoupon from "~/components/popup/download-coupon.vue";


export default {
    name: 'listCoupon',
    components: {
        downloadCoupon,

    },
    data() {
        return {
            tabIndex: 0,
        };
    },
    mounted() {

    },
    methods: {
        hideWrapOpen() {

            let hideWrap = document.querySelector(".offline_coupon_regist");
            hideWrap.classList.toggle('hide');

            return false
        },
    }

}
</script>

<style>
@import url('~/assets/css/pages/mypage.css');
@import url("~/assets/css/pages/coupon.css");
</style>