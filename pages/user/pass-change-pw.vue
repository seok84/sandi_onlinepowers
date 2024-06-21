<template>
    <div id="passChangePwView" class="userPages" >
          <h2 class="title-h2">90일 경과 비밀번호<br class="mobile"> 변경하기</h2>
        <div class="tab_container">
            <div class="txt_wrap">
                <p>개인정보 보호를 위해, 비밀번호 변경 후 <br>90일이 지난 후에는 비밀번호 재설정을 권장합니다.</p>
            </div>
            <form action="" class="form_wrapper">
                <ul class="form_line_list">
                    <li>
                        <!-- 기존 비밀번호 -->
                        <div class="form_line invalid">
                          <label for="input_id03" class="form_title">기존 비밀번호</label>
                          <input type="password" name="input_id03" id="input_id03" placeholder="기존 비밀번호" class="form_control" minlength="6">
                          <div class="invalid_feedback">
                            비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                            </div>
                          </div>
                      </li>
                      <li>
                        <!-- 새 비밀번호 -->
                        <div class="form_line">
                          <label for="input_id03" class="form_title">새 비밀번호</label>
                          <input type="password" name="input_id03" id="input_id03" placeholder="비밀번호(8~16자 이내 영문, 숫자, 특수문자)" class="form_control" minlength="6">
                          <div class="invalid_feedback">
                            비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                            </div>
                          </div>
                      </li>
                      <li>
                        <!-- 새 비밀번호 재입력 -->
                        <div class="form_line">
                          <label for="input_id03" class="form_title">새 비밀번호 재입력</label>
                          <input type="password" name="input_id03" id="input_id03" placeholder="새 비밀번호 재입력" class="form_control" minlength="6">
                          <div class="invalid_feedback">
                            비밀먼호를 확인해 주세요
                            </div>
                          </div>
                      </li>
                </ul>
                  <div class="btn-wrap">
                      <button class="btn btn-middle btn-default">연장</button>
                      <button class="btn btn-middle btn-attention">변경</button>
                      <div class="info_dot">[연장하기]  버튼을 누르시면 기존 비밀번호로 유지됩니다.</div>
                    </div>
                </form>
        </div>
    </div>
</template>

<script>
import TitleD1 from "~/components/text/title-default.vue";
import InputLabel from "~/components/form/input-label.vue";
import TextD1 from "~/components/text/text-1.vue";

export default {
    name: 'passChangePwView',
    components: {
        TitleD1,
        InputLabel,
        TextD1
    },
    data() {
        return {
            text1: `개인정보 보호를 위해, 비밀번호 변경 후 </br>90일이 지난 후에는 비밀번호 재설정을 권장합니다.`
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/users.css');




</style>
