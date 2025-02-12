import View from "./view.js";

class BitcoinView extends View {
  _parentEl = document.querySelector(".bitcoin-wrapper");

  _generateMarkUp() {
    const formatterData = new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    });

    return `
    <div class="bitcoin-info">
          <div class="bitcoin-title-container">
            <img
              src="${this._data.image}"
              alt="Bitcoin"
              id="cryptoImage"
              class="bitcoin-img"
            />
            <h1 class="bitcoin-title">Bitcoin</h1>
          </div>

          <div class="bitcoin-metrics-container">
            <div class="bitcoin-metrics-row">
              <div class="bitcoin-metric__block">
                <span class="bitcoin-metric__label">Market Cap</span>
                <span class="bitcoin-metric__value">${formatterData.format(
                  this._data.marketCap
                )} $</span>
              </div>
            
            </div>
            <div class="bitcoin-metrics-row">
              <div class="bitcoin-metric__block">
                <span class="bitcoin-metric__label">All time high</span>
                <span class="bitcoin-metric__value">${formatterData.format(
                  this._data.ath
                )}</span>
              </div>
              
            </div>
            <div class="bitcoin-metrics-row">
                <div class="bitcoin-metric__block">
                <span class="bitcoin-metric__label">Volume</span>
                <span class="bitcoin-metric__value">${formatterData.format(
                  this._data.volume
                )} $</span>
              </div>
              
            </div>
          </div>
        </div>
        <h1 class="bitcoin-price">$${this._data.currentPrice}</h1>
    `;
  }
}

export default new BitcoinView();
