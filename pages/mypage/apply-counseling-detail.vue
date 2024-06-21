<template>
    <div class="myInfo">
        <TitleD1 :titleMain="titleMain" />
        <div class="inner">
            <etc-mypage-info />
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-mypage class="general" />
                <!-- mypage-content -->
                <div class="mypage-content">
                    <h3 class="sub_tit">
                        <nuxt-link to="/" class="linked_arr">견적문의 상세</nuxt-link>
                    </h3>

                    <div class="counsel-area">
                    
                        <div class="list" v-for="(counselData, index) in counselDatas" :key="index">
                            <div class="counsel-title">
                                <span class="title" :class="{easy: counselData.type == true}">{{ counselData.typeText }}</span>
                                <span class="num">{{ counselData.number }}</span>
                                <span class="date">{{ counselData.date }}</span>
                            </div>
                            <div class="counsel-state" :class="{ready: counselData.stateComplete == false}">{{ counselData.state }}</div>
                            <div class="counsel-content">
                                <div class="goods">
                                    <span class="brand">{{ counselData.qna.brand }}</span>
                                    <span class="qna">{{ counselData.qna.title }}</span>
                                </div>
                                <div class="content">{{ counselData.qna.content }}</div>
                            </div>

                            <div class="chat-box">
                                <div class="row sandi">
                                    <div class="bubble">
                                        <h3>SANDI</h3>
                                        <p class="text">{{ counselData.chat.sandi }}</p>
                                    </div>
                                </div>
                                
                                <div class="row user">
                                    <div class="bubble">
                                        <p class="text">{{ counselData.chat.sandi }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="message-area">
                                <textarea placeholder="메세지를 입력하세요" class="message-input" required="required"></textarea>
                                <button type="button" class="btn-submit">전송</button>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div class="btn-area">
                        <button type="button" class="btn btn-primary">목록으로</button>
                    </div>
                    <!-- 배너 -->
                    <!-- <div class="add_banner">
                        <img src="~/static/img/mypage/banner.png" alt="">
                    </div> -->
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import TitleD1 from "~/components/text/title-default.vue";
import MypageLnb from "~/components/layout/lnb-mypage.vue";

import TitleMore from "~/components/text/title-more.vue";

export default {
    name: 'mypageIndex',
    components: {
        TitleD1,
        MypageLnb,

        TitleMore,
    },
    data() {
        return {
            titleMain: "마이페이지",
            counselDatas: [
                {
                    number: "20000000",
                    date: "2023-10-01",
                    type: false,
                    typeText: "견적문의",
                    state: "답변완료",
                    stateComplete: true,
                    qna: {
                        brand: "브랜드명",
                        title: "제목이 노출되는 영역입니다.\n두 줄인 경우 제목이 노출되는 영역입니다",
                        content: "안녕하세요 사이즈가 헷갈려서 관련 문의드립니다.\n포장용기가 200*130*40의 상자인데",
                    },
                    chat: {
                        sandi: "안녕하세요 고객님. SANDI 고객센터 입니다.\n저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.\n문의하실 내용이 있으신가요?",
                        user: "안녕하세요.\n회사 청소 견적문의를 드리고 싶습니다.\n규모는 약 100평 정도이며, 견적을 어떻게 내는지 조건등이 다양할 것 같아서요.\n견적 낼 때 체크할 수 있는 것들이 있을까요?"
                    }
                },
            ],
        };
    },
    computed: {
        // 줄바꿈 처리
        counselData() {
            return this.counselDatas.split("\n").join("<br>")
        }
    }
}
</script>

<style>
@import url('~/assets/css/pages/mypage.css');


@media (max-width: 768px) {
    /* .floating_side_menu {
        bottom: 13rem;
    } */

}



</style>