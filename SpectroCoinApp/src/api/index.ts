export const getUserData = async () => {
  const {data} = require('./mockData.json');
  const currencyIds = getAllUserCurrencies(data);
  const allPrices = await getPrices(currencyIds);

  const mappedData: CurrencyBalanceItem[] = data.map(
    (item: UserBalanceItem) => {
      const rate = allPrices.find(price => price.id === item.id)?.price;
      return {...item, rate};
    },
  );

  return mappedData;
};

const getCurrencyData: (id: string) => Promise<CurrencyResponse> = async (
  id = 'BTC',
) => {
  const url = getUrl(id);
  const response = await fetch(url)
    .then(res => res.json())
    .catch(e => console.error('Failed to fetch currency data: ', e));
  return response;
};

const getPrices: (ids: Array<string>) => Promise<PriceResponse[]> = async (
  ids = [],
) => {
  const currencyDataPromises: Promise<CurrencyResponse>[] = ids.map(
    async id => {
      return await getCurrencyData(id);
    },
  );

  try {
    const allCurrencyData = await Promise.all(currencyDataPromises);

    const allPrices = allCurrencyData.map(item => ({
      id: item.currencyFrom,
      price: item.lastHP,
    }));

    return allPrices;
  } catch (e) {
    console.error('Error fetching prices: ', e);
    return Promise.reject();
  }
};

const getUrl = (id = 'BTC') => `https://spectrocoin.com/scapi/ticker/${id}/USD`;

const getAllUserCurrencies = (data: UserBalanceItem[]) =>
  data.map(item => item.id);
