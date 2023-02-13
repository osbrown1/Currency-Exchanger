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
    if (exchangeRate.error) {
      document.querySelector("#showResponse").innerText = `Error: ${exchangeRate.error}`;
      return;
    }
    if (!Object.prototype.hasOwnProperty.call(exchangeRate.conversion_rates, currency)) {
      document.querySelector("#showResponse").innerText = `Error: Currency ${currency} doesn't exist`;
      return;
    }
    
    const convertedAmount = amount * exchangeRate.conversion_rates[currency];
    document.querySelector("#showResponse").innerText = `${amount} USD is equal to ${convertedAmount.toFixed(2)} ${currency}`;
  } catch (error) {
    document.querySelector("#showResponse").innerText = `An error occurred: ${error}`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});


  