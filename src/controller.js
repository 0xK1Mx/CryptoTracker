import searchView from "./View/searchView.js";
import View from "./View/view.js";
import { API_URL } from "./config.js";
import resultsView from "./View/resultsView.js";
import resultsTopCryptoView from "./View/resultsTopCryptoView.js";
import { cryptoMetric } from "./model.js";
import { mapCryptoCoinID } from "./model.js";

import * as model from "./model.js";
import bitcoinView from "./View/bitcoinView.js";

// const controlCrypto = async function () {
//   try {
//     const id = searchView.getQuery();

//     if (!mapCryptoCoinID.has(id)) {
//       throw new Error(`The coin you are looking for does not exists`);
//     }
//     await model.loadCoinData(id);

//     const crypto = model.state.cryptocurrency;
//     const { metric } = model.cryptoMetric;
//     resultsView.render(crypto);
//     searchView._updateMetrics(Object.values(metric));
//   } catch (error) {
//     console.error(error);
//   }
// };

const controlBitcoin = async function () {
  try {
    await model.loadCoinData("bitcoin");

    const bitcoinData = {
      ...model.state.cryptocurrency,
      ...model.cryptoMetric,
    };
    bitcoinView.render(bitcoinData);
    console.log(bitcoinData);
  } catch (error) {
    console.error(error);
  }
};

controlBitcoin();

// const controlTopCrypto = async function () {
//   await model.Top20Crypto();

//   const cryptoResult = model.state.search.results;
//   resultsTopCryptoView.render(cryptoResult);
// };

// controlTopCrypto();

// const init = function () {
//   searchView.addHandlerSearch(controlCrypto);
// };

// init();
