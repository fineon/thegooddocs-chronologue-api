const express = require('express')
const app = express()
const port = 8080
const {
  allCountries,
  allCountriesID
} = require('./historical-events.js')

let allRoutes = [
  { countries: '/allcountries' },
  { years: '/allyears' },
  {}
]

app.get('/', (req, res) => {
  res.status('200').json(allRoutes)
})


app.get('/allcountriesid', (req, res) => {
  res.json(allCountriesID)
})


/**
 * @description
 * expressjs doesnt differentiate any types of url params. Anything inputed in the first route will be evaluated. 
 * Bad API design
*/
// app.get('/:time', (req, res) => {
//   console.log(req.params)

//   switch (req.params.time) {
//     case '1990':
//       console.log('you have requested all events in 1990 around the world')
//       break;
//     case '1991':
//       console.log('you have requested all events in 1991 around the world')
//       break;
//     default:
//       console.log('no matching time period found. Please refer to the Chronologue API documentation for all available routes')
//       break;
//   }
// })

app.get('/year/:time', (req, res) => {
  console.log(req.params)

  switch (req.params.time) {
    case '1990':
      res.json(allCountries)
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

/**
 * @description
 * duplicated URI path which makes error detection faulty. Need unique URI for !req.params.location to work
 * 
 * poor api design example. Requests cant differentiate between different resources
 */
// app.get('/1990/:location', (req, res) => {
//   console.log(req.params.location)
//   if (!req.params.location) {
//     console.error('no paramerters detected. Please enter a location')
//   }
//   // if (req.params.location === 'canada') {
//   //   console.log('you have requested canada events in 1990')
//   // }
// })

/**
   * if 1990 == can return ...
   * if 1990 == usa return ...
   * if 1992 == can return ...
   * if 1992 == usa return ...
   */
let arr1 = ['1990', '1992']
let arr2 = ['can', 'usa']
// let arr3 = [...req.params.time, ...req.params.location]
let arr4 = [...arr1, ...arr2]
let arr5 = ['1990','1992', 'can', 'usa']
console.log(arr4)

/**
 *idea1: have 2 arrays, 1 from request, 1 from predetermined data and comprare them, if arr1[0] includes 1990 and arr2[0] includes 'can' then return the right data
 */

// arr4.forEach((item) => arr5.includes(item)? console.log(true): console.log(false))

console.log(arr4.map((x) => x = 'can').includes(arr5[2]))

//scaling this might be messy
app.get('/year/:time/location/:location', (req, res) => {
  console.log(req.params)
  // req.params.time === '1990' && req.params.location === 'canada' ? res.send('canada in 1990 maxtrix') : res.send('not found')

  if (req.params.time === '1990' && req.params.location === 'canada') {
    res.send('can 1990')
  } else if(req.params.time === '1990' && req.params.location === 'usa'){
    res.send('1990 usa')
  } else {
    res.send('time and location not found')
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
