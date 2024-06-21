<template>
    <ul>
        <li class="list_area" v-for="(item, idx) in info" :key="idx">
            <div class="rv_prd_sec">
                <div class="rv_prd">
                    <div class="user_wrapper">
                        <span class="user_id_info">solibi***</span>
                        <span v-if="item.reviewScore === 'normal'" class="review_score normal">보통</span>
                        <span v-else-if="item.reviewScore === 'notgood'" class="review_score notgood">아쉬움</span>
                        <span v-else-if="item.reviewScore === 'good'" class="review_score good">만족</span>
                        <span class="date">2022-12-13</span>
                    </div>
                </div>
            </div>
            <div class="list_in">
                <div class="review_open" v-if="item.reviewOpen">
                    <div class="list_top" v-if="item.star">
                        <div class="mp_rv_top">
                            <div class="rating_star">
                                <span class="on"></span> <span class="on"></span>
                                <span class="on"></span> <span class="on"></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div class="review_origin">
                        <div class="txt_area">
                            <p class="title">
                                {{ item.txt }}
                            </p>
                        </div>
                        <div class="img_area" v-if="item.photoReview">
                            <div class="review_thumbnail_wrap">
                                <span class="close">닫기</span>
                                <!-- item 불러오는 식에서 오류가 있는 것으로 보임 -->
                                <ul>
                                    <li>
                                        <div class="img_wrap">
                                            <img src="~/assets/img/sample/sample_img.jpg" alt="후기 이미지">
                                        </div>
                                    </li>
                                    <li>
                                        <div class="img_wrap">
                                            <img src="~/assets/img/sample/sample_img.jpg" alt="후기 이미지">
                                        </div>
                                    </li>
                                    <li>
                                        <div class="img_wrap">
                                            <img src="~/assets/img/sample/sample_img.jpg" alt="후기 이미지">
                                        </div>
                                    </li>
                                    <li>
                                        <div class="img_wrap">
                                            <img src="~/assets/img/sample/sample_img.jpg" alt="후기 이미지">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="review_origin" v-if="!item.reviewOpen">
                    <div class="txt_area">
                        <p class="title">
                            이 회원의 댓글이 숨김 처리되었습니다.
                        </p>
                    </div>
                </div>
                <div class="thumbs_up" >
                    <span v-if="item.thumbsfn">도움됐어요</span>
                    <div class="thumbs_btn" v-if="item.thumbsfn" :class="item.thumbs.check ? 'on' : ''">
                        <span class="thumbs_img"></span>
                        <span class="thumbs_count" v-if="item.thumbs.count">{{ item.thumbs.count }}</span>
                        <span class="thumbs_count" v-else-if="item.thumbs.count >= 99">99+</span>
                    </div>
                    <a href="javascript:void(0);" class="fr_linked" v-if="!item.editor">신고/차단</a>
                </div>
                <div class="btn_right_wrap" v-if="item.editor">
                    <button class="btn btn-default btn-small btn_sm" @click="handleClick($event)">수정</button>
                    <button class="btn btn-default btn-small btn_sm">삭제</button>
                </div>
            </div>
            <div class="hide_wrap" v-if="item.recomment">
                <div class="administrator_answer">
                    <div class="qna_manager">
                        <span class="qa">A.</span>샌디
                    </div>
                    <div class="text_area">
                        안녕하세요 고객님. 샌디 고객센터 입니다. <br>
                        저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.<br>
                        소중한 경험을 리뷰로 남겨주셔서 감사합니다.
                    </div>
                    <p class="product_date">
                        답변일&nbsp;&nbsp;:&nbsp;&nbsp;<span>2022-06-14</span>
                    </p>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>

export default {
    props: {
        info: {
            type: [Array],
            default: () => {
            }
        },
    },
    data() {
        return {
        }
    },
    methods: {
        handleClick() {

            const scrollToBoardWrap = () => {
                const target = document.querySelector('.anchor_peek');
                    target.scrollIntoView({ block: 'start' , behavior: 'smooth' });
            };
            this.$emit('clicked', scrollToBoardWrap);
        
        
        }

    }

}
</script>

<style>
@import url('~/assets/css/style/style_list.css');
</style>