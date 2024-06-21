<template>
    <div id="myInfoCheckView" class="myInfo">
        <h2 class="title-h2 pc">마이페이지</h2>
        <h2 class="title-h2 mobile">내 정보 관리</h2>
        <div class="inner">
            <etc-mypage-info />
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-mypage class="general"/>
                <!-- mypage-content -->
                <div class="mypage-content">
                    <div class="sub_tit pc">
                        <h3>내 정보 관리</h3>
                    </div>
                    <div class="tab_container">
                        <div class="txt_wrap">
                            <p>{{textD1}}</p>
                          </div>
                        <div class="form_line invalid">
                            <input 
                            type="password" name="" id="" 
                            placeholder="비밀번호" 
                            class="form_control" minlength="8" 
                            />
                            <div class="invalid_feedback">
                                비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                              </div>
                        </div>
                            <button class="btn btn-attention">확인</button>
                  
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'myInfoCheckView',
    data() {
        return {
            titleMain: "마이페이지",
            titleMain2: "내 정보 관리",
            textD1:"개인정보를 안전하게 보호하기 위해<br>비밀번호를 다시 한 번 입력해 주세요.",
        };
    },
}
</script>

<style>

@import url('~/assets/css/pages/mypage.css');
</style>