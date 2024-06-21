export function asideHeight(cartLeftWrapper, cartBottomWrapper, cartRightWrapper) {
  let cartLeft = cartLeftWrapper.clientHeight;
  let cartBottom = cartBottomWrapper.offsetHeight;
  let rightHeight = cartLeft - cartBottom;
  cartRightWrapper.style.height = rightHeight + "px";
}

export function observeCartLeftWrapper(cartLeftWrapper, cartBottomWrapper, cartRightWrapper) {
  let observer = new MutationObserver(() => {
    asideHeight(cartLeftWrapper, cartBottomWrapper, cartRightWrapper);
  });

  let option = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  };

  observer.observe(cartLeftWrapper, option);
}

export function titleClose(boardTitles, cartBtns) {
  boardTitles.forEach((boardTitle) => {
    boardTitle.addEventListener("click", () => {
      boardTitle.classList.toggle("closed");
    });
  });

  cartBtns.forEach((cartBtn) => {
    cartBtn.addEventListener("click", () => {
      cartBtn.parentElement.classList.toggle("closed");
    });
  });
}