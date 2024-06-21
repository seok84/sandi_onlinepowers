<!-- <template>
    <li>
        <div class="exhibition_item_wrapper">
            <a href="javascript:void(0);">
                <div class="category_img_thumb">
                    <div class="img_thumb_back">
                        <img src="~/static/img/sample/img_b.png" alt="" srcset="">
                    </div>
                </div>
                <div class="category_desc_wrap">
                    <div class="badge_tag_wrap">
                        <div class="btn_ss btn-primary">신청 <span class="date">N</span> 일 전</div>
                        <div class="btn_ss btn-primary">마감 <span class="date">N</span> 일 전</div>
                        <div class="btn_ss btn_accent">체험단 심사대기</div>
                        <div class="btn_ss btn_accent">베스트후기 심사대기</div>
                        <div class="btn_ss btn_done">체험평 등록중</div>
                        <div class="btn_ss btn-attention">체험단 발표확인</div>
                        <div class="btn_ss btn-attention">체험평 발표확인</div>
                    </div>
                    <div class="desc_top">
                        <h6 class="tit titleLine01">[207기 체험단] 복음자리 밀크티 이지라떼 체험단</h6>
                        <p class="dates">2023.01.04 ~ 2023.01.11</p>

                        <div class="current_situation">모집현황
                            <span class="current">50</span>
                            /
                            <span class="total">100</span>명
                        </div>
                    </div>

                </div>

            </a>
        </div>
    </li>
</template> -->

<template>
    <ul class="thumbnail_list">
        <li v-for="(item, index) in thumbList" :key="index">
            <div class="exhibition_item_wrapper">
                <a href="#">
                    <div class="category_img_thumb">
                        <div class="img_thumb_back">
                            <img :src="item.imageSrc" :alt="item.altText">
                        </div>
                    </div>
                    <div class="category_desc_wrap">
                        <div class="badge_tag_wrap">
                            <div class="btn_ss btn-primary" v-if="item.situation.isApplied">신청 <span class="date">{{
                                item.situation.appliedDays }} 일 전</span>
                            </div>
                            <div class="btn_ss btn-primary" v-if="item.situation.isClosed">마감 <span class="date">{{
                                item.situation.closedDays }} 일 전</span>
                            </div>
                            <div class="btn_ss btn_accent" v-if="item.situation.isReviewPending">체험단 심사대기</div>
                            <div class="btn_ss btn_accent" v-if="item.situation.isBestReviewPending">베스트후기 심사대기</div>
                            <div class="btn_ss btn_done" v-if="item.situation.isReviewSubmitting">체험평 등록중</div>
                            <div class="btn_ss btn-attention" v-if="item.situation.isWinnerAnnounced">체험단 발표확인</div>
                            <div class="btn_ss btn-attention" v-if="item.situation.isReviewAnnounced">체험평 발표확인</div>
                        </div>
                        <div class="desc_top">
                            <h6 class="tit titleLine01">{{ item.desc.title }}</h6>
                            <p class="dates">{{ item.desc.startDate }} ~ {{ item.desc.endDate }}</p>
                            <div class="current_situation">
                                <span v-if="!item.state">
                                    모집현황
                                    <span class="current">{{ item.desc.currentParticipants }}</span> /
                                    <span class="total">{{ item.desc.totalParticipants }}</span>명
                                </span>
                                <span v-if="item.state">체험평 보기({{ item.desc.reviewTotalNum }}개)</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: '',
    props: {
        thumbList: {
            type: [Array],
            default: () => {
                return []
            }
        }

    },
}
</script>

<style></style>