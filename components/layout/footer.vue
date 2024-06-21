<template>
    <footer id="footer-ui">
        <div class="footer-menu">
            <!-- pc -->
            <div class="inner pc">
                <a href="https://www.sni.co.kr/fm/main.do" target="_blank">회사소개</a>
                <nuxt-link to="/policy/privacy"><b>개인정보처리방침</b></nuxt-link>
                <nuxt-link to="/">이용약관</nuxt-link>
                <nuxt-link to="/">제휴안내</nuxt-link>
                <nuxt-link to="/">공지사항</nuxt-link>
                <!-- pc familySite -->
                <select name="familySite" class="drop-down pc">
                    <option value="" selected disabled hidden class="drop-tit">FAMILY SITE</option>
                    <option value="https://www.sni.co.kr/fm/main.do">S&I Corp</option>
                    <option value="https://customer.sni.co.kr/FMPI/index.html">엣지 고객사시스템</option>
                    <option value="https://partner.sni.co.kr/FMPI/index.html">엣지 파트너사이트</option>
                    <option value="https://www.dreamnuri.co.kr">드림누리</option>
                </select>
            </div>
        </div>

        <div class="footer-area">
            <div class="col left">
                <div class="brand-area">
                    <div class="brand">
                        <img src="@/assets/img/common/brand.png" alt="SANDI">
                    </div>
                    <!-- mobile familySite -->
                    <select name="familySite" class="drop-down mobile">
                        <option value="" selected disabled hidden class="drop-tit">FAMILY SITE</option>
                        <option value="https://www.sni.co.kr/fm/main.do">S&I Corp</option>
                        <option value="https://customer.sni.co.kr/FMPI/index.html">엣지 고객사시스템</option>
                        <option value="https://partner.sni.co.kr/FMPI/index.html">엣지 파트너사이트</option>
                        <option value="https://www.dreamnuri.co.kr">드림누리</option>
                    </select>
                </div>
                <div class="cs-area">
                    <p class="cs-tel">고객센터 <a href="tel:1661-1119"><strong>1661-1119</strong></a></p>
                    <p class="cs-time">상담시간 : <span>평일 09:00 ~ 18:00(주말,공휴일 휴무) / <br class="mobile">점심시간 12:00~13:00</span></p>
                </div>
                <div class="foot-link">
                    <nuxt-link to="/" type="button">FAQ</nuxt-link>
                    <nuxt-link to="/" type="button">Q&amp;A</nuxt-link>
                </div>
            </div>

            <div class="col right">
                <p class="seller">S&I Corp.</p>
                <p class="address-area">
                    <!-- <span class="company">(주)온라인파워스</span> -->
                    <span class="owner">대표이사 : 형원준</span>
                    <span class="address">서울특별시 강서구 마곡중앙로 150, D&amp;O 강서사옥</span>
                </p>

                <p class="business-area">
                    <span class="business-number">사업자등록번호 : 707-86-02404</span>
                    <span class="sell-number">통신판매번호 : 0000-00000</span> <br class="mobile">
                    <nuxt-link to="/" class="footer_link">사업자 정보확인</nuxt-link>
                    <!-- <span class="business">건강기능식품 판매업신고 : 구로 제<b>514</b>호</span> -->
                </p>

                <p class="cs-center">
                    <span class="cs-tel">고객센터 : <a href="tel:070-7781-0200">070-7781-0200</a></span>
                    <!-- <span class="security-manager">개인정보보호 관리자 : 송영훈</span> <br class="mobile"> -->
                    <span class="security-managermail">E-mail : <a href="mailto: 0000@0000.000">0000@0000.000</a></span><br
                        class="pc">
                    <nuxt-link to="" class="footer_link">서비스 가입사실 확인</nuxt-link>
                </p>

                <p class="copyright">Copyright© S&amp;I Corp. All Rights Reserved.</p>

            </div>

        </div>

    </footer>
</template>
<script>
export default {
    name: 'FooterUi',
}
</script>
<style>
@import url('~/assets/css/components/layout/footer.css');



@media (max-width: 1194px) {}

@media (min-width: 768px) {

}

@media (max-width: 768px) {

}

@media (max-width: 480px) {}
</style>