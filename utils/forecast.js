const request = require('request')
const chalk = require('chalk')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=a881442ca3b9f7e89ca6149054c1fbc1&query="+latitude+","+longitude+"&units=f"
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service", undefined)
        } else if (body.error) {
                callback("Unable to find location", undefined)

        } else {
            callback(undefined, chalk.magentaBright(body.location.name + ", " + body.location.region))
            callback(undefined, "It is currently " + chalk.yellow.bold(body.current.temperature) + " degrees F")
            callback(undefined, "The windchill makes it feel " + chalk.green.bold(body.current.feelslike) + " degrees F")
            callback(undefined, "The current windspeed is " + chalk.blueBright(body.current.wind_speed + " " + body.current.wind_dir))
            callback(undefined, "The current time is " + chalk.cyanBright(body.location.localtime))
            callback(undefined, "The wind pressure is " + chalk.red.bold(body.current.pressure))   
        }
    })
}

module.exports = forecast



//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

