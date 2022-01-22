/**
 * for both year + locaation resources url
 * country
 * year
 *
 * all Location + 1 year event data
 * all years + 1 country event data
 * all year + all Location event data
 */

// standardize date format
const formatDateToISOString = (date) => {
  let defaultDateFormat = new Date(date);
  console.log(defaultDateFormat);

  let isoDateString = defaultDateFormat.toISOString();
  console.log(isoDateString);

  return isoDateString;
};

const formatUTCDatetoLocale = (date) => {
  let sentIsoDate = date.replace(/-/g, '\/').replace(/T.+/, '');
  let toLocaleDateString = new Date(sentIsoDate).toLocaleDateString();
  console.log(toLocaleDateString);
  return toLocaleDateString;
};

// prevents date conversion from moving one day backward


// sorted from past to future
let experimentalData = [
  {
    year: '1968',
    allContinents: [
      {
        continent: 'north-america',
        country: 'USA',
        events: [
          {
            event: 'The Orbiting Astronomical Observatory 2 was the first space telescope launched',
            date: formatDateToISOString('1968-12-07'),
            image: 'http://www.sal.wisc.edu/OAO/oao1reg.jpg',
            video: '',
            links: [
                'https://en.wikipedia.org/wiki/Space_exploration#Telescope',
                'http://www.sal.wisc.edu/OAO/'
            ],
          },
        ],
      },
    ],
  },
  {
    year: '1957',
    allContinents: [
      {
        continent: 'europe',
        country: 'Soviet',
        events: [
          {
            event: 'The first successful orbital launch of the Soviet uncrewed Sputnik 1 mission',
            date: formatDateToISOString('1957-10-04'),
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Sputnik_asm.jpg',
            video: 'link',
            links: [
                'https://en.wikipedia.org/wiki/Space_exploration#Telescope',
                'https://en.wikipedia.org/wiki/Sputnik_1',
            ]
          },
        ],
      },
    ],
  },
  {
    year: '1961',
    allContinents: [
      {
        continent: 'europe',
        country: 'Russia',
        events: [
          {
            event: 'The first successful human spaceflight was Vostok 1, carrying the 27-year-old Russian cosmonaut, Yuri Gagarin',
            date: formatDateToISOString('1961-04-12'),
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Vostok_spacecraft.jpg',
            video: 'link',
            links: [
                'https://en.wikipedia.org/wiki/Space_exploration#Telescope',
                'https://en.wikipedia.org/wiki/Vostok_1'
            ]
          },
        ],
      },
    ],
  },
  {
    year: '2012',
    allContinents: [
      {
        continent: 'north-america',
        country: 'USA',
        events: [
          {
            event: 'Voyager 1 became the first human-made object to leave the Solar System into interstellar space',
            date: formatDateToISOString('2012-08-25'),
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Voyager_spacecraft_model.png',
            video: 'link',
            links: [
                'https://en.wikipedia.org/wiki/Space_exploration#Telescope',
                'https://en.wikipedia.org/wiki/Voyager_1'
            ]
          },
        ],
      },
    ],
  },
  {
    year: '2021',
    allContinents: [
      {
        continent: 'north-america',
        country: 'USA',
        events: [
          {
            event: 'NASA Perseverance rover landed on Mars to find clues on past microbial life',
            date: formatDateToISOString('2021-02-18'),
            image: 'https://www.nasa.gov/sites/default/files/thumbnails/image/09_touchdown_10k.jpg',
            video: 'link',
            links: [
                'https://www.nasa.gov/press-release/nasa-invites-public-to-share-thrill-of-mars-perseverance-rover-landing',
                ''
            ]
          },
        ],
      },
    ],
  },
  {
    year: '2024',
    allContinents: [
      {
        continent: 'north-america',
        country: 'USA',
        events: [
          {
            event: 'NASA Artemis mission sending the first woman and man to the Moon by 2024',
            date: formatDateToISOString('2024'),
            image: 'https://blogs.nasa.gov/artemis/wp-content/uploads/sites/303/2021/10/OrionStacked.jpg',
            video: 'link',
            links: [
                'https://www.nasa.gov/specials/artemis/',
                'https://blogs.nasa.gov/artemis/2021/10/20/stacking-operations-for-artemis-i-mission-nearing-completion/'
            ]
          },
        ],
      },
    ],
  },
];

// all year + all Location
// SHOULD BE A SOURCE OF TRUTH FOR ALL DATA AND API CALLS
exports.allYearsAllLocation = [...experimentalData];


// GET all location data
exports.allLocationsID = [
  {
    continent: [
      'asia',
      'africa',
      'europe',
      'north-america',
      'south-america',
      'oceania',
      'antartica',
    ],
    country: [
      'USA',
      'Soviet',
      'Russia',
    ],
    metadata: [
      {
        listLength: 7,
      },
      {
        source: 'https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population',
        liscene: 'CC BY-SA 3.0',
        link: 'https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License',
      },
    ],
  },
];

// GET all year data
exports.allYears = [
  // TODO: put gather years data here
];

// GET all available API routes
exports.allRoutes = [
  {locations: '/all-locations-id'},
  {years: '/all-years-id'},
  {locationAndYears: '/year/:year-id/location/:location-id'},
];

