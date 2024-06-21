<template>
    <div id="sleepMemberView" class="myInfo">
        <h2 class="title-h2">휴면회원 해제</h2>
        <div class="inner">
            <div class="my_info_desc">
                회원님의 계정은 개인정보보호를 위해 1년 이상 샌디몰을 이용하지 않은 계정에 속하여 정보통신망 이용 촉진 및 정보보호 등에 관한 법률에 따라 휴면 계정으로 전환되었습니다.
                <br>
                <br>
                샌디몰을 다시 이용하시려면,
                <br>
                하단의 "계속 이용하기" 버튼을 클릭해주세요.
            </div>
            <div class="btn-wrap">
                <button class="btn btn-middle btn-default">휴면계정 유지</button>
                <button class="btn btn-middle btn-attention">계속 이용하기</button>
            </div>
            <div class="notice_wrap">
                <ul class="notice_desc">
                    <li>휴면계정시 제한사항</li>
                    <li class="info_dot">회원의 개인 정보는 별도 분리 하여 보관</li>
                    <li class="info_dot">메일 수신 중지</li>
                </ul>
                <ul class="notice_desc">
                    <li>일반회원 전환시 변경사항</li>
                    <li class="info_dot">개인메일 복원 및 메일수신 복원</li>
                </ul>
                <ul class="notice_desc">
                    <li>샌디몰이용 약관</li>
                    <li class="info_dot">회원이 12개월(365일)이상 로그인을 하지 않는 경우 해당 회원의 아이디는 휴면아이디가 되어 회원 로그인을 비롯한 모든 서비스에 대한 이용이 정지되고, 회사는 휴면
                        아이디의
                        개인 정보를 다른 아이디로 별도로 관리한다.</li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'sleepMemberView',
    data() {
        return {
        };
    },
}
</script>

<style>

@import url('~/assets/css/pages/mypage.css');
</style>