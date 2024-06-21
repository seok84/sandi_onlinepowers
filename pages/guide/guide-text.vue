<template>
    <div class="guide_contents">
        

        <!-- end of guide tab -->

        <!-- 2차카테고리 -->
        <div class="guide_txt">좌우정렬 dl list</div>
        <p class="guide_txt02">.gray_box > jssp_align </p>
        <div class="gray_box">
            <dl class="jssp_align">
                <dt>desc title</dt>
                <dd> desc desc</dd>
            </dl>
        </div>


        <!-- 2차카테고리 -->
        <div class="guide_txt">2차카테고리</div>

        <lnbCate />

        <div class="guide_txt">총 평점</div>

        <div class="grade">
            <p class="txt">총 평점</p>
            <div class="rating_star">
                <span class="on"></span>
                <span class="on"></span>
                <span class="on"></span>
                <span class="on"></span>
                <span></span>
            </div>
            <div class="num">
                <b>3.2</b>
                <span>/ 5</span>
            </div>
        </div>


        <!-- 별점 셀렉트 -->
        <div class="guide_txt">별점 셀렉트</div>

        <div class="review_filter_wrapper">
                        <div class="check_wrap">
                            <input type="checkbox" name="showPhoto" id="showPhoto" class="input_check" checked=""><span>사진후기
                                보기</span>
                        </div>
                        <div class="wrap_btn_current">
                            <a href="javascript:void(0);" class="overall on">전체</a>

                            <a href="javascript:void(0);" class="latest">최신순</a>

                            <a href="javascript:void(0);" class="recommend">추천순</a>
                        </div>
                        <div class="ranking_filter_area">

                            <div class="form_line select_wrap">
                                <select name="" id="select01" class="form_control input_select">
                                    <option value="">별점별 점수 보기</option>
                                    <option value="">★★★★★</option>
                                    <option value="">★★★★☆</option>
                                    <option value="">★★★☆☆</option>
                                    <option value="">★★☆☆☆</option>
                                    <option value="">★☆☆☆☆</option>
                                    <option value="">☆☆☆☆☆</option>
                                </select>
                            </div>

                        </div>
                    </div>

        <!-- info dot -->
        <div class="guide_txt">info dot</div>
        <h6 class="tit_sm">배송방법 및 배송기간</h6>
        <em style="color:red; font-size:18px;">info_dot 클래스는 개별로 적용되어야합니다</em>
        <p class="info_dot">내가 작성한 문의는 <a href="javascript:void(0);">마이페이지</a>에서 확인 가능합니다.</p>
        <p class="info_dot">개별로 하나씩</p>
        <p class="info_dot">들어가야합니다</p>

        <!-- 후기 관리자 답변 영역 -->
        <div class="guide_txt">후기 관리자 답변 영역</div>
        <!-- hide_wrap 클릭하면 노출되는 영역 -->
        <div class="hide_wrap">
            <div class="administrator_answer">
                <div class="qna_manager">
                    <span class="qa">A.</span>샌디
                </div>
                <div class="text_area">
                    안녕하세요 고객님. 샌디 고객센터 입니다. <br />
                    저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.<br />
                    소중한 경험을 리뷰로 남겨주셔서 감사합니다.
                </div>
                <p class="product_date">
                    답변일&nbsp;&nbsp;:&nbsp;&nbsp;<span>2022-06-14</span>
                </p>
            </div>
        </div>

        <!-- 이용후기 썸네일 -->
        <div class="guide_txt">이용후기 썸네일</div>
        <p style="
              color: red;
              margin: 10px 0;
              text-decoration: underline;
              font-size: 1.8rem;
            ">
            클릭시 확대되는 스크립트 작성필요
        </p>
        <div class="review_thumbnail_wrap">
            <span class="close">닫기</span>
            <ul>
                <li>
                    <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                </li>
                <li>
                    <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                </li>
                <li>
                    <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                </li>
                <li>
                    <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                </li>
            </ul>
        </div>



        <!-- 폼 상단 타이틀 -->
        <div class="guide_txt">폼 상단 타이틀</div>


        <div class="form_title type02">
            <p>전체<span class="counter">49</span>
            </p>
            <a href="javascript:void(0);">후기작성하기</a>
        </div>

        <!-- 타이틀 : 마이페이지 서브 카테고리 -->
        <div class="guide_txt">마이페이지 서브타이틀</div>

        <div class="sm_tit">
            <h5>쿠폰</h5>
        </div>

        <div class="sub_tit">
            <h5>쿠폰</h5>
        </div>


        <!-- 체크박스 전체선택 -->
        <div class="guide_txt">체크박스 전체선택</div>
        <div class="check_delete_wrapper">
            <div class="check_wrap">
                <input type="checkbox" name="allCheck" id="allCheck" class="input_check" />
                <label for="allCheck">전체선택</label>
            </div>
            <button class="btn btn-small btn-default btn_sm">삭제</button>
        </div>

        <hr style="display: block; width: 100%; height: 2px; margin: 20px 0" />
        <!-- 전체선택 체크박스  -->
        <div class="agree_wrap check_wrap invalid">
            <div class="all_check">
                <div class="check_wrap">
                    <input type="checkbox" id="all_check" title="선택" name="terms" onclick="selectAll(this)" />
                    <label for="all_check">모든 약관 동의</label>
                </div>
            </div>
            <div class="divider">

            </div>
            <div class="agree_check">
                <div class="check_wrap">
                    <input type="checkbox" id="agree_check2" title="선택" name="terms" />
                    <label for="agree_check2">이용약관에 동의 <span>(필수)</span>
                    </label>
                </div>
                <a href="javascript:void(0);" class="terms_link">약관보기</a>
            </div>
            <div class="agree_check">
                <div class="check_wrap">
                    <input type="checkbox" id="agree_check3" title="선택" name="terms" />
                    <label for="agree_check3">개인정보의 수집·이용목적 및  항목에 동의 <span>(필수)</span>
                    </label>
                </div>
                <a href="javascript:void(0);" class="terms_link">약관보기</a>
            </div>
            <div class="agree_check">
                <div class="check_wrap">
                    <input type="checkbox" id="agree_check1" title="선택" name="terms" />
                    <label for="agree_check1">마케팅이용약관 동의<span>(선택)</span>
                    </label>
                </div>
                <a href="javascript:void(0);" class="terms_link">약관보기</a>
            </div>
            <!-- 약관보기 주의 -->
            <div class="invalid_feedback">필수 약관에 동의해주세요.</div>
            <a href="javascript:void(0);" class="btn btn-primary">가입하기</a>
            <a href="javascript:void(0);" class="btn btn_secondary readonly">가입하기</a>
        </div>

        <!-- 체크박스 전체선택 -->
        <div class="guide_txt">페이지 네비게이션</div>
        <etc-pagination/>

        <!-- 타이틀: 문구추가-->
        <div class="guide_txt">타이틀</div>
        <div class="title_wrap">
            <h2 class="title_main">로그인</h2>
            <p class="title_sub">
                <span class="title_desc">
                    <b>CNT마트</b>에서 즐거운 쇼핑 되세요!</span>
                <span class="title_icon">
                    <img src="~/assets/img/user/ico_smile.svg" alt="icon" />
                </span>
            </p>
        </div>

        <!-- 타이틀: 단일-->
        <div class="title_wrap">
            <h2 class="title_main">회원가입</h2>
        </div>

        <!-- 텍스트 -->
        <div class="txt_wrap">
            <p>비밀번호가 변경되었습니다.</p>
        </div>

        <!-- 애니메이션 -->
        <div class="guide_txt">애니메이션</div>
        <div class="check_animation" style="margin: 110px auto">
            <div class="twinkle_wrap">
                <span class="twinkle twinkle_L">

                </span>
                <span class="twinkle twinkle_R">

                </span>
            </div>
            <div class="circle_img">
                <img src="~/assets/img/common/circle_check.svg" alt="" />
            </div>
        </div>
    </div>
</template>

<script>

import lnbCate from "~/components/tab/category-navigation.vue";

export default {
    components: {
        lnbCate,
    },
    layout: "basic",

}
</script>

<style></style>