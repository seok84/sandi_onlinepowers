export default {
  //셀렉트 색 변경
  setSelectColorGray() {
    const selectBtn = document.querySelectorAll("select");
    selectBtn.forEach((selectBtn) => {
      selectBtn.style.color = "#B9B9B9";
      selectBtn.addEventListener("click", (e) => {
        const current = e.target;
        const option = current.querySelectorAll("option");
        if (option.length > 2) {
          option.forEach((option) => {
            current.style.color = "#000000";
            option.style.color = "#000000";
          });
        }
      });
    });
  },

  //컨텐츠 토글
  openContent() {
    const hideTitle = document.querySelectorAll(".hide_title");
    hideTitle.forEach((hideTitle) => {
      hideTitle.addEventListener("click", () => {
        hideTitle.classList.toggle("open");
      });
    });
  },

  //컨텐츠 삭제
  deleteContent() {
    const deleteContentBtn = document.querySelectorAll(
      ".delete_content_btn>div"
    );
    deleteContentBtn.forEach((e) => {
      e.addEventListener("click", () => {
        e.parentNode.parentNode.parentNode.remove();
        this.checkEmpty();
      });
    });
  },

  //컨텐츠 체크
  checkEmpty() {
    const listArea = document.querySelectorAll(".list_area");
    const txtNoContent = document.querySelector(".no_content");
    if (listArea.length === 0) {
      txtNoContent.classList.add("on");
    } else if (listArea.length > 0) {
      txtNoContent.classList.remove("on");
    }
  },

  // 모달 팝업
  openModal(e) {
    const body = document.querySelector("body");
    const modalId = e.target.getAttribute("id");
    const target = document.getElementById(modalId+"View");
    const modalDim = document.createElement("div");
    body.classList.add("scrollNone");
    target.classList.add("show");
    modalDim.classList.add("dimmed_bg");
    target.appendChild(modalDim);
  },
  closeModalDim() {
    const modalDim = document.querySelector(".dimmed_bg");
    modalDim.remove();
  },
  closeModal() {
    const body = document.querySelector("body");
    const modal = document.querySelectorAll(".modal_basic");
    body.classList.remove("scrollNone");
    modal.forEach((e) => {
      e.classList.remove("show");
    });
    this.closeModalDim();
  },
};
