<template>
    <div id="findPwView" class="userPages" >
        <div class="inner">
            <h2 class="title-h2">아이디/비밀번호 찾기</h2>
            <div class="tab_container">
                <div class="tab_wrapper">
                    <NuxtLink to="/user/find-id" class="btn btn_tab "><span>아이디 찾기</span></NuxtLink>
                    <NuxtLink to="/user/find-pw" class="btn btn_tab active"><span>아이디 비밀번호</span></NuxtLink>
                </div>
    
                <form action="" class="form_wrapper">
                    <InputD :input-id="''" :type="'text'" :placeholder="'아이디'" :invalid-feedback="'아이디는 영문 대,소문자, 숫자를 이용하여 6~12자로 입력해주세요.'" />
                    <InputD :input-id="''" :type="'text'" :placeholder="'이름'" />
                    <div class="form_line input_option">
                        <input type="text" name="" id="" placeholder="휴대폰번호" class="form_control">
                        <button type="button" class="btn_input_add active">인증요청</button>
                    </div>
                    <InputD :input-id="''" :type="'text'" :placeholder="'인증번호 입력'" />
    
                    <a href="javascript:void(0);">
                        <button class="btn btn-attention">임시 비밀번호 발송</button>
                    </a>
                </form>
            </div>
    
        </div>
    </div>
</template>

<script>
//import TitleD1 from "~/components/text/title-default.vue";
//import TabD1 from "~/components/tab/tab-btn.vue";
import InputD from "~/components/form/input-d.vue";
export default {
    name: 'findPwView',
    components: {
        //TitleD1,
        //TabD1,
        InputD
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
