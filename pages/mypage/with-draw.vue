<template>
    <div id="withDrawView" class="myInfo">
        <h2 class="title-h2">회원탈퇴</h2>
        <div class="inner">
            <div class="my_info_desc">
                회원탈퇴 시 상품 구매내역, 쿠폰 및 포인트 등 모든 정보가 삭제되며, 회원 서비스를 모두 이용할 수 없습니다.
                <div class="line"></div>
                <p>소멸예정 포인트<b> {{ point }} P</b></p>
            </div>
            <div class="form_wrapper">
                <div class="form_line">
                    <input type="password" name="input_pwd01" id="input_pwd01" placeholder="비밀번호" class="form_control"
                        minlength="8">
                    <div class="invalid_feedback">
                        비밀번호는 8~10자리로 입력해주세요.
                    </div>
                </div>
                <div class="notice_wrap">
                    <ul class="notice_desc">
                        <li>탈퇴 이유</li>
                        <li>그동안 샌디몰을 이용해 주셔서 감사합니다. <br>
                            더 나은 운영을 위한 설문조사 이므로 솔직한 답변 부탁드립니다.</li>
                    </ul>
                </div>
                <div class="radio_wrap">
                    <li>
                        <input type="radio" name="sample" id="radio01" class="input_radio" checked="">
                        <label for="radio01">상품설명이 알기 어렵기 때문에</label>
                    </li>
                    <li> <input type="radio" name="sample" id="radio02" class="input_radio">
                        <label for="radio02">주문 및 문의 시 직원의 대응이 만족스럽지 않아서</label>
                    </li>
                    <li><input type="radio" name="sample" id="radio03" class="input_radio">
                        <label for="radio03">상품의 상태가 좋지 않아서</label>
                    </li>
                    <li><input type="radio" name="sample" id="radio04" class="input_radio">
                        <label for="radio04">상품의 가격이 높아서</label>
                    </li>
                    <li> <input type="radio" name="sample" id="radio05" class="input_radio">
                        <label for="radio05">원하는 상품이 없어서</label>
                    </li>
                    <li><input type="radio" name="sample" id="radio06" class="input_radio">
                        <label for="radio06">기타</label>
                    </li>
                    <li class="on">
                        <textarea name="" id="radio06" cols="30" rows="5" class="comment_input"
                            placeholder="기타사유가 있다면 입력해주세요" maxlength="100"></textarea>
                    </li>
                </div>
                <button class="btn btn-attention margin_bottom">탈퇴</button>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'withDrawView',
    data() {
        return {
            titleMain: "회원탈퇴",
            point: "9,999,999"
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/mypage.css');
</style>