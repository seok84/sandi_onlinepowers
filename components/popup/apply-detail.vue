<template>
    <div class="modal modal_basic modal_m modal_full" id="applyDetailView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'Q&A'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div class="apply_detail_list">
                        <form action="">
                            <div class="form_line select_wrap">
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
                                <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력하세요"
                                    class="form_control"></textarea>
                            </div>
                        </form>
                        <div class="form-group file_area">
                            <ul>
                                <li>
                                    <div>
                                        <img src="~/assets/img/sample/sample_img.jpg" alt="썸네일" class="img_full">
                                    </div>
                                    <button type="button" class="btn_file_del"><span class="screen_out">파일삭제</span></button>
                                </li>
                                <li>
                                    <div>
                                        <img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full">
                                    </div>
                                    <button type="button" class="btn_file_del"><span class="screen_out">파일삭제</span></button>
                                </li>
                                <li>
                                    <div>
                                        <img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full">
                                    </div>
                                    <button type="button" class="btn_file_del"><span class="screen_out">파일삭제</span></button>
                                </li>
                                <li><input type="file" id="file1"> <label for="file1" class="btn_file_add"><span
                                            class="screen_out">파일추가</span></label></li>
                            </ul>
                            <div class="info_dot">
                                <p>5MB 이하의 사진 4장까지 첨부 가능</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn-wrap">
                    <button id="" class="btn btn-middle btn-default">취소</button>
                    <button id="" class="btn btn-middle btn-attention">저장</button>
                </div>
            </div>
            <popupButton class="modal_close_w" />
        </div>
    </div>
</template>

<script>
import popupHead from "~/components/popup/part/popup-basic-head.vue";
import popupButton from "~/components/popup/part/popup-basic-button.vue";


export default {
    name: 'popupBase',
    components: {
        popupHead,
        popupButton,
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>
