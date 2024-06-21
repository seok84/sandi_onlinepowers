<template>
    <div id="myPasswordModifyView" class="myInfo">
        <h2 class="title-h2 pc">마이페이지</h2>
        <h2 class="title-h2 mobile">비밀번호 변경</h2>
        <div class="inner">
            <etc-mypage-info />
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-mypage class="general" />
                <!-- mypage-content -->
                <div class="mypage-content">
                    <div class="sub_tit pc">
                        <h3>비밀번호 변경</h3>
                    </div>
                    <div class="tab_container">
                        <form class="form_wrapper">
                            <ul class="form_line_list">
                                <li>
                                    <!-- 기본 비밀번호 -->
                                    <div class="form_line invalid">
                                        <label for="input_id03" class="form_title">기존 비밀번호</label>
                                        <input type="password" name="input_id03" id="input_id03" placeholder="기존 비밀번호"
                                            class="form_control" minlength="6">
                                        <div class="invalid_feedback">
                                            비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <!-- 새 비밀번호 -->
                                    <div class="form_line">
                                        <label for="input_id03" class="form_title">새 비밀번호</label>
                                        <input type="password" name="input_id03" id="input_id03" placeholder="8~16자 이내로 입력하세요"
                                            class="form_control" minlength="6">
                                        <div class="invalid_feedback">
                                            비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <!-- 새 비밀번호 재입력 -->
                                    <div class="form_line">
                                        <label for="input_id03" class="form_title">새 비밀번호 재입력</label>
                                        <input type="password" name="input_id03" id="input_id03" placeholder="비밀번호를 다시 한번 입력하세요"
                                            class="form_control" minlength="6">
                                        <div class="invalid_feedback">
                                            비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <!-- 버튼 -->
                            <div class="btn-wrap">
                                <!-- <button class="btn btn-middle btn-default" id="">취소</button> -->
                                <button class="btn btn_lg btn-primary" id="">저장</button>
                            </div>
                        </form>
                        <div class="form_wrapper">
                            <div class="txt_wrap"><p>비밀번호가 변경되었습니다.</p></div>
                            <div class="btn-wrap">
                                <nuxt-link to="" class="btn btn_lg btn-primary">로그인</nuxt-link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'myPasswordModifyView',
    data() {
        return {
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/mypage.css');</style>