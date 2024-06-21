<template>
  <div class="tab_contents">
    <div class="check_container invalid">
      <!-- 모든 약관 동의 -->
      <div class="check_wrap margin_none check_line">
        <div>
          <label>
            <input id="termsAgreeInfo" type="checkbox" name="" class="input_check" />
            <span>모든 약관 동의</span>
          </label>
        </div>
      </div>
      <!-- 이용약관 동의(필수) -->
      <div class="check_wrap margin_none">
        <div>
          <label>
            <input type="checkbox" name="" id="" class="input_check" checked>
            <span>이용약관 동의(필수)</span>
          </label>
        </div>
        <button>약관보기</button>
      </div>
      <!-- 개인정보의 수집 항목과 처리 목적(필수) -->
      <div class="check_wrap margin_none">
        <div>
          <label>
            <input id="termsAgreeInfo" type="checkbox" name="" class="input_check" checked />
            <span>개인정보의 수집 항목과 처리 목적(필수)</span>
          </label>
        </div>
        <button>약관보기</button>
      </div>
      <!-- 개인정보의 수집 항목과 처리 목적(선택) -->
      <div class="check_wrap margin_none">
        <div>
          <label>
            <input id="termsAgreeInfo" type="checkbox" name="" class="input_check" checked />
            <span>개인정보의 수집 항목과 처리 목적(선택)</span>
          </label>
        </div>
        <button>약관보기</button>
      </div>
      <!-- 마케팅 이용약관 동의(선택)  -->
      <div class="check_wrap margin_none">
        <div>
          <label>
            <input id="termsAgreeInfo" type="checkbox" name="" class="input_check" />
            <span>마케팅 이용약관 동의(선택) </span>
          </label>
        </div>
        <button>약관보기</button>
      </div>
      <!-- 공고성 정보 수신 동의(선택) -->
      <div class="check_wrap margin_none">
        <div>
          <label>
            <input id="termsAgreeInfo" type="checkbox" name="" class="input_check" />
            <span>광고성 정보 수신 동의(선택)</span>
          </label>
        </div>
        <button>약관보기</button>
      </div>
      <!-- 피드백 -->
      <div class="invalid_feedback">
        필수 약관에 동의해 주세요.
      </div>
    </div>
  </div>
</template>
<script>
</script>