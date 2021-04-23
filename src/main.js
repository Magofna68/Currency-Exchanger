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
  $('#conversionBtn').click(function (e) {
    let currency = $("#currency").val();
    let amount = $("#numberInput").val();
    clearFields();
    Currency.getConversion(currency, amount);
      .then(function (result) {
      if (result instanceof Error) {
        $('.error').text(`Currency-Exchanger API error: ${result}`);
      } else if (currency === "") {
        $('.error').text('Please select a currency')
      } else if (!input) {
        $('.error').text('Please enter a number to convert')
      } else if (result) {
        $('.showCurrencyResult').text('The conversion of ${response.base_code} to ${response.target_code} totals ${response.conversion_result}');
      } else {
        return;
      }
      console.log(Currency.getConversion(currency, amount))
      let currencyConverter = ('${response.conversion_result}');
      displayConvertedCurrency(currencyConverter);
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