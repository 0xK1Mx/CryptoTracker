import searchView from "./View/searchView.js";
import { API_URL } from "./config.js";

export const state = {
  cryptocurrency: {},
  search: {
    results: [],
  },
};

export const cryptoMetric = {
  metric: {},
};

export const mapCryptoCoinID = new Map();

export const coinList = async function () {
  try {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/list");
    const dataId = await response.json();

    dataId.forEach((crypto) => mapCryptoCoinID.set(crypto.id, crypto.name));
  } catch (error) {}
};
coinList();

export const loadCoinData = async function (id) {
  try {
    const response = await fetch(`${API_URL}&ids=${id}`);

    const data = await response.json();

    console.log(data);
    const [crypto] = data;
    state.cryptocurrency.id = crypto.id;
    state.cryptocurrency.symbol = crypto.symbol;
    state.cryptocurrency.name = crypto.name;
    state.cryptocurrency.image = crypto.image;
    state.cryptocurrency.current_price = crypto.current_price;
    state.cryptocurrency.priceChangePercent =
      crypto.price_change_percentage_24h;
    state.cryptocurrency.priceChange = crypto.price_change_24h;

    cryptoMetric.metric.MarketCap = crypto.market_cap;
    cryptoMetric.metric.volume = crypto.total_volume;
    cryptoMetric.metric.CirculatingSupply = crypto.circulating_supply;
    cryptoMetric.metric.totalSupply = crypto.total_supply;
    cryptoMetric.metric.allTimeHigh = crypto.ath;
    cryptoMetric.metric.allTimeLow = crypto.atl;
  } catch (err) {
    console.error(err);
  }
};

export const Top20Crypto = async function () {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=20`
  );

  const data = await response.json();

  state.search.results = data.map((elCrypto) => {
    return {
      id: elCrypto.id,
      name: elCrypto.name,
      image: elCrypto.image,
      price: elCrypto.current_price,
    };
  });
};

// loadCoinData();
