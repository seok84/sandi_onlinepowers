<template>
    <section id="eventView" class="inner">
        <h2 class="title-h2">기획전</h2>
        <div>
            <!-- 1차 개발: 이미지형 -->
            <div class="event-wrap">
                <div class="event-item" v-for="(item, index) in itemsEvent" :key="'itemsEvent' + index">
                    <!-- 1차 개발: 이미지형 -->
                    <nuxt-link to="/">
                        <img :src="item.img" alt="eventImg" />
                    </nuxt-link>

                    <!-- 2차 개발: 이미지+텍스트 따로 -->
                    <!-- <nuxt-link to="/">
                            <div class="event-txt">
                                <p class="event-tag ing" v-if="item.status">진행중</p>
                                <p class="event-tag end" v-else>종료</p>
                                <p class="event-title">이벤트명이 노출되는 영역입니다 {{ item.title }}</p>
                                <p class="event-desc">설명글이 노출되고 있습니다. {{ item.desc }}</p>
                            </div>
                            <img class="event-img" :src="item.img" alt="eventImg" />
                        </nuxt-link> -->
                </div>
            </div>
            <etc-pagination />
        </div>

        <div class="no_content">
            <p>상품이 없습니다.</p>
        </div>

        <div class="content_wrapper">
            <div class="comment_container">
                <div class="comment_count">
                    <p>전체(3)</p> <a href="javascript:void(0);">댓글쓰기</a>
                </div>
                <hr>
                <div class="comment_input_wrap" style="">
                    <form><textarea name="" id="" cols="30" rows="5" placeholder="내용을 입력하세요"
                            class="comment_input"></textarea>
                        <div class="btn_wrap comment_btn"><button type="button" class="btn btn_m btn_default">취소
                            </button> <button type="submit" class="btn btn_m btn_accent">저장</button></div>
                    </form>
                </div>
                <div class="comment_contents_wrap">
                    <div class="comment_contents">
                        <div class="comment_info">
                            <p>test***</p>
                            <p>2023-11-08 13:33:57</p>
                        </div>
                        <p class="comment_txt">12121<br>121212</p> <a href="javascript:;" class="declaration">
                            신고/차단
                        </a>
                    </div>
                    <div class="comment_contents">
                        <div class="comment_info">
                            <p>test***</p>
                            <p>2023-11-08 13:32:32</p>
                        </div>
                        <p class="comment_txt">123213<br>123123</p> <a href="javascript:;" class="declaration">
                            신고/차단
                        </a>
                    </div>
                    <div class="comment_contents">
                        <div class="comment_info">
                            <p>test***</p>
                            <p>2023-11-08 13:31:21</p>
                        </div>
                        <p class="comment_txt">11111<br>22<br>222222</p> <a href="javascript:;" class="declaration">
                            신고/차단
                        </a>
                    </div>
                </div>
            </div>
            <ul class="pagination" data-v-5b805414="">
                <li class="page-item" style="display:none;" data-v-5b805414=""><a aria-label="Previous"
                        class="page-link prev" data-v-5b805414=""><span class="sr-only"
                            data-v-5b805414="">Previous</span></a></li>
                <li class="page-item active" data-v-5b805414=""><a class="page-link" data-v-5b805414="">1</a></li>
                <li class="page-item" style="display:none;" data-v-5b805414=""><a aria-label="Next"
                        class="page-link next" data-v-5b805414=""><span class="sr-only"
                            data-v-5b805414="">Next</span></a></li>
            </ul>
        </div>


        <div class="modal-container modal modal_basic modal_m modal_full" style="display: none">
            <div class="modal_wrapper">
                <div class="modal_header">
                    <h3 class="modal_tit">신고/차단</h3>
                </div>
                <div class="modal_body">
                    <div class="modal_content" style="display:;">
                        <div class="btn_wrap onlyBtn"><button class="btn btn_m btn_default"
                               >댓글 신고</button> <button class="btn btn_m btn_accent"
                               >회원 차단</button></div>
                    </div>
                    <div class="modal_content" style="display: block;">
                        <form>
                            <div class="cont_tit">
                                <h4 class="modal_cont_tit">신고 사유</h4>
                            </div>
                            <div class="radio_wrapper rowline_02">
                                <div class="radio_wrap whalf"><input type="radio"
                                        name="reasonType" id="reasonType-0" data-vv-as="신고 사유" value="A"
                                        aria-required="true" aria-invalid="false"> <label
                                        for="reasonType-0">영리목적/홍보성</label></div>
                                <div class="radio_wrap whalf"><input type="radio"
                                        name="reasonType" id="reasonType-1" data-vv-as="신고 사유" value="B"
                                        aria-required="true" aria-invalid="false"> <label
                                        for="reasonType-1">개인정보 노출 위험</label></div>
                                <div class="radio_wrap whalf"><input type="radio"
                                        name="reasonType" id="reasonType-2" data-vv-as="신고 사유" value="C"
                                        aria-required="true" aria-invalid="false"> <label
                                        for="reasonType-2">욕설/인신공격</label></div>
                                <div class="radio_wrap whalf"><input type="radio"
                                        name="reasonType" id="reasonType-3" data-vv-as="신고 사유" value="D"
                                        aria-required="true" aria-invalid="false"> <label
                                        for="reasonType-3">음란/선정성</label></div>
                                <div class="radio_wrap whalf"><input type="radio"
                                        name="reasonType" id="reasonType-4" data-vv-as="신고 사유" value="E"
                                        aria-required="true" aria-invalid="false"> <label
                                        for="reasonType-4">불법정보</label></div>
                                <div class="radio_wrap whalf"><input type="radio"
                                        name="reasonType" id="reasonType-5" data-vv-as="신고 사유" value="F"
                                        aria-required="true" aria-invalid="false"> <label
                                        for="reasonType-5">같은 내용 도배</label></div>
                                <div class="radio_wrap whalf"><input type="radio"
                                        name="reasonType" id="reasonType-6" data-vv-as="신고 사유" value="ETC"
                                        aria-required="true" aria-invalid="false"> <label
                                        for="reasonType-6">기타</label></div>
                            </div>
                            <div class="cont_tit">
                                <h4 class="modal_cont_tit">신고 상세사유</h4>
                            </div> <textarea cols="30" rows="10" name="reasonContent"
                                placeholder="신고하시는 상세이유를 입력해주세요 (최대글자는 1,000자 입니다)" data-vv-as="신고 상세사유"
                                class="form_control" aria-required="true"
                                aria-invalid="false"></textarea>
                            <div class="btn_wrap"><button type="button" class="btn btn_m btn_default"
                                   >취소</button> <button type="submit" class="btn btn_m btn_accent"
                                   >저장</button></div>
                        </form>
                    </div>
                </div> <button type="button" class="modal_close modal_close_w">닫기</button>
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        data: () => {
            return {
                itemsEvent: [{
                        img: require("~/assets/img/sample/sample_exhibition1.png"),
                        status: true,
                        title: "제목",
                        desc: "설명글",
                    },
                    {

                        img: require("~/assets/img/sample/sample_exhibition1.png"),
                        status: false,
                        title: "제목",
                        desc: "설명글",
                    },
                    {

                        img: require("~/assets/img/sample/sample_exhibition1.png"),
                        status: false,
                        title: "제목",
                        desc: "설명글",
                    },
                    {

                        img: require("~/assets/img/sample/sample_exhibition1.png"),
                        status: true,
                        title: "제목",
                        desc: "설명글",
                    },
                    {

                        img: require("~/assets/img/sample/sample_exhibition1.png"),
                        status: false,
                        title: "제목",
                        desc: "설명글",
                    },
                    {

                        img: require("~/assets/img/sample/sample_exhibition1.png"),
                        status: true,
                        title: "제목",
                        desc: "설명글",
                    },
                ],
                itemReviews: [{
                        user: "bad*****",
                        date: "2019.04.01",
                        comment: "이벤트 텍스트입니다. 이벤트 텍스트입니다. 이벤트 텍스트입니다.",
                        declarate: false,
                    },
                    {
                        user: "bad*****",
                        date: "2019.04.01",
                        comment: "신고 후 검토 결과, 게시 중단 되었습니다.",
                        declarate: true,
                    },
                    {
                        user: "bad*****",
                        date: "2019.04.01",
                        comment: "이 회원의 댓글이 숨김 처리되었습니다.",
                        declarate: true,
                    },
                ],
                reviewRoportModal: false,
            }
        },
        methods: {},
        mounted() {}
    }
</script>
<style scoped></style>