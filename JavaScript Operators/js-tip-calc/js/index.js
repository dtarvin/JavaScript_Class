function calculateTip (){
    var billAmt = document.getElementById("billAmt").value
    var serviceQual = document.getElementById('serviceQual').value;
    var numOfPeople = document.getElementById('peopleAmt').value;


//validate input
if(billAmt === '' || serviceQual == 0){
    alert("Please enter all values");
    return;
}

//check to see if this input is empty or less than or equal 1
if(numOfPeople === " " || numOfPeople <=1 ){
    numOfPeople = 1;
    document.getElementById('each').style.display="none";
}else{
    document.getElementById('each').style.display = "block";
}

//Calculate tip
var total = (billAmt * serviceQual) / numOfPeople;
total = Math.round(total * 100 / 100);
//next line allows us to always have two digits after the decimal point
total= total.toFixed(2);
//display the tip
document.getElementById("totalTip").style.display = "block";
document.getElementById('tip').innerHTML = total;   

}   
  //hide the tip amount on load of webpage
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";

  //click to call the function
  document.getElementById('calculate').onclick = function(){
      calculateTip();
  };