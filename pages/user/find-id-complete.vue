<template>
    <div id="findIdCompleteView">
        <div class="inner">
            <h2 class="title-h2">아이디 / 비밀번호 찾기</h2>
            <div class="tab_container">
                <div class="tab_wrapper">
                    <NuxtLink to="/user/find-id" class="btn btn_tab active"><span>아이디 찾기</span></NuxtLink>
                    <NuxtLink to="/user/find-pw" class="btn btn_tab "><span>아이디 비밀번호</span></NuxtLink>
                </div>
                <div class="txt_wrap">
                    <p>김엔티 회원님의 아이디는 <strong>SANDI****</strong> 입니다.</p>
                </div>
                <div class="btn-wrap">
                    <button class="btn btn-middle btn-default">SMS로<span class="divider mobile"></span>전체 아이디
                        받기</button>
                    <button class="btn btn-middle btn-attention">비밀번호 찾기</button>
                    <p class="info_dot">
                        SMS로 전체 아이디 받기시, 등록된 회원정보의 휴대전화번호로 메시지가 발송됩니다.
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    //import TitleD1 from "~/components/text/title-default.vue";
    //import TabD1 from "~/components/tab/tab-btn.vue";
    //import TextD1 from "~/components/text/text-1.vue";

    const usersName = "김엔티"
    const usersId = "SANDI****"

    export default {
        name: 'FindIdCompleteView',
        components: {
            //TitleD1,
            //TabD1,
            //TextD1,
        },
        data() {
            return {
                titleMain: "아이디 / 비밀번호 찾기",
                textD1: `${usersName} 회원님의 아이디는 <b>${usersId}</b> 입니다.`
            };
        },
    }
</script>

<style>
    @import url('~/assets/css/pages/users.css');

    #findIdCompleteView .tab_wrapper {
        margin-bottom: 4rem;
    }

    #findIdCompleteView .txt_wrap b {
        font-weight: 700;
    }

    #findIdCompleteView .btn_feedback {
        bottom: 1rem;
    }
</style>