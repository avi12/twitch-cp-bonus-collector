function collectBonus() {
  const btnBonus = elContainer.querySelector(".tw-button--success, [class*=ScCoreButtonSuccess]");
  const isLiveStreamPage = Boolean(document.querySelector("video"));

  if (!btnBonus || !isLiveStreamPage) {
    return;
  }
  const { activeElement } = document;
  btnBonus.click();
  activeElement.focus();
}

const elContainer = document.querySelector(".chat-input__buttons-container");
new MutationObserver(collectBonus).observe(elContainer, {
  childList: true,
  subtree: true
});
