<template>
    <div id="terms">
        <h2 class="title-h2">이용약관</h2>
        <div class="inner">
            <div class="form_line select_wrap">
                <select name="" id="select01" class="form_control input_select input_select02">
                    <option value="">이용약관 (시행일자 : 2023.01.01)</option> <!-- 최근순 > 과거순   -->
                    <option value="">2023</option>
                    <option value="">2022</option>
                    <option value="">2021</option>
                </select>
            </div>
            <div class="terms_content">
                <div class="terms_wrap year2021">year2021</div>
                <div class="terms_wrap year2022">year2022</div>
                <div class="terms_wrap year2023">
                    <dl>
                        <dt>제1조(목적)</dt>
                        <dd>이 약관은 샌디에서 운영하는 온라인 쇼핑몰 샌디(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버몰과 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</dd>
                        <dd>※ 「PC통신, 무선등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」</dd>
                    </dl>
                    <dl>
                        <dt>제2조(정의)</dt>
                        <dd>① "몰"이란 샌디가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.</dd>
                        <dd>② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</dd>
                        <dd> ③ ‘회원’이라 함은 "몰"에 개인정보를 제공하여 회원등록을 한 자로서, "몰"의 정보를 지속적으로 제공받으며, "몰"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</dd>
                        <dd> ④ ‘비회원’이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를 말합니다.</dd>
                    </dl>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TitleD1 from "~/components/text/title-default.vue";
import Lnb from "~/components/layout/lnb-customer.vue";
import TitleMore from "~/components/text/title-more.vue";


export default {
    name: 'terms',
    components: {
        TitleD1,
        Lnb,
        TitleMore,
        

    },
    data() {
        return {
            titleMain: "이용약관",
        };
    },
}

/* 

terms_wrap 내부에 해당년도 텍스트를 넣으면 option index 번호에 맞춰 보여지는 스크립트



        var selectTab = document.getElementById("terms_of_service_select"); // select 저장

        var con = document.getElementsByClassName("terms_wrap"); // select 에 대응하는 콘텐츠 요소들 저장


        selectTab.addEventListener("change", function () { // select가 변화할 때 

            var val = selectTab.options[selectTab.selectedIndex].value; // option value값

            for (var i = 0; i < selectTab.length - 1; i++) { // select가 4개, 콘텐츠가 3개이기때문에 length-1 

                con[i].style.display = "none";    // 콘텐츠 모두 숨김

                if (val == i) { // select에 해당하는 콘텐츠가 보여짐

                    con[i].style.display = "block";

                }
            }
        });  



*/

</script>

<style>

@import url('~/assets/css/pages/customer.css');
@import url('~/assets/css/pages/terms.css');


</style>