<template>
    <div class="modal modal_basic modal_m modal_full modal_table" id="basicTableView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'판매사(입점업체)'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div>
                        <p v-for="(storeTitle, index) in storeList" :key="'store-' + index">{{ storeTitle }}</p>

                    </div>
                </div>

            </div>
            <popupButton class="modal_close_w" />
        </div>
    </div>
</template>

<script>
import popupHead from "~/components/popup/part/popup-basic-head.vue";
import popupButton from "~/components/popup/part/popup-basic-button.vue";


export default {
    name: 'basicModalTable',
    components: {
        popupHead,
        popupButton,
    },
    data() {
        return {
            storeList: [
                '(유)돌코리아',
                '(주)경진기업',
                '(주)고려에프앤비',
                '(주)기센코리아',
                '(주)꼬미다',
                '농업회사법인',
                '(주)네니아',
                '(주)다농원',
                '(주)대두식품서울지점',
                '대디스팜',
                '(주)대성산업',
                '(주)대진엠에스',
                '(주)더베러푸드',
                '(주)동서',
                '(주)동아데코',
                '(주)리쉬티코리아',
                '(주)마미손파트너스',
                '(주)매직랩',
                '메테오라서비스',
                '(주)바다물류',
                '(주)베오베',
                '(주)베이크플러스',
                '(주)보보에프엔지',
                '(주)빅닷',
                '(주)삼경엠앤에스',
                '(주)삼호유리',
                '(주)서경',
                '(주)서일',
                '(주)선인',
                '(주)성신상사',
                '(주)성유엔터프라이즈',
                '(주)세광케미칼',
                '(주)세니젠',
                '(주)세인',
                '(주)셀푸드인터내셔널',
                '(주)솔루션푸드',
                '(주)슈가트리',
                '신서울FNB',
                '(주)신촌스텐',
                '(주)신흥식품',
                '(주)쏘클',
                '(주)씨큐브',
                '(주)아로마빌커피',
                '(주)아름다운세상',
                '(주)아모레퍼시픽',
                '(주)아베',
                '(주)아스펜엔터프라이즈',
                '(주)아스펜코리아',
                '(주)아워홈안산영업소',
                '(주)안드레아플러스',
                '(주)안진통상',
                '(주)애니원에프앤씨',
                '(주)에스앤에치식품',
                '주식회사 에스에이치글로컬',
                '(주)에스에이치에스',
                '(주)에이에프프라텍',
                '(주)에이치알엘',
                '(주)에이치앤엔코퍼레이션',
                '(주)에프앤지코리아(F&G KOREA)',
                '(주)엔티티웍스',
                '에스엔에스(주)',
                '(주)오뚜기',
                '(주)오트리푸드',
                '(주)올밀크에프앤비',
                '(주)와드',
                '(주)우리꽃연구소',
                '(주)우신인터내셔널',
                '우주드라이아이스',
                '(주)유니켐',
                '(주)유아이F&C',
                '(주)유앤아이엔젤스',
                '(주)이룸푸드시스템',
                '(주)이앤아이인터내셔날',
                '(주)인터비앤에프',
                '(주)인터웍스',
                '(주)일성푸드텍',
                '(주)일화',
                '(주)쟈뎅',
                '(주)정은유통',
                '(주)제니스코트레이딩',
                '(주)제원인터내쇼날',
                '(주)제이씨인터내셔널',
                '(주)젤스타',
                '(주)중앙훼밀리',
                '(주)지노네트웍스',
                '(주)카야코리아',
                '(주)커피앤칵테일',
                '(주)케이알패키지',
                '(주)코디아',
                '(주)코스트코 코리아',
                '(주)크라운제과 파주영업소',
                '(주)킴스에프엔디',
                '(주)타노인터내셔날',
                '(주)태영트리플',
                '(주)투고팩',
                '(주) 티원',

            ]
        }
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>
