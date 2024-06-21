<template>
  <div class="form_line">
    <div class="input_btn empty_input">
      <img :src="iconSrc" alt="icon" />
    </div>
    <label :for="inputId" class="form_title">{{ inputTitle }}</label>
    <div>
      <input :id="inputId" :type="type" :name="inputId" :placeholder="placeholder" class="form_control" :value="value"/>
      <div class="invalid_feedback">
        {{ invalidFeedback }}
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'InputLabel',
  props: {
    inputId: {
      type: [String],
      required: true
    },
    inputTitle: {
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
    "value": String,
    "placeholder": String,
    "invalidFeedback": String,

  }
}
</script>