<template>
  <div class="form_line">
    <div>
      <input :id="inputId" :type="type" :name="inputId" :placeholder="placeholder" class="form_control" :value="value" />
      <div class="invalid_feedback">
        {{ invalidFeedback }}
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'InputD1',
  props: {
    inputId: {
      type: [String],
      required: true
    },
    type: {
      type: [String],
      required: true
    },
    "value": String,
    "placeholder": String,
    "invalidFeedback": String,

  }
}
</script>