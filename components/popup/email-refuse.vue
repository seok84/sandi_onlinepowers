<template>
    <div class="modal modal_basic modal_m " id="emailRefuseView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'이메일수집거부'" />
            <div class="modal_body">
                <div class="modal_content">
                    <p>본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반 시 정보통신망 법에 의해 형사처벌 됨을
                        유념하시기 바랍니다.</p>
                    <p class="modal_date">게시일 : 2016년 1월 26일</p>
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
