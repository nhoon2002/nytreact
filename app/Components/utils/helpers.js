// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(qTerm, qstartYear, qendYear) {



    // Figure out the geolocation
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey + "&q=" + qTerm + "&begin_date=" + qstartYear +"0101" + "&end_date=" + qendYear + "0101"

    return axios.get(queryURL).then(function(response) {

      console.log(response);
      return response.data.response.docs[0];
    });
  }
};

// We export the helpers object (which contains runQuery)
module.exports = helpers;
