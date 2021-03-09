const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('hawaii', (error, data) => {
    // console.log('Error', error)
    console.log('data', data)
    forecast(data.latitude, data.longitude, (error, data) => {
        // console.log('Error', error)
        console.log('Data', data)
      })
})

