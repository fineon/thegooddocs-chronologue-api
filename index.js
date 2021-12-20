const express = require('express');
const app = express();
const port = 8080;
const {
  allRoutes,
  allYears,
  allLocationsID,
  allYearsAllLocation,
} = require('./api-data.js');


app.get('/', (req, res) => {
  res.status(200).json(allRoutes);
});

app.get('/all-locations-id', (req, res) => {
  res.status(200).json(allLocationsID);
});

app.get('/all-years-id', (req, res) => {
  res.status(200).json(allYears);
});

app.get('/year/:year', (req, res) => {
  console.log(req.params);

  /** seems like /year/ is treated like a unique url, so this error for params won't work */
  if (!req.params.year) {
    res.status(404).json("year url parameter not found. Enter a year or reference all available years in /all-years-id");
  }

  /**this returns a redundant empty object. Could be a little faster with map() but not worth the confusion for the user 
   * UPDATE: can replace map() with flatMap() to remove that redundant object
  */
  let yearlyDataOnly = allYearsAllLocation.flatMap((data)=> data.year === req.params.year? data.allContinents : []);

  // error handling for invalid route
  yearlyDataOnly.length === 0 ? res.status(404).json("data not found. Check your request parameter again or reference the API routes docs") : res.status(200).json(yearlyDataOnly);
});

app.get('/location/:location', (req, res) => {
  console.log(req.params);

  const test1 = allYearsAllLocation.map((x) => {
    return {
      year: x.year,
      events: x.allContinents.flatMap((y) => y.continent === req.params.location ? y.events : []),
    };
  },
  );

  // error handling for invalid rote params. This one doesn't work well if the data is on index > 0 
  // test1[0].events.length === 0 ? res.status(404).json("data not found. Check your request parameter again or reference the API routes docs") : res.status(200).json(test1)

  res.status(200).json(test1);
});

app.get('/year/:year/location/:location', (req, res) => {
  console.log(req.params);

  if (!req.params.location || !req.params.year) {
    res.status(404).json('sepcify year and location parameter');
  }

  // also works fine, even when there are invalid params
  let yearAndLocationData = allYearsAllLocation.flatMap((x) => x.year === req.params.year ? x.allContinents.flatMap((y) => y.continent === req.params.location ? y.events : []) : []);

  // lint for invalid params or non-existent data
  yearAndLocationData.length === 0 ? res.status(404).json("data not found. Check your request parameter again or reference the API routes docs") : res.status(200).json(yearAndLocationData);

});

app.listen(port, () => {
  console.log(`Chronologue server API listening at http://localhost:${port}`);
});
