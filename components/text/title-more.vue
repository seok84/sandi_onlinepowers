
<template>
  <!-- on 붙으면 더보기링크 생성 -->
  <h3 class="sub_tit"><a :href="to" class="linked_arr">{{ titleMain }}</a></h3>
</template>
<script>
export default {
  name: "TitleMore",
  props: {
    titleMain: {
      type: [String],
      required: true
    },
    "to": String,
  }

}
</script>

<style>

</style>

