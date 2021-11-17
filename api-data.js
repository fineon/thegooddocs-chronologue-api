const countryList = require('./get-all-countries')

/**
 * for both year + locaation resources url
 * country
 * year
 * 
 * all Location + 1 year event data
 * all years + 1 country event data
 * all year + all Location event data
 */

let year4000AllLocations = [
  {
    Canada: null
  }
]




//standardize date format
const formatDateToISOString = (date) => {
  let defaultDateFormat = new Date(date);
  console.log(defaultDateFormat)

  let isoDateString = defaultDateFormat.toISOString();
  console.log(isoDateString);

  console.log(new Date(isoDateString).toLocaleDateString('en-CA'))

  return isoDateString;
}

// prevents date conversion from moving one day backward
formatDateToISOString('2000-06-30'.replace(/-/g, '\/'))

//all Location and 1 year event data
let onlyYear1Location = [
  {
    canada: [
        {
            event: '1st dyson sphere deployed',
            date: '2000-09-30',
            link: 'https://youtu.be/pP44EPBMb8A'
        },
        {
            event: 'lorem ipson',
            date: 'all in UTC time zone for ease of conversion',
            link: 'https://youtube.com'
        },
    ]
  },
  {
    usa: [
        {
            event: 'ayoooo',
            date: 'all in UTC time zone for ease of conversion',
            link: 'https://youtube.com'
        },
        {
            event: 'nahhh',
            date: 'all in UTC time zone for ease of conversion',
            link: 'https://youtube.com'
        },
    ]
  },
]

//all year + all Location
// SHOULD BE A SOURCE OF TRUTH FOR ALL DATA AND API CALLS
exports.allYearsAllLocation = [
  { "3500": [...onlyYear1Location] },
  { "4000": [...onlyYear1Location] },
  { "5000": [...onlyYear1Location] },
]

exports.year1Locations = [...onlyYear1Location]

let parsedCan = onlyYear1Location.splice(0,1)

//all year + 1 country event data
exports.allYearsOnlyCanada = [
    { 3500: [ ...parsedCan ] },
    { 4000: ['...'] },
]


// GET all location data 
exports.allLocationsID = [
  {
    allLocation: countryList,
    metadata: [ 
      {
        ListLength: 250,
      },
      {
        source: 'https://restcountries.com/#api-endpoints-v3-all',
        liscene: 'MPL 2.0'
      } 
    ],
  },
]

//GET all year data
exports.allYears = [
  5262, 4598, 3856, 2355, 7853,
]

//GET all available API routes
exports.allRoutes = [
  { locations: '/all-locations-id' },
  { years: '/all-years-id' },
  { locationAndYears: '/year/:year-id/location/:location-id'}
]