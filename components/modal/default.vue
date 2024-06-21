<template>
    <!-- .modal_full 모바일에서 풀사이즈일 때 적용 -->
    <!-- .modal_m .modal_l 모달 사이즈 조정 -->
    <div class="modal-container modal_basic modal_m">
        <div class="modal_wrapper">
            <div class="modal_header">
                <h3 class="modal_tit">{{ title }}</h3>
            </div>
            <div class="modal_body">
                <div class="modal_content">
                    <slot />
                </div>
            </div>
            <button type="button" class="modal_close modal_close_b" @click="$emit('close')">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "팝업"
        }
    }
}
</script>

<style scoped>
@import url('~/assets/css/layouts/modal-ui.css');
</style>