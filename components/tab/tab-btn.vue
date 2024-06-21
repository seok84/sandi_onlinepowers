<template>
  <a :href="to" class="btn btn_tab">
    <span>{{ tabName }}</span>
  </a>
</template>

<script>
export default {
  name: 'TabD1',
  props: {
    to: {
      type: [String],
      required: true
    },
    tabName: {
      type: [String],
      required: true
    },
  }
}
</script>
