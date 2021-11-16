// source: https://restcountries.com/#api-endpoints-v3-all
//liscene: MPL 2.0
const list = require('./all-countries-list.json')
const fs = require('fs')

function getAllCountries() {
    // let list2 = JSON.parse(list)
    let onlyCountryNames = list.map((x) => x.name)
    return onlyCountryNames
        .map((y) => y.common)
        .sort()
}

exports.countryList = [...getAllCountries()]

function getAllCountriesInString() {
    return getAllCountries().join("\r\n").toString()
}

const write = getAllCountriesInString()

function writeCountriesToFiles() {
    try {
        fs.writeFile('country-names.md', write, (error) => console.log(error))
    }
    catch (err) {
        console.error(err)
    }
}


console.dir(getAllCountries().length)