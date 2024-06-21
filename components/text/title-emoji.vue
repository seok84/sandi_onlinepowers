
<template>
  <!-- 클래스 on 붙으면 이모지 사용 안함 -->
  <div class="title_wrap title_left">
    <div>
      <h2 class="title_main title_emoji_group">
        <span>{{ titleMain }}</span>
        <span class="title_icon title_emoji">
          <img :src="emoji" alt="emoji">
        </span>
        <a :href="to" class="title_icon title_arrow">
          <img src="~/assets/img/main/ic_more_b.svg" alt="arrow" class="arr_black">
          <img src="~/assets/img/main/ic_more_w.svg" alt="arrow" class="arr_white">
        </a>
        <a :href="to" class="pc link_more">더보기</a>
      </h2>
    </div>
    <p class="title_sub">
      <span class="title_desc" v-html="titleDesc"></span>
    </p>
  </div>
</template>
<script>
export default {
  name: "TitleEmoji",
  props: ["titleMain", "titleDesc", "emoji", "to"]

}
</script>

<style>


</style>

