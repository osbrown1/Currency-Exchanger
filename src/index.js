import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js';


async function handleFormSubmission(event) {
  event.preventDefault();
  try {
    const exchangeRate = await Currency.getExchangeRate();
    document.querySelector("#showResponse").innerText = `The latest exchange rate for USD is ${exchangeRate.rate}`;
  } catch (error) {
    document.querySelector("#showResponse").innerText = `An error occurred: ${error}`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});


  