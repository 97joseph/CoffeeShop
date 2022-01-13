$(document).ready(function () {
  $("#btnSubmit").on("click", function (e) {
    e.preventDefault();

    var api_key = "&apikey=8db0f9bc1f4b7d7c56298c24299661bf";
    var cat = "&q=coffee";
    var searchURL = "https://developers.zomato.com/api/v2.1/search?";
    var cityURL = "https://developers.zomato.com/api/v2.1/cities?q=";
    var count = "&count=5";
    var textInput = $("#textInput").val();
    var entityId = "";
    $.ajax({
      type: "GET",
      url: `https://developers.zomato.com/api/v2.1/cities?q=${textInput}&apikey=${api_key}`,
      // url: cityURL + textInput + api_key,
      //trial to separating
      dataType: "json",
    }).then(function (response) {
      console.log(response);
      var cityId = response.location_suggestions[0].id;
      var entityId = "entity_id=" + cityId + "&entity_type=city";
      console.log(cityId);
      $.ajax({
        type: "GET",
        url: `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&q=${answer}&${cat}&apikey=${api_key}`,
        dataType: "json",
      }).then(function (dresponse) {
        console.log(dresponse);
        $("#rec").empty();
        var randNum = Math.floor(
          Math.random() * dresponse.restaurants[0].restaurant.photos.length
        );
        // console.log(dresponse.restaurants[randNum].restaurant.url);

        var name = dresponse.restaurants[0].restaurant.name;
        var img =
          dresponse.restaurants[0].restaurant.photos[randNum].photo.thumb_url;
        var shopAddress = dresponse.restaurants[0].restaurant.location.address;
        var shopLocality =
          dresponse.restaurants[0].restaurant.location.locality;
        var shopHours = dresponse.restaurants[0].restaurant.timings;
        var uRatings =
          dresponse.restaurants[0].restaurant.user_rating.rating_text;
        // var status;
        // parseInt(shopHours[0]) ? (status = "open") : (status = "closed");
        // console.log(shopHours);
        // console.log(status);
        var weath_api_key = "3dababe5876bb70212d76fb0d2f5aa26";
        $.ajax({
          type: "GET",
          url: `https://api.openweathermap.org/data/2.5/weather?q=${textInput}&units=imperial&appid=${weath_api_key}`,
          dataType: "json",
        }).then(function (aresponse) {
          var icon = aresponse.weather[0].icon;
          var cityName = aresponse.name;
          var kelvin = Math.floor(aresponse.main.temp_max);
          var humidity = aresponse.main.humidity;
          var windSpeed = aresponse.wind.speed;
          var today = moment().format("l");
          var lat = aresponse.coord.lat;
          var lon = aresponse.coord.lon;
          $("#rec").append(` 
        <div class="row">
        <div class="col-xs-12">
                <h3 id="recommend" class="text-light">Based on your answers, we recommend this coffee shop!</h3>
                </div>
        </div>

        <div class="row">
          <div class="col m-2 p-2">
            <div class="card" style="width: 20rem;">
              <div class="card-body">
              <h5 class="card-title p-3" id="restName">${name}</h5>
              <p class="card-text p-3" id="restImg"><img src=${img}></p>
              <div class="pb-4" id="storeInfo">
              <div id="address"><b>Location: </b> ${shopAddress}</div>
              <div id="hood"><b>Neighborhood: </b> ${shopLocality}</div>
              <div id="hours"><b>Operating Hours</b>: ${shopHours}</div>
              <div id="ratings"><b>Ratings: </b> ${uRatings}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col m-2 p-2">
        <div class="card" style="width: 20rem;">
        <div class="card-body" id="weather">
        <h6 class="card-title" id="cityName">${cityName}  (${today})<img src = "http://openweathermap.org/img/wn/${icon}.png"></h6>
        <p class="card-text" id="cityInfo">Temperature: ${kelvin}°F  <br>Humidity: ${humidity}%<br>Wind Speed: ${windSpeed} MPH</p>
          </div>
        </div>
        </div>
     </div>
     </div>
      `);
          //future development - varied locations more than 1.
          // $("#addRec").empty();
          // var nameTwo = dresponse.restaurants[1].restaurant.name;
          // var imgTwo =
          //   dresponse.restaurants[1].restaurant.photos[randNum].photo.thumb_url;
          // var shopAddressTwo =
          //   dresponse.restaurants[1].restaurant.location.address;
          // var shopLocalityTwo =
          //   dresponse.restaurants[1].restaurant.location.locality;
          // var shopHoursTwo = dresponse.restaurants[1].restaurant.timings;
          // var uRatingsTwo =
          //   dresponse.restaurants[1].restaurant.user_rating.rating_text;
          // var nameThree = dresponse.restaurants[2].restaurant.name;
          // var imgThree =
          //   dresponse.restaurants[2].restaurant.photos[randNum].photo.thumb_url;
          // var shopAddressThree =
          //   dresponse.restaurants[2].restaurant.location.address;
          // var shopLocalityThree =
          //   dresponse.restaurants[2].restaurant.location.locality;
          // var shopHoursThree = dresponse.restaurants[2].restaurant.timings;
          // var uRatingsThree =
          //   dresponse.restaurants[2].restaurant.user_rating.rating_text;
          // var nameFour = dresponse.restaurants[3].restaurant.name;
          // var imgFour =
          //   dresponse.restaurants[3].restaurant.photos[randNum].photo.thumb_url;
          // var shopAddressFour =
          //   dresponse.restaurants[3].restaurant.location.address;
          // var shopLocalityFour =
          //   dresponse.restaurants[3].restaurant.location.locality;
          // var shopHoursFour = dresponse.restaurants[3].restaurant.timings;
          // var uRatingsFour =
          //   dresponse.restaurants[3].restaurant.user_rating.rating_text;
          // var nameFive = dresponse.restaurants[4].restaurant.name;
          // var imgFive =
          //   dresponse.restaurants[4].restaurant.photos[randNum].photo.thumb_url;
          // var shopAddressFive =
          //   dresponse.restaurants[4].restaurant.location.address;
          // var shopLocalityFive =
          //   dresponse.restaurants[4].restaurant.location.locality;
          // var shopHoursFive = dresponse.restaurants[4].restaurant.timings;
          // var uRatingsFive =
          //   dresponse.restaurants[4].restaurant.user_rating.rating_text;
          // console.log(dresponse.restaurants[randNum].restaurant.url);
          // var randNum = Math.floor(Math.random() * dresponse.restaurants.length);

          //   $("#addRec").append(`
          //   <div class="row">
          //     <div class="col">
          //     <h3 id="suggested" class="mt-3">Check out these other local coffee shops too!</h3>
          //     </div>
          //   </div>
          //   <div class="row">
          //   <div class="col">
          //   <div class="card m-2" style="width: 18rem; margin-left: 13%;">
          //     <div class="card-body">
          //       <h5 class="card-title pl-3" id="restName">${nameTwo}</h5>
          //       <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
          //       <p class="card-text pl-3" id="restImg"><img src=${imgTwo}></p>
          //       <!-- <a href="#" class="card-link">Card link</a>
          //       <a href="#" class="card-link">Another link</a> -->
          //       <div class="pb-4" id="storeInfo">
          //         <div id="address"><b>Location: </b> ${shopAddressTwo}</div>
          //         <div id="hood"><b>Neighborhood: </b> ${shopLocalityTwo}</div>
          //         <div id="hours"><b>Operating Hours</b>: ${shopHoursTwo}</div>
          //         <div id="ratings"><b>Ratings: </b> ${uRatingsTwo}</div>
          //         <!-- <div id="recommendations"></div> -->
          //       </div>
          //     </div>
          //   </div>
          //   <div class="card m-2" style="width: 18rem;">
          //     <div class="card-body">
          //       <h5 class="card-title pl-3" id="restName">${nameThree}</h5>
          //       <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
          //       <p class="card-text pl-3" id="restImg"><img src=${imgThree}></p>
          //       <!-- <a href="#" class="card-link">Card link</a>
          //       <a href="#" class="card-link">Another link</a> -->
          //       <div class="pb-4" id="storeInfo">
          //         <div id="address"><b>Location: </b> ${shopAddressThree}</div>
          //         <div id="hood"><b>Neighborhood: </b> ${shopLocalityThree}</div>
          //         <div id="hours"><b>Operating Hours</b>: ${shopHoursThree}</div>
          //         <div id="ratings"><b>Ratings: </b> ${uRatingsThree}</div>
          //         <!-- <div id="recommendations"></div> -->
          //       </div>
          //     </div>
          //   </div>
          //   </div>
          //   </div>
          // <div class="card m-2" style="width: 18rem; margin-left: 13%;">
          //   <div class="card-body">
          //     <h5 class="card-title pl-3" id="restName">${nameFour}</h5>
          //     <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
          //     <p class="card-text pl-3" id="restImg"><img src=${imgFour}></p>
          //     <!-- <a href="#" class="card-link">Card link</a>
          //     <a href="#" class="card-link">Another link</a> -->
          //     <div class="pb-4" id="storeInfo">
          //       <div id="address"><b>Location: </b> ${shopAddressFour}</div>
          //       <div id="hood"><b>Neighborhood: </b> ${shopLocalityFour}</div>
          //       <div id="hours"><b>Operating Hours</b>: ${shopHoursFour}</div>
          //       <div id="ratings"><b>Ratings: </b> ${uRatingsFour}</div>
          //       <!-- <div id="recommendations"></div> -->
          //     </div>
          //   </div>
          // </div>
          // <div class="card m-2" style="width: 18rem;">
          //   <div class="card-body">
          //     <h5 class="card-title pl-3" id="restName">${nameFive}</h5>
          //     <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
          //     <p class="card-text pl-3" id="restImg"><img src=${imgFive}></p>
          //     <!-- <a href="#" class="card-link">Card link</a>
          //     <a href="#" class="card-link">Another link</a> -->
          //     <div class="pb-4" id="storeInfo">
          //       <div id="address"><b>Location: </b> ${shopAddressFive}</div>
          //       <div id="hood"><b>Neighborhood: </b> ${shopLocalityFive}</div>
          //       <div id="hours"><b>Operating Hours</b>: ${shopHoursFive}</div>
          //       <div id="ratings"><b>Ratings: </b> ${uRatingsFive}</div>
          //       <!-- <div id="recommendations"></div> -->
          //     </div>
          //   </div>
          // </div>
          // `);
        });
      });
    });
  });
});
