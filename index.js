// custom-background 
$("body").addClass("main");


//Making first Letter of any word the user inputs upperCase()
document.getElementById("exampleFormControlInput1");
var userInput = document.getElementById("exampleFormControlInput1");

userInput.addEventListener("input", function() {
  

  var inputValue = userInput.value;

  var upperCase = inputValue.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  // var upperCase = inputValue.split(" ").map(word => word.toUpperCase()).join(" ");

  // inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
  
  userInput.value = upperCase;  
 
});




