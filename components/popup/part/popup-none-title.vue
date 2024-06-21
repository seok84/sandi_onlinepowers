<template>
    <div class="modal modal_basic modal_m">
        <div class="modal_wrapper">
            <div class="modal_content">
                <popupHead :popupHeadTitle="'팝업타이틀'" />
                <div class="modal_body"></div>
                <popupButton />
            </div>
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