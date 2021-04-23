import $ from 'jquery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Currency from "./Currency.js"

function clearFields() {
  $("#currency").val("")
  $("#numberInput").val("")
}

function displayConvertedCurrency(currencyConverter) {
  $('.showCurrencyResult').text('The conversion is ${currencyResult}!')
}

$(document).ready(function () {
  $('#conversionBtn').click(function () {
    let currency = $("#currency").val();
    let amount = $("#numberInput").val();
    clearFields();
    Currency.getConversion(currency, amount);
    Promise.prototype.then(function (result) {
      if (result instanceof Error) {
        $(.error).text(`Currency-Exchanger API error: ${result}`);
      } else if (!input) {
        $('.error').text('Please enter a number to convert')
      } else if (currency === "") {
        $('.error').text('Please select a currency')
      } else if (result) {
        $('.showCurrencyResult').text('')
      }
        let currencyConverter = url.conversion_result;
        displayConvertedCurrency(currencyConverter);
      }
    })
  })
})
// Currency.getConversion(currency, amount);
// Promise.prototype.then(function (result) {
//   if (result instanceof Error) {
//     throw Error('Currency-Exchange API error: ${result.error-type}');
//   }
//   const placeholder = conversion_result.json()
// })