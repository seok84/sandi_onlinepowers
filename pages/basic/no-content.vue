<template>
    <etc-no-content txt="컨텐츠가 없습니다." />
</template>

<script>
export default {
    mounted() {
        const scrollFixed = document.querySelector('body');
        scrollFixed.classList.add("scrollFixed");
    }
}
</script>