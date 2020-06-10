// Business Logic
function pigLatin(inputChar) {
  if ((inputChar).charAt[0] === "a") || (inputChar).charAt[0] === e") || (inputChar).charAt[0] === "a")){
    return (inputChar + "way");
  } else {
    return false;
  }
}

// var inputIsVowel = function(input) {
//   var userArray = (input).split('');
//   return (/^[aeiou]$/i).test(userArray[0]);
//   console.log(userArray);  
// };



// UI Logic

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    const input = $("#sentence").val();
    const result = pigLatin(input);
    // $("#result").text(result);
    let inputChar = input.split("");
    console.log(inputChar);

    for (let i=0; inputChar.length > i; i++) {
      if (inputChar[0] === 'a' || inputChar[0] === 'e' || inputChar[0] === 'i' || inputChar[0] === 'o' || inputChar[0] === 'u') {
        inputChar[i] = inputChar + 'way';
      }
    }
     
    let inputJoin = inputChar.join('');
    console.log(inputJoin);
    $("#result").append(('<p>' + inputJoin + '</p>'));

    

    

  });
});