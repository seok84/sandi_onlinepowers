<template>
    <div id="customer-notice" class="customerPages">
        <h2 class="title-h2">고객센터</h2>
        <div class="inner apply_inner">
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <Lnb class="customer1" />
                <div class="mypage-content">
                    <TitleMore :to="'javascript:void(0);'" :titleMain="'공지사항'" class="pc" />
                    <div class="notice_list">
                        <ul>
                            <li class="list_area">
                                <div class="list_in hide_title">
                                    <div class="tit-area">
                                        <div class="title">
                                            <span class="btn_ss btn_accent badge_notice">공지</span>
                                            <span class="titleLine01 tit ">
                                                공지사항 제목입니다. 공지사항
                                                제목입니다.공지사항 제목입니다. 공지사항 제목입니다.공지사항 제목입니다. 공지사항 제목입니다.공지사항 제목입니다. 공지사항
                                                제목입니다.
                                            </span>
                                            <span class="date">2022-12-13</span>
                                        </div>
                                        <div class="hide_wrap">
                                            <!-- <div class="img"><img src="~/assets/img/sample/sample_img.jpg"
                                                    alt="공지사항 이미지" class="img-fluid"></div> -->
                                            <div class="txt">공지사항 내용 입니다 .공지사항 내용 입니다.공 지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용
                                                입니다.
                                                공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다 .공지사항 내용
                                                입니다.
                                                공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용
                                                입니다...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list_area">
                                <div class="list_in hide_title">
                                    <div class="tit-area">
                                        <div class="title">
                                            <span class="btn_ss btn_accent badge_notice">공지</span>
                                            <span class="titleLine01 tit">
                                                공지사항 제목입니다. 공지사항
                                                제목입니다.공지사항 제목입니다. 공지사항 제목입니다.공지사항 제목입니다. 공지사항 제목입니다.공지사항 제목입니다. 공지사항
                                                제목입니다.
                                            </span>

                                            <span class="date">2022-12-13</span>
                                        </div>
                                        <div class="hide_wrap">
                                            <div class="img"><img src="~/assets/img/sample/sample_img.jpg"
                                                    alt="공지사항 이미지" class="img-fluid"></div>
                                            <div class="txt">공지사항 내용 입니다 .공지사항 내용 입니다.공 지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용
                                                입니다.
                                                공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다 .공지사항 내용
                                                입니다.
                                                공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용
                                                입니다...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list_area">
                                <div class="list_in hide_title">
                                    <div class="tit-area">
                                        <div class="title">
                                            <span class="btn_ss btn_accent badge_notice">공지</span>
                                            <span class="titleLine01 tit">
                                                공지사항 제목입니다. 공지사항
                                                제목입니다.공지사항 제목입니다. 공지사항 제목입니다.공지사항 제목입니다. 공지사항 제목입니다.공지사항 제목입니다. 공지사항
                                                제목입니다.
                                            </span>

                                            <span class="date">2022-12-13</span>
                                        </div>
                                        <div class="hide_wrap">
                                            <div class="txt">공지사항 내용 입니다 .공지사항 내용 입니다.공 지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용
                                                입니다.
                                                공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다 .공지사항 내용
                                                입니다.
                                                공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용
                                                입니다...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                        </ul>
                    </div>
                    <etc-pagination />
                    <etc-no-content txt="공지사항이 없습니다." />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TitleD1 from "~/components/text/title-default.vue";
import Lnb from "~/components/layout/lnb-customer.vue";
import TitleMore from "~/components/text/title-more.vue";

import common from "~/assets/js/common.js"

export default {
    name: 'customer-notice',
    components: {
        TitleD1,
        Lnb,
        TitleMore,


    },
    data() {
        return {
            titleMain: "고객센터",
        };
    },
    mounted() {
        common.openContent()
    }
}
</script>

<style>
@import url('~/assets/css/pages/customer.css');
</style>