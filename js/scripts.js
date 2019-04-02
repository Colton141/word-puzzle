$(document).ready(function() {
  $('form').submit(function(event) {
    $('form').hide();
    var input = $("input#word-puzzle").val();
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var array = input.split("");
    console.log(array);
    for (var index = 0; index < array.length; index += 1) {
      if (vowels.includes(array[index])) {
        array[index] = "-";
      }
    }
    var finalArray = array.join("");

    $(".results").text(finalArray);
    event.preventDefault();
    console.log(finalArray);
  });
});



//   if (array[index] === "a" || array[index] === "e" || array[index] === "i" || array[index] === "o" || array[index] === "u"){
//
// console.log(input);
// alert(input);
