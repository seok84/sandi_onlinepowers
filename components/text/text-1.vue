<template>
  <!-- 텍스트 -->
  <div class="txt_wrap">
    <p v-html="textD1"></p>
      <!-- <TextD1 :text-d1="textD1"/> -->
  </div>
</template>
<script>
export default {
  name: "TextD1",
  props: {
    textD1: {
    type: [String], 
    required: true        
  }
  },
}
</script>