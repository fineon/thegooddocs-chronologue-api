const planetList = require('./get-all-countries')

/**
 * for both year + locaation resources url
 * planet
 * year
 * 
 * all Location + 1 year event data
 * all years + 1 planet event data
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
    year: "1990",
    allLocations: [
      {
        planet: "MTX120",
        events: [
          {
            event: "Violent storm activities constantly form and terminate due to harsh winds and extreme temperature changes",
            date: "1990",
            links: "",
          },
        ],
      },
      {
        planet: "XER491",
        events: [
          {
            event: "began to form small colonies of primal life",
            date: "1990",
            links: "",
          },
        ],
      },
      {
        planet: "BN110",
        events: [
          {
            event: "stabilizing its fusion core",
            date: "1990",
            links: "",
          },
        ],
      },
    ],
  },
  {
    year: "2019",
    allLocations: [
      {
        planet: "MTX120",
        events: [
          {
            event: "MTX120 encounters an asteroid impact from its nearby asteroid belt",
            date: "2019",
            links: "https://en.wikipedia.org/wiki/Asteroid",
          },
        ],
      },
      {
        planet: "BN110",
        events: [
          {
            event: "BN110 is now a main sequence yellow star, providing stable heat and light to its nearby planets",
            date: "2019",
            links: "",
          },
        ],
      },
      {
        planet: "XER491",
        events: [
          {
            event: "XER491 is exhibiting signs of life. An insect-like species is thriving in a tropical-like climate and habitat",
            date: "2019",
            links: "",
            futureEvent: "/localhost:8080/year/5000/location/XER491",
          },
        ],
      },
    ],
  },
  {
    year: "5000",
    allLocations: [
      {
        planet: "MTX120",
        events: [
          {
            event: "MTX120 is showing signs of water vapours from its last asteroid impact, now sustaining small water puddles encounters an asteroid impact from its nearby asteroid belt",
            date: "5000",
            links: "",
          },
        ],
      },
      {
        planet: "BN110",
        events: [
          {
            event: "BN110 is reaching supernova, soon to be a white dwarf",
            date: "5000",
            links: "",
          },
        ],
      },
      {
        planet: "XER491",
        events: [
          {
            event: " XER491 is encountering a food-crisis due to extended temperature cool down, life still exists but dwindling. Current population have began migrating to another planets from the created wormholes. ",
            date: "5500",
            links: "",
          },
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
    allLocation: planetList,
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
exports.allYears = [ 1990, 2019, 5000 ]

//GET all available API routes
exports.allRoutes = [
  { locations: '/all-locations-id' },
  { years: '/all-years-id' },
  { locationAndYears: '/year/:year-id/location/:location-id' }
]

