const express = require('express')
const app = express()
const port = 8080
let {
  allRoutes,
  allYears,
  allLocationsID,
  allYearsAllLocation
} = require('./api-data.js')


app.get('/', (req, res) => {
  res.status(200).json(allRoutes)
})

app.get('/all-locations-id', (req, res) => {
  resstatus(200).json(allLocationsID)
})

app.get('/all-years-id', (req, res) => {
  res.status(200).json(allYears)
})

app.get('/year/:year', (req, res) => {
  console.log(req.params)

  /** seems like /year/ is treated like a unique url, so this error for params won't work */
  if (!req.params.year) {
    res.status(404).json("year url parameter not found. Enter a year or reference all available years in /all-years-id")
  }

  /**
   * if a year param is invalid, this code will attempt to send 2 requests at once and won't be able to set headers
   */
  // allYearsAllLocation.forEach((data) => data.year === req.params.year ? res.status(200).json(data.allCountries) : res.status(404).json('not found'))

  /**this returns a redundant empty object. Could be a little faster with map() but not worth the confusion for the user 
   * UPDATE: can replace map() with flatMap() to remove that redundant object
  */
  let yearlyDataOnly = allYearsAllLocation.flatMap((data)=> data.year === req.params.year? data.allCountries : [])
  res.status(200).json(yearlyDataOnly)

  // switch (req.params.year) {
  //   case '1990':
  //     res.json(year1Locations)
  //     break;
  //   case '1991':
  //     console.log('you have requested all events in 1991 around the world')
  //   default:
  //     console.log('no matching entries found. Please refer to the Chronologue API documentation for all available routes')
  //     break;
  // }
})

app.get('/location/:location', (req, res) => {
  console.log(req.params)

  let test1 = allYearsAllLocation.map((x) => {
    return {
      year: x.year,
      events: x.allCountries.flatMap((y) => y.country === req.params.location ? y.events : [])
    }

  }
  )

  res.status(200).json(test1)

  // switch (req.params.location) {
  //   case 'canada':
  //     res.status(200).json('you have requested all canada events')
  //     break;
  //   case 'usa':
  //     console.log('you have requested canada events in 1990')
  //     break;
  //   default:
  //     console.log('no matching entries found. Please refer to the Chronologue API documentation for all available routes')
  //     break;
  // }
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

  if (!req.params.location || !req.params.year) {
    res.status(404).json('sepcify year and location parameter')
  }

  // an algorithm that will take the params and match it to the ones in the array
  function matchKeys() {

    /**
    * only works with alphaAllYearsAllLocation 
    */
    //  return allYearsAllLocation.find((x) => {
    //     return x[req.params.year]
    //   })[req.params.year].filter((y) =>y[req.params.location])

    /**
     this works well with experimentalData, but annoying to reuturn an array with 1 obj. Just need to return an object 
    */
    // return allYearsAllLocation.filter((x)=> x.year === req.params.year)[0].allCountries.filter((y)=> y.country === req.params.location)
  }

  // console.log(typeof matchKeys())

  /**
   * this logic will return the actual object without a redundant array, but can't handle invalid params
   */
  // allYearsAllLocation.forEach((x) => x.year === req.params.year ? x.allCountries.forEach((y) => y.country === req.params.location ? res.json(y.events) : null) : null)

  // also works fine, even when there are invalid params
  let oDataMine = allYearsAllLocation.flatMap((x) => x.year === req.params.year ? x.allCountries.flatMap((y) => y.country === req.params.location ? y.events : []) : [])

  res.json(oDataMine)
  // res.send(
  //   matchKeys()
  //   //  allYearsAllLocation
  // )
})

app.listen(port, () => {
  console.log(`Chronologue server API listening at http://localhost:${port}`)
})
