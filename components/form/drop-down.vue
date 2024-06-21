<template>
    <div class="drop-down-box">
        <button class="select-type1" @click.prevent="openOption($event)">[상품1] 상품 옵션을 선택하세요</button>
        <div class="option-drop">
            <div class="drop-inner">
                <p class="drop-tit">[상품1] 상품 옵션을 선택하세요</p>
                <div class="drop-down-area">
                    <button class="tit" @click="toggleOption($event)">옵션 1</button>
                    <div class="option-btn scrollDesign on">
                        <button type="button">일러스트 : 심슨 쿠션(쇼파)1</button>
                        <button type="button">일러스트 : 심슨 쿠션(쇼파)2</button>
                        <button type="button">일러스트 : 심슨 쿠션(쇼파)3</button>
                        <button type="button">일러스트 : 심슨 쿠션(쇼파)4</button>
                        <button type="button">일러스트 : 심슨 쿠션(쇼파)5</button>
                        <button type="button">일러스트 : 심슨 쿠션(쇼파)6</button>
                    </div>
                </div>
                <div class="drop-down-area">
                    <button class="tit" @click="toggleOption($event)">옵션 2</button>
                    <div class="option-btn scrollDesign">
                        <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                        <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                        <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                    </div>
                </div>
                <button type="button" class="drop-close" @click.prevent="closeOption($event)">
                    <span class="screen-out">옵션 닫기 버튼</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>

export default {

    methods: {
        openOption(e) {
            const optionMenu = document.querySelectorAll(".option-drop")
            optionMenu.forEach((e) => {
                e.classList.remove("on")
            })
            const target = e.target.nextElementSibling
            target.classList.add("on")
        },
        closeOption(e) {
            console.log(e.target.parentNode.parentNode)
            const optionMenu = e.target.parentNode.parentNode
            optionMenu.classList.remove("on")
        },
        toggleOption(e) {
            console.log(e.target.nextElementSibling)
            const optionMenu = e.target.nextElementSibling
            optionMenu.classList.toggle("on")
        }
    }
}
</script>