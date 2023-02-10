import 'bootstrap';
import 'bootstrap/dist/css/botstrap.min.css';
import './css/styles.css';
import Currency from './currency.js';


//Business Logic

function generateCurrency(generate) {
  let promise = Currency.generateCurrency(generate);
  promise.then(function(response) {
    printElements(response, generate)
  })
}