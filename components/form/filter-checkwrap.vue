<template>
  <div class="condition_filter_wrap">
    <div class="right_wrap">
      <button type="button" class="ico_inner " id="filterBtn" @click="filter = !filter">
        <span class="ico ico_filter">조건필터</span>
      </button>
    </div>
    <div class="filter_wrap" :class="{ open: filter == true }">
      <div class="filter_header">
        <p class="tit">조건필터</p>
        <button class="btn_close" @click="filter = false">닫기</button>
      </div>

      <div class="filter_box_wrapper">
        <div class="filter_box">
          <div class="filter_tit">
            <h4>온스</h4>
          </div>
          <ul>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>4온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>5온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>6.5온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>8온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>10온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>12온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>13온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>16온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>4온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>5온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>6.5온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>8온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>10온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>12온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>13온스</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>16온스</span>
                </label>
              </div>
            </li>

          </ul>
        </div>
        <div class="filter_box">
          <div class="filter_tit">
            <h4>직경(너비)</h4>
          </div>
          <ul>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>63Ø</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>63Ø</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>6.63Ø</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>63Ø</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>163Ø</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>163Ø</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>163Ø</span>
                </label>
              </div>
            </li>
            <li>
              <div class="check_wrap">
                <label>
                  <input type="checkbox" name="" id="" class="input_check"><span>163Ø</span>
                </label>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <div class="right_wrap">
        <div class="ico_inner" id="resetBtn">
          <button class="ico ico_reset">초기화</button>
        </div>
        <div class="ico_inner" id="applyBtn">
          <button class="ico btn-primary mobile">적용</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      filter: false,
    }
  },
}
</script>

<style>
@media (max-width:480px) {}
</style>