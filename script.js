function calculateMinCost() {
  //your code here
	var inputData = document.querySelector("input").value;
	var newArr = inputData.split(",").map(Number);
	//alert(typeof newArr);
	var ans = 0;
	while (inputArr.length > 1) {
    var newRope = inputArr[0] + inputArr[1];
    cost += newRope;

    // delete first two element
    inputArr.splice(0, 2);
    inputArr.push(newRope);
    //alert(newRope);
  }
  document.querySelector("#result").textContent = cost;
  
  
  
}  
