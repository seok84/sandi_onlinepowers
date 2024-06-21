<template>
  <div class="title_wrap sub_title_wrap">
    <h2 class="default title_sub">{{ titleSub }}</h2>
  </div>
</template>
<script>
export default {
  name: "TitleD2",
  props: {
    titleSub: {
      type: [String],
      required: true
    }
  }

}
</script>
