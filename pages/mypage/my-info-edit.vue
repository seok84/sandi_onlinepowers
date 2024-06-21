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
                        <h3>회원 정보 수정</h3>
                    </div>
                    <form action="" class="form_wrapper">
                        <ul class="user_info_modify">
                            <!-- 회원정보 -->
                            <li>
                                <input id="businessInfo" type="checkbox" class="tab_toggle" />
                                <label class="tab_title" for="businessInfo">
                                    <h4>회원정보</h4>
                                </label>
                                <div class="tab_contents">
                                    <div class="verification">
                                        <p>개명 또는 연락처 변경 시 본인인증을 진행 해주세요.</p>
                                        <button type="button" class="btn btn_lm btn-small btn_accent">본인인증</button>
                                    </div>

                                    <!-- 아이디 -->
                                    <div class="form_line disabled bt04">
                                        <label for="" class="form_title">아이디</label>
                                        <input type="text" name="" id="" placeholder="아이디(6~12자 이내 영문, 숫자)"
                                            class="form_control" minlength="6" value="abcd123" readonly>
                                    </div>

                                    <!-- 비밀번호 -->
                                    <!-- <div class="form_line invalid bt04">
                                        <label class="form_title accent">비밀번호</label>
                                        <input type="password" name="" id="" placeholder="비밀번호(8~16자 이내 영문, 숫자, 특수문자)"
                                            class="form_control" minlength="6" value="">
                                        <div class="invalid_feedback">
                                            비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                                        </div>
                                    </div> -->


                                    <!-- 비밀번호 재입력 -->
                                    <!-- <div class="form_line bt04">
                                        <label class="form_title accent">비밀번호 재입력</label>
                                        <input type="password" name="" id="" placeholder="비밀번호 재입력" class="form_control"
                                            minlength="6" value="">
                                        <div class="invalid_feedback">
                                            비밀번호(8~16자 이내 영문, 숫자, 특수문자)
                                        </div>
                                    </div> -->

                                    <!-- 이름, 전화번호 -->
                                    <div class="form_line disabled bt04">
                                        <label for="" class="form_title">이름</label>
                                        <input type="text" name="input_id01" id="input_id01" placeholder="홍길동" value="홍길동"
                                            class="form_control" minlength="6">
                                    </div>
                                    <div class="form_line disabled bt04">
                                        <label for="" class="form_title">전화번호</label>
                                        <input type="number" name="" id="" placeholder="'-'없이 전화번호 숫자만 입력" minlength="8"
                                            class="form_control">
                                    </div>

                                    <!-- 이메일 -->
                                    <div class="form_line email_wrap bt04">
                                        <span class="form_title accent">이메일</span>
                                        <input type="text" name="" id="" placeholder="example@company.com" value=""
                                            class="form_control">
                                    </div>
                                    <!-- 담당자 -->
                                    <div class="form_line form_position bt04"  v-if="userType === 'business'">
                                        <span class="form_title">담당자</span>
                                        <div class="form_line select_wrap bt01">
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


                                    <!-- 성별 -->
                                    <div class="radio_wrap select_gen select-area bt04">
                                        <label class="form_title">성별</label>
                                        <input type="radio" name="sample11" id="radio11" class="input_radio lineheight-50"
                                            checked>
                                        <label for="radio02" class="lineheight-50">미선택</label>
                                        <input type="radio" name="sample11" id="radio22" class="input_radio lineheight-50">
                                        <label for="radio03" class="lineheight-50">여성</label>
                                        <input type="radio" name="sample11" id="radio33" class="input_radio lineheight-50">
                                        <label for="radio04" class="lineheight-50">남성</label>
                                    </div>

                                    <!-- 생년월일 -->
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
                                        <label class="form_title">회원구분</label>
                                        <input type="radio" name="sample02" id="business" class="input_radio lineheight-50 disabled"
                                            checked v-model="userType" value="business">
                                        <label for="radio03" class="lineheight-50">사업자회원</label>
                                        <input type="radio" name="sample02" id="general" class="input_radio lineheight-50 disabled"
                                            v-model="userType" value="general">
                                        <label for="radio04" class="lineheight-50">개인회원</label>
                                    </div>

                                    <!-- 사업자 정보 -->
                                    <div v-if="userType === 'business'" class="business-type">
                                        <span class="title-area">
                                            <h3>사업자 정보</h3>
                                            <span class="col-right">필수입력사항</span>
                                        </span>

                                        <!-- 회사명(상호) -->
                                        <div class="form_line invalid bt04">
                                            <label class="form_title accent">회사명(상호)</label>
                                            <input type="text" name="" id="" placeholder="상호명" class="form_control"
                                                minlength="6" value="">
                                            <div class="invalid_feedback">
                                                상호명을 입력하세요
                                            </div>
                                        </div>

                                        <!-- 대표자명 -->
                                        <div class="form_line invalid bt04">
                                            <label class="form_title">대표자명</label>
                                            <input type="text" name="" id="" placeholder="대표자명" class="form_control"
                                                minlength="6" value="">
                                            <div class="invalid_feedback">
                                                대표자명을 입력하세요
                                            </div>
                                        </div>


                                        <!-- 사업자등록번호 -->
                                        <div class="form_line invalid bt04">
                                            <label class="form_title">사업자등록번호</label>
                                            <div class="input_option form_id">
                                                <input type="text" name="" id="" placeholder="사업자등록번호(-제외 후 입력)"
                                                    class="form_control" minlength="6" value="">
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
                                                    <input type="text" name="addressId1" placeholder="우편번호"
                                                        readonly="readonly" class="form-control address-input disabled" />
                                                    <button type="button" class="search-address">주소검색</button>
                                                </div>
                                                <div class="invalid_feedback">
                                                    우편번호를 입력해주세요.
                                                </div>
                                            </div>

                                            <div class="form-line">
                                                <input type="text" name="addressId2" placeholder="기본주소"
                                                    class="form-control disabled" readonly />
                                            </div>
                                            <div class="form-line">
                                                <input type="text" name="addressId3" placeholder="상세주소"
                                                    class="form-control">
                                            </div>
                                        </div>

                                        <!-- 업태/업종 -->
                                        <div class="form_line business-category-area">
                                            <label class="form_title">업태/업종</label>
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
                                            <input type="text" name="addressId2" placeholder="기본주소"
                                                class="form-control disabled" readonly />
                                        </div>
                                        <div class="form-line">
                                            <input type="text" name="addressId3" placeholder="상세주소" class="form-control">
                                        </div>
                                    </div>

                                    <!-- 환불정보 안들어간다고 함 -->
                                    <!-- 환불정보 -->
                                    <!-- <div class="form_line refund_container margin_none bt01">
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

                            <!-- 추천인/가입경로 -->
                            <li>
                                <input id="inflowInfo" type="checkbox" class="tab_toggle" />
                                <label class="tab_title" for="inflowInfo">
                                    <h4>추천인/가입경로</h4>
                                </label>
                                <inflow class="inflowInfo_tab" />
                            </li>
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
                                    <!-- 모든 약관 동의 -->
                                    <div class="check_wrap margin_none check_line">
                                        <div>
                                            <label>
                                                <input id="termsAgreeInfo" type="checkbox" name="" class="input_check" />
                                                <span>모든 약관 동의</span>
                                            </label>
                                        </div>
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
        return {
            userType: 'business',
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/mypage.css');
</style>