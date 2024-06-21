<template>
    <div class="bt04">
        <div class="form_line bt01">
            <label for="input_id01" class="form_title">주소</label>
            <div class="relative">
              <input type="text" :name="addressId1" :id="addressId1" placeholder="우편번호" class="form_control form_search"
                  :value="addressValue1" readonly>
              <a href="javascript:void(0);" class="search_address">주소 검색</a>
            </div>
        </div>
        <div class="form_line bt01">
            <input type="text" :name="addressId2" :id="addressId2" placeholder="기본주소" class="form_control"
                :value="addressValue2" readonly>
        </div>
        <div class="form_line">
            <input type="text" :name="addressId3" :id="addressId3" placeholder="상세주소" class="form_control" :value="addressValue3">
        </div>
    </div>
</template>
  
<script>

export default {

  name: 'InputAdress',
  props: {
    addressId1: {
      type: [String],
      required: true
    },
    addressId2: {
      type: [String],
      required: true
    },
    addressId3: {
      type: [String],
      required: true
    },
    addressValue1: {
      type: [String],
    },
    addressValue2: {
      type: [String],
    },
    addressValue3: {
      type: [String],
    },
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>