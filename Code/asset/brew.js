$(document).ready(function () {
  $("#btnBrew").on("click", function (e) {
    e.preventDefault();
    $("#bk").html("");
    $("#brew").html(`<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/2Sela-8BF9Q" allowfullscreen></iframe>
</div>`);
    $("#myth").html("");
    $("#cold").html("");
    $("#roast").html("");
  });

  $("#btnMyth").on("click", function (e) {
    e.preventDefault();
    $("#bk").html("");
    $("#myth").html(`<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.missioncoffeeco.com/blogs/news/fact-or-myth-do-light-roasts-have-more-caffeine-than-dark-roasts"></iframe>
</div>`);
    $("#brew").html("");
    $("#cold").html("");
    $("#roast").html("");
  });

  $("#btnRoast").on("click", function (e) {
    e.preventDefault();
    $("#bk").html("");
    $("#roast").html(`<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.kickinghorsecoffee.com/en/blog/caffeine-myths-espresso-vs-drip"></iframe>
</div>`);
    $("#brew").html("");
    $("#cold").html("");
    $("#myth").html("");
  });

  $("#btnCB").on("click", function (e) {
    e.preventDefault();
    $("#bk").html("");
    $("#cold").html(`<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3ypIcalc59Y"></iframe>
</div>`);
    $("#brew").html("");
    $("#roast").html("");
    $("#myth").html("");
  });
});
