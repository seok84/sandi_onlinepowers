<template>
    <div class="guide_contents">


        <!-- end of guide tab -->
        <div class="content">
            <!--  -->
            <!--  -->
            <!--  -->
            <!--  -->
            <!--  -->
            <div class="guide_txt">폼기본-라벨 여러줄일때</div>
            <div class="form_line bt04">
                <label for="input_id01" class="form_title accent">아이디</label>
                <input type="text" name="input_id02" id="input_id02" placeholder="아이디" class="form_control" minlength="6"
                    value="" />
                <div class="invalid_feedback">
                    아이디는 영문 대,소문자, 숫자를 이용하여 6~12자로 입력해주세요.
                </div>
            </div>
            <div class="form_line invalid bt04">
                <label for="" class="form_title accent">비밀번호</label>
                <input type="password" name="" id="" placeholder="비밀번호(8~16자 이내 영문, 숫자, 특수문자)" minlength="6" value=""
                    class="form_control">
                <div class="invalid_feedback">
                    비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                </div>
            </div>
            <div class="form_line"><input type="text" class="form_control"></div>
            <div class="form_line"><input type="text" class="form_control"></div>
            <!--  -->
            <!--  -->
            <!--  -->
            <!--  -->
            <!--  -->
            <div class="guide_txt">폼기본-라벨 있을 때</div>

            <div class="form_line invalid">
                <label for="" class="form_title accent">비밀번호</label>
                <input type="password" name="" id="" placeholder="비밀번호(8~16자 이내 영문, 숫자, 특수문자)" minlength="6" value=""
                    class="form_control">
                <div class="invalid_feedback">
                    비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                </div>
            </div>

            <div class="form_line">
                <label for="" class="form_title accent">비밀번호</label>
                <input type="password" name="" id="" placeholder="비밀번호(8~16자 이내 영문, 숫자, 특수문자)" minlength="6" value=""
                    class="form_control">
                <div class="invalid_feedback">
                    비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                </div>
            </div>
            <!--  -->
            <!--  -->
            <!--  -->
            <!--  -->
            <!--  -->
            <div class="guide_txt">폼기본-라벨 없을 때</div>

            <div class="form_line invalid">
                <input type="password" name="" id="" placeholder="비밀번호(8~16자 이내 영문, 숫자, 특수문자)" minlength="6" value=""
                    class="form_control">
                <div class="invalid_feedback">
                    비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                </div>
            </div>

            <div class="form_line">
                <input type="password" name="" id="" placeholder="비밀번호(8~16자 이내 영문, 숫자, 특수문자)" minlength="6" value=""
                    class="form_control">
                <div class="invalid_feedback">
                    비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                </div>
            </div>

            <!--  -->
            <!--  -->
            <!--  -->
            <!--  -->
            <!--  -->
            <!--  -->

            <div class="guide_txt">파일삭제</div>

            <div class="form-group file_area">
                <div class="file_area_wrap">
                    <ul>
                        <li>
                            <div>
                                <img src="~/assets/img/sample/sample_img.jpg" alt="썸네일" class="img_full">
                            </div>
                            <button type="button" class="btn_file_del">
                                <span class="screen_out">파일삭제</span>
                            </button>
                        </li>
                        <li>
                            <div>
                                <img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full">
                            </div>
                            <button type="button" class="btn_file_del">
                                <span class="screen_out">파일삭제</span>
                            </button>
                        </li>
                        <li>
                            <div>
                                <img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full">
                            </div>
                            <button type="button" class="btn_file_del">
                                <span class="screen_out">파일삭제</span>
                            </button>
                        </li>
                    </ul>
                    <div class="file_add_btn">
                        <input type="file" id="file1">
                        <label for="file1" class="btn_file_add">
                            <span class="screen_out">파일추가</span>
                        </label>
                    </div>
                </div>
                <div class="info_dot">
                    <p>5MB 이하의 사진 4장까지 첨부 가능</p>
                </div>
            </div>

            <div class="guide_txt">textarea</div>

            <textarea name="" id="" cols="30" rows="10" class="form_control" placeholder="신청사유를 입력하세요">

                                        </textarea>

            <div class="guide_txt">조건필터테이블</div>

            <div class="right_wrap">
                <button class="ico_inner " id="filterBtn">
                    <span class="ico ico_filter">조건필터</span>
                </button>
            </div>
            <div class="filter_wrap">
                <div class="filter_box">
                    <div class="filter_tit">
                        <h4>온스</h4>
                    </div>
                    <ul>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check">
                                    <span>4온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check">
                                    <span>5온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>6.5온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>8온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>10온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>12온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>13온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>16온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>4온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>5온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>6.5온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>8온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>10온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>12온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>13온스</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>16온스</span>
                                </label>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="filter_box">
                    <div class="filter_tit">
                        <h4>직경(너비)</h4>
                    </div>
                    <ul>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>63Ø</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>63Ø</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>6.63Ø</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>63Ø</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>163Ø</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>163Ø</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>163Ø</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="check_wrap">
                                <label>
                                    <input type="checkbox" name="" id="" class="input_check"><span>163Ø</span>
                                </label>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="right_wrap">
                    <a class="ico_inner" id="resetBtn">
                        <span class="ico ico_reset">초기화</span>
                    </a>
                </div>
            </div>


            <div class="guide_txt">상품 숫자 인풋</div>
            <div class="amt_box">
                <div class="btn_amt_box form_control">
                    <button type="button" class="btn_minus"></button>
                    <input type="number" title="수량" value="1" class="number">
                    <button type="button" class="btn_plus"></button>
                </div>
            </div>


            <div class="guide_txt">일반 input 상태</div>

            <form action="">
                <div class="form_line input_option">
                    <input type="text" name="input_option01" id="input_option01" placeholder="필수 옵션 입력"
                        class="form_control" />
                    <button type="button" class="btn_input_add"> 추가 </button>

                </div>

                <div class="form_line disabled">
                    <label for="input_id01" class="form_title">아이디</label>
                    <input type="text" name="input_id01" id="input_id01" placeholder="아이디" class="form_control"
                        minlength="6" />
                    <div class="invalid_feedback">
                        아이디는 영문 대,소문자, 숫자를 이용하여 6~12자로 입력해주세요.
                    </div>
                </div>

                <div class="form_line">
                    <label for="input_id01" class="form_title accent">아이디</label>
                    <input type="text" name="input_id02" id="input_id02" placeholder="아이디" class="form_control"
                        minlength="6" value="" />
                    <div class="invalid_feedback">
                        아이디는 영문 대,소문자, 숫자를 이용하여 6~12자로 입력해주세요.
                    </div>
                </div>

                <div class="form_line">

                    <label for="input_pwd01" class="form_title">비밀번호</label>
                    <input type="password" name="input_pwd01" id="input_pwd01" placeholder="비밀번호" class="form_control"
                        minlength="8" />
                    <div class="invalid_feedback">
                        비밀번호는 8~10자리로 입력해주세요.
                    </div>
                </div>
            </form>
            <div class="guide_txt">주소 폼 추가</div>

            <form action="" class="form_address">
                <div class="form_line">
                    <input type="text" name="address_01" id="address_01" placeholder="우편번호 찾기"
                        class="form_control  form_search" value="" readonly />
                    <a href="javascript:void(0);" class="search_address t50">주소 검색</a>
                </div>


                <div class="form_line">
                    <label for="input_id01" class="form_title">주소</label>
                    <input type="text" name="address_01" id="address_01" placeholder="우편번호 찾기"
                        class="form_control  form_search" value="" readonly />
                    <a href="javascript:void(0);" class="search_address">주소 검색</a>
                </div>
                <div class="form_line">
                    <input type="text" name="address_02" id="address_02" placeholder="기본주소" class="form_control" value="" />
                </div>
                <div class="form_line">
                    <input type="text" name="address_03" id="address_03" placeholder="상세주소" class="form_control" value="" />
                </div>

                <div class="invalid_feedback">
                    아이디는 영문 대,소문자, 숫자를 이용하여 6~12자로 입력해주세요.
                </div>
            </form>

            <div class="guide_txt">경고 input 상태</div>

            <form action="">
                <div class="form_line invalid">
                    <label for="input_id03" class="form_title accent">아이디</label>
                    <input type="text" name="input_id03" id="input_id03" placeholder="아이디" class="form_control"
                        minlength="6" />
                    <div class="invalid_feedback">
                        아이디는 영문 대,소문자, 숫자를 이용하여 6~12자로 입력해주세요.
                    </div>
                </div>

                <div class="form_line invalid">
                    <label for="" class="form_title accent">아이디</label>
                    <div class="input_option">
                        <input type="text" name="" id="" placeholder="아이디(6~12자 이내 영문, 숫자)" class="form_control"
                            minlength="6" value="">
                        <button type="button" class="btn_input_add active">중복검사</button>
                    </div>
                    <div class="invalid_feedback">
                        아이디는 영문 대,소문자, 숫자를 이용하여 6~12자로 입력해주세요.
                    </div>
                </div>


                <p class="guide_txt02"> invalid + invalid_feedback</p>
                <div class="form_line invalid">
                    <label for="passwordInput" class="form_title accent">비밀번호</label>
                    <input type="password" name="passwordInput" id="passwordInput" placeholder="비밀번호" class="form_control"
                        minlength="8" />
                    <div class="invalid_feedback">
                        비밀번호는 8~10자리로 입력해주세요.
                    </div>
                </div>

                <p class="guide_txt02"> available + invalid_feedback</p>
                <div class="form_line available">
                    <label for="passwordInput" class="form_title accent">비밀번호</label>
                    <input type="password" name="passwordInput" id="passwordInput" placeholder="비밀번호" class="form_control"
                        minlength="8" />
                    <div class="invalid_feedback">
                        사용 가능한 아이디 입니다.
                    </div>
                </div>

                <p class="guide_txt02">normal_feedback</p>
                <div class="form_line refund_container"><span class="form_title">환불정보</span>
                    <input type="text" name="input_id01" id="input_id01" placeholder="예금주명" minlength="6"
                        class="form_control">
                    <div class="normal_feedback">
                        상호명 혹은 대표자명이 확인된 계좌입력(통장에 기재된 예금주 그대로 작성)
                    </div>
                </div>

                <p class="guide_txt02">normal_feedback > invalid + invalid_feedback </p>
                <div class="form_line refund_container invalid"><span class="form_title">환불정보</span>
                    <input type="text" name="input_id01" id="input_id01" placeholder="예금주명" minlength="6"
                        class="form_control">
                    <!-- 
                        feedback 중에 사용하지 않는 건 display:none 처리
                     -->
                    <div class="normal_feedback">
                        상호명 혹은 대표자명이 확인된 계좌입력(통장에 기재된 예금주 그대로 작성)
                    </div>
                    <div class="invalid_feedback">
                        파일을 첨부해주세요
                    </div>
                </div>
            </form>
        </div>


        <div class="guide_txt">체크박스, 라디오버튼</div>

        <div class="check_wrap">
            <label>
                <input type="checkbox" name="check01" id="check01" class="input_check" checked />
            </label>
            <label><input type="checkbox" name="check05" id="check05" class="input_check" /></label>
        </div>
        <br />
        <p class="guide_txt02">라벨로 감싸다</p>
        <div class="check_wrap">
            <label><input type="checkbox" name="check06" id="check06" class="input_check" checked /><span>아이디
                    저장</span></label>
            <label><input type="checkbox" name="check07" id="check07" class="input_check" /><span>아이디 저장</span></label>
        </div>

        <div class="radio_wrap">
            <input type="radio" name="sample" id="radio01" class="input_radio" checked />
            <label for="radio01">여성</label>
            <input type="radio" name="sample" id="radio02" class="input_radio" />
            <label for="radio02">남성</label>
        </div>
        <div class="radio_wrap">
            <input type="radio" name="sample02" id="radio02" class="input_radio readonly" checked>
            <label for="radio02">미선택</label>
            <input type="radio" name="sample02" id="radio03" class="input_radio readonly">
            <label for="radio03">여성</label>
            <input type="radio" name="sample02" id="radio04" class="input_radio readonly" />
            <label for="radio04">남성</label>
        </div>

        <div class="guide_txt">셀렉트 박스</div>
        <!-- 이메일 -->
        <div class="form_line email_wrap">
            <span class="form_title accent">이메일</span>
            <input type="text" name="" id="" placeholder="example@company.com" class="form_control" value="">
        </div>
        <!-- 
                  select에는 가상선택자가 붙을 수 없음
                  rotate 설정 때문에 가상선택자 사용
                  -->
        <div class="form_line select_wrap">
            <select name="" id="select01" class="form_control input_select input_select02">
                <option value="">더미01</option>
                <option value="">더미02</option>
                <option value="">더미03</option>
                <option value="">더미04</option>
            </select>
        </div>

        <div class="form_line select_wrap">
            <select name="" id="select01" class="form_control input_select">
                <option value="">더미01</option>
                <option value="">더미02</option>
                <option value="">더미03</option>
                <option value="">더미04</option>
            </select>
        </div>

        <div class="form_line select_wrap">
            <select name="" id="select02" class="form_control input_select">
                <option value="">더미01</option>
                <option value="">더미02</option>
                <option value="">더미03</option>
                <option value="">더미04</option>
            </select>
            <select name="" id="select03" class="form_control input_select">
                <option value="">더미01</option>
                <option value="">더미02</option>
                <option value="">더미03</option>
                <option value="">더미04</option>
            </select>
            <select name="" id="select04" class="form_control input_select">
                <option value="">더미01</option>
                <option value="">더미02</option>
                <option value="">더미03</option>
                <option value="">더미04</option>
            </select>
        </div>

        <div class="form_line select_wrap disabled">
            <select name="" id="select05" class="form_control input_select disabled">
                <option value="">더미 - 비활성화</option>
                <option value="">더미02</option>
                <option value="">더미03</option>
                <option value="">더미04</option>
            </select>
        </div>

        <div class="guide_txt">파일 인풋</div>

        <!-- 
                  form_file  -  file 전용 form
                  invalid  -  하단부 피드백 텍스트 노출 유무 클래스
                -->
        <div class="form_line form_file invalid">
            <p class="form_title">사업자등록증</p>
            <div class="input_option">
                <input type="text" class="form_control" id="fileName" value="사업자등록증 확인" readonly>
                <label for="fileUpload" class="btn_input_add active">첨부</label>
                <input type="file" name="file_input" id="fileUpload">
            </div>
            <div class="invalid_feedback">10MB 이내의 jpg, gif, png, pdf 파일만 업로드 가능</div>
        </div>

        <!-- 셀렉트 필터 -->
        <div class="guide_txt">총갯수, 필터 - 컴포넌트 작성 : filterSelect</div>
        <p style="color: red; text-align: right; font-size: 18px">수정 필요</p>
        <div class="filter_wrapper">
            <span class="all_counter">총<span class="numbering">123</span>개</span>
            <div class="select_filter">
                <select name="" id="">
                    <option value="" selected>전체</option>
                    <option value="">상품 쿠폰</option>
                    <option value="">사용가능 쿠폰</option>
                    <option value="">사용만료 쿠폰</option>
                </select>
                <!-- <div class="select_filter select_filter_custom">
                      <img src="~/assets/img/common/ico_down_up.svg" alt="" />
                      <div class="select_filter_custom_wrapper">
                        <p class="select_filter_tit">전체</p>
                        <div class="select_filter_custom_wrap">
                          <button>전체</button>
                          <button>상품 쿠폰</button>
                          <button>사용가능 쿠폰</button>
                          <button>사용만료 쿠폰</button>
                        </div>
                      </div>
                    </div> -->
            </div>
        </div>
        <!-- 조회 -->
        <div class="guide_txt">날짜 조회 - period-inquiry 컴포넌트 작성</div>
        <div class="inquiry_wrapper">

            <p class="guide_txt02">type unset</p>
            <searchWrap />
            <p class="guide_txt02">type02</p>
            <searchWrap class="type02" />
            <p class="guide_txt02">type03</p>
            <searchWrap class="type03" />

        </div>



    </div>
</template>

<script>

import searchWrap from "~/components/form/period-search.vue"

export default {
    components: {
        searchWrap
    },
    layout: "basic",

}
</script>

<style></style>