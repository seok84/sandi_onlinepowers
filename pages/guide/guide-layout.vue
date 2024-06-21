<template>
    <div class="guide_contents">
        

        <p class="guide_txt">스크롤 디자인</p>
        <p class="guide_txt02">scrollDesign</p>
        <div class="scrollDesign" style="max-width:35rem; overflow: scroll; white-space: nowrap;">
            <div style="display:inline-block; width:10rem; height:10rem; background-color: red; border-right:2px solid green;">더미</div>
            <div style="display:inline-block; width:10rem; height:10rem; background-color: red; border-right:2px solid green;">더미</div>
            <div style="display:inline-block; width:10rem; height:10rem; background-color: red; border-right:2px solid green;">더미</div>
            <div style="display:inline-block; width:10rem; height:10rem; background-color: red; border-right:2px solid green;">더미</div>
        </div>

        <p class="guide_txt02">scrollNone</p>
        <div class="scrollNone" style="max-width:35rem; overflow: scroll; white-space: nowrap;">
            <div style="display:inline-block; width:10rem; height:10rem; background-color: red; border-right:2px solid green;">더미</div>
            <div style="display:inline-block; width:10rem; height:10rem; background-color: red; border-right:2px solid green;">더미</div>
            <div style="display:inline-block; width:10rem; height:10rem; background-color: red; border-right:2px solid green;">더미</div>
            <div style="display:inline-block; width:10rem; height:10rem; background-color: red; border-right:2px solid green;">더미</div>
        </div>


        <!-- end of guide tab -->
        <!-- 쿠폰 아이템 컴포넌트 -->
        <p class="guide_txt">쿠폰 아이템 : 부모 클래스로 색상 변경</p>
        <ul class="dil_coupon_wrap">
            <li class="dil_coupon_wrap_li">
                <div class="coupon_wrap_top">
                    <p class="coupon_tit">배송비 쿠폰명이 들어오는 자리입니다.</p>
                    <p class="amount"><span>3</span></p>
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

        <p class="guide_txt">쿠폰 아이템 : 부모 클래스로 색상 변경</p>
        <div class="container">
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
            </ul>
        </div>

        <!-- FOOTER -->
        <div id="footer">
            <div class="floating_side_menu">
                <input type="checkbox" name="fold_menu" id="fold_menu" />
                <label for="fold_menu" class="fold_menu">
                    <div class="side_menu_wrap">
                        <a href="javascript:void(0);" class="fm_link fm_basket">
                            <div class="fm_ico">장바구니</div>
                            <span>999</span>
                        </a>
                        <a href="javascript:void(0);" class="fm_link fm_interest">
                            <div class="fm_ico">관심상품</div>
                            <span>845</span>
                        </a>
                        <a href="javascript:void(0);" class="fm_link fm_record">
                            <div class="fm_ico">상품기록</div>
                        </a>
                        <button class="fm_link fm_top_btn" @click="topScroll()">
                            맨 위로
                        </button>
                    </div>
                </label>
            </div>

            <!--  
                  /////////////////////////////////////////////////////////////////////////////
                  floating_side_menu
                  /////////////////////////////////////////////////////////////////////////////
                -->
        </div>




    </div>
</template>

<script>


export default {
    components: {
    },
    layout: "basic",
    methods: {
        topScroll() {
            if (window.pageYOffset > 0) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }
    }

}
</script>

<style>
@import url('~/assets/css/pages/mypage.css');
@import url("~/assets/css/pages/coupon.css");
</style>