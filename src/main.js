import $ from 'jquery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Currency from "./Currency.js"

// Currency.getConversion(currency, amount);
// Promise.prototype.then(function (result) {
//   if (result instanceof Error) {
//     throw Error('Currency-Exchange API error: ${result.error-type}');
//   }
//   const placeholder = conversion_result.json()
// })

$(document).ready(function () {
  let promise = Currency.getConversion();
  promise.then(function (result) {
    const body = JSON.parse(conversion_result);
    $(".currency").text(body);
  })
})