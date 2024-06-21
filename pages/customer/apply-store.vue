<template>
    <div id="apply-store" class="customerPages">
        <TitleD1 :title-main="titleMain" />
        <div class="inner apply_inner">
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <Lnb class="customer4" />
                <!-- mypage-content 
                -->
                <div class="mypage-content">
                    <TitleMore :to="'javascript:void(0);'" :titleMain="'제휴/입점문의'" class="pc" />
                    <div class="apply_detail_list">
                        <!-- // start of form  -->
                        <form action="">
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
                            <div class="form_line ">
                                <input type="text" name="input_id01" id="input_id01" placeholder="기업명을 입력하세요" class="form_control">
                            </div>
                            <div class="form_line ">
                                <input type="text" name="input_id01" id="input_id01" placeholder="대표자명을 입력하세요"
                                    class="form_control">
                            </div>
                            <div class="form_line">
                                <input type="number" name="" id="" placeholder="연락가능한 휴대폰번호를 '-'없이 숫자만 입력하세요" minlength="8" class="form_control">
                            </div>
                            <div class="form_line email_wrap">
                                <input type="text" name="" id="" placeholder="수신가능한 이메일을 입력하세요" class="form_control"
                                    value="">
                            </div>
                            <div class="check_wrap">
                                <div>
                                    <label>
                                        <input type="checkbox" name="check07" id="check07" class="input_check"><span>
                                            개인정보 수집 · 이용목적 및<span class="divider"></span> 항목에 동의(필수)</span>
                                    </label>
                                </div>
                                <button>약관보기</button>
                            </div>
                            <div class="btn-wrap">
                                <button type="button" class="btn btn-middle btn-default btn_cancel">취소</button>
                                <button type="button" class="btn btn-middle btn-attention btn_save">저장</button>
                            </div>
                        </form>
                        <!-- // end of form  -->
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
    name: 'apply-store',
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
    mounted() {
    }
}
</script>

<style>
@import url('~/assets/css/pages/customer.css');
</style>