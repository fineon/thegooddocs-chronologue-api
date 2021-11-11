/**
 * country
 * year
 * events
 * 
 * all countries + 1 year event data
 * all years + 1 country event data
 * all year + all countries event data
 */

//all countries and 1 year event data
exports.allCountries = [
  {
    Canada: [
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
      { nov: '11' },
      { dec: '12' },
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
      { nov: '11' },
      { dec: '12' },
    ]
  },

]

//all year + 1 country event data
exports.allYearsOnlyCanada = [
    { 3500: [ {jan: '...'},{feb: '...'} ] },
    { 4000: ['...'] },
]

//all year + all countries
exports.allYearsAllCountries = [
    { 3500: allCountries  },
    { 4000: allCountries },
]


exports.allCountriesID = [
  {
    allCountries: ['canada', 'usa'],
    countryMetadata: [ { } ]
  },
]
