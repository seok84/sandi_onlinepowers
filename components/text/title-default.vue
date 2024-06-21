<template>
  <div class="title_wrap">
    <h2 class="default title_main">{{ titleMain }}</h2>
    <a href="javascript:void(0);" class="btn_sns">공유하기</a>
  </div>
</template>
<script>
export default {
  name: "TitleD1",
  props: {
    titleMain: {
      type: [String],
      required: true
    }
  }

}
</script>


<style>

.title_wrap{
  position: relative;
}

.btn_sns{
  width: 3.6rem;
  height: 3.6rem;
  background-color: #fff;
  position: absolute;
  top:2rem;
  right:0;
  display: none;
}



</style>