const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=1954b1f03c32542fbfdb5fa31238fab5&query=Tashkent'

request({ url: url, json: true }, (error, response) => {

  if (error) {
    console.log('Unable to connect to weather server!')
  } else if (response.body.error) {
    console.log('Unable to find location. Try another')
  } else {
    const data = response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' C.'

    console.log(data)
  }
})