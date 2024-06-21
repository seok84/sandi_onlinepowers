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
                        <form-period-search />
                        
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
                        </div>
                        
                    </div>

                    <etc-pagination />
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
                        brand: "[G000000]",
                        title: "제목이 노출되는 영역입니다  제목줄 한줄 영역 넘으면...표기",
                        content: "안녕하세요 사이즈가 헷갈려서 관련 문의드립니다.\n포장용기가 200*130*40의 상자인데",
                    },
                },
                {
                    number: "20000001",
                    date: "2023-10-01",
                    type: true,
                    typeText: "간편문의",
                    state: "답변대기중",
                    stateComplete: false,
                    qna: {
                        brand: "[G000000]",
                        title: "제목이 노출되는 영역입니다  제목줄 한줄 영역 넘으면...표기",
                        content: "안녕하세요 사이즈가 헷갈려서 관련 문의드립니다.\n포장용기가 200*130*40의 상자인데",
                    },
                },
            ],
        };
    },
    computed: {
    }
}
</script>

<style>
@import url('~/assets/css/pages/mypage.css');

</style>