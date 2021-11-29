const axios = require('axios')

function requestsInOrder(params) {
    async function fetchYearOnly(params) {
        let result1 = await axios.get('http://localhost:8080/year/2012');
        console.log(result1.data)    
    }
    //fetchYearOnly().catch((err)=>console.error(err))
    
    async function fetchYearandLocation(params) {
        let result2= await axios.get('http://localhost:8080/year/2012/location/europe');
        console.log(result2.data);
    }
    //fetchYearandLocation().catch((err)=>console.error(err));
    
    async function fetchLocationOnly(params) {
        let result3= await axios.get('http://localhost:8080/location/asia')
        console.log(result3.data)
    }
    //fetchLocationOnly().catch((err)=>console.error(err));

    async function fetchAllCountries(params) {
        let result4= await axios.get('http://localhost:8080/all-locations-id')
        console.log(result4.data)
    }
    Promise.all([fetchAllCountries(), fetchLocationOnly(),fetchYearandLocation(),fetchYearOnly()]).catch((err)=> console.error(err))
}

requestsInOrder()