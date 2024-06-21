<template>
    <div class="modal modal_basic modal_m" id="receiptPurchaseView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'상품쿠폰'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div id="experience-review" class=" experience-review">
                        <div class="cont_tit">
                            <h4 class="modal_cont_tit">신청사유</h4>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" class="form_control" placeholder="내용을 입력하세요"></textarea>
                        <div class="cont_tit">
                            <h4 class="modal_cont_tit">체험상품 배송지</h4>
                        </div>
                        <div class="col">
                            <div class="form_line">
                                <input type="text" name="address_01" id="address_01" placeholder="우편번호 찾기" value=""
                                    readonly="readonly" class="form_control form_search" />
                                <a href="javascript:void(0);" class="search_address">주소 검색</a>
                            </div>
                            <div class="form_line">
                                <input type="text" name="address_02" id="address_02" placeholder="기본주소" value=""
                                    class="form_control" />
                            </div>
                            <div class="form_line">
                                <input type="text" name="address_02" id="address_02" placeholder="상세주소" value=""
                                    class="form_control" />
                            </div>
                            <!-- 전화번호 -->
                            <div class="form_line">
                                <input type="number" name="" id="" placeholder="'-'없이 전화번호 숫자만 입력" minlength="8" class="form_control">
                            </div>

                        </div>
                        <div class="cont_tit">
                            <h4 class="modal_cont_tit">상품은 만족 하셨나요?</h4>
                        </div>
                        <div class="radio_wrap">
                            <input type="radio" name="evaluate" id="evaluate-01" class="input_radio" checked="" />
                            <label for="evaluate-01">만족</label>
                            <input type="radio" name="evaluate" id="evaluate-02" class="input_radio" checked="" />
                            <label for="evaluate-02">보통</label>
                            <input type="radio" name="evaluate" id="evaluate-02" class="input_radio" checked="" />
                            <label for="evaluate-02">아쉬움</label>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" class="form_control" placeholder="내용을 입력하세요"></textarea>
                        <div class="form-group file_area">
                            <ul>
                                <li>
                                    <div>
                                        <img src="~/static/img/sample/mc_sample_img_02.png" alt="썸네일" class="img_full" />
                                    </div>
                                    <button type="button" class="btn_file_del">
                                        <span class="screen_out">파일삭제</span>
                                    </button>
                                </li>
                                <li>
                                    <div>
                                        <img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full" />
                                    </div>
                                    <button type="button" class="btn_file_del">
                                        <span class="screen_out">파일삭제</span>
                                    </button>
                                </li>
                                <li>
                                    <div>
                                        <img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full" />
                                    </div>
                                    <button type="button" class="btn_file_del">
                                        <span class="screen_out">파일삭제</span>
                                    </button>
                                </li>
                                <li>
                                    <input type="file" id="file1" />
                                    <label for="file1" class="btn_file_add">
                                        <span class="screen_out">파일추가</span>
                                    </label>
                                </li>
                            </ul>
                            <div class="info_dot">
                                <p>5MB 이하의 사진 4장까지 첨부 가능</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="btn-wrap">
                    <!-- 가운데정렬 -->
                    <!-- 개별 사용 가능 -->
                    <button class="btn btn-middle btn-default" id="">취소</button>
                    <button class="btn btn-middle btn-attention" id="">등록</button>
                </div>
                <div class="txt_center">
                    <div class="info_dot">
                        등록하신 체험평은 해당 상품페이지의 체험평 영역에도 함께 노출됩니다.
                    </div>
                </div>
            </div>
            <popupButton class="modal_close_w" />
        </div>
    </div>
</template>

<script>
import popupHead from "~/components/popup/part/popup-basic-head.vue";
import popupButton from "~/components/popup/part/popup-basic-button.vue";
import inputPhone from "~/components/form/input-phone.vue";


export default {
    name: 'popupBase',
    components: {
        popupHead,
        popupButton,
        inputPhone
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>
