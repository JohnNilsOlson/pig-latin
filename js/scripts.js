// Business Logic
const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

function pigLatin(inputChar) {
  if (vowels.indexOf(inputChar[0]) >= 0)  {
    return (output = inputChar[0] + "way");
  } else if (consonants.indexOf(inputChar[0]) >= 0) {
    output = (inputChar).shift();
    //removes first array element (ex. input = boy/output = "o","y")
    [(inputChar).push(output + "ay")];
    //expected output an array "oy","b","ay"
    resultsString = inputChar.join("");
    //transforming array into string, without commas, expected output = oybay
    return (resultsString);
    
  } else {
    return (output = inputChar[0]);
  }
}

$(document).ready(function () {
  $("form#pig-latin").submit(function (event) {
    event.preventDefault();
    const input = $("#sentence").val();
    let inputChar = input.split("");
    const result = pigLatin(inputChar);
    $("#result").text(result);
    console.log(inputChar);
  });
});

// line 9 boy --- oybay