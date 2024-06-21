<template>
    <div id="errorView" class="inner">
        <img src="~/assets/img/layouts/error.png" alt="errorImg">
        <div class="error_txt">
            <p>요청한 페이지를 찾을 수 없습니다.</p>
            <p>홈페이지 이용에 불편을 드려 죄송합니다 <br>
                새로고침을 누르시거나, 잠시 후에 이용해 주시기 바랍니다.</p>
        </div>
        <div class="btn-wrap mobile">
            <button class="btn btn-middle btn-default">이전화면</button>
            <button class="btn btn-middle btn-attention">메인화면</button>
        </div>
    </div>
</template>

<script>
export default {
    layout: "base",
}
</script>

<style>
@import url(~/assets/css/layouts/error.css);
</style>