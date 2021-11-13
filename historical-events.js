/**
 * country
 * year
 * events
 * 
 * all countries + 1 year event data
 * all years + 1 country event data
 * all year + all countries event data
 */

//standardize date format
let isoDateString = new Date().toISOString();
console.log(isoDateString);

//all countries and 1 year event data
let originCountries = [
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
exports.allCountries = [...originCountries]

let parsedCan = originCountries.splice(0,1)
console.log(parsedCan)

//all year + 1 country event data
exports.allYearsOnlyCanada = [
    { 3500: [ ...parsedCan ] },
    { 4000: ['...'] },
]

//all year + all countries
exports.allYearsAllCountries = [
    { 3500: originCountries },
    { 4000: originCountries },
]


exports.allCountriesID = [
  {
    allCountries: ['canada', 'usa'],
    countryMetadata: [ {relatedLinks: ['/year/:year/location/:countryID']} ]
  },
]
