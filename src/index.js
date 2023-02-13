import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js';


async function handleFormSubmission(event) {
  event.preventDefault();
  const amount = document.querySelector("#amount").value;
  const currency = document.querySelector("#currency").value;
  try {
    const exchangeRate = await Currency.getExchangeRate();
    document.querySelector("#showResponse").innerText = `The exchange rate for ${currency} is ${exchangeRate.conversion_rates[currency]} for ${amount} USD`;
  } catch (error) {
    document.querySelector("#showResponse").innerText = `An error occurred: ${error}`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});


  