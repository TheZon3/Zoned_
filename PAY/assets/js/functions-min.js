const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");
//true annual false monthly 
var click = true
checkbox.addEventListener("click", () => {
  if (click = true){
    click = false
  }
  if (click = false){
    click = true
  } 
});
checkbox.addEventListener("click", () => {
  if (click = false){
  basic.textContent = "$99.99";
  professional.textContent = "$299.99"
  master.textContent = "$499.99";
  }else{
    basic.textContent = "$499.99";
    professional.textContent = "$799.99"
    master.textContent = "$999.99";
  }
  
});
