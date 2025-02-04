import searchView from "./View/searchView.js";
import View from "./View/view.js";
import { API_URL } from "./config.js";
import resultsView from "./View/resultsView.js";
import resultsTopCryptoView from "./View/resultsTopCryptoView.js";

import * as model from "./model.js";

const controlCrypto = async function () {
  const id = searchView.getQuery();
  await model.loadCoinData(id);

  const crypto = model.state.cryptocurrency;
  resultsView.render(crypto);
};

const controlTopCrypto = async function () {
  await model.Top20Crypto();
  model.Top20Crypto();

  const cryptoResult = model.state.search.results;
  console.log(cryptoResult);

  resultsTopCryptoView.render(cryptoResult);
};

controlTopCrypto();

const init = function () {
  searchView.addHandlerSearch(controlCrypto);
};

init();
