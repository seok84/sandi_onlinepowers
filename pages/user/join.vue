<template>
    <div id="joinView" class="userPages userPagesJoin">
        <div class="inner">
            <h2 class="title-h2">회원가입</h2>
            <div class="tab_container">
                <form action="" class="form_wrapper">
                    <!-- 회원정보 -->
                    <span class="title-area">
                        <h3>회원정보</h3>
                        <span class="col-right">필수입력사항</span>
                    </span>

                    <!-- 아이디 -->
                    <!-- 피드백이 모바일에서 레이아웃 깨지는 현상 ~ 0320 수정 -->
                    <!-- bt04 클래스 추가  -->
                    <div class="form_line invalid margin_none bt04">
                        <label class="form_title accent">아이디</label>
                        <div class="input_option form_id">
                            <input type="text" name="" id="" placeholder="아이디(6~12자 이내 영문, 숫자)" class="form_control"
                                minlength="6" value="">
                            <button type="button" class="btn_input_add">중복검사</button>
                        </div>
                        <div class="invalid_feedback">
                            아이디는 영문 대,소문자, 숫자를 이용하여 6~12자로 입력해주세요.
                        </div>
                    </div>

                    <!-- 비밀번호 -->
                    <div class="form_line invalid bt04">
                        <label class="form_title accent">비밀번호</label>
                        <input type="password" name="" id="" placeholder="비밀번호(8~16자 이내 영문, 숫자, 특수문자)" class="form_control"
                            minlength="6" value="">
                        <div class="invalid_feedback">
                            비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                        </div>
                    </div>


                    <!-- 비밀번호 재입력 -->
                    <div class="form_line bt04">
                        <label class="form_title accent">비밀번호 재입력</label>
                        <input type="password" name="" id="" placeholder="비밀번호 재입력" class="form_control" minlength="6"
                            value="">
                        <div class="invalid_feedback">
                            비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                        </div>
                    </div>

                    <!-- 이름 -->
                    <div class="form_line disabled bt01">
                        <label class="form_title accent">이름</label>
                        <input type="text" name="input_id01" id="input_id01" placeholder="김이름" class="form_control"
                            minlength="6">
                    </div>

                    <!-- 휴대폰번호 -->
                    <div class="form_line disabled bt01">
                        <label class="form_title accent">휴대폰번호</label>
                        <input type="number" placeholder="01012341234" class="form_control required">
                        <div class="invalid_feedback">
                            휴대폰 번호를 정확히 입력해주세요.
                        </div>
                    </div>

                    <!-- 이메일 -->
                    <div class="form_line email_wrap bt04">
                        <span class="form_title accent">이메일</span>
                        <input type="text" name="" id="" placeholder="example@company.com" value="" class="form_control">
                    </div>
                        <!-- 담당자 -->
                        <div class="form_line form_position bt04" v-if="userType === 'business'">
                            <span class="form_title">담당자</span>
                            <div class="form_line select_wrap">
                                <select name="" id="select01" class="form_control input_select input_select02">
                                    <option value="" selected disabled>직급/직책</option>
                                    <option value="">사원</option>
                                    <option value="">대리</option>
                                    <option value="">과장</option>
                                    <option value="">차장</option>
                                    <option value="">부장</option>
                                    <option value="">이사</option>
                                    <option value="">상무</option>
                                    <option value="">전무</option>
                                    <option value="">부사장</option>
                                    <option value="">사장</option>
                                    <option value="">부회장</option>
                                    <option value="">회장</option>
                                    <option value="">대표이사</option>
                                    <option value="">파트장</option>
                                    <option value="">팀장</option>
                                    <option value="">실장</option>
                                    <option value="">본부장</option>
                                    <option value="">사업부장</option>
                                    <option value="">인턴</option>
                                    <option value="">계장</option>
                                    <option value="">주임</option>
                                    <option value="">선임</option>
                                    <option value="">책임</option>
                                    <option value="">수석</option>
                                    <option value="">프로</option>
                                    <option value="">파트너</option>
                                    <option value="">매니저</option>
                                    <option value="">직접입력</option>
                                </select>
                            </div>
                            <input type="text" name="" id="" placeholder="직접입력" value="" class="form_control">
                        </div>

                    <!-- 성별/생년월일 -->
                    <div class="form_line radio_wrap select_gen select-area">
                        <label class="form_title">성별</label>
                        <input type="radio" name="sample11" id="radio11" class="input_radio lineheight-50" checked>
                        <label for="radio02" class="lineheight-50">미선택</label>
                        <input type="radio" name="sample11" id="radio22" class="input_radio lineheight-50">
                        <label for="radio03" class="lineheight-50">여성</label>
                        <input type="radio" name="sample11" id="radio33" class="input_radio lineheight-50">
                        <label for="radio04" class="lineheight-50">남성</label>
                    </div>
                    <div class="form_line disabled form-birth bt04">
                        <label class="form_title full">생년월일</label>
                        <div class="select_wrap">
                            <select name="" id="select02" class="form_control input_select bt01">
                                <option value="">1999</option>
                                <option value="">1998</option>
                                <option value="">1997</option>
                                <option value="">1996</option>
                            </select>
                            <select name="" id="select03" class="form_control input_select bt01">
                                <option value="">01</option>
                                <option value="">02</option>
                                <option value="">03</option>
                            </select>
                            <select name="" id="select04" class="form_control input_select">
                                <option value="">01</option>
                                <option value="">02</option>
                                <option value="">03</option>
                            </select>
                        </div>
                    </div>

                    <!-- 회원구분 -->
                    <div class="radio_wrap select_type select-area bt04">
                        <label class="form_title accent">회원구분</label>
                        <input type="radio" name="sample02" id="business" class="input_radio lineheight-50" checked
                            v-model="userType" value="business">
                        <label for="radio03" class="lineheight-50">사업자회원</label>
                        <input type="radio" name="sample02" id="general" class="input_radio lineheight-50"
                            v-model="userType" value="general">
                        <label for="radio04" class="lineheight-50">개인회원</label>
                    </div>

                    <div v-if="userType === 'business'" class="business-type">
                        <!-- 사업자 정보 -->
                        <span class="title-area">
                            <h3>사업자 정보</h3>
                            <span class="col-right">필수입력사항</span>
                        </span>

                        <!-- 회사명(상호) -->
                        <div class="form_line invalid bt04">
                            <label class="form_title accent">회사명(상호)</label>
                            <input type="text" name="" id="" placeholder="상호명" class="form_control" minlength="6" value="">
                            <div class="invalid_feedback">
                                상호명을 입력하세요
                            </div>
                        </div>

                        <!-- 대표자명 -->
                        <div class="form_line invalid bt04">
                            <label class="form_title">대표자명</label>
                            <input type="text" name="" id="" placeholder="대표자명" class="form_control" minlength="6" value="">
                            <div class="invalid_feedback">
                                대표자명을 입력하세요
                            </div>
                        </div>


                        <!-- 사업자등록번호 -->
                        <div class="form_line invalid bt04">
                            <label class="form_title">사업자등록번호</label>
                            <div class="input_option form_id">
                                <input type="text" name="" id="" placeholder="사업자등록번호(-제외 후 입력)" class="form_control"
                                    minlength="6" value="">
                                <button type="button" class="btn_input_add">중복검사</button>
                            </div>
                            <div class="invalid_feedback">
                                사업자등록번호는 -제외 후 입력해주세요
                            </div>
                        </div>
                        <!-- 주소 -->
                        <div class="address-input-area">
                            <div class="form_line">
                                <label for="input_id01" class="form-title">주소</label>
                                <div class="flex">
                                    <input type="text" name="addressId1" placeholder="우편번호" readonly="readonly"
                                        class="form-control address-input disabled" />
                                    <button type="button" class="search-address">주소검색</button>
                                </div>
                                <div class="invalid_feedback">
                                    우편번호를 입력해주세요.
                                </div>
                            </div>

                            <div class="form-line">
                                <input type="text" name="addressId2" placeholder="기본주소" class="form-control disabled"
                                    readonly />
                            </div>
                            <div class="form-line">
                                <input type="text" name="addressId3" placeholder="상세주소" class="form-control">
                            </div>
                        </div>

                        <!-- 업태/업종 -->
                        <div class="form_line business-category-area">
                            <label class="form_title">업태/업종</label>
                            <div class="flex-space-between">
                                <div class="form_line">
                                    <input type="text" placeholder="업태" name="businessType" class="form_control required">
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
                        <form-input-file />
                    </div>
                    <!-- 주소 -->
                    <div class="address-input-area" v-if="userType === 'general'">
                        <div class="form_line">
                            <label for="input_id01" class="form-title">주소</label>
                            <div class="flex">
                                <input type="text" name="addressId1" placeholder="우편번호" readonly="readonly"
                                    class="form-control address-input disabled" />
                                <button type="button" class="search-address">주소검색</button>
                            </div>
                            <div class="invalid_feedback">
                                우편번호를 입력해주세요.
                            </div>
                        </div>

                        <div class="form-line">
                            <input type="text" name="addressId2" placeholder="기본주소" class="form-control disabled"
                                readonly />
                        </div>
                        <div class="form-line">
                            <input type="text" name="addressId3" placeholder="상세주소" class="form-control">
                        </div>
                    </div>


                    <!--
                    <div class="agree-area">
                        <input id="termsAgreeInfo" type="checkbox" class="tab_toggle" />
                        <label class="tab_title" for="termsAgreeInfo">
                            <h3>수신동의</h3>
                        </label>
                        <div class="tab_contents">
                            <h4>E-mail 수신동의</h4>
                            <div class="box">
                                <p>
                                    수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 SMS / E-mail로 받아볼 수 있습니다.<br>
                                    (단, 회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.)
                                </p>
                                <div class="radio-wrap">
                                    <label><input type="radio">수신</label>
                                    <label><input type="radio">수신안함</label>
                                </div>
                            </div>

                            <h4>SMS 수신동의</h4>
                            <div class="box">
                                <p>
                                    수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 SMS / E-mail로 받아볼 수 있습니다.<br>
                                    (단, 회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.)
                                </p>
                                <div class="radio-wrap">
                                    <label><input type="radio">수신</label>
                                    <label><input type="radio">수신안함</label>
                                </div>
                            </div>
                        </div>
                    </div>-->

                    <!-- 수신동의 -->
                    <span class="title-area title-agree">
                        <h3>수신동의</h3>
                    </span>
                    <div class="tab_contents">
                        <div class="check_container invalid">
                            <!-- 모든 약관 동의 -->
                            <div class="check_wrap margin_none check_line">
                                <div>
                                    <label>
                                        <input id="termsAgreeInfo" type="checkbox" name="" class="input_check" />
                                        <span>모든 약관 동의</span>
                                    </label>
                                </div>
                            </div>
                            <!-- 이용약관 동의(필수) -->
                            <div class="check_wrap margin_none">
                                <div>
                                    <label>
                                        <input type="checkbox" name="" id="" class="input_check" checked>
                                        <span>이용약관 동의(필수)</span>
                                    </label>
                                </div>
                                <button>약관보기</button>
                            </div>
                            <!-- 개인정보의 수집 항목과 처리 목적(필수) -->
                            <div class="check_wrap margin_none">
                                <div>
                                    <label>
                                        <input id="termsAgreeInfo" type="checkbox" name="" class="input_check" checked />
                                        <span>개인정보의 수집 항목과 처리 목적(필수)</span>
                                    </label>
                                </div>
                                <button>약관보기</button>
                            </div>
                            <!-- 개인정보의 수집 항목과 처리 목적(선택) -->
                            <div class="check_wrap margin_none">
                                <div>
                                    <label>
                                        <input id="termsAgreeInfo" type="checkbox" name="" class="input_check" checked />
                                        <span>개인정보의 수집 항목과 처리 목적(선택)</span>
                                    </label>
                                </div>
                                <button>약관보기</button>
                            </div>
                            <!-- 마케팅 이용약관 동의(선택)  -->
                            <div class="check_wrap margin_none">
                                <div>
                                    <label>
                                        <input id="termsAgreeInfo" type="checkbox" name="" class="input_check" />
                                        <span>마케팅 이용약관 동의(선택) </span>
                                    </label>
                                </div>
                                <button>약관보기</button>
                            </div>
                            <!-- 광고성 정보 수신 동의(선택) -->
                            <div class="check_wrap margin_none">
                                <div>
                                    <label>
                                        <input id="termsAgreeInfo" type="checkbox" name="" class="input_check" />
                                        <span>광고성 정보 수신 동의(선택)</span>
                                    </label>
                                </div>
                                <button>약관보기</button>
                            </div>

                            <!-- 광고성 정보 수신 동의(선택) -->
                            <div class="box">
                                <div class="check_wrap">
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
                    </div>

                    <!-- 추천인/가입경로
                    <div>
                        <input id="inflowInfo" type="checkbox" class="tab_toggle" />
                        <label class="tab_title" for="inflowInfo">
                            <h3>추천인/가입경로</h3>
                        </label>
                        <inflow class="inflowInfo_tab" />
                    </div> -->

                    <!-- 환불정보
                    <div class="form_line bt01">
                        <label class="form_title">환불정보</label>
                        <input type="text" name="input_id01" id="input_id01" placeholder="예금주명" class="form_control" minlength="6">
                    </div>
                    <div class="refund_wrap input_wrap bt04">
                        <div class="form_line invalid select_wrap">
                            <select name="" id="select01" class="form_control input_select">
                                <option value="" disabled selected>은행명</option>
                                <option value="">우리은행</option>
                                <option value="">신한은행</option>
                                <option value="">국민은행</option>
                            </select>
                            <div class="invalid_feedback">
                                업태를 입력해주세요.
                            </div>
                        </div>
                        <div class="form_line invalid">
                            <input type="text" name="input_id01" id="input_id01" placeholder="계좌번호" class="form_control" minlength="6">
                            <div class="invalid_feedback">
                                업태를 입력해주세요.
                            </div>
                        </div>
                    </div> -->

                    <button type="submit" class="btn btn-primary">회원가입</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
import InputLabel from "~/components/form/input-label.vue";
import InputD from "~/components/form/input-d.vue";
import InputFile from "~/components/form/input-file.vue";
import inputAddress from "~/components/form/input-address.vue";
import receiveAgree from "~/components/form/receive-agree.vue";
import turmsAgree from "~/components/form/turms-agree.vue";
//import inflow from "~/components/form/inflow.vue";
import inputEmail from "~/components/form/input-email.vue";
import inputPhone from "~/components/form/input-phone.vue";

export default {
    name: 'joinView',
    components: {
        InputLabel,
        InputD,
        InputFile,
        inputAddress,
        receiveAgree,
        turmsAgree,
        //inflow,
        inputEmail,
        inputPhone
    },
    data() {
        return {
            titleMain: "일반회원가입",
            inputTitle: "일반 회원",
            tabName2: "사업자 회원",
            emailOptionsValue: "직접입력",
            userType: 'business',

        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/users.css');

#joinView {
    position: relative;
}
</style>