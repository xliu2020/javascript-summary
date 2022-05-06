const request = require('request');
const argv = require('yargs').argv;


let apikey = '5ebd9051e0b995adce6da2c49a928796';
// let city = 'portland';
let city = argv.c || 'portland';

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apikey}`

request(url, function(err, response, body) {
    if (err) {
        console.log('error:',error);
    } else {
       
        let weather = JSON.parse(body);
       
        let message = `It's ${weather.main.temp} degrees in ${weather.name} and the min temperature is ${weather.main.temp_min} degrees and the max temperature is ${weather.main.temp_max} degrees`;
        console.log(message);   
    }
});




