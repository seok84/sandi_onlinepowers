<template>
    <div class="content_wrapper">
        <div class="comment_container">
            <p class="review_list_tit">체험단 신청현황</p>
            <!-- <div class="comment_input_wrap">
                <textarea name="" id="" cols="30" rows="5" class="comment_input" placeholder="내용을 입력하세요" />
                <div class="btn-wrap comment_btn">
                    <button class="btn btn-middle btn-default">취소</button>
                    <button class="btn btn-middle btn-attention">저장</button>
                </div>
            </div> -->
            <ul>
                <li class="list_area">
                    <div class="rv_prd_sec">
                        <div class="rv_prd">
                            <div class="user_wrapper">
                                <span class="user_id_info">solibi***</span>
                                <span class="review_score normal"></span>
                                <span class="date">2022-12-13</span>
                            </div>
                        </div>
                    </div>
                    <div class="list_in">
                        <div class="review_open">
                            <div class="review_origin">
                                <div class="txt_area">
                                    <p class="title">
                                        로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나
                                        시각적
                                        연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도
                                        이용된다. 이런 용도로 사용할 때 로렘 입숨을 그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도
                                        사용된다. 로렘 입숨은 전통 라틴어와 닮은 점 때문에 종종 호기심을 유발하기도 하지만 그 이상의 의미를 담지는 않는다. 문서에서 텍스트가 보이면
                                        사람들은
                                        전체적인 프레젠테이션보다는 텍스트에 담긴 뜻에 집중하는 경향이 있어서 출판사들은 서체나 디자인을 보일 때는 프레젠테이션 자체에 초점을 맞추기 위해 로렘
                                        입숨을
                                        사용한다. 로렘 입숨은 영어에서 사용하는 문자들의 전형적인 분포에 근접하다고도 하는데,
                                        이 점 때문에 프레젠테이션으로 초점을 이동하는 데에도 도움을 준다.
                                    </p>
                                </div>
                                <div class="img_area">
                                    <div class="review_thumbnail_wrap">
                                        <span class="close">닫기</span>
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
                    </div>
                    <!-- <a href="javascript:void(0);" class="declaration">신고/차단</a> -->
                    <div class="btn_right_wrap">
                        <a href="javascript:void(0);" class="btn btn-small btn-default btn_sm btn_edit">수정</a>
                    </div>
                </li>
                <li class="list_area">
                    <div class="rv_prd_sec">
                        <div class="rv_prd">
                            <div class="user_wrapper">
                                <span class="user_id_info">solibi***</span>
                                <span class="review_score good"></span>
                                <span class="date">2022-12-13</span>
                            </div>
                        </div>
                    </div>
                    <p class="comment_txt">
                        신고 후 검토 결과, 게시 중단 되었습니다.
                    </p>
                    <a href="javascript:void(0);" class="declaration">신고/차단</a>
                    <!-- 
                        <div class="btn_right_wrap">
                            <a href="javascript:void(0);" class="btn btn-small btn-default btn_sm btn_edit">수정</a>
                         </div> 
                    -->
                </li>
                <li class="list_area">
                    <div class="rv_prd_sec">
                        <div class="rv_prd">
                            <div class="user_wrapper">
                                <span class="user_id_info">solibi***</span>
                                <span class="review_score notgood"></span>
                                <span class="date">2022-12-13</span>
                            </div>
                        </div>
                    </div>
                    <p class="comment_txt">
                        이 회원의 댓글이 숨김 처리되었습니다.
                    </p>
                    <a href="javascript:void(0);" class="declaration">신고/차단</a>
                    <!-- 
                        <div class="btn_right_wrap">
                            <a href="javascript:void(0);" class="btn btn-small btn-default btn_sm btn_edit">수정</a>
                         </div> 
                    -->
                </li>

            </ul>
        </div>
        <etc-pagination />
        <etc-no-content txt="댓글이 없습니다." />
    </div>
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

}
</script>

<style>
@import url('~/assets/css/style/style_list.css');
</style>