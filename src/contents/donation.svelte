<script context="module" lang="ts">
  import cssTextGlobal from "data-text:~assets/global.scss";
  import cssText from "data-text:~cs-helpers/donation.scss";
  import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoGetStyle, PlasmoMountShadowHost } from "plasmo";

  export const config: PlasmoCSConfig = {
    matches: ["https://www.twitch.tv/*"]
  };

  export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
    document.querySelector("[data-target=channel-header-right]");

  export const getStyle: PlasmoGetStyle = () => {
    const elStyle = document.createElement("style");
    elStyle.textContent = cssText;
    return elStyle;
  };

  export const mountShadowHost: PlasmoMountShadowHost = ({ shadowHost, mountState, anchor }) => {
    shadowHost.className = "twitch-bonus-collector-donation-container";
    if (
      anchor.element.querySelector(`.${shadowHost.className}`) ||
      !anchor.element.querySelector("[data-a-target=subscribe-button]")
    ) {
      return;
    }
    anchor.element.append(shadowHost);
    mountState.observer.disconnect();
  };

  function injectContainerCss() {
    const elStyle = document.createElement("style");
    elStyle.textContent = cssTextGlobal;
    document.head.append(elStyle);
  }

  injectContainerCss();
</script>

<script lang="ts">
  import { Storage } from "@plasmohq/storage";
  import pathPaypal from "data-base64:~assets/paypal.svg";

  const storageLocal = new Storage({ area: "local" });

  let isHideDonationSection = window.twitchExtHideDonationSection || true;

  storageLocal.get<true | undefined>("isHideDonationSection").then(isHide => {
    window.twitchExtHideDonationSection = isHide;
    isHideDonationSection = isHide;
  });

  storageLocal.watch({
    isHideDonationSection({ newValue: isHide }) {
      isHideDonationSection = isHide;
    }
  });

  function hideDonationSection() {
    storageLocal.set("isHideDonationSection", true);
  }
</script>

{#if !isHideDonationSection}
  <a class="twitch-bonus-collector-donation" href="https://paypal.me/avi12" target="_blank" on:click={hideDonationSection}>
    <img src={pathPaypal} alt="PayPal" />Support Twitch Bonus Collector Extension<button
      on:click={e => {
        e.preventDefault();
        hideDonationSection();
      }}>⨉</button>
  </a>
{/if}
