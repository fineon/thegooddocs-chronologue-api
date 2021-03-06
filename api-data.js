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
  let isoDateString = new Date(date).toISOString();
  console.log(isoDateString);

  return isoDateString;
}

/**
 * NOTE: MUST use .replace(/-/g, '\/') in date string before parsing it in UTC timezone to get the correct date
 * example:
 * console.log(new Date('2000-06-30').replace(/-/g, '\/').toLocaleDateString('en-CA'))
 */

// prevents date conversion from moving one day backward
formatDateToISOString('2000-06-30')

//all Location and 1 year event data. All dates are in format: YYYY-MM-DD
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

let alphaAllYearsAllLocation = [
  { "3500": [...onlyYear1Location] },
  { "4000": [...onlyYear1Location] },
  { "5000": [...onlyYear1Location] },
]

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

// not in use at the moment
exports.year1Locations = [...onlyYear1Location]

let parsedCan = onlyYear1Location.splice(0, 1)

//all year + 1 country event data
exports.allYearsOnlyCanada = [
  { 3500: [...parsedCan] },
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
  { locationAndYears: '/year/:year-id/location/:location-id' }
]

