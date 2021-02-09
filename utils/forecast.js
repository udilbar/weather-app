const request = require('request')

const forecast = (latitude, longitude, location, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=1954b1f03c32542fbfdb5fa31238fab5&query=' + latitude + ',' + longitude

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' C.')
    }
  })
}

module.exports = forecast