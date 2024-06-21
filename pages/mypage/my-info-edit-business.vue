<template>
    <div id="myInfoEditView" class="myInfo">
        <h2 class="title-h2 pc">마이페이지</h2>
        <h2 class="title-h2 mobile">회원정보 수정</h2>
        <div class="inner">
            <etc-mypage-info />
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-mypage class="general" />
                <!-- mypage-content -->
                <div class="mypage-content">
                    <div class="sub_tit pc">
                        <h3>사업자 정보</h3>
                    </div>
                    <form action="" class="form_wrapper">
                        <ul class="user_info_modify">
                            <!-- 필수 정보 -->
                            <li>
                                <input id="businessInfo" type="checkbox" class="tab_toggle" />
                                <label class="tab_title mt-0" for="businessInfo">
                                    <h4>필수정보</h4>
                                </label>
                                <div class="tab_contents">
                                    <div class="verification">
                                        <p>개명 또는 연락처 변경 시 본인인증을 진행 해주세요.</p>
                                        <button type="button" class="btn btn_lm btn-small btn-black">본인인증</button>
                                    </div>

                                    <!-- 상호 -->
                                    <div class="form_line disabled bt01">
                                        <label class="form_title accent">상호</label>
                                        <input type="text" placeholder="상호명" class="form_control" disabled>
                                    </div>

                                    <!-- 대표자명 -->
                                    <div class="form_line disabled bt01">
                                        <label class="form_title accent">대표자명</label>
                                        <input type="text" placeholder="대표자명" class="form_control" disabled>
                                    </div>

                                    <!-- 사업자등록번호 -->
                                    <div class="form_line invalid margin_none bt04">
                                        <label class="form_title accent">사업자등록번호</label>
                                        <div class="input_option"><input type="text" placeholder="사업자등록번호(-제외 후 입력)"
                                                class="form_control">
                                            <button type="button" class="btn_input_add active">확인</button>
                                        </div>
                                        <div class="invalid_feedback">
                                            유효하지 않은 사업자등록번호입니다.
                                        </div>
                                    </div>

                                    <!-- 주소 -->
                                    <div class="address-input-area">
                                        <div class="form_line bt01">
                                            <label for="input_id01" class="form-title">주소</label>
                                            <div class="flex">
                                                <input type="text" name="addressId1" placeholder="우편번호"
                                                    class="form-control address-input readonly" readonly>
                                                <button type="button" class="search-address"
                                                    @click="openDaumPostcode()">주소검색
                                                </button>
                                            </div>
                                            <div class="invalid_feedback">
                                                우편번호를 입력해주세요.
                                            </div>
                                        </div>

                                        <div class="form_line bt01">
                                            <input type="text" placeholder="기본주소" class="form-control"
                                                name="jibunAddress" readonly>
                                            <div class="invalid_feedback">
                                                기본주소를 입력해주세요.
                                            </div>
                                        </div>

                                        <div class="form_line bt04">
                                            <input type="text" name="addressDetail" placeholder="상세주소"
                                                class="form-control required">
                                            <div class="invalid_feedback">
                                                상세주소를 입력해주세요.
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 업태/업종 -->
                                    <div class="form_line business-category-area">
                                        <label class="form_title accent">업태/업종</label>
                                        <div class="flex-space-between">
                                            <div class="form_line">
                                                <input type="text" placeholder="업태" name="businessType"
                                                    class="form_control required">
                                                <div class="invalid_feedback">
                                                    업태를 입력해주세요.
                                                </div>
                                            </div>
                                            <div class="form_line">
                                                <input type="text" placeholder="업종" class="form_control required">
                                                <div class="invalid_feedback">
                                                    업종을 입력해주세요.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 사업자등록증 -->
                                    <div class="form_line invalid margin_none bt04 file-upload-area">
                                        <label class="form_title accent">사업자등록증</label>
                                        <div class="input_option">
                                            <span class="placehoder">사업자등록증 확인</span>
                                            <input type="file" placeholder="사업자등록증 확인" class="form_control">
                                            <button type="button" class="btn_input_add active">첨부</button>
                                        </div>
                                        <p>
                                            10MB 이내의 jpg, gif, png, pdf 파일만 업로드 가능
                                        </p>
                                    </div>

                                    <!-- 아이디 -->
                                    <div class="form_line invalid margin_none bt04">
                                        <label class="form_title accent">아이디</label>
                                        <div class="input_option">
                                            <input type="text" name="" id="" placeholder="아이디(6~12자 이내 영문, 숫자)"
                                                minlength="6" value="" class="form_control readonly" readonly>
                                            <button type="button" class="btn_input_add active">중복검사</button>
                                        </div>
                                        <div class="invalid_feedback">
                                            아이디는 영문 대,소문자, 숫자를 이용하여 6~12자로 입력해주세요.
                                        </div>
                                    </div>

                                    <!-- 비밀번호 -->
                                    <div class="form_line invalid bt04">
                                        <label class="form_title accent">비밀번호</label>
                                        <input type="password" name="" id="" placeholder="비밀번호(8~16자 이내 영문, 숫자, 특수문자)"
                                            minlength="6" value="" class="form_control">
                                        <div class="invalid_feedback">
                                            비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                                        </div>
                                    </div>

                                    <div class="form_line bt04">
                                        <label class="form_title accent">비밀번호 재입력</label>
                                        <input type="password" name="" id="" placeholder="비밀번호 재입력" minlength="6"
                                            value="" class="form_control">
                                        <div class="invalid_feedback">
                                            비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                                        </div>
                                    </div>

                                    <!-- 이름, 전화번호-->
                                    <div class="form_line disabled bt04">
                                        <label class="form_title accent">이름</label>
                                        <input type="text" name="input_id01" id="input_id01" placeholder="홍길동"
                                            minlength="6" class="form_control">
                                    </div>
                                    
                                    <div class="form_line disabled bt04">
                                        <label class="form_title accent">휴대폰번호</label>
                                        <input type="number" placeholder="01012341234" class="form_control">
                                    </div>

                                    <!-- 이메일-->
                                    <div class="form_line email_wrap bt04"><span class="form_title accent">이메일</span>
                                        <input type="text" name="" id="" placeholder="example@company.com" value=""
                                            class="form_control">
                                    </div>

                                    <!-- 성별-->
                                    <div class="radio_wrap select_gen select-area"><label class="form_title">성별</label>
                                        <input type="radio" name="gender" id="radio02" value="" checked="checked"
                                            class="input_radio"> <label for="radio02">미선택</label> <input type="radio"
                                            name="sample02" value="F" id="radio03"> <label for="radio03">여성</label>
                                        <input type="radio" name="sample02" value="M" id="radio04"> <label
                                            for="radio04">남성</label>
                                    </div>
                                    <div class="form_line select_wrap disabled bt04"><select name="" id="select02" class="form_control input_select bt01" style="color: rgb(185, 185, 185);">
                                            <option value="">1999</option>
                                            <option value="">1998</option>
                                            <option value="">1997</option>
                                            <option value="">1996</option>
                                        </select> <select name="" id="select03" class="form_control input_select bt01"
                                            style="color: rgb(185, 185, 185);">
                                            <option value="">01</option>
                                            <option value="">02</option>
                                            <option value="">03</option>
                                        </select> <select name="" id="select04" class="form_control input_select"
                                            style="color: rgb(185, 185, 185);">
                                            <option value="">01</option>
                                            <option value="">02</option>
                                            <option value="">03</option>
                                        </select>
                                    </div>

                                    <!-- 환불정보
                                    <div class="form_line refund_container margin_none bt01">
                                        <span class="form_title">환불정보</span>
                                        <input type="text" name="input_id01" id="input_id01" placeholder="예금주명"
                                            class="form_control" minlength="6">
                                    </div>
                                    <div class="refund_wrap input_wrap">
                                        <div class="form_line select_wrap">
                                            <select name="" id="select01" class="form_control input_select">
                                                <option value="" disabled selected>은행명</option>
                                                <option value="">우리은행</option>
                                                <option value="">신한은행</option>
                                                <option value="">국민은행</option>
                                            </select>
                                        </div>
                                        <div class="form_line">
                                            <input type="text" name="input_id01" id="input_id01" placeholder="계좌번호"
                                                class="form_control" minlength="6">
                                        </div>
                                    </div> -->
                                </div>
                            </li>

                            <!-- 추천인/가입경로
                            <li>
                                <input id="inflowInfo" type="checkbox" class="tab_toggle" />
                                <label class="tab_title" for="inflowInfo">
                                    <h4>추천인/가입경로</h4>
                                </label>
                                <inflow class="inflowInfo_tab" />
                            </li> -->
                            <!-- 수신동의 
                            <li>
                                <input id="receiveAgreeInfo" type="checkbox" class="tab_toggle" />
                                <label class="tab_title" for="receiveAgreeInfo">
                                    <h4>수신동의</h4>
                                </label>
                                <receiveAgree />
                            </li>
                            -->
                            <li>
                                <!-- 수신동의 -->
                                <div class="check_container invalid">
                                    <!-- 광고성 정보 수신 동의(선택) -->
                                    <div class="check_wrap">
                                        <div>
                                            <label>
                                                <input id="termsAgreeInfo" type="checkbox" name=""
                                                    class="input_check" />
                                                <span>광고성 정보 수신 동의(선택)</span>
                                            </label>
                                        </div>
                                        <button>약관보기</button>
                                    </div>

                                    <!-- 광고성 정보 수신 동의(선택) -->
                                    <div class="box">
                                        <div class="check_wrap margin_none">
                                            <div>
                                                <label>
                                                    <input type="checkbox" name="" class="input_check" />
                                                    <span>sns 수신동의(선택)</span>
                                                </label>
                                            </div>
                                            <button>약관보기</button>
                                        </div>
                                        <div class="check_wrap margin_none">
                                            <div>
                                                <label>
                                                    <input type="checkbox" name="" class="input_check" />
                                                    <span>E-mail 수신동의 (선택)</span>
                                                </label>
                                            </div>
                                            <button>약관보기</button>
                                        </div>
                                    </div>


                                    <!-- 피드백 -->
                                    <div class="invalid_feedback">
                                        필수 약관에 동의해 주세요.
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="btn-wrap">
                            <button class="btn btn-middle btn-default">회원탈퇴</button>
                            <button class="btn btn-middle btn-attention">저장</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import InputFile from "~/components/form/input-file.vue";
    import inputAddress from "~/components/form/input-address.vue";
    import receiveAgree from "~/components/form/receive-agree.vue";
    import inflow from "~/components/form/inflow.vue";

    export default {
        name: 'myInfoEditView',
        components: {
            InputFile,
            inputAddress,
            receiveAgree,
            inflow,

        },
        data() {
            return {};
        },
    }
</script>

<style>
    @import url('~/assets/css/pages/mypage.css');
</style>