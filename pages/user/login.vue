<template>
    <div id="loginView" class="userPages">
        <div class="inner">
            <h2 class="title-h2">로그인</h2>
            <div class="tab_container">
                <div class="tab_wrapper">
                    <a href="javascript:void(0)" class="btn btn_tab " :class="{ 'active': isActive }"
                        @click="isActive = !isActive">
                        <span>일반 회원</span>
                    </a>
                    <a href="javascript:void(0)" class="btn btn_tab " :class="{ 'active': !isActive }"
                        @click="isActive = !isActive">
                        <span>사업자 회원</span>
                    </a>
                </div>
                <form class="form_wrapper" v-show="isActive">
                    <div class="form_line">
                        <input type="text" placeholder="아이디를 입력해 주세요." name="loginId" value="" class="form_control"
                            aria-required="true" aria-invalid="false">
                        <div class="invalid_feedback">아이디를 입력해 주세요.</div>
                    </div>
                    <div class="form_line">
                        <input type="password" placeholder="비밀번호를 입력해 주세요." name="password" value="" class="form_control"
                            aria-required="true" aria-invalid="false">
                        <div class="invalid_feedback">비밀번호를 입력해 주세요.</div>
                    </div>

                    <div class="check_wrap">
                        <label>
                            <input type="checkbox" name="" id="" class="input_check" /><span>아이디 저장</span>
                        </label>
                    </div>
                </form>

                <form class="form_wrapper" v-show="!isActive">
                    <!-- 로그인정보 저장 -->

                    <InputD :input-id="'id-001'" :type="'text'" :placeholder="'아이디를 입력해 주세요.'"
                        :invalid-feedback="'아이디는 영문 대,소문자, 숫자를 이용하여 6~12자로 입력해주세요.'" />
                    <InputD :input-id="'pw-001'" :type="'password'" :placeholder="'비밀번호 입력해 주세요.'"
                        :invalid-feedback="'비밀번호는 8~10자리로 입력해주세요.'" />

                    <div class="flex">
                        <div class="check_wrap">
                            <label>
                                <input type="checkbox" name="" id="" class="input_check" /><span>사업자 아이디 저장</span>
                            </label>
                        </div>
                        <!-- 아이디비밀번호찾기 -->
                        <div class="sub_area">
                            <li>
                                <a href="/user/find-id" class="link_findId">아이디</a>
                            </li>
                            <li>
                                <a href="/user/find-pw" class="link_findPw">비밀번호 찾기</a>
                            </li>
                            <li>
                                <a href="/user/join" class="link_join">회원가입</a>
                            </li>
                        </div>

                    </div>
                </form>

                <!-- 버튼 -->
                <button class="btn btn-attention">로그인</button>

                <!-- 소셜 계정 로그인 -->
                <div class="sns_wrapper">
                    <p>소셜 계정 로그인</p>
                    <div class="sns_area">
                        <a href="javascript:void(0);" class="login_kakao"><img src="~/assets/img/user/ico_kakao.svg"
                                alt="login_kakao" /></a>
                        <a href="javascript:void(0);" class="login_naver"><img src="~/assets/img/user/ico_naver.svg"
                                alt="login_naver" /></a>
                        <!-- <a href="javascript:void(0);" class="login_apple"><img src="~/assets/img/user/ico_apple.svg"
                                alt="login_apple" /></a> -->
                    </div>
                </div>



            </div>

        </div>
    </div>
</template>

<script>
//import TabD1 from "~/components/tab/tab-btn.vue";
import InputD from "~/components/form/input-d.vue";
export default {
    name: 'LoginView',
    components: {
        //TitleD1,
        //TabD1,
        InputD,
    },
    data() {
        return {
            isActive: false,
        };
    },
    mounted() { },
}
</script>

<style>
@import url('~/assets/css/pages/users.css');</style>