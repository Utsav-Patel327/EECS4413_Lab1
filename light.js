/* 4413 24f Task 1 - write your code here */

function lightOn (num){

 /* set image src to be that for light 1, and set message texts to be "light #1 is on"  */
  const image = document.getElementById("light");
  const message = document.getElementById("message");

  if (num === 0) {
    image.src = "images/light/light_0.jpg";
    message.innerHTML = "all lights are off";
  } else {
    image.src = `images/light/light_${num}.jpg`;
    message.innerHTML = `light #${num} is on`;
  }
  
}

 