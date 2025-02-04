import View from "./view.js";

class SearchView extends View {
  _metricEl = document.querySelectorAll(".crypto-metric__value");
  _parentEl = document.querySelector(".crypto-search");

  _updateMetrics(_data) {
    const formatterData = new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 3,
    });

    Array.from(this._metricEl).forEach((el, i) => {
      el.innerHTML = ` <span class="crypto-metric__value">${formatterData.format(
        _data[i]
      )}</span>`;
    });
  }

  getQuery() {
    return this._parentEl.querySelector(".crypto-search__input").value;
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
