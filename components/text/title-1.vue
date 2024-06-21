<template>
  <div class="title_wrap">
    <h2 class="title_main"><span>{{ titleMain }}</span></h2>
    <p class="title_sub">
      <span class="title_desc" v-html="titleDesc"></span>
      <span class="title_icon">
        <img :src="emoji" alt="emoji">
      </span>
    </p>
  </div>
</template>
<script>
export default {
  name: "TitleD1",
  props: ["titleMain", "titleDesc", "emoji"]

}
</script>