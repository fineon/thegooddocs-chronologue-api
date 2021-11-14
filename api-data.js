/**
 * for both year + locaation resources url
 * country
 * year
 * events
 * 
 * all Location + 1 year event data
 * all years + 1 country event data
 * all year + all Location event data
 */

//standardize date format
let isoDateString = new Date().toISOString();
console.log(isoDateString);

//all Location and 1 year event data
let onlyYear1Location = [
  {
    Canada: [
        {
            event: '1st dyson sphere deployed',
            date: 'all in UTC time zone for ease of conversion',
            link: 'https://youtu.be/pP44EPBMb8A'
        },
        {
            event: 'Super computer announced',
            date: 'all in UTC time zone for ease of conversion',
            link: 'https://youtube.com'
        },
    ]
  },
  {
    USA: [
        {
            event: '1st computer invented',
            date: 'all in UTC time zone for ease of conversion',
            link: 'https://youtube.com'
        },
        {
            event: 'computer IBM announced',
            date: 'all in UTC time zone for ease of conversion',
            link: 'https://youtube.com'
        },
    ]
  },

]


exports.year1Locations = [...onlyYear1Location]

let parsedCan = onlyYear1Location.splice(0,1)
console.log(parsedCan)

//all year + 1 country event data
exports.allYearsOnlyCanada = [
    { 3500: [ ...parsedCan ] },
    { 4000: ['...'] },
]

//all year + all Location
exports.allYearsAllLocation = [
    { 3500: onlyYear1Location },
    { 4000: onlyYear1Location},
]

// GET all location data 
exports.allLocationsID = [
  {
    allLocation: [
      'Sennorus',
      'Gicephus',
      'Bestrov',
      'Chonzarvis',
      'Chaenerth',
      'Danus',
      'Groconus',
      'Thezibos',
      'Grilia 87M',
      'Sone XTMZ',
    ],
    metadata: [ 
      {
        relatedLinks: [
          '/year/:year/location/:countryID'
        ]
      },
      {
        types: ['red dwarf','main sequence yellow']
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