<template>
    <div class="title_wrap depth_cate_arr">
        <h2 class="default title_main">{{ titleMain }}</h2>
        <ul class="depth_02_list">
            <li><a href="javascript:void(0);">2차카테고리</a></li>
            <li><a href="javascript:void(0);">2차카테고리</a></li>
            <li><a href="javascript:void(0);">2차카테고리</a></li>
            <li><a href="javascript:void(0);">2차카테고리</a></li>
        </ul>
        <a href="javascript:void(0);" class="btn_sns">공유하기</a>
    </div>
</template>
<script>
export default {
    name: "TitleCate",
    props: {
        titleMain: {
            type: [String],
            required: true
        }
    },
    mounted() {
        let cateArr = document.querySelector(".depth_cate_arr");
        cateArr.addEventListener("click", (e) => {
            e.target.classList.toggle("on");
        });
    }

}
</script>


<style>
.title_wrap {
    position: relative;
}

.btn_sns {
    width: 3.6rem;
    height: 3.6rem;
    background-color: #fff;
    position: absolute;
    top: 2rem;
    right: 0;
    display: none;
}
</style>