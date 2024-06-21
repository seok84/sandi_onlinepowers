<template>
    <ul class="ex_list_wrap">
        <li class="ex_list" v-for="(item, idx) in info" :key="idx">
            <div class="badge_wrapper">
                <div v-if="item.application === 'not'" class="btn_ss btn-primary">체험단 미신청</div>
                <div v-else-if="item.application === 'apply'" class="btn_ss btn-attention">체험단 신청</div>
                <div v-else-if="item.application === 'finished'" class="btn_ss btn_accent">체험단 작성완료</div>
            </div>
            <div class="list_top">
                <a href="javascript:void(0);" class="experience_tit linked_arr">[205기 체험단] 더블업 원두 체험단</a>
                <span class="dates">2023-01-01</span>
            </div>
            <div class="review_desc_wrap review_comment">
                <span class="review_desc">
                    잘받았습니다. 감사합니다<br> 앙버터부쉬맨빵은유통과정때문인지 버터가
                    깨져서 손님들께서 직접 받았을경우 아쉬울것같았습니다.
                </span>
            </div>
            <div class="review_thumbnail_wrap">
                <span class="close">닫기</span>
                <ul>
                    <li><img src="~/assets/img/sample/sample_img.jpg" alt=""></li>
                    <li><img src="~/assets/img/sample/sample_img.jpg" alt=""></li>
                    <li><img src="~/assets/img/sample/sample_img.jpg" alt=""></li>
                    <li><img src="~/assets/img/sample/sample_img.jpg" alt=""></li>
                </ul>
            </div>
            <div class="btn_right_wrap">
                <button class="btn btn_accent btn-small btn_sm btn_writing">체험평 작성</button>
                <button class="btn btn-default btn-small btn_sm">수정</button>
                <button class="btn btn-default btn-small btn_sm">삭제</button>
            </div>
        </li>
    </ul>
</template>


<script>
export default {
    name: 'Exlist',
    data() {
        return {
            info: [
                {
                    application: "apply",
                },
                {
                    application: "finished",
                },
                {
                    application: "not",
                },
            ],
        }
    },
    methods: {},
}
</script>

<style scoped>

.btn_right_wrap .btn_writing{
    width:auto;
    max-width:unset;
    border-color: #000
}


</style>
