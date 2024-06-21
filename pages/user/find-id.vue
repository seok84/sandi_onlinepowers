<template>
    <div id="findIdView" >
        <div class="inner">
            <h2 class="title-h2">아이디 / 비밀번호 찾기</h2>
            <div class="tab_container">
                <div class="tab_wrapper">
                    <NuxtLink to="/user/find-id" class="btn btn_tab active"><span>아이디 찾기</span></NuxtLink>
                    <NuxtLink to="/user/find-pw" class="btn btn_tab"><span>아이디 비밀번호</span></NuxtLink>
                </div>
    
                <form action="" class="form_wrapper">
    
                    <div class="form_line">
                        <input type="text" name="" id="" placeholder="이름" class="form_control">
                    </div>
                    <div class="form_line input_option">
                        <input type="text" name="" id="" placeholder="휴대폰번호" class="form_control">
                        <button type="button" class="btn_input_add active">인증요청</button>
                    </div>
                    <div class="form_line">
                        <input type="text" name="" id="" placeholder="인증번호 입력" class="form_control">
                    </div>
    
                    <a href="/user/find-id-complete">
                        <button class="btn btn-attention">아이디 찾기</button>
                    </a>
    
                </form>
    
            </div>
    
        </div>
    </div>
</template>

<script>
//import TitleD1 from "~/components/text/title-default.vue";
//import TabD1 from "~/components/tab/tab-btn.vue";
//import TextD from "~/components/text/text-1.vue";

export default {
    name: 'FindIdView',
    components: {
        //TitleD1,
        //TabD1,
        //TextD
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
</style>
