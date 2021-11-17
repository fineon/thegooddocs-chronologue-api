const express = require('express')
const app = express()
const port = 8080
let {
  allRoutes,
  allYears,
  year1Locations,
  allLocationsID,
  allYearsAllLocation
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

app.get('/year/:year', (req, res) => {
  console.log(req.params)

  switch (req.params.year) {
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

// app.get('/year/:year/location/:location', (req, res) => {
//   console.log(req.params)

//   if (req.params.year === '1990' && req.params.location === 'canada') {
//     res.send('can 1990')
//   } else if(req.params.year === '1990' && req.params.location === 'usa'){
//     res.send('1990 usa')
//   } else {
//     res.send('time and location not found')
//   }
// })


app.get('/year/:year/location/:location', (req, res) => {
  console.log(req.params)

  // an algorithm that will take the params and match it to the ones in the array
  function matchKeys() {

    // allYearsAllLocation.forEach((x) => {
    //   res.send(x[req.params.year].find((y) =>
    //     y[req.params.location]))
    // })

   return allYearsAllLocation.find((x) => {
      return x[req.params.year]
        // 
    })[req.params.year].filter((y) =>y[req.params.location])

 

    // console.log(allYearsAllLocation[0]["3500"]
    //             .find((x)=>x["usa"])
    // )
  }

  console.log(typeof matchKeys())
  
  res.send(
    matchKeys()
    //  allYearsAllLocation
  )
})

app.listen(port, () => {
  console.log(`Chronologue server API listening at http://localhost:${port}`)
})
