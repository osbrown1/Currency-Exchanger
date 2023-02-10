import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js';


//Business Logic

function generateCurrency(generate) {
  let promise = Currency.generateCurrency(generate);
  promise.then(function(response) {
    printElements(response, generate);
  }, function(errorMessage){
    printError(errorMessage);
  });
}


//UI Logic

function printElements(response) {
  document.querySelector('#currency-content').innerText = `The currency is: ${response.currency}`;
}

function printError(error, generate) {
  document.querySelector('#currency-content').innerText = `There was an error accessing the thing for ${generate}: ${error.message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const generate = document.getElementById('generate-input').value;
  generateCurrency(generate);
}

  window.addEventListener("load", function() {
  document.getElementById("button").addEventListener("click", handleFormSubmission);
  });