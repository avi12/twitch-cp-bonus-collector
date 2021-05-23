function collectBonus() {
  const btnBonus = document.querySelector(".tw-button--success, [class*=ScCoreButtonSuccess]");
  const isLiveStreamPage = Boolean(document.querySelector("video"));

  if (!btnBonus || !isLiveStreamPage) {
    return;
  }
  const { activeElement } = document;
  btnBonus.click();
  activeElement.focus();
}

new MutationObserver(collectBonus).observe(document.body, {
  childList: true,
  subtree: true
});
