import View from "./View/view.js";
import { API_URL } from "./config.js";
import marketStatsView from "./View/marketStatsView.js";
import * as model from "./model.js";
import bitcoinView from "./View/bitcoinView.js";
import CryptoDashboardView from "./View/CryptoDashboardView.js";
import paginationView from "./View/paginationView.js";
import modalView from "./View/modalView.js";

const controlBitcoin = async function () {
  try {
    await model.loadBitcoinData("bitcoin");

    const bitcoinData = model.state.bitcoin;

    bitcoinView.render(bitcoinData);
    console.log(bitcoinData);
  } catch (error) {
    console.error(error);
  }
};
controlBitcoin();

const controlMarketStats = async function () {
  try {
    await model.loadMarketData();

    const globalMarketData = model.state.globalMarket;

    marketStatsView.render(globalMarketData);
  } catch (error) {
    console.error(error);
  }
};

controlMarketStats();

const controlCryptoDashboard = async function () {
  try {
    await model.loadCryptoProjects();
    const cryptoProjects = model.state.cryptoProjects;
    CryptoDashboardView.render(model.getResults());
    modalView.attachModalEvents();
    paginationView.render(cryptoProjects);
  } catch (error) {
    console.error(error);
  }
};

controlCryptoDashboard();

const controlPagination = function (page) {
  CryptoDashboardView.render(model.getResults(page));
  paginationView.render(model.state.cryptoProjects);
};

function init() {
  paginationView.paginationHandler(controlPagination);
}
init();
