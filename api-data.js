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

let experimentalData = [
  {
    year: "5000",
    allCountries: [
      {
        country: "canada",
        events: [
          {
            event: "blablabla",
            date: "123/23123/323",
            links: "aasd",
          },
          {
            event: "blablabla",
            date: "123/23123/323",
            links: "aasd",
          }
        ],
      },
      {
        country: "usa",
        events: [
          {
            event: "yus",
            date: "123/23123/323",
            links: "aasd",
          },
          {
            event: "the usa",
            date: "123/23123/323",
            links: "aasd",
          }
        ],
      },
    ],
  },
  {
    year: "6000",
    allCountries: [
      {
        country: "canada",
        events: [
          {
            event: "yabadabadooo",
            date: "123/23123/323",
            links: "aasd",
          },
          {
            event: "ayyy year 600",
            date: "123/23123/323",
            links: "aasd",
          }
        ],
      },
      {
        country: "usa",
        events: [
          {
            event: "its 6000",
            date: "123/23123/323",
            links: "aasd",
          },
          {
            event: "the usa 6000",
            date: "123/23123/323",
            links: "aasd",
          }
        ],
      },
    ],
  },

]

//all year + all Location
// SHOULD BE A SOURCE OF TRUTH FOR ALL DATA AND API CALLS
exports.allYearsAllLocation = [...experimentalData]


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
  { locationAndYears: '/year/:year-id/location/:location-id' }
]

