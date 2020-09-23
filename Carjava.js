'use strict';
var driver = prompt('when the first human Drive a car ?');

//var driver3 = prompt("please enter number = 92 ?");

while (driver != 1992 ){
  driver = prompt('sorry enter the correct number which is 1992:');
}
if(driver === '1992'){
  alert('correct answer');
}

// eslint-disable-next-line no-unused-vars
var showorder = function(){
  var userorder = prompt ('what  would you like to order, bmw or audi  ');
  var orderImage = '';
  var numberofImages;
  // eslint-disable-next-line eqeqeq
  while (userorder !== 'bmw' && userorder !== 'audi')
  {
    userorder = prompt ('please bmw or audi');
  }
  numberofImages = prompt('how many images do you want ?');
  for (let i = 0; i < numberofImages; i++)
  {
    if (userorder === 'bmw')
    {
      orderImage += '<img  src="images/2018-bmw-m4-cs.jpg" style = "width: 400px; padding:6px; border:1px solid black;">';
    }
    else if (userorder === 'audi')
    {
      orderImage = orderImage + '<img src="images/download(1).jpg" >';
    }


  }

  return orderImage;

};
