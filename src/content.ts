import type { PlasmoContentScript } from "plasmo";

function collectBonusIfPossible(): void {
  const btnBonus = document.querySelector<HTMLButtonElement>(
    "[class*=claimable-bonus], .tw-button--success, [class*=ScCoreButtonSuccess]"
  );
  const isLiveStreamPage = Boolean(document.querySelector("video"));
  if (!btnBonus || !isLiveStreamPage) {
    return;
  }

  const activeElement = document.activeElement as HTMLElement;
  btnBonus.click();
  activeElement.focus();
}

new MutationObserver(collectBonusIfPossible).observe(document.body, {
  childList: true,
  subtree: true
});

export const config: PlasmoContentScript = {
  matches: ["https://www.twitch.tv/*"]
};
