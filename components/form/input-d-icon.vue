<template>
  <div class="form_line">
    <div class="input_btn empty_input">
      <img :src="iconSrc" alt="icon" />
    </div>
    <div>
      <input :id="inputId" :type="type" :name="inputId" :placeholder="placeholder" class="form_control" />
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
    iconSrc: {
      type: [String],
      required: true
    },
    // eslint-disable-next-line vue/require-default-prop
    "placeholder": String,
    // eslint-disable-next-line vue/require-default-prop
    "invalidFeedback": String,

  }
}
</script>