let express = require('express');
let fetch = require('node-fetch');


let router = express.Router();

async function getResultByCountryName(name) {
  
  let response = await fetch("https://api.covid19api.com/summary")
  let data = await response.json()
  let countries = data["Countries"];
  for(country in countries){
    if(countries[country]["Country"] == name || countries[country]["Slug"] == name || countries[country]["CountryCode"] == name  ){
      return countries[country]
    }

  }
  return null;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PS4'});
});

// Report the stats of covid-19 of designated country
router.post('/ps4', async function(req, res, next) {
  const name = req.body.name;
  let result = await getResultByCountryName(name);
  if(result != null){
    res.render('result', {result: result, title: result["Country"] + " Covid-19 Reporting"});
  }else{
    res.render('error', {message: "Couldn't find the country you are looking for, please check your spelling"})
  }
});

module.exports = router;
