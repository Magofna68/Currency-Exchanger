export default class Currency {
  static getConversion(amount, currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}/${amount}`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.result);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      })
  }
}