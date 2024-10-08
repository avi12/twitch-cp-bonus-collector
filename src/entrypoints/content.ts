function collectBonusIfPossible() {
  const btnBonus = document.querySelector<HTMLButtonElement>("[class*=claimable-bonus]");
  const isLiveStreamPage = Boolean(document.querySelector("video"));
  if (!btnBonus || !isLiveStreamPage) {
    return;
  }

  const { activeElement } = document;
  btnBonus.click();
  (activeElement as HTMLElement).focus();
}

export default defineContentScript({
  matches: ["https://www.twitch.tv/*"],
  main: () => new MutationObserver(collectBonusIfPossible).observe(document.body, { childList: true, subtree: true })
});
