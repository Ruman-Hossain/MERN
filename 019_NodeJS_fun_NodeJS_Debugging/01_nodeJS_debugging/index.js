var axios = require('axios');
var URL="https://restcountries.com/v2/all";
// Payment
// SMS
// Paid API
// CSRF Sec
// DOS Attck...

axios.get(URL).then(function (response) {
    let CountryList=response.data;
    let StatusCode=response.status;

    console.log(CountryList)
    console.log(StatusCode)


}).catch(function (error){
    console.log(error)
})