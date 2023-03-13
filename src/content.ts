import type { PlasmoCSConfig } from "plasmo";

function collectBonusIfPossible(): void {
  const btnBonus = document.querySelector<HTMLButtonElement>("[class*=ScCoreButtonSuccess]");
  const isLiveStreamPage = Boolean(document.querySelector("video"));
  if (!btnBonus || !isLiveStreamPage) {
    return;
  }

  const { activeElement } = document;
  btnBonus.click();
  (activeElement as HTMLElement).focus();
}

new MutationObserver(collectBonusIfPossible).observe(document.body, { childList: true, subtree: true });

export const config: PlasmoCSConfig = {
  matches: ["https://www.twitch.tv/*"]
};
