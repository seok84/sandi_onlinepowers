<template>
  <span class="badge_tag" :class="badgeTag">{{ tagName }}</span>
</template>

<script>
export default {
  name: 'TabD1',
  props: {
    badgeTag: {
      type: [String],
      required: true
    },
    tagName: {
      type: [String],
      required: true
    },
  }
}
</script>
