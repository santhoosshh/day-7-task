var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.responseType = 'json';

xhr.send();

xhr.onload = function () { 
  var responseObj = xhr.response;
  var Reduce = responseObj.reduce(function(item,item){
    return item.population+item.population;
  });
console.log(Reduce);
}
