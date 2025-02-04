import searchView from "./View/searchView.js";
import { API_URL } from "./config.js";

export const state = {
  cryptocurrency: {},
  search: {
    results: [],
  },
};

export const loadCoinData = async function (id) {
  try {
    // const id = searchView.getQuery();

    const response = await fetch(`${API_URL}&ids=${id}`);

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

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

console.log(state);

// loadCoinData();
