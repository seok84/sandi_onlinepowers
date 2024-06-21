<template>
    <div id="checkView">
        <div>
            <div class="check_contents">
                <div class="check_logo"><img src="~/assets/img/common/logo.svg" alt="logo"></div>
                <TitleD1 :title-main="titleMain" />
                <ul class="check_txt">
                    <li>
                        <p v-html="checkName"></p>
                    </li>
                    <li>
                        <p v-html="checkDate"></p>
                    </li>
                    <li>
                        <p>개편 홈페이지 오픈 :</p>
                        <p v-html="checkOpen"></p>
                    </li>
                    <li>
                        <p>주요 개편사항</p>
                        <p v-html="checkDesc"></p>
                    </li>
                    <li>
                        <p>새로운 모습의 대상다이브스 홈페이지를 기대해 주세요. 감사합니다.</p>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
import TitleD1 from "~/components/text/title-default.vue";
export default {
    name: 'checkView',
    layout: "basic",
    components: {
        TitleD1,
    },
    data() {
        return {
            titleMain: `대상다이브스 홈페이지 개편으로 인한 서비스 일시 중단 안내`,
            checkName: `서비스 이용 불가 시간<br class="mobile"/>(서버 전환작업)`,
            checkDate: `2023년 5월 17일(수요일) 21:00 ~<br class="mobile"/>2023년 5월 18일(목요일) 07:00`,
            checkOpen: `2023년 5월 18일(목요일) 07:00 이후`,
            checkDesc: `1. 모바일 사용 편리성<br>
                        2. 변경 된 회원등급쿠폰 제도<br>
                        3. 할인 적립 폐지<br>`
        };
    },
}
</script>

<style></style>