export default {
  addToWishList(e) {
    const toast = document.querySelector(".toast_wrap");
    e.target.classList.toggle("active");
    toast.classList.add("on");
    setTimeout(() => {
      toast.classList.remove("on");
    }, 1500);
  },
};
