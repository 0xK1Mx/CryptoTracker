import View from "./view.js";

class MarketStatsView extends View {
  _parentEl = document.querySelector(".header-bottom");

  _generateMarkUp() {
    const formatterData = new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    });

    return `
        <ul class="header-bottom-list">
          <li class="header-bottom-list__item">
            <span class="header-bottom-list__label">Crypto</span>
            <a class="header-bottom-list__value" href="#">${
              this._data.activeCryptos
            }</a>
          </li>
          <li class="header-bottom-list__item">
            <span class="header-bottom-list__label">Exchanges</span>
            <a class="header-bottom-list__value" href="#">${
              this._data.exchanges
            }</a>
          </li>
          <li class="header-bottom-list__item">
            <span class="header-bottom-list__label">Market Cap</span>
            <a class="header-bottom-list__value" href="#">$${formatterData.format(
              this._data.totalMarketCap
            )}</a>
          </li>
          <li class="header-bottom-list__item">
            <span class="header-bottom-list__label">24h Vol</span>
            <a class="header-bottom-list__value" href="#">$${formatterData.format(
              this._data.volume24h
            )}</a>
          </li>
           <li class="header-bottom-list__item">
            <span class="header-bottom-list__label">volume change</span>
            <a class="header-bottom-list__value" href="#">${this._data.volumeChange.toFixed(
              2
            )}%</a>
          </li>
          <li class="header-bottom-list__item">
            <span class="header-bottom-list__label">ETH gas</span>
            <a class="header-bottom-list__value" href="#">${formatterData.format(
              this._data.ProposeGasPrice
            )}Gwei</a>
          </li>
        </ul>
    `;
  }
}

export default new MarketStatsView();
