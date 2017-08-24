if(window.DeviceMotionEvent){
  window.addEventListener("devicemotion", motion, false);
}else{
  alert("DeviceMotionEvent is not supported");
}

function motion(event){

	//alert("DEVICE MOTION WORKING");
	document.querySelector("#MY_SELECTOR_X").innerHTML = event.accelerationIncludingGravity.x;
	document.querySelector("#MY_SELECTOR_Y").innerHTML = event.accelerationIncludingGravity.y;
	document.querySelector("#MY_SELECTOR_Z").innerHTML = event.accelerationIncludingGravity.z;
	console.log("Accelerometer: "
    + event.accelerationIncludingGravity.x + ", "
    + event.accelerationIncludingGravity.y + ", "
    + event.accelerationIncludingGravity.z
  );
}

//python -m SimpleHTTPServer 5000
