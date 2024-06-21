<template>
  <span class="badge_item" :class="badgeItem"></span>
</template>

<script>
export default {
  name: 'BadgeItem',
  props: {
    badgeItem: {
      type: [String],
      required: true
    },
  }
}
</script>
