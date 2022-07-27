import axios from 'axios';
const GLOBAL = require('../Global/Global');

export function getCategories() {
  var config = {
    method: 'get',
    url: GLOBAL.BASE_URL + GLOBAL.GET_REQUEST.getCategories,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(response => {
        result = JSON.stringify(response.data);
        resolve(result);
      })
      .catch(function (error) {
        reject(error)
      });
  })
}

export function getProducts(url, data) {
  console.log('data in api manager.. ',data)
  var config
  if(data == null){
    config = {
    method: 'get',
    url: url,
  };
  }else{
    config = {
      method: 'post',
      url: url,
      data : data
  };
  }

  return new Promise((resolve, reject) => {
    axios(config)
      .then(response => {
        result = JSON.stringify(response.data);
        resolve(result);
      })
      .catch(function (error) {
        reject(error)
      });
  })
}