function collectBonus() {
  const btnBonus = document.querySelector(".tw-button--success");
  if (btnBonus) {
    const { activeElement } = document;
    btnBonus.click();
    activeElement.focus();
  }
}

if (document.querySelector("video")) {
  new MutationObserver(collectBonus).observe(document.body, {
    childList: true,
    subtree: true,
  });
}