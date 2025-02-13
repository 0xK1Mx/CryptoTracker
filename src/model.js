import { API_URL } from "./config.js";

export const state = {
  bitcoin: {},
  cryptoProjects: {
    results: [],
  },
  globalMarket: {},
};
export const loadMarketData = async function () {
  try {
    const [response, response2] = await Promise.all([
      fetch(
        `https://api.etherscan.io/v2/api?chainid=1&module=gastracker&action=gasoracle&apikey=EDZ9MUBHMZZJUUZI5ZT2YIUIAQBSMNI27M`
      ),
      fetch(`https://api.coingecko.com/api/v3/global`),
    ]);

    if (!response.ok || !response2.ok) throw new Error("API request failed");

    const gasData = await response.json();
    const globalData = await response2.json();

    console.log(globalData);

    state.globalMarket.fastGasPrice = gasData.result.FastGasPrice;
    state.globalMarket.ProposeGasPrice = gasData.result.ProposeGasPrice;
    state.globalMarket.suggestGasPrice = gasData.result.suggestBaseFee;
    state.globalMarket.exchanges = globalData.data.markets;
    state.globalMarket.volumeChange =
      globalData.data.market_cap_change_percentage_24h_usd;
    state.globalMarket.totalMarketCap = globalData.data.total_market_cap.usd;
    state.globalMarket.volume24h = globalData.data.total_volume.usd;
    state.globalMarket.marketCapChange24h =
      globalData.data.market_cap_change_percentage_24h_usd;
    state.globalMarket.activeCryptos = globalData.data.active_cryptocurrencies;
  } catch (error) {}
};
loadMarketData();
console.log(state);

export const loadBitcoinData = async function (id) {
  try {
    const response = await fetch(`${API_URL}&ids=${id}`);

    if (!response.ok) return;

    const [cryptoData] = await response.json();

    //Add data to the state object
    state.bitcoin.ath = cryptoData.ath;
    state.bitcoin.athChangePercentage = cryptoData.ath_change_percentage;
    state.bitcoin.circulatingSupply = cryptoData.circulating_supply;
    state.bitcoin.totalSupply = cryptoData.max_supply;
    state.bitcoin.currentPrice = cryptoData.current_price;
    state.bitcoin.id = cryptoData.id;
    state.bitcoin.cryptoName = cryptoData.name;
    state.bitcoin.image = cryptoData.image;
    state.bitcoin.marketCap = cryptoData.market_cap;
    state.bitcoin.rank = cryptoData.market_cap_rank;
    state.bitcoin.volume = cryptoData.total_volume;
  } catch (err) {
    console.error(err);
  }
};

export const loadCryptoProjects = async function () {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=20"
  );
  const data = await response.json();
  console.log(data);
  state.cryptoProjects.results = data.map((project) => {
    return {
      id: project.id,
      image: project.image,
      price: project.current_price,
      price24change: project.price_change_percentage_24h,
      supply: project.circulating_supply,
      marketcap: project.market_cap,
      rank: project.market_cap_rank,
      projectName: project.name,
      volume: project.total_volume,
      low24: project.low_24h,
      high24: project.high_24h,
    };
  });
};

console.log(state);
