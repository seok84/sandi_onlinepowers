<template>
    <div id="apply-counseling" class="customerPages">
        <TitleD1 :title-main="titleMain" />
        <div class="inner apply_inner">
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <Lnb class="customer6" />
                <!-- mypage-content 
                -->
                <div class="mypage-content">
                    <TitleMore :to="'javascript:void(0);'" :titleMain="'카페 솔루션 서비스 상담'" class="pc" />
                    <div class="txt_info_wrap">
                        <img src="~/static/img/sample/cafe-solution-01.png">
                        <a href="#anchor">
                            <img src="~/static/img/sample/cafe-solution-02.png">
                        </a>
                        <img src="~/static/img/sample/cafe-solution-03.png">
                        <!-- <p class="tit">카페 솔루션 서비스 상담 예약</p>
                        <p class="info_dot">서울, 인천, 경기(일부) 직배송 구역에 한하여 카페 솔루션 서비스 상담을 진행합니다.</p>
                        <p class="info_dot">사용중인 원두를 새롭게 변화시켜 매장 커피맛을 업그레이드 하고자 하는 매장의 상담을 진행합니다.
                        </p>
                        <p class="info_dot">프렌차이즈 매장의 경우, 상담 제한이 있을 수 있습니다. 단, 계약종료를 앞두어 개인매장으로 전환하려는 매장은 상담이 진행 됩니다.
                        </p>
                        <p class="info_dot">매주 금요일 오전 10시 이후, 담당 커피 스페셜리스트가 연락 드린 후 상담 일정을 확정하도록 하겠습니다.</p>
                        <p class="info_dot">상담 일정에 따라 원하시는 일정에 상담이 어려울 수도 있습니다.</p> -->
                    </div>
                    <div class="survey_wrapper">
                        <span id="anchor"></span>
                        <div class="question_wrapper" id="question01">
                            <p class="qna_tit">샌디에서 원두를 구매 해본 경험이 있으신가요?</p>
                            <div class="radio_wrap">
                                <div>

                                    <input type="radio" name="question01" id="radio01" class="input_radio" checked="">
                                    <label for="radio01">예</label>
                                </div>
                                <div>

                                    <input type="radio" name="question01" id="radio02" class="input_radio">
                                    <label for="radio02">아니오</label>
                                </div>
                            </div>
                        </div>
                        <div class="question_wrapper" id="question02">
                            <p class="qna_tit">상담을 원하시는 날짜 및 시간대를 작성해주세요.</p>
                            <div class="form_line ">
                                <input type="text" name="counselTime" id="counselTime" placeholder="" class="form_control">
                            </div>
                        </div>
                        <div class="question_wrapper" id="question03">
                            <p class="qna_tit">찾고 있는 원두 가격대는 얼마인가요?</p>
                            <div class="radio_wrap col">
                                <div>
                                    <input type="radio" name="radio11" id="question011" class="input_radio" checked="">
                                    <label for="radio11">15,000원 이하</label>
                                </div>
                                <div> <input type="radio" name="radio11" id="question012" class="input_radio">
                                    <label for="radio11">15,000원 ~ 20,000원</label>
                                </div>
                                <div> <input type="radio" name="radio11" id="question013" class="input_radio">
                                    <label for="radio11">20,000원 ~ 25,000원</label>
                                </div>
                                <div> <input type="radio" name="radio11" id="question014" class="input_radio">
                                    <label for="radio11">25,000원 ~ 30,000원</label>
                                </div>
                                <div> <input type="radio" name="radio11" id="question015" class="input_radio">
                                    <label for="radio11">30,000원 이상</label>
                                </div>
                            </div>
                        </div>
                        <div class="question_wrapper" id="question04">
                            <p class="qna_tit">찾고 있는 원두는 어떤 맛인가요?</p>
                            <div class="radio_wrap">
                                <div> <input type="radio" name="question04" id="question04" class="input_radio" checked="">
                                    <label for="radio01">고소한 맛</label>
                                </div>
                                <div> <input type="radio" name="question04" id="question04" class="input_radio">
                                    <label for="radio02">상큼한 산미</label>
                                </div>
                                <div> <input type="radio" name="question04" id="question04" class="input_radio">
                                    <label for="radio02">부드러운 맛</label>
                                </div>
                                <div> <input type="radio" name="question04" id="question04" class="input_radio">
                                    <label for="radio02">쓴맛</label>
                                </div>
                                <div><input type="radio" name="question04" id="question04" class="input_radio">
                                    <label for="radio02">기타</label>
                                </div>





                            </div>
                        </div>
                        <div class="question_wrapper" id="question05">
                            <p class="qna_tit">아메리카노 1잔을 얼마에 판매중이신가요?</p>
                            <div class="radio_wrap">
                                <div><input type="radio" name="question05" id="question05" class="input_radio" checked="">
                                    <label for="radio01">2,000원 이하</label>
                                </div>
                                <div><input type="radio" name="question05" id="question05" class="input_radio">
                                    <label for="radio02">2,000원 ~ 2,500원</label>
                                </div>
                                <div><input type="radio" name="question05" id="question05" class="input_radio">
                                    <label for="radio02">2,500원 ~ 3,000원</label>
                                </div>
                                <div><input type="radio" name="question05" id="question05" class="input_radio">
                                    <label for="radio02">3,000원 이상</label>
                                </div>




                            </div>
                        </div>
                        <div class="question_wrapper" id="question06">
                            <p class="qna_tit">매장에서 한달 동안 사용하는 원두의 양을 선택해주세요.</p>
                            <div class="radio_wrap">
                                <div> <input type="radio" name="question06" id="question06" class="input_radio" checked="">
                                    <label for="radio01">20kg 이하</label>
                                </div>
                                <div><input type="radio" name="question06" id="question06" class="input_radio">
                                    <label for="radio02">20kg ~ 50kg</label>
                                </div>
                                <div><input type="radio" name="question06" id="question06" class="input_radio">
                                    <label for="radio02">50kg ~ 100kg</label>
                                </div>
                                <div><input type="radio" name="question06" id="question06" class="input_radio">
                                    <label for="radio02">100kg 이상</label>
                                </div>
                            </div>
                        </div>
                        <div class="question_wrapper" id="question07">
                            <p class="qna_tit">그 외 전달하고 싶은 내용을 작성해주세요.</p>
                            <div class="form_line ">
                                <input type="text" name="writeDesc" id="writeDesc" placeholder="" class="form_control">
                            </div>
                        </div>
                    </div>
                    <div class="apply_detail_list">
                        <form action="">

                            <div class="form_line ">
                                <label for="input_id01" class="form_title">고객정보</label>
                                <input type="text" name="input_id01" id="input_id01" placeholder="카페명을 입력하세요"
                                    class="form_control">
                            </div>
                            <!-- <div class="form_line">
                                <input type="text" name="address_01" id="address_01" placeholder="우편번호 찾기"
                                    class="form_control  form_search" value="" readonly="">
                                <a href="javascript:void(0);" class="search_address">주소 검색</a>
                            </div>
                            <div class="form_line ">
                                <input type="text" name="address_basic" id="address_basic" placeholder="기본주소"
                                    class="form_control">
                            </div> -->
                            <div class="form_line ">
                                <input type="text" name="address_details" id="address_details" placeholder="주소를 입력하세요"
                                    class="form_control">
                            </div>
                            <div class="form_line ">
                                <input type="text" name="input_id02" id="input_id02" placeholder="담당자명"
                                    class="form_control">
                            </div>
                            <!-- 전화번호 -->
                        <div class="form_line">
                            <input type="number" name="" id="" placeholder="'-'없이 전화번호 숫자만 입력" minlength="8" class="form_control">
                        </div>
                            <!-- 이메일 -->
                            <div class="form_line email_wrap">
                                <input type="text" name="" id="" placeholder="example@company.com" class="form_control"
                                    value="">
                            </div>
                            <div class="check_wrap">
                                <div>
                                    <label>
                                        <input type="checkbox" name="check07" id="check07" class="input_check">
                                        <span>개인정보 수집 · 이용목적 및<span class="divider"></span> 항목에 동의(필수)</span>
                                    </label>
                                </div>
                                <button>약관보기</button>
                            </div>
                            <div class="btn-wrap">
                                <!-- 개별 사용 가능 -->
                                <button class="btn btn-middle btn-default">취소</button>
                                <button class="btn btn-middle btn-attention">저장</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TitleD1 from "~/components/text/title-default.vue";
import Lnb from "~/components/layout/lnb-customer.vue";
import TitleMore from "~/components/text/title-more.vue";

import inputPhone from "~/components/form/input-phone.vue";

export default {
    name: 'apply-counseling',
    components: {
        TitleD1,
        Lnb,
        TitleMore,

        inputPhone

    },
    data() {
        return {
            titleMain: "고객센터",
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/customer.css');
</style>