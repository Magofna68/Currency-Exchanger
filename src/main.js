import $ from 'jquery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Currency from "./Currency.js";

function clearFields() {
  $("#numberInput").val("");
  $(".showCurrencyResult").val("");
  $(".error").val("");
}

$(document).ready(function () {
  $('#conversionBtn').click(function () {
    const currency = $("#currency").val();
    const amount = $("#numberInput").val();
    clearFields();
    Currency.getConversion(amount, currency).then(function (response) {
      displayConvertedCurrency(response, currency, amount);
    });
  });
});

function displayConvertedCurrency(response, currency, amount) {
  if (response.result === 'error') {
    $('.showCurrencyResult').text('Sorry, that currency does not exist. Please select a currency to convert.')
  } else if (amount === "0" || amount === "") {
    $('.showCurrencyResult').text('Please enter a valid number to convert');
  } else if (response) {
    $('.showCurrencyResult').text(`The conversion of ${response.base_code} to ${response.target_code} totals ${response.conversion_result}`);
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