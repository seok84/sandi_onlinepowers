<template>
    <div class="modal modal_basic modal_m modal_w show" id="updateModalView">
        <div class="modal_wrapper modal_white">
            <div class="modal_body">
                <div class="modal_content">
                    <!-- 텍스트 -->
                    <div class="modal_txt">
                        <strong>알림</strong>
                        <br />
                        새로운 버전이 출시되었습니다. <br />
                        업데이트 후 이용해 주시기 바랍니다.
                    </div>
                    <!-- 버튼 -->
                    <div class="btn-wrap">
                        <button id="" class="btn btn-middle btn-primary">업데이트</button>
                    </div>
                </div>
            </div>
            <popupButton class="modal_close_b" />
        </div>
        <div class="dimmed_bg"></div>
    </div>
</template>

<script>
export default {
    name: 'updateModalView',
    layout: "basic",
}
</script>

<style scoped>
.modal_txt strong {
    font-size: var(--size-pc-sub-tit-02);
    font-weight: 700;
    color: #333333;
}

.modal_close_b {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
}
</style>