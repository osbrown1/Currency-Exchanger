export default class ExchangeRateService {
  static getExchangeRate(baseCurrency) {
  return fetch('https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${USD}')
  