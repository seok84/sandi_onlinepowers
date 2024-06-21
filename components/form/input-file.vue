<template>
  <div class="form_line form_file invalid margin_none business_registration invalid">
    <p class="form_title">사업자등록증</p>
    <div class="input_option">
      <input type="text" class="form_control on" id="fileName" value="사업자등록증 확인" readonly>
      <label for="fileUpload" class="btn_input_add">첨부</label>
      <input type="file" name="file_input" id="fileUpload">
    </div>

    <div class="preview">
      <div class="img">
        <img src="~/assets/img/user/ic_file_img.svg" alt="">
      </div>
      <div class="pdf">
        <img src="~/assets/img/user/ic_file_pdf.svg" alt="">
      </div>
    </div>
    
    <div class="normal_feedback">10MB 이내의 jpg, gif, png, pdf 파일만 업로드 가능</div>
    <div class="invalid_feedback">파일을 업로드해주세요.</div>
  </div>
</template>
  
<script>

export default {

  name: 'InputFile',
  props: {
  },
  data() {
    return {
    }
  },
  mounted() {
    const fileInput = document.querySelector("#fileUpload");
    const fileName = document.querySelector("#fileName");

    fileInput.addEventListener("change", () => {
      let filePlaceHolder = fileInput.value;
      fileName.value = filePlaceHolder;
      fileName.classList.add("on")
    });
  },

  methods: {
    // changeFile() { }
    
  }

}
</script>