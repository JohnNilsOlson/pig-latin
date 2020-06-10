// Business Logic
const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
const q = "q"
const u = "u"

function pigLatin(inputChar) {

  //let flag = false;
  //for (i=0; i= inputChar(length-1); +=1) {
   // if (inputChar[i] === vowels ) {
   //   flag = true;
   //   break;
  //  };
  //  console.log("Looped!")
 // }
 // flag
// && vowels.indexof(inputchar[1]) <=0
// test vowel consonant
  if (vowels.indexOf(inputChar[0]) >= 0) {
    return (inputChar.join("") + "way");
// #5 test for qu
  } else if (inputChar[0] === q && inputChar[1] === u) {
    output = (inputChar).splice(0,2);
    //removes first two array element ex. input = question/output = "u","e","s","t","i","o","n"
    output2 = output.join("");
    //joins array elements ex. "q","u" becomes "qu"
    [(inputChar).push(output2 + "ay")];
    //expected output an array "u","e","s","t","i","o","n","quay"
    resultsString = inputChar.join("");
    // #4 - transforming array into string, without commas, expected output = uestionquay
    return (resultsString);
  } else if (consonants.indexOf(inputChar[0]) >=0 && inputChar[1] === q) {
    output = (inputChar).splice(0,3);
    //removes first two array element ex. input = question/output = "u","e","s","t","i","o","n"
    output2 = output.join("");
    //joins array elements ex. "q","u" becomes "qu"
    [(inputChar).push(output2 + "ay")];
    //expected output an array "u","e","s","t","i","o","n","quay"
    resultsString = inputChar.join("");
    // #4 - transforming array into string, without commas, expected output = uestionquay
    return (resultsString);
    // #4 test double consanant
  } else if (consonants.indexOf(inputChar[0]) >= 0 && consonants.indexOf(inputChar[1]) >= 0){
    output = (inputChar).splice(0,2);
    //removes first two array element ex. input = trumpet/output = "u","m","p","e","t"
    output2 = output.join("");
    //joins array elements ex. "t","r" becomes "tr"
    [(inputChar).push(output2 + "ay")];
    //expected output an array "u","m","p","e","tay"
    resultsString = inputChar.join("");
    // #4 - transforming array into string, without commas, expected output = umpettray
    return (resultsString);
  //  test consonant
  } else if (consonants.indexOf(inputChar[0] >= 0)) {
    output = (inputChar).shift();
    //removes first array element ex. input = boy/output = "o","y"
    [(inputChar).push(output + "ay")];
    //expected output an array "oy","b","ay"
    resultsString = inputChar.join("");
    //transforming array into string, without commas, expected output = oybay
    return (resultsString);
  } else {
    return (inputChar);
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

// input: question getting: uestionqay - should be: estion'qu''ay'
// line 9 boy --- oybay
// word begins with consonants	move consecutive consonant to end	trumpet	umpettray
// consonant prefix includes qu	move qu to end	question	estionquay

