<template>
  <!-- inflowInfo_tab 클래스 추가 시 마진바텀 값 추가 -->
  <div class="tab_contents inflowInfo_tab">
    <!-- 추천인 아이디 -->
    <div class="form_line bt04">
      <label for="" class="form_title">추천인 아이디</label>
      <input type="text" name="" id="" placeholder="추천인 아이디" class="form_control" minlength="6" value="" >
      <div class="invalid_feedback">
        아이디는 영문 대,소문자, 숫자를 이용하여 6~12자로 입력해주세요.
      </div>
    </div>
    <!-- 가입경로 -->
    <div class="form_line">
      <label for="" class="form_title">가입 경로</label>
      <div class="select_wrap">
        <select name="" id="" class="form_control input_select">
          <option value="" disabled selected>가입 경로를 선택하세요</option>
          <option value="">지인의 추천으로 가입</option>
          <option value="">유튜브</option>
          <option value="">인스타</option>
          <option value="">블로그</option>
        </select>
      </div>
    </div>
  </div>
</template>
<style>
</style>