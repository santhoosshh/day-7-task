var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.responseType = 'json';
xhr.send();
xhr.onload = function () { 
  var responseObj = xhr.response;
//   console.log(responseObj)
  var res = responseObj.filter(function(item){
   return item.currencies && item.currencies.USD;
  });
var usdcountries = res.map(function(item){
    return item.name.common;
  });
console.log(usdcountries);
} 
