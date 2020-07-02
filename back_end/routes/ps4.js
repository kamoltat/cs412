let express = require('express');
let fetch = require('node-fetch');
let redis = require('redis');
let REDIS_PORT = process.env.PORT || 6379

let client = redis.createClient(REDIS_PORT)
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

function cache(req, res, next){
  // come to see if there is value in redis
  const name = req.params.country;
  console.log(name)
  client.get(name, (err, data) => {
    if (err) throw err;
    if (data != null) {
      //cache hit!
      console.log("cache hit")
      let result = JSON.parse(data)
       //duplicate since it only returns one thing, for ngfor in angular
      let list_result = []
      list_result.push(result)
      list_result.push(result)
      list_result.push(result)
      res.send(list_result)
    }else{
      next();
    }
  });
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PS5'}); 
});


// Report the stats of covid-19 of designated country
router.get('/get/:country', cache , async function(req, res, next) {
  try{
    const name = req.params.country;
    let result = await getResultByCountryName(name);
    let result_cache = JSON.parse(JSON.stringify(result));
    result_cache['Cache'] = true;
    result['Cache'] = false;
    let str_result = JSON.stringify(result_cache)
    // Set data to Redis 
    client.setex( name, 30, str_result)
    //duplicate since it only returns one thing, for ngfor in angular
    let list_result = []
    list_result.push(result)
    list_result.push(result)
    list_result.push(result)
    res.send(list_result)
  }catch (err){
    console.log(err)
  }
  });

module.exports = router;
