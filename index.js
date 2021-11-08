const express = require('express')
const app = express()
const port = 8080

let allRoutes =[
  {countries: '/allcountries'},
  {years: '/allyears'},
  {}
]

app.get('/', (req, res) => {
  res.status('200').send('Hello World!')
})

/**
 * @type {Array}
 * @description date is in UTC time string
 */

let canDate = new Date
let allCountries = [
  {
    Canada: [
      {
        jan:
          [
            {
              event: '1st computer invented',
              date: canDate.toUTCString(),
              link: 'https://youtube.com'
            },
            {
              event: 'computer IBM announced',
              date: 'all in UTC time zone for ease of conversion',
              link: 'https://youtube.com'
            }
          ]
      },
      { feb: '2' },
      { march: '3' },
      { april: '4' },
      { may: '5' },
      { june: '6' },
      { july: '7' },
      { august: '8' },
      { sept: '9' },
      { oct: '10' },
      { nov: '11' },
      { dec: '12' },
    ]
  },
  {
    USA: [
      {
        jan:
          [
            {
              event: '1st computer invented',
              date: 'all in UTC time zone for ease of conversion',
              link: 'https://youtube.com'
            },
            {
              event: 'computer IBM announced',
              date: 'all in UTC time zone for ease of conversion',
              link: 'https://youtube.com'
            }
          ]
      },
      { feb: '2' },
      { march: '3' },
      { april: '4' },
      { may: '5' },
      { june: '6' },
      { july: '7' },
      { august: '8' },
      { sept: '9' },
      { oct: '10' },
      { nov: '11' },
      { dec: '12' },
    ]
  },

]

let allCountriesID = [
  {
    allCountries: ['canada', 'usa'],
    URLexample: [
      'http://localhost:3000/1990/canada',
      'http://localhost:3000/1990/usa'
    ]
  },
]

app.get('/allcountries', (req, res) => {
  res.json(allCountriesID)
})

// app.get('/1990', (req, res) => {
//   res.json(allCountries)
// })

/**
 * 
 * expressjs doesnt differentiate any types of url params. Anything inputed in the first route will be evaluated
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
 * @example
 * duplicated URI path which makes error detection faulty. Need unique URI for !req.params.location to work
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

let allpossibilities=[[1990,1991],['canada','usa']]

//scaling this might be messy
app.get('/year/:time/location/:location', (req, res) => {
  console.log(req.params)
  // res.json(`you have sent a request to ${req.params}`)
  req.params.time === '1990' && req.params.location=='canada' ? res.send('canada in 1990 maxtrix') : res.send('not found')

  // switch (req.params.time) {
  //   case '1990':
  //     req.params.location === 'canada'? 
  //     res.json(allCountries) : 
  //     res.send('not canada, sending usa data')
  //     break;
  //   case '1991':
  //     req.params.location === 'usa'? 
  //     res.json(allCountries) : 
  //     res.send('not usa, sending usa data')
  //     break;
  //   default:
  //     res.send('not found')
  //     break;
  // }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
