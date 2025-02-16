import View from "./view.js";

class CryptoDashBoardView extends View {
  _parentEl = document.querySelector(".market-body");

  _generateMarkUp() {
    const formatterData = new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    });
    return this._data
      .map(
        (el) =>
          `<tr class="crypto-project" data-Crypto="${el.id}">
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
            <td class="table-cell table-cell-day ${
              el.price24change > 0 ? "positive" : "negative"
            }">${formatterData.format(el.price24change)}%</td>
            <td class="table-cell table-cell-marketcap">$${formatterData.format(
              el.marketcap
            )}</td>
            <td class="table-cell table-cell-volume">$${formatterData.format(
              el.volume
            )}</td>
            <td class="table-cell table-cell-supply">${formatterData.format(
              el.supply
            )} ${el.symbol} </td>
          </tr>
      `
      )
      .join("");
    console.log(str);
  }
}

export default new CryptoDashBoardView();
