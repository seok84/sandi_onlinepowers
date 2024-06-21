<template>
    <div class="modal modal_basic modal_m" id="deliveryElseView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'수정해야함'" />
            <div class="modal_body">
                <div class="modal_content">

                </div>
            </div>
            <popupButton class="modal_close_w" />

        </div>
    </div>
</template>

<script>
import popupHead from "~/components/popup/part/popup-basic-head.vue";
import popupButton from "~/components/popup/part/popup-basic-button.vue";;


export default {
    name: 'popupBase',
    data() {
        return {
            popupHeadTitle: "팝업타이틀",
        }
    },
    components: {
        popupHead,
        popupButton,
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>