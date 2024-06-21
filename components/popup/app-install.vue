<template>
    <div class="modal modal_basic modal_full app_install_modal" id="appInstallView">
        <div class="modal_wrapper">
            <div class="modal_body">
                <div class="modal_content">
            <div class="content_top">
                <img src="~/assets/img/app/ico-app.svg">
                <strong>
                    앱에서 더 쉽게,<br/>
                    간편하게 로그인하기
                </strong>
            </div>
            <nuxt-link to="/" class="app_link">편리한 앱으로 보기</nuxt-link>
            <p @click="closeModal">모바일 웹으로 볼래요</p>
        </div>
            </div>
        </div>
    </div>

</template>

<script>


export default {
    name: 'popupBase',
    methods: {
        closeModalDim() {
            const modalDim = document.querySelector(".dimmed_bg");
            modalDim.remove();
        },
        closeModal() {
            const body = document.querySelector("body");
            const modal = document.querySelectorAll(".modal_basic");
            body.classList.remove("scrollNone");
            modal.forEach(e => {
                e.classList.remove("show");
            });
            this.closeModalDim();
        },
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>
