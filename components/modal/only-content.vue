<template>
    <!-- .modal_full 모바일에서 풀사이즈일 때 적용 -->
    <!-- .modal_m .modal_l 모달 사이즈 조정 -->
    <div class="modal-container modal_basic">
        <div class="modal_wrapper">
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
export default {}
</script>

<style scoped>
@import url('~/assets/css/layouts/modal-ui.css');
</style>