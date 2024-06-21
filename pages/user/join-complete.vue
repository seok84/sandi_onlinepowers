<template>
    <div id="joinCompleteView" class="userPages" >
        <div class="inner">
            <h2 class="title-h2">회원가입</h2>
            <div class="tab_container">
                <div class="check_animation">
                    <div class="twinkle_wrap">
                        <span class="twinkle twinkle_L"></span>
                        <span class="twinkle twinkle_R"></span>
                    </div>
                    <div class="circle_img">
                        <img src="~/assets/img/common/circle_check_fill.png" alt="">
                    </div>
                </div>
                <div class="txt_wrap">
                    <p><strong class="text_primary">샌디몰</strong> 회원가입 완료</p>
                </div>
                <div class="txt_wrap">
                    <p>고객님에게 가장 필요한 솔루션을<br>제공하겠습니다.</p>
                    <p>지금 바로 만나보세요!</p>
                </div>
                <a href="/user/login">
                    <button class="btn btn-attention">로그인</button>
                </a>
    
            </div>
    
        </div>
    </div>
</template>

<script>
import TitleD1 from "~/components/text/title-default.vue";
import TextD1 from "~/components/text/text-1.vue";

export default {
    name: 'joinCompleteView',
    components: {
        TitleD1,
        TextD1
    },
    data() {
        return {
            text1: `<b>CNT마트</b> 회원가입이</br>모두 끝났어요!`,
            text2: `지금 로그인 하시면 <b>샌디의 다양한 서비스</b>를</br>이용하실 수 있습니다.`
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/users.css');

#joinCompleteView .txt_wrap {
    margin: 0;
    padding: 3rem 0 0;
}

#joinCompleteView .txt_wrap p,
#joinCompleteView .txt_wrap strong {
    font-size: 2rem;
    font-weight: bold;
}

#joinCompleteView .txt_wrap p:last-child {
    margin-top: 3rem;
}

#joinCompleteView .bg_text {
    margin-top: 3rem;
    line-height: 2.5rem;
}
</style>
