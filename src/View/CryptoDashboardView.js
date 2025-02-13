import View from "./view.js";

class CryptoDashBoardView extends View {
  _parentEl = document.querySelector(".market-body");

  _generateMarkUp() {
    return this._data
      .map(
        (el) =>
          `<tr>
            <td class="table-cell table-cell-rank">${el.rank}</td>
            <td class="table-cell table-cell-name">
              <div class="table-name-wrapper">
                <img
                  src="${el.image}"
                  alt="${el.id}"
                  class="crypto-logo"
                />
                <p>${el.projectName}</p>
              </div>
            </td>
            <td class="table-cell table-cell-price">$${el.price}</td>
            <td class="table-cell table-cell-hour positive">+0.5%</td>
            <td class="table-cell table-cell-day negative">-1.2%</td>
            <td class="table-cell table-cell-week positive">+3.0%</td>
            <td class="table-cell table-cell-marketcap">$850B</td>
            <td class="table-cell table-cell-volume">$30B</td>
            <td class="table-cell table-cell-supply">19M BTC</td>
          </tr>
      `
      )
      .join("");
    console.log(str);
  }
}

export default new CryptoDashBoardView();
