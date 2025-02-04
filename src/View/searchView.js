import View from "./view.js";

class SearchView extends View {
  _parentEl = document.querySelector(".crypto-search");

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
