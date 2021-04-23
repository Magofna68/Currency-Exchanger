import $ from 'jquery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Currency from "./Currency.js";

function clearFields() {
  $("#numberInput").val("");
}

function displayConvertedCurrency(response, amount, currency) {
  if (response.result instanceof Error) {
    $('.error').text(`Currency-Exchanger API error: ${response.result}`);
  } else if (currency === "") {
    $('.error').text('Please select a conversion currency');
  } else if (!amount) {
    $('.error').text('Please enter a number to convert');
  } else if (response) {
    $('.showCurrencyResult').text('The conversion of ${response.base_code} to ${response.target_code} totals ${response.conversion_result}');
  } else {
    return;
  }
}

$(document).ready(function () {
  $('#conversionBtn').click(function () {
    let currency = $("#currency").val();
    let amount = $("#numberInput").val();
    clearFields();
    Currency.getConversion(amount, currency).then(function () {
      displayConvertedCurrency(response, amount, currency);
    });
  });
});

// Currency.getConversion(currency, amount);
// Promise.prototype.then(function (result) {
//   if (result instanceof Error) {
//     throw Error('Currency-Exchange API error: ${result.error-type}');
//   }
//   const placeholder = conversion_result.json()
// })