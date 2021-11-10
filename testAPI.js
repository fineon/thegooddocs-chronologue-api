const axios = require('axios')

function requestsInOrder(params) {
    async function fetchYearOnly(params) {
        let result1 = await axios.get('http://localhost:8080/year/1990');
        console.log(result1.data)    
    }
    //fetchYearOnly().catch((err)=>console.error(err))
    
    async function fetchYearandLocation(params) {
        let result2= await axios.get('http://localhost:8080/year/1990/location/canada');
        console.log(result2.data);
    }
    //fetchYearandLocation().catch((err)=>console.error(err));
    
    async function fetchOnlyLocation(params) {
        let result3= await axios.get('http://localhost:8080/location/canada')
        console.log(result3.data)
    }
    //fetchOnlyLocation().catch((err)=>console.error(err));

    async function fetchAllCountries(params) {
        let result4= await axios.get('http://localhost:8080/allcountriesid')
        console.log(result4.data)
    }
    Promise.all([fetchAllCountries(), fetchOnlyLocation(),fetchYearandLocation(),fetchYearOnly()]).catch((err)=> console.error(err))
}

requestsInOrder()