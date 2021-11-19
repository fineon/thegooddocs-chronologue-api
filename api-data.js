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

//sorted from past to future
let experimentalData = [
  {
    year: "2300BCE",
    allContinents: [
      {
        continent: "africa",
        events: [
          {
            event: "humans moved away from Africa to non-icy areas in Europe and Asia",
            date: "60000BCE",
            links: "",
          },
          {
            event: "signs of deity worship and religious practices observed in Egypt",
            date: "2300BCE",
            links: "",
          },
          {
            event: "invention of math, bronze tools, woven clothing, writing in Egypt",
            date: "3250BCE",
            links: "",
          },
          
        ],
      },
      {
        continent: "asia",
        events: [
          {
            event: "The Yellow River valley in China cultivated millet and other cereal crops",
            date: "7000BCE",
            links: "",
          },
          {
            event: "Rise of Chinese civilization along the Yellow and Yangtze Rivers",
            date: "2200BCE",
            links: "",
          }
        ],
      },
      {
        continent: "europe",
        events: [
          {
            event: "yus",
            date: "123/23123/323",
            links: "",
          },
          {
            event: "the usa",
            date: "123/23123/323",
            links: "",
          }
        ],
      },
      {
        continent: "north-america",
        events: [
          {
            event: "sunflowers were cultivated",
            date: "4000BCE",
            links: "",
          },
          {
            event: "the usa",
            date: "123/23123/323",
            links: "",
          }
        ],
      },
      {
        continent: "south-america",
        events: [
          {
            event: "Potatoes were first cultivated in the Andes Mountains of South America, where the llama was also domesticated",
            date: "6000BCE",
            links: "",
          },
          {
            event: "Metalworking was first used in the creation of copper tools and ornaments",
            date: "6000BCE",
            links: "",
          }
        ],
      },
      {
        continent: "oceania",
        events: [
          {
            event: "yus",
            date: "123/23123/323",
            links: "",
          },
          {
            event: "the usa",
            date: "123/23123/323",
            links: "",
          }
        ],
      },
      {
        continent: "antartica",
        events: [
          {
            event: "yus",
            date: "123/23123/323",
            links: "",
          },
          {
            event: "the usa",
            date: "123/23123/323",
            links: "",
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
    allLocation: [
      'asia',
      'africa',
      'europe',
      'north america',
      'south america',
      'oceania',
      'antartica',
    ],
    metadata: [
      {
        listLength: 7,
      },
      {
        source: 'https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population',
        liscene: 'CC BY-SA 3.0',
        link: 'https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License'
      }
    ],
  },
]

//GET all year data
exports.allYears = [
  "2300BCE"
]

//GET all available API routes
exports.allRoutes = [
  { locations: '/all-locations-id' },
  { years: '/all-years-id' },
  { locationAndYears: '/year/:year-id/location/:location-id' }
]

