const fetch = require('node-fetch');

const url = 'https://api.paymongo.com/v1';

module.exports = {
  call: async function (secret) {

  }
}
const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Basic '
  },
  body: JSON.stringify({
    data: {
      attributes: {details: {card_number: '43343', exp_month: 434, exp_year: 43, cvc: '43'}}
    }
  })
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));