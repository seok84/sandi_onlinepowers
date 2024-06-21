<template>
    <div class="pc">
        <!-- 일반 -->
        <div class="lnb_wrapper">
            <p class="lnb_sub_tit">쇼핑정보</p>
            <ul class="info_sub_tit">
                <li><nuxt-link to="/mypage/inquiry-order">주문/배송조회</nuxt-link></li>
                <!-- <li><nuxt-link to="/mypage/inquiry-order-details">주문/배송조회 상세</nuxt-link></li> -->
                <li><nuxt-link to="/mypage/inquiry-order-cancel">취소/반품/교환 신청</nuxt-link></li>
                <li><nuxt-link to="/mypage/my-interest">관심상품</nuxt-link></li>
                <li><nuxt-link to="/mypage/product-latest">최근 본 상품</nuxt-link></li>
                <li><nuxt-link to="/mypage/my-address-book">배송주소록 관리</nuxt-link></li>
            </ul>
            <p class="lnb_sub_tit">쇼핑혜택</p>
            <ul class="info_sub_tit">
                <li><nuxt-link to="/mypage/list-point">포인트</nuxt-link></li>
                <li><nuxt-link to="/mypage/list-coupon">쿠폰</nuxt-link></li>
                <li><nuxt-link to="/mypage/list-coupon-delivery">배송비 쿠폰</nuxt-link></li>
            </ul>
            <p class="lnb_sub_tit">활동정보</p>
            <ul class="info_sub_tit">
                <li><nuxt-link to="/mypage/my-info-check">내 정보 관리</nuxt-link></li> <!-- 회원정보확인 -->
                <!-- <li><nuxt-link to="/mypage/my-info-edit">내 정보 관리 - 회원정보</nuxt-link></li> -->
                <li><nuxt-link to="/mypage/my-password-modify">비밀번호 변경</nuxt-link></li>
                <li><nuxt-link to="/mypage/sns-linked">sns 연동설정</nuxt-link></li>
                <li><nuxt-link to="/mypage/">상품문의</nuxt-link></li>
                <li><nuxt-link to="/mypage/my-usage-review">이용후기</nuxt-link></li>
                <li><nuxt-link to="/mypage/apply-counseling">견적문의</nuxt-link></li>
                <!-- <li><nuxt-link to="/mypage/sleep-member">휴면회원 해제</nuxt-link></li>
                <li><nuxt-link to="/mypage/with-draw">회원탈퇴</nuxt-link></li> -->
                <li>
                    <NuxtLink to="/customer/inquiry">Q&A</NuxtLink>
                </li>

            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'LNB',
}
</script>