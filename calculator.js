var input_box = document.getElementById("calculation");


function UserClick(input) {
  var oldinput = input_box.value;
  var newinput = oldinput + input;
  
  input_box.value = newinput;
}
function CalculateValue() {
  console.log("Click");
  var input = input_box.value;
  input = input.replace('"', "").replace("'", "");
  var result = eval(input);
 
  input_box.value = result;
}
function AllClearData() {
  input_box.value = "";
}

