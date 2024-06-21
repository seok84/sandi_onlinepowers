<template>
    <!-- 전화면호 -->
    <!-- 비활성화는 클랙스 disabled 추가 -->
    <div class="form_line">
        <input type="number" name="" id="" placeholder="'-'없이 전화번호 숫자만 입력" :value="value" class="form_control" minlength="8">
    </div>
</template>
<script>
export default {
    props: ["value"],
    data() {
        return {
        };
    },
    methods: {
    },
}
</script>