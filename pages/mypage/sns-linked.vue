<template>
    <div id="snsLinkedView" class="myInfo">
        <h2 class="title-h2 pc">마이페이지</h2>
        <h2 class="title-h2 mobile">SNS 연동관리</h2>
        <div class="inner">
            <etc-mypage-info />
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-mypage class="general"/>
                <!-- mypage-content -->
                <div class="mypage-content">
                    <div class="sub_tit">
                        <h3>SNS 연동관리</h3>
                    </div>
                    <ul class="snsLink_wrap">
                        <li>
                            <div>
                                <span></span>
                                <div>
                                    <p>카카오</p>
                                    <p>{{ date.kakao }}</p>
                                </div>
                            </div>
                            <div class="wrap_btn_slide">
                                <input type="checkbox" name="btn_slide01" id="btn_slide01"
                                    class="btn_slide btn_slide01">
                                <label for="btn_slide01" class="btn_slide btn_slide01">버튼01</label>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span></span>
                                <div>
                                    <p>네이버</p>
                                    <p>{{ date.naver }}</p>
                                </div>

                            </div>
                            <div class="wrap_btn_slide">
                                <input type="checkbox" name="btn_slide01" id="btn_slide01"
                                    class="btn_slide btn_slide01">
                                <label for="btn_slide01" class="btn_slide btn_slide01">버튼01</label>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span></span>
                                <div>
                                    <p>애플</p>
                                    <p>{{ date.apple }}</p>
                                </div>

                            </div>
                            <div class="wrap_btn_slide">
                                <input type="checkbox" name="btn_slide01" id="btn_slide01"
                                    class="btn_slide btn_slide01">
                                    <label for="btn_slide01"
                                    class="btn_slide btn_slide01">버튼01</label>
                            </div>
                        </li>

                    </ul>
                    <div class="sns_txt">
                        <p class="info_dot">SNS연결 해제는 'SNS 연동관리' 메뉴 또는 각 SNS 설정에서 가능합니다.</p>
                        <p class="info_dot">네이버 / 카카오/ 애플 로그인을 할 때 각 SNS 플랫폼 인증 절차가 필요합니다.</p>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
<script>export default {
    name: '',
    data() {
        return {
            titleMain: "마이페이지",
            titleMain2: "SNS 연동관리",
            date: {
                kakao: "2023-01-31",
                apple: "미연동",
                naver: "미연동",
            }
        };
    },
}
</script>

<style>

@import url('~/assets/css/pages/mypage.css');
</style>