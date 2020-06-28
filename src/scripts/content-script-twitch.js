collectBits();

function collectBits() {
  const btnBits = document.querySelector(".tw-interactive.tw-button--success");
  if (btnBits) {
    const { activeElement } = document;
    btnBits.click();
    activeElement.focus();
  }
}

new MutationObserver(collectBits).observe(document.body, {
  childList: true,
  subtree: true,
});
