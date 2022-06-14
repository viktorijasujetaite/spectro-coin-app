const getUrl = (id = 'BTC') => `https://spectrocoin.com/scapi/ticker/${id}/USD`;

export const getCurrencyData: (
  id: string,
) => Promise<CurrencyResponse> = async (id = 'BTC') => {
  const url = getUrl(id);
  const response = await fetch(url).then(res => res.json());
  return response;
};

export const getPrices: (
  ids: Array<string>,
) => Promise<PriceResponse[]> = async (ids = []) => {
  const currencyDataPromises: Promise<CurrencyResponse>[] = ids.map(
    async id => {
      return await getCurrencyData(id);
    },
  );

  const allCurrencyData = await Promise.all(currencyDataPromises);

  const allPrices = allCurrencyData.map(item => ({
    id: item.currencyFrom,
    price: item.lastHP,
  }));

  return allPrices;
};
