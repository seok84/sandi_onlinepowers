<template>
    <div class="no_content on">
        토스트
    </div>
</template>

<script>
export default {
    mounted: () => {
        const toastWrap = document.querySelector(".toast_wrap")
        toastWrap.classList.add('on');
    },
    methods: {
    fadeOut(e) {
      const toastWrap = e.target.parentNode.parentNode;
      toastWrap.classList.remove('on');
    },
  }
}
</script>

<style>
.no_content {
    height: calc(100vh - 66rem);
}

@media (max-width:480px) {
    .no_content {
        height: calc(100vh - 73.4rem);
    }
}
</style>