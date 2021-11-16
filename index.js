const express = require('express')
const app = express()
const port = 8080
let {
  allRoutes,
  allYears,
  year1Locations,
  allLocationsID
} = require('./api-data.js')


app.get('/', (req, res) => {
  res.status('200').json(allRoutes)
})

app.get('/all-locations-id', (req, res) => {
  res.json(allLocationsID)
})

app.get('/all-years-id', (req, res) => {
  res.json(allYears)
})

app.get('/year/:time', (req, res) => {
  console.log(req.params)

  switch (req.params.time) {
    case '1990':
      res.json(year1Locations)
      break;
    case '1991':
      console.log('you have requested all events in 1991 around the world')
    default:
      console.log('no matching entries found. Please refer to the Chronologue API documentation for all available routes')
      break;
  }
})

app.get('/location/:location', (req, res) => {
  console.log(req.params)

  switch (req.params.location) {
    case 'canada':
      res.status(200).json('you have requested all canada events')
      break;
    case 'usa':
      console.log('you have requested canada events in 1990')
      break;
    default:
      console.log('no matching entries found. Please refer to the Chronologue API documentation for all available routes')
      break;
  }
})

app.get('/year/:time/location/:location', (req, res) => {
  console.log(req.params)

  if (req.params.time === '1990' && req.params.location === 'canada') {
    res.send('can 1990')
  } else if(req.params.time === '1990' && req.params.location === 'usa'){
    res.send('1990 usa')
  } else {
    res.send('time and location not found')
  }
})

app.listen(port, () => {
  console.log(`Chronologue server API listening at http://localhost:${port}`)
})
