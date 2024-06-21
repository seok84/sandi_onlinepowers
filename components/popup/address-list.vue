<template>
    <div class="modal modal_basic modal_m modal_full" id="addressListView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'배송지 목록'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div id="address-list" class=" address-list">
                        <ul class="delivery_list">
                            <li>
                                <div class="radio_wrap">
                                    <input type="radio" id="ship_check1" title="선택" name="ship_check" checked="" />
                                    <label for="ship_check1">
                                        <p class="name"><span>집</span>김민석</p>
                                    </label>
                                </div>
                                <div class="txt_area">
                                    <p class="user">
                                        김민석<span class="basic_address">(기본)</span>
                                    </p>
                                    <p class="address">
                                        서울특별시 구로구 디지털로27길 24 405 온라인파워스 1동 711호
                                    </p>
                                    <p class="phone">010-1234-5678</p>
                                </div>
                            </li>
                            <li>
                                <div class="radio_wrap">
                                    <input type="radio" id="ship_check2" title="선택" name="ship_check" />
                                    <label for="ship_check2">
                                        <p class="name"><span>회사</span>김민석</p>
                                    </label>
                                </div>
                                <div class="txt_area">
                                    <p class="user">김민석</p>
                                    <p class="address">
                                        서울특별시 구로구 디지털로27길 24 405 온라인파워스 1동 711호
                                    </p>
                                    <p class="phone">010-1234-5678</p>
                                </div>
                            </li>
                            <li>
                                <div class="radio_wrap">
                                    <input type="radio" id="ship_check1" title="선택" name="ship_check" checked="" />
                                    <label for="ship_check1">
                                        <p class="name"><span>집</span>김민석</p>
                                    </label>
                                </div>
                                <div class="txt_area">
                                    <p class="user">
                                        김민석<span class="basic_address">(기본)</span>
                                    </p>
                                    <p class="address">
                                        서울특별시 구로구 디지털로27길 24 405 온라인파워스 1동 711호
                                    </p>
                                    <p class="phone">010-1234-5678</p>
                                </div>
                            </li>
                            <li>
                                <div class="radio_wrap">
                                    <input type="radio" id="ship_check2" title="선택" name="ship_check" />
                                    <label for="ship_check2">
                                        <p class="name"><span>회사</span>김민석</p>
                                    </label>
                                </div>
                                <div class="txt_area">
                                    <p class="user">김민석</p>
                                    <p class="address">
                                        서울특별시 구로구 디지털로27길 24 405 온라인파워스 1동 711호
                                    </p>
                                    <p class="phone">010-1234-5678</p>
                                </div>
                            </li>
                            <li>
                                <div class="radio_wrap">
                                    <input type="radio" id="ship_check1" title="선택" name="ship_check" checked="" />
                                    <label for="ship_check1">
                                        <p class="name"><span>집</span>김민석</p>
                                    </label>
                                </div>
                                <div class="txt_area">
                                    <p class="user">
                                        김민석<span class="basic_address">(기본)</span>
                                    </p>
                                    <p class="address">
                                        서울특별시 구로구 디지털로27길 24 405 온라인파워스 1동 711호
                                    </p>
                                    <p class="phone">010-1234-5678</p>
                                </div>
                            </li>
                            <li>
                                <div class="radio_wrap">
                                    <input type="radio" id="ship_check2" title="선택" name="ship_check" />
                                    <label for="ship_check2">
                                        <p class="name"><span>회사</span>김민석</p>
                                    </label>
                                </div>
                                <div class="txt_area">
                                    <p class="user">김민석</p>
                                    <p class="address">
                                        서울특별시 구로구 디지털로27길 24 405 온라인파워스 1동 711호
                                    </p>
                                    <p class="phone">010-1234-5678</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="no_content"><p>배송지 목록이 없습니다</p></div>
                <!-- 버튼 -->
                <div class="btn-wrap">
                    <button id="" class="btn btn-middle btn-default">취소</button>
                    <button id="" class="btn btn-middle btn-attention">등록</button>
                    <div class="btn_block">
                        <button class="btn btn-black">배송지 추가</button>
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

export default {
    name: 'popupBase',
    components: {
        popupHead,
        popupButton,
    },
    mounted() {
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>