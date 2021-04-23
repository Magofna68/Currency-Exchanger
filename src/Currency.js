// export default class Currency {
//   static getConversion(currency, amount) {
//     return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}/${amount}`)
//       .then(function (result) {
//         if (!Response.ok) {
//           throw Error(result.error - type);
//         }
//         return conversion_result.json();
//       })
//       .catch(function (error) {
//         return error;
//       })
//   }
// }

export default class Currency {
  static getConversion() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}/${amount}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.result);
        } else {
          reject(request.result);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}