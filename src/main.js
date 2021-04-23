import $ from 'jquery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Currency from "./Currency.js";

function clearFields() {
  $("#numberInput").val("");
}


$(document).ready(function () {
  $('#conversionBtn').click(function () {
    const currency = $("#currency").val();
    const amount = $("#numberInput").val();
    clearFields();
    Currency.getConversion(amount, currency).then(function (response) {
      displayConvertedCurrency(response);
    });
  });
});

function displayConvertedCurrency(response, currency, amount) {
  if (response.result === Error) {
    $('.error').text(`Currency-Exchanger API error: ${response.result}`);
  } else if (currency === "") {
    $('.error').text('Please select a conversion currency');
  } else if (amount === "" || 0) {
    $('.error').text('Please enter a number to convert');
  } else if (response) {
    $('.showCurrencyResult').text('The conversion of ${response.base_code} to ${response.target_code} totals ${response.conversion_result}');
  } else {
    return;
  }
}


// Currency.getConversion(currency, amount);
// Promise.prototype.then(function (result) {
//   if (result instanceof Error) {
//     throw Error('Currency-Exchange API error: ${result.error-type}');
//   }
//   const placeholder = conversion_result.json()
// })