<template>
    <div id="findPwCompleteView"  class="userPages" >
        <div class="inner">
            <h2 class="title-h2">아이디 / 비밀번호 찾기</h2>
            <div class="tab_container">
                <div class="tab_wrapper">
                    <NuxtLink to="/user/find-id" class="btn btn_tab "><span>아이디 찾기</span></NuxtLink>
                    <NuxtLink to="/user/find-pw" class="btn btn_tab active"><span>아이디 비밀번호</span></NuxtLink>
                </div>
                <div class="txt_wrap">
                    <p>임시 비밀번호가 발송 되었습니다.</p>
                </div>
                <NuxtLink to="/user/login">
                    <button class="btn btn-attention">로그인</button>
                </NuxtLink>
            </div>
    
        </div>
    </div>
</template>

<script>
import TitleD1 from "~/components/text/title-default.vue";
import TabD1 from "~/components/tab/tab-btn.vue";
import TextD1 from "~/components/text/text-1.vue";

export default {
    name: 'FindPwCompleteView',
    components: {
        TitleD1,
        TabD1,
        TextD1,
    },
    data() {
        return {
            titleMain: "아이디 / 비밀번호 찾기",
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/users.css');
#findPwCompleteView .tab_wrapper {
    margin-bottom: 4rem;
}
</style>
