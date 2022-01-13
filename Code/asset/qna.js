// //Answers of the questions should be tallied to provide a final answer.
// //The final answer will be the name of a coffee shop in which we'll locate the closet
// //from their selected city choice.

var count = 0;
// var question = document.querySelectorAll("#answer");
var answer = "";
// var array = [];

$("#btnSubmit").on("click", function () {
  if (count <= 6) {
    answer = "McDonalds";
  } else if (count > 6 && count <= 10) {
    answer = "Philz";
  } else if (count > 10 && count <= 16) {
    answer = "Starbucks";
  } else if (count > 16) {
    answer = "Blue Bottle Coffee";
  }
  console.log(answer);
});

// for (var i = 0; i < question.length; i++) {
//   array.push(question[i].value);
// }
// console.log(array);

// // function question1() {
// $("#answer").on("click", function () {
//   for (var j = 0; j < array.length; j++) {
//     if (array[j] == "option1") {
//       console.log(array[j]);
//       count++;
//       console.log(count);
//     }
//     else if (array[j] == "option2") {
//       count += 2;
//       console.log(count);
//     }
//   }
// });

$("#answer1").on("click", function () {
  count++;
  console.log(count);
});
$("#answer2").on("click", function () {
  count += 2;
  console.log(count);
});
$("#answer3").on("click", function () {
  count += 3;
  console.log(count);
});
$("#answer4").on("click", function () {
  count += 4;
  console.log(count);
});

$("#answer5").on("click", function () {
  count++;
  console.log(count);
});
$("#answer6").on("click", function () {
  count += 2;
  console.log(count);
});
$("#answer7").on("click", function () {
  count += 3;
  console.log(count);
});
$("#answer8").on("click", function () {
  count += 4;
  console.log(count);
});
// }
// else if ($("#answer2").on("click")) {
//   count += 2;
//   console.log(count);
// }
$("#answer9").on("click", function () {
  count++;
  console.log(count);
});
$("#answer10").on("click", function () {
  count += 2;
  console.log(count);
});
$("#answer11").on("click", function () {
  count += 3;
  console.log(count);
});
$("#answer12").on("click", function () {
  count += 4;
  console.log(count);
});
$("#answer13").on("click", function () {
  count++;
  console.log(count);
});
$("#answer14").on("click", function () {
  count += 2;
  console.log(count);
});
$("#answer15").on("click", function () {
  count += 3;
  console.log(count);
});
$("#answer16").on("click", function () {
  count += 4;
  console.log(count);
});
$("#answer17").on("click", function () {
  count++;
  console.log(count);
});
$("#answer18").on("click", function () {
  count += 2;
  console.log(count);
});
$("#answer19").on("click", function () {
  count += 3;
  console.log(count);
});
$("#answer20").on("click", function () {
  count += 4;
  console.log(count);
});
$("#answer21").on("click", function () {
  count++;
  console.log(count);
});
$("#answer22").on("click", function () {
  count += 2;
  console.log(count);
});
$("#answer23").on("click", function () {
  count += 3;
  console.log(count);
});
$("#answer24").on("click", function () {
  count += 4;
  console.log(count);
});
