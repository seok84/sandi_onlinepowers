<template>
    <div id="apply-store" class="customerPages">
        <h2 class="title-h2">고객센터</h2>
        <div class="inner apply_inner">
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-customer class="customer5" />
                <!-- mypage-content 
                -->
                <div class="mypage-content">
                    <h3 class="sub_tit pc"><a href="javascript:void(0);" class="linked_arr">샌디몰 견적문의</a></h3>
                    <form action="">
                        <div class="apply_detail_list">
                            <h4 class="form_cont_tit">문의내용</h4>
                            <div class="form_line select_wrap apply_detail_list_top">
                                <select name="" id="select01" class="form_control input_select input_select02">
                                    <option value="">문의유형선택</option>
                                    <option value="">더미02</option>
                                    <option value="">더미03</option>
                                    <option value="">더미04</option>
                                </select>
                            </div>
                            <div class="form_line">
                                <input type="text" name="apply_tit" id="apply_tit" placeholder="제목을 입력하세요"
                                    class="form_control" value="">
                            </div>
                            <div class="form_line">
                                <input type="text" name="apply_tit" id="apply_representative" placeholder="대표자명을 입력하세요"
                                    class="form_control" value="">
                            </div>
                            <div class="form_line">
                                <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력하세요"
                                    class="form_control"></textarea>
                            </div>
                            <div class="form-group file_area">
                                <input type="file" name="chosen_file" id="chosen_file">
                                <label for="chosen_file" class="btn btn-default btn-small chosen_file_btn">파일선택</label>
                                <span class="chosen_file_name">선택된 파일 없음</span>
                                <p class="info_dot">제품리스트를 파일로 첨부하시면 빠른 견적 진행 가능합니다.</p>
                                <p class="info_dot">10MB 이내의 jpg, gif, png, pdf 파일만 업로드 가능합니다.</p>
                            </div>
                            <h4 class="form_cont_tit">고객정보</h4>
                            <div class="form_line">
                                <input type="text" name="input_id01" id="input_id01" placeholder="회사명" class="form_control">
                            </div>
                            <div class="form_line ">
                                <input type="text" name="input_id01" id="input_id01" placeholder="담당자명"
                                    class="form_control">
                            </div>
                            <!-- 전화번호 -->
                            <div class="form_line bt04">
                                <input type="number" name="" id="" placeholder="'-'없이 전화번호 숫자만 입력" minlength="8" class="form_control">
                            </div>
                            <!-- 이메일 -->
                            <div class="form_line email_wrap bt04">
                                <span class="form_title accent">이메일</span> 
                                <input type="text" name="" id="" placeholder="example@company.com" value="" class="form_control">
                            </div>
                            <div class="check_wrap">
                                <div>
                                    <label>
                                        <input type="checkbox" name="check07" id="check07" class="input_check"><span>개인정보
                                            수집·이용목적 및 항목에 동의(필수)</span>
                                    </label>
                                </div>
                                <button>약관보기</button>
                            </div>
                            <div class="btn-wrap">
                                <!-- 개별 사용 가능 -->
                                <button class="btn btn-middle btn-default">취소</button>
                                <button class="btn btn-middle btn-attention">저장</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TitleD1 from "~/components/text/title-default.vue";
import TitleMore from "~/components/text/title-more.vue";
import inputEmail from "~/components/form/input-email.vue";
import inputPhone from "~/components/form/input-phone.vue";

export default {
    name: 'apply-store',
    components: {
        TitleD1,
        TitleMore,
        inputEmail,
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