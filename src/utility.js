const fetch = require('node-fetch');

const url = 'https://api.paymongo.com/v1/';

module.exports = {
  callpost: async function (func, secret, payload) {
    secret64 = btoa(secret);
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic '+secret64
      },
      body: JSON.stringify(payload)
    };
    return await fetch(url+func, options).json;
  },
  callput: async function (func, secret, payload) {
    secret64 = btoa(secret);
    const options = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic '+secret64
      },
      body: JSON.stringify(payload)
    };
    return await fetch(url+func, options).json;
  },
  callget: async function (func, secret, id) {
    secret64 = btoa(secret);
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic '+secret64
      }
    };
    return await fetch(url+func+'/'+id, options).json;
  }
}