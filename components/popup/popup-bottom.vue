<template>
    <div class="modal modal_basic modal_m modal_full modal_mobile" id="bottomPopupView">
        <div class="modal_wrapper">
            <div class="modal_body">
                <div class="modal_content">
                    <a href="/">
                        <img :src="modalBannerImage" :alt="modalBannerAlt">
                    </a>
                </div>
                <!-- 버튼 -->
                <div class="btn-wrap">
                    <button class="btn btn-middle btn-default" @click="noMoreTodayBtn">오늘 하루 보지않기</button>
                    <button class="btn btn-middle btn-default" @click="closeModal">닫기</button>
                </div>
            </div>
            <!-- <popupButton class="modal_close_w" /> -->
        </div>
    </div>
</template>

<script>
import popupButton from "~/components/popup/part/popup-basic-button.vue";


export default {
    name: 'popupBase',
    components: {
        popupButton,
    },
    data() {
        return {
            modalBannerImage: require("~/assets/img/sample/open_pop.png"),
            modalBannerAlt: "우리카페 긴급출동119 사전예약 3천만원 상당 증정품 증정!",
        }
    },
    mounted() {

    },
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
        /* 오늘하루보지않기 */
        noMoreTodayBtn() {


            console.log('로컬스토레이지 작동');
        }

    }
}
</script>

<style scoped>
@import url('~/assets/css/layouts/modal-ui.css');

.modal_mobile.modal.show {
    width: auto;
    height: auto;
    left: 100px;
    top: 200px;
}
.modal_mobile .modal_wrapper {
    width: auto;
}
.modal_mobile.modal .modal_body {
    /*관리자에서 width값 지정하기때문에 max값 빼달라고 함*/
    /* max-width: 36rem;*/
    padding: 0 !important;
    border-radius: 0!important;
}

.modal.modal_mobile .modal_body .modal_content~.btn-wrap {
    padding: 0 !important;
    margin: 0 !important;
}

.modal_mobile .btn-wrap .btn {
    border-radius: 0;
    border: none;
    margin: 0;
    width: auto;
    flex: 1;
}

.modal_mobile .btn-wrap .btn:nth-child(even) {
    border-left: 1px solid #ededed;
}

.modal_mobile .btn-wrap .btn-middle{
    max-width: 100%;
}


@media (max-width:480px) {
    .modal_mobile.modal.show {
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    .modal_mobile .modal_wrapper {
        height: auto;
    }

    .modal_mobile.modal .modal_body {
        max-width: 100%;
    }
    .modal.modal_mobile .modal_body .modal_content {
        height: auto;
    }
}
</style>
