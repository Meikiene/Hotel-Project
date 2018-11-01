var guestNames =[];
var totalGuest =[];
var guestNames2 =[];
var totalGuest2 =[];
var guestNames3 =[];
var totalGuest3 =[];
var guestNames4 =[];
var totalGuest4 =[];
var guestNames5 =[];
var totalGuest5 =[];
var guestNames6 =[];
var totalGuest6 =[];
function enterName(){
  var yourName = document.getElementById('userName').value; //take the value of user's input.
  if(guestNames.length <= 3){ //if the total (0) is less than or equal to 3 then list the amount of guests in the room.
    guestNames.push(yourName);
    totalGuest.push(yourName);
    document.getElementById('guestLimit').innerHTML = "Guest in room:" + " " + guestNames.length; //takes the id of guestLimit and places Guest in room: (the total # of guest)
    document.getElementById('userName').value = ""; //clears text box
    //pushes user input into array.
    var guestText = document.getElementById('guestCheckedIn').innerHTML = "Guest who have checked in so far:" + " " + totalGuest;
    var li = document.createElement('li'); //creates the element 'li'
    var d = new Date(); //tells the timestamp
    var userText = document.createTextNode(yourName + " " + "checked in at" + " " + (d.getMonth()+ 1) + "/" + d.getDate() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()); //the value of userText is the new text node which is the user's input and the timestamp
    li.appendChild(userText); //Attach the user input to the li
    var olTag = document.getElementsByTagName('ol')[0]; //create element 'ol'
    olTag.appendChild(li); //Attach the li to the ol
  }
  else{
    document.getElementById('guestLimit').innerHTML = "Room Is Full";//if the total is more than 3 then say the room is full
    //var button = document.getElementById('button1');
    //var parent = button.parentNode;
    //parent.removeChild(button);
  }
}
function removeGuest(){
  guestNames.length--;
  var li = document.getElementsByTagName('li')[0];
  var ol = li.parentNode;
  ol.removeChild(li)[0];
  document.getElementById('guestLimit').innerHTML = "";
}
function removeAllGuest(){
  var names = document.getElementById("guestNames");
  while (names.hasChildNodes()){
    names.removeChild(names.firstChild);
    guestNames.length = 0; //sets array length to 0 so that it clears the array
    document.getElementById('guestLimit').innerHTML = "";
  }
}
function cleaningService(){
  var x = document.getElementById('button1')
  if(x.style.visibility === "visible") {
    x.style.visibility = "hidden";
    document.getElementById('cleaningAway').innerHTML ="Sorry! Cleaning!";
  }
  else {
    x.style.visibility = "visible";
    document.getElementById('cleaningAway').innerHTML = "";
  }
  //var button = document.getElementById('button1');
  //var parent = button.parentNode;
  //var button2 = document.getElementById('buttons1');
  //var parent2 = button2.parentNode;
  //parent.removeChild(button);
  //parent2.removeChild(button2);
  //document.getElementById('cleaningAway').innerHTML = "Sorry! Cleaning!!";
}
function enterName2(){
  var yourName = document.getElementById('userName2').value; //take the value of user's input.
  if(guestNames2.length <= 3){ //if the total (0) is less than or equal to 3 then list the amount of guests in the room.
    guestNames2.push(yourName);
    totalGuest2.push(yourName);
    document.getElementById('guestLimit2').innerHTML = "Guest in room:" + " " + guestNames2.length; //takes the id of guestLimit and places Guest in room: (the total # of guest)
    document.getElementById('userName2').value = ""; //clears text box
    //pushes user input into array.
    var guestText = document.getElementById('guestCheckedIn2').innerHTML = "Guest who have checked in so far:" + " " + totalGuest2;
    var li = document.createElement('li'); //creates the element 'li'
    var d = new Date(); //tells the timestamp
    var userText = document.createTextNode(yourName + " " + "checked in at" + " " + (d.getMonth()+ 1) + "/" + d.getDate() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()); //the value of userText is the new text node which is the user's input and the timestamp
    li.appendChild(userText); //Attach the user input to the li
    var olTag = document.getElementsByTagName('ol')[1]; //create element 'ol'
    olTag.appendChild(li); //Attach the li to the ol
  }
  else{
    document.getElementById('guestLimit2').innerHTML = "Room Is Full";//if the total is more than 3 then say the room is full
    //var button = document.getElementById('button1');
    //var parent = button.parentNode;
    //parent.removeChild(button);
  }
}
function removeGuest2(){
  guestNames2.length--;
  var ol = document.getElementsByTagName('ol')[1];
  var li = ol.childNodes[0];//takes the first li of the second ol
  ol.removeChild(li)[0];
  document.getElementById('guestLimit2').innerHTML = "";
}
function removeAllGuest2(){
  var names = document.getElementById("guestNames2");
  while (names.hasChildNodes()){
    names.removeChild(names.firstChild);
    guestNames2.length = 0; //sets array length to 0 so that it clears the array
    document.getElementById('guestLimit2').innerHTML = "";
  }
}
function cleaningService2(){
var x = document.getElementById('button2')
  if(x.style.visibility === "visible") {
    x.style.visibility = "hidden";
    document.getElementById('cleaningAway2').innerHTML ="Sorry! Cleaning!";
  }
  else {
    x.style.visibility = "visible";
    document.getElementById('cleaningAway2').innerHTML = "";
  }
}
function enterName3(){
  var yourName = document.getElementById('userName3').value; //take the value of user's input.
  if(guestNames3.length <= 3){ //if the total (0) is less than or equal to 3 then list the amount of guests in the room.
    guestNames3.push(yourName);
    totalGuest3.push(yourName);
    document.getElementById('guestLimit3').innerHTML = "Guest in room:" + " " + guestNames3.length; //takes the id of guestLimit and places Guest in room: (the total # of guest)
    document.getElementById('userName3').value = ""; //clears text box
    //pushes user input into array.
    var guestText = document.getElementById('guestCheckedIn3').innerHTML = "Guest who have checked in so far:" + " " + totalGuest3;
    var li = document.createElement('li'); //creates the element 'li'
    var d = new Date(); //tells the timestamp
    var userText = document.createTextNode(yourName + " " + "checked in at" + " " + (d.getMonth()+ 1) + "/" + d.getDate() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()); //the value of userText is the new text node which is the user's input and the timestamp
    li.appendChild(userText); //Attach the user input to the li
    var olTag = document.getElementsByTagName('ol')[2]; //create element 'ol'
    olTag.appendChild(li); //Attach the li to the ol
  }
  else{
    document.getElementById('guestLimit3').innerHTML = "Room Is Full";//if the total is more than 3 then say the room is full
    //var button = document.getElementById('button1');
    //var parent = button.parentNode;
    //parent.removeChild(button);
  }
}
function removeGuest3(){
  guestNames3.length--;
  var ol = document.getElementsByTagName('ol')[2];
  var li = ol.childNodes[0];//takes the first li of the second ol
  ol.removeChild(li)[0];
  document.getElementById('guestLimit3').innerHTML = "";
}
function removeAllGuest3(){
  var names = document.getElementById("guestNames3");
  while (names.hasChildNodes()){
    names.removeChild(names.firstChild);
    guestNames3.length = 0; //sets array length to 0 so that it clears the array
    document.getElementById('guestLimit3').innerHTML = "";
  }
}
function cleaningService3(){
var x = document.getElementById('button3')
  if(x.style.visibility === "visible") {
    x.style.visibility = "hidden";
    document.getElementById('cleaningAway3').innerHTML ="Sorry! Cleaning!";
  }
  else {
    x.style.visibility = "visible";
    document.getElementById('cleaningAway3').innerHTML = "";
  }
}
function enterName4(){
  var yourName = document.getElementById('userName4').value; //take the value of user's input.
  if(guestNames4.length <= 3){ //if the total (0) is less than or equal to 3 then list the amount of guests in the room.
    guestNames4.push(yourName);
    totalGuest4.push(yourName);
    document.getElementById('guestLimit4').innerHTML = "Guest in room:" + " " + guestNames4.length; //takes the id of guestLimit and places Guest in room: (the total # of guest)
    document.getElementById('userName4').value = ""; //clears text box
    //pushes user input into array.
    var guestText = document.getElementById('guestCheckedIn4').innerHTML = "Guest who have checked in so far:" + " " + totalGuest4;
    var li = document.createElement('li'); //creates the element 'li'
    var d = new Date(); //tells the timestamp
    var userText = document.createTextNode(yourName + " " + "checked in at" + " " + (d.getMonth()+ 1) + "/" + d.getDate() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()); //the value of userText is the new text node which is the user's input and the timestamp
    li.appendChild(userText); //Attach the user input to the li
    var olTag = document.getElementsByTagName('ol')[3]; //create element 'ol'
    olTag.appendChild(li); //Attach the li to the ol
  }
  else{
    document.getElementById('guestLimit4').innerHTML = "Room Is Full";//if the total is more than 3 then say the room is full
    //var button = document.getElementById('button1');
    //var parent = button.parentNode;
    //parent.removeChild(button);
  }
}
function removeGuest4(){
  guestNames4.length--;
  var ol = document.getElementsByTagName('ol')[3];
  var li = ol.childNodes[0];//takes the first li of the second ol
  ol.removeChild(li)[0];
  document.getElementById('guestLimit4').innerHTML = "";
}
function removeAllGuest4(){
  var names = document.getElementById("guestNames4");
  while (names.hasChildNodes()){
    names.removeChild(names.firstChild);
    guestNames4.length = 0; //sets array length to 0 so that it clears the array
    document.getElementById('guestLimit4').innerHTML = "";
  }
}
function cleaningService4(){
var x = document.getElementById('button4')
  if(x.style.visibility === "visible") {
    x.style.visibility = "hidden";
    document.getElementById('cleaningAway4').innerHTML ="Sorry! Cleaning!";
  }
  else {
    x.style.visibility = "visible";
    document.getElementById('cleaningAway4').innerHTML = "";
  }
}
function enterName5(){
  var yourName = document.getElementById('userName5').value; //take the value of user's input.
  if(guestNames5.length <= 3){ //if the total (0) is less than or equal to 3 then list the amount of guests in the room.
    guestNames5.push(yourName);
    totalGuest5.push(yourName);
    document.getElementById('guestLimit5').innerHTML = "Guest in room:" + " " + guestNames5.length; //takes the id of guestLimit and places Guest in room: (the total # of guest)
    document.getElementById('userName5').value = ""; //clears text box
    //pushes user input into array.
    var guestText = document.getElementById('guestCheckedIn5').innerHTML = "Guest who have checked in so far:" + " " + totalGuest5;
    var li = document.createElement('li'); //creates the element 'li'
    var d = new Date(); //tells the timestamp
    var userText = document.createTextNode(yourName + " " + "checked in at" + " " + (d.getMonth()+ 1) + "/" + d.getDate() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()); //the value of userText is the new text node which is the user's input and the timestamp
    li.appendChild(userText); //Attach the user input to the li
    var olTag = document.getElementsByTagName('ol')[4]; //create element 'ol'
    olTag.appendChild(li); //Attach the li to the ol
  }
  else{
    document.getElementById('guestLimit5').innerHTML = "Room Is Full";//if the total is more than 3 then say the room is full
    //var button = document.getElementById('button1');
    //var parent = button.parentNode;
    //parent.removeChild(button);
  }
}
function removeGuest5(){
  guestNames5.length--;
  var ol = document.getElementsByTagName('ol')[4];
  var li = ol.childNodes[0];//takes the first li of the second ol
  ol.removeChild(li)[0];
  document.getElementById('guestLimit5').innerHTML = "";
}
function removeAllGuest5(){
  var names = document.getElementById("guestNames5");
  while (names.hasChildNodes()){
    names.removeChild(names.firstChild);
    guestNames5.length = 0; //sets array length to 0 so that it clears the array
    document.getElementById('guestLimit5').innerHTML = "";
  }
}
function cleaningService5(){
var x = document.getElementById('button5')
  if(x.style.visibility === "visible") {
    x.style.visibility = "hidden";
    document.getElementById('cleaningAway5').innerHTML ="Sorry! Cleaning!";
  }
  else {
    x.style.visibility = "visible";
    document.getElementById('cleaningAway5').innerHTML = "";
  }
}
function enterName6(){
  var yourName = document.getElementById('userName6').value; //take the value of user's input.
  if(guestNames6.length <= 3){ //if the total (0) is less than or equal to 3 then list the amount of guests in the room.
    guestNames6.push(yourName);
    totalGuest6.push(yourName);
    document.getElementById('guestLimit6').innerHTML = "Guest in room:" + " " + guestNames6.length; //takes the id of guestLimit and places Guest in room: (the total # of guest)
    document.getElementById('userName6').value = ""; //clears text box
    //pushes user input into array.
    var guestText = document.getElementById('guestCheckedIn6').innerHTML = "Guest who have checked in so far:" + " " + totalGuest6;
    var li = document.createElement('li'); //creates the element 'li'
    var d = new Date(); //tells the timestamp
    var userText = document.createTextNode(yourName + " " + "checked in at" + " " + (d.getMonth()+ 1) + "/" + d.getDate() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()); //the value of userText is the new text node which is the user's input and the timestamp
    li.appendChild(userText); //Attach the user input to the li
    var olTag = document.getElementsByTagName('ol')[5]; //create element 'ol'
    olTag.appendChild(li); //Attach the li to the ol
  }
  else{
    document.getElementById('guestLimit6').innerHTML = "Room Is Full";//if the total is more than 3 then say the room is full
    //var button = document.getElementById('button1');
    //var parent = button.parentNode;
    //parent.removeChild(button);
  }
}
function removeGuest6(){
  guestNames6.length--;
  var ol = document.getElementsByTagName('ol')[5];
  var li = ol.childNodes[0];//takes the first li of the second ol
  ol.removeChild(li)[0];
  document.getElementById('guestLimit6').innerHTML = "";
}
function removeAllGuest6(){
  var names = document.getElementById("guestNames6");
  while (names.hasChildNodes()){
    names.removeChild(names.firstChild);
    guestNames6.length = 0; //sets array length to 0 so that it clears the array
    document.getElementById('guestLimit6').innerHTML = "";
  }
}
function cleaningService6(){
var x = document.getElementById('button6')
  if(x.style.visibility === "visible") {
    x.style.visibility = "hidden";
    document.getElementById('cleaningAway6').innerHTML ="Sorry! Cleaning!";
  }
  else {
    x.style.visibility = "visible";
    document.getElementById('cleaningAway6').innerHTML = "";
  }
}