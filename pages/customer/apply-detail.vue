<template>
    <div id="customer-apply-detail" class="customerPages">
        <h2 class="title-h2">고객센터</h2>
        <div class="inner">
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <Lnb class="customer3" />
                <!-- mypage-content 
                -->
                <div class="mypage-content">
                    <TitleMore :to="'javascript:void(0);'" :titleMain="'Q&A'" />
                    <div class="apply_detail_list">
                        <form action="">
                            <div class="form_line select_wrap apply_detail_list_top">
                                <select name="" id="select01" class="form_control input_select input_select02">
                                    <option value="">문의 유형을 설정해주세요.</option>
                                    <option value="">회원정보</option>
                                    <option value="">상품관련</option>
                                    <option value="">주문결제</option>
                                    <option value="">배송</option>
                                    <option value="">교환반품수리</option>
                                    <option value="">포인트</option>
                                    <option value="">기타</option>
                                </select>
                            </div>
                            <div class="form_line">
                                <input type="text" name="apply_tit" id="apply_tit" placeholder="제목을 입력하세요"
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
                            <div class="btn-wrap">
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


export default {
    name: 'customer-apply-detail',
    components: {
        TitleD1,
        Lnb,
        TitleMore,


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
@import url('~/assets/css/pages/mypage.css');
</style>