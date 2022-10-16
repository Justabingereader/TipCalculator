/* script.js */
/*var myVariable = "sand, shovel, water";
var myArray = ["sand", "shovel", "water"];
document.write (myArray[0]);*/
// alert, prompt and console.log are the three built-in methods

// custom function 

function calculatetip() {
    // store data of input
    let billamount = document.querySelector('#billamount').value;
    let servicequality = document.querySelector('#servicequality').value;
    let numpeople = document.querySelector('#totalpeople').value;
 

    // quick validation

    if (billamount === "" || servicequality == 0 ){
         return window.alert("please enter some values to get a proper result");
    }
    if (numpeople === "" || numpeople <= 1){
        numpeople = 1;

        document.getElementById("each").style.display = "none";
      } else {
          document.getElementById("each").style.display = "block";
      }

      // math will be done here

      let total = ( billamount * servicequality) / numpeople;
       total = total.toFixed(2); 

      // displaying the tip

      document.getElementById("totaltip").style.display = "block";
      document.getElementById("tip").innerHTML = total;
};

// hide the tip amount before tapping calculate

document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";
// usually used for function call
document.getElementById("calculate").onclick = function () {
    calculatetip ();
};
