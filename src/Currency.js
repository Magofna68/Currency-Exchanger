export default class Currency {
  static getConversion(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}?`)
      .then(function (result) {
        if (!Response.ok) {
          throw Error(result.error-type);
        }
        return result.json();
      })
      .catch(function (error) {
        return error;
      })
  }
}