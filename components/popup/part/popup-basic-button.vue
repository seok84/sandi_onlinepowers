<template>
    <!-- 모달헤더가 있으면 modal_close_w 모달헤더가 없으면 modal_close_b -->
    <button type="button" class="modal_close"  @click="closeModal">닫기</button>
</template>
<script>
export default {
    name: 'popupDesign',
    components: {
    },
    mounted() { },
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