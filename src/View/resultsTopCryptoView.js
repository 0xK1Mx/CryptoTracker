import View from "./view.js";

class resultViewTopCrypto extends View {
  _parentEl = document.querySelector(".crypto-list");

  _generateMarkUp() {
    return this._data
      .map((crypto) => {
        return `<li class="crypto-item">
            <div>
              <img
                src="${crypto.image}"
                alt="Bitcoin"
                id="cryptoImage"
                class="crypto-item__image"
              />
              <h2 class="crypto-item__name">${crypto.name}</h2>
            </div>
            <p class="crypto-item__price">$${crypto.price}</p>
        </li>`;
      })
      .join("");
  }
}

export default new resultViewTopCrypto();
