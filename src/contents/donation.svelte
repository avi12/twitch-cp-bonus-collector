<script context="module" lang="ts">
  import cssTextGlobal from "data-text:~assets/global.scss";
  import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoMountShadowHost } from "plasmo";

  declare global {
    interface Window {
      twitchExtHideDonationSection: boolean;
    }
  }

  export const config: PlasmoCSConfig = {
    matches: ["https://www.twitch.tv/*"]
  };

  export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
    document.querySelector("[data-target=channel-header-right]");

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
  import pathPaypal from "data-base64:~assets/paypal.svg";
  import { Storage } from "@plasmohq/storage";

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
  <a
    class="twitch-bonus-collector-donation"
    href="https://paypal.me/avi12"
    target="_blank"
    on:click={hideDonationSection}>
    <img alt="PayPal" src={pathPaypal} />Support Twitch Extension
    <button
      on:click={e => {
        e.preventDefault();
        hideDonationSection();
      }}
      >⨉
    </button>
  </a>
{/if}

<style lang="scss">
  .twitch-bonus-collector-donation {
    color: var(--color-text-button-primary, #efeff1);
    background-color: #006fdf;
    padding: 0.5rem var(--button-padding-x) 0.5rem calc(var(--button-padding-x) - 0.2rem);
    border-radius: var(--border-radius-medium, 0.4rem);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
    font-size: var(--button-text-default);
    font-weight: var(--font-weight-semibold);

    &:hover {
      background-color: #005dbc;
    }

    img {
      --size: 16px;
      width: var(--size);
      height: var(--size);
    }

    button {
      border: none;
      padding: 0;
      background: none;
      color: var(--color-text-button-primary, #efeff1);
      cursor: pointer;
      font-size: var(--button-text-default);
      font-weight: var(--font-weight-semibold);
    }
  }
</style>
