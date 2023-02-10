export default class Currency {
  static generateCurrency(generate) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = 'https://v6.exchangerate-api.com/v6/c2b3b903e95c1e378e32656c/latest/USD=${process.env.API_KEY}';
      request.addEventListener("loadend", function() {
      const response = JSON.parse(this.responseText);
      console.log('response');
      if(response.error === false) {
        resolve(response);
      } else {
        reject([this, response]);
      }
    });
    request.open("GET", url, true);
    request.send()
  });
}
}