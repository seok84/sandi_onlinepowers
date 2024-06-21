<template>
    <div id="myGrade" class="myInfo">
        <h2 class="title-h2">등급/혜택</h2>
        <div class="inner">
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <div class="gray_box">
                    <span class="user_name">김민수</span>
                    님의 등급은
                    <div class="divider"></div>
                    <span class="grade_ico grade_fam"></span>
                    <span class="grade">FAMILY</span>
                    입니다.
                </div>
                <h3 class="sub_tit">SANDI 등급 혜택</h3>
                <ul class="grade_box_wrapper">
                    <li class="grade_box">
                        <div class="box_top">
                            <span class="grade_ico grade_fam"></span>
                            <p class="grade">FAMILY</p>
                            <p class="sub_desc">50만원 미만 구매 시 (전월 1개월)</p>
                            <dl>
                                <dt>구매 혜택</dt>
                                <dd>구매 시 1% 할인</dd>
                                <dt>쿠폰 혜택</dt>
                                <dd>
                                    <!-- 2,000원 쿠폰 1장(7만원 이상 구매 시 사용)<br /> -->
                                    배송비 쿠폰 1장 (도서산간 제외)</dd>
                            </dl>
                        </div>
                        <div class="divider"></div>
                        <ul class="box_bot">
                            <!-- <li>
                                <a href="javascript:void(0);">
                                    <div class="coupon_img">
                                        <span class="primary">2,000</span>
                                    </div>
                                    <p class="txt">2,000원 쿠폰</p>
                                </a>
                            </li>  -->
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="coupon_img">
                                        <span class="skyblue">+1</span>
                                    </div>
                                    <p class="txt">배송비 쿠폰</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="grade_box">
                        <div class="box_top">
                            <span class="grade_ico grade_gol"></span>
                            <p class="grade">GOLD</p>
                            <p class="sub_desc">50만원 이상 구매 시 (전월 1개월)</p>
                            <dl>
                                <dt>구매 혜택</dt>
                                <dd>구매 시 2% 할인</dd>
                                <dt>쿠폰 혜택</dt>
                                <dd>
                                    2,000원 쿠폰 1장 (7만원 이상 구매 시 사용)<br />
                                    <!-- 3,000원 쿠폰 1장(10만원 이상 구매 시 사용)<br /> -->
                                    배송비 쿠폰 1장 (도서산간 제외)</dd>
                            </dl>
                        </div>
                        <div class="divider"></div>
                        <ul class="box_bot">
                            <!-- <li>
                                <a href="javascript:void(0);">
                                    <div class="coupon_img">
                                        <span class="primary">2,000</span>
                                    </div>
                                    <p class="txt">2,000원 쿠폰</p>
                                </a>
                            </li> -->
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="coupon_img">
                                        <span class="primary">2,000</span>
                                    </div>
                                    <p class="txt">2,000원 쿠폰 1장</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="coupon_img">
                                        <span class="skyblue">+1</span>
                                    </div>
                                    <p class="txt">배송비 쿠폰</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="grade_box">
                        <div class="box_top">
                            <span class="grade_ico grade_vip"></span>
                            <p class="grade">VIP</p>
                            <p class="sub_desc">100만원 이상 구매 시 (전월 1개월)</p>
                            <dl>
                                <dt>구매 혜택</dt>
                                <dd>구매 시 3% 할인</dd>
                                <dt>쿠폰 혜택</dt>
                                <dd>
                                    2,000원 쿠폰 1장 (7만원 이상 구매 시 사용)<br />
                                    3,000원 쿠폰 1장 (10만원 이상 구매 시 사용)<br />
                                    배송비 쿠폰 1장(도서산간 제외)</dd>
                            </dl>
                        </div>
                        <div class="divider"></div>
                        <ul class="box_bot">
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="coupon_img">
                                        <span class="primary">2,000</span>
                                    </div>
                                    <p class="txt">2,000원 쿠폰 1장</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="coupon_img">
                                        <span class="primary">3,000</span>
                                    </div>
                                    <p class="txt">3,000원 쿠폰 1장</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="coupon_img">
                                        <span class="skyblue">+1</span>
                                    </div>
                                    <p class="txt">배송비 쿠폰</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div class="grade_info_wrap">
                    <p class="tit">회원 등급 선정 기준 및 혜택 이용안내</p>
                    <p class="info_dot">총 구매금액은 구매완료 기준입니다.</p>
                    <p class="info_dot">업체발송 등 일부품목은 쿠폰적용에서 제외 될 수 있습니다.</p>
                    <p class="info_dot">등급별 혜택의 종류, 규모, 지급방식 등은 내부정책에 의해 변경될 수 있습니다.</p>
                    <p class="info_dot">구매등급 상향조건은 1개월 이전 구매 상품에 대한 취소 이력이 있는 경우, 오차가 발생할 수 있습니다.</p>


                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'myGrade',
    data() {
        return {
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/mypage.css');
</style>