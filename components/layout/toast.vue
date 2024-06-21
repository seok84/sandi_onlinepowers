<template>
  <!-- on 붙으면 활성화 -->
  <div class="toast_wrap fixed_top">
    <div class="pop_toast ">
      <div class="titleLine01 toast_txt ">
        {{ toastDesc }}
        관심상품이 담겼습니다.
      </div>
      <button type="button" class="modal_close modal_close_b" @click="fadeOut($event)"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popupToast',
  props: {
    toastDesc: {
      type: [String]
    }
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
.toast_wrap {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  opacity: 1;
  display: none;
  font-size: var(--size-pc-pri);
}

.toast_wrap.on {
  display: block;
  z-index: 999999;
}

.pop_toast {
  width: 32.8rem;
  height: 5.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3rem;
  background-color: var(--color-sub-pink-1);
  box-shadow: 0 1.5rem 1.5rem 0 #fc53d15c;
  padding: 0.6rem 1.5rem 0.6rem 3rem;
}

.pop_toast .titleLine01 {
    -webkit-line-clamp: 2;
}

.toast_txt {
  flex: 1;
  width: auto;
}

.modal_close_b {
  width: 3rem;
  height: 3rem;
  background-size: 100% auto;
}
</style>