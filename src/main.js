import $ from 'jquery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Currency from "./Currency.js"

Currency.getConversion(currency);
Promise.prototype.then(function (result) {
  if (result instanceof Error) {
    throw Error('Currency-Exchange API error: ${result.error-type}');
  }
})