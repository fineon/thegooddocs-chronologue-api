exports.events = [
  {
    source: ''
  },

]

exports.countries = [
  { northAmerica: ['canada', 'usa'] },
  { asia: '' },
  { africa: '' },

]

/**
 * country
 * year
 * events
 * 
 * all countries + 1 year event data
 * all years + 1 country event data
 * all year + all countries event data
 */

let year1 = [{
  1990: [
  {jan: ['...','...']},
  {feb: '...'},
  {mar:'...'},
  {apr:'...'},
  {may:'...'}
  ]
}]

let country1 = [{can: [...year1]}]
console.log(country1)

exports.allCountries = [
  {
    Canada: [
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

exports.allCountriesID = [
  {
    allCountries: ['canada', 'usa'],
    URLexample: [
      'http://localhost:3000/1990/canada',
      'http://localhost:3000/1990/usa'
    ]
  },
]