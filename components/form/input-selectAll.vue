<template>
    <div>
        <div class="agree_wrap check_wrap">
            <div class="all_check">
                <div class="check_area ty02">
                    <input type="checkbox" id="all_check" title="선택" name="terms" v-bind:click="selectAll(this)">
                    <label for="all_check">모든 약관 동의</label>
                </div>
            </div>
            <div class="agree_check">
                <div class="check_area ty02">
                    <input type="checkbox" id="agree_check1" title="선택" name="terms">
                    <label for="agree_check1">마케팅이용약관 동의 <span>(선택)</span></label>
                </div>
                <a href="javascript:void(0);" class="terms_link">약관보기</a>
            </div>
            <div class="agree_check">
                <div class="check_area ty02">
                    <input type="checkbox" id="agree_check2" title="선택" name="terms">
                    <label for="agree_check2">이용약관에 동의 <span>(필수)</span></label>
                </div>
                <a href="javascript:void(0);" class="terms_link">약관보기</a>
            </div>
            <div class="agree_check">
                <div class="check_area ty02">
                    <input type="checkbox" id="agree_check3" title="선택" name="terms">
                    <label for="agree_check3">개인정보 수집 · 이용목적 및<span class="divider"></span> 항목에 동의 <span>(필수)</span></label>
                </div>
                <a href="javascript:void(0);" class="terms_link">약관보기</a>
            </div>
            <div class="invalid-feedback">필수 약관에 동의해주세요</div>
            <div class="btn-group">
                <a href="javascript:void(0);" class="btn btn_lg btn-primary">가입하기</a>
            </div>

            <div class="btn-group">
                <a href="javascript:void(0);" class="btn btn_lg btn-primary readonly">가입하기</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'selectAll',
    methods: {

        selectAll(selectAll) {
            const checkboxes = document.getElementsByName("terms");

            checkboxes.forEach((checkbox) => {
                checkbox.checked = selectAll.checked;
            });
        }
    }
}
</script>

<style>

</style>