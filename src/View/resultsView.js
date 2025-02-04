import View from "./view.js";

class ResultsView extends View {
  _parentEl = document.querySelector(".crypto-info-heading");

  _generateMarkUp() {
    return `
            <div class="crypto-info__group">
              <img
                src="${this._data.image}"
                alt="Bitcoin"
                id="cryptoImage"
                class="crypto-info__image"
              />
              <h2 class="crypto-info__name">${this._data.name}</h2>
            </div>
            <p class="crypto-info__price" id="cryptoPrice">$${this._data.current_price}</p>
    `;
  }
}

export default new ResultsView();
