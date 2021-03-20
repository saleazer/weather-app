const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

const location = process.argv[2]

if(!location) {
    console.log(chalk.red.bold('Please provide location..'))
} else {
    geocode(location, (error, {latitude, longitude} = {}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(forecastData)
        })
    })
}
