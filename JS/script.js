//ryan white JS index page
function getUser(){
const user=prompt("Please enter your name");
const email=prompt("Please enter your email");

if(user && email){
  //the message
  const message='Welcome <strong>' + user + '</strong>, a newsletter will be sent to your email: <strong>'+email+'</strong>.'
  //getting the message
  document.getElementById("greet").innerHTML=message;
}
else{
  document.getElementById("greet").innerHTML="Invalid details provided.";
}
}
//--------------------------------------------------------------------------------------------------------------------------------

//ryan white JS on page 2
    function fact(){
   //getting element
  const para = document.getElementById('para');
      //hides and shows facts when clicked
  if(para.style.display ==='none'){
    para.style.display = 'block';
  }else{
    //doesnt show if not clicked
    para.style.display = 'none';
  }
} 

//--------------------------------------------------------------------------------------------------------------------------------
//Tara JS Page 3
function whatAnimal() {
  //show div containing result
  document.getElementById("animalResult").style.display = "block";
  //save checked colour/animal button as constant called colour/animal
  //https://www.w3schools.com/jsref/met_document_queryselector.asp
  //delcares constant called colour/passtime and grabs the input with the name colour/passtime if it is selected/checked
  const colour = document.querySelector('input[name="colour"]:checked');
  const passtime = document.querySelector('input[name="passtime"]:checked');
  //makes the constant myAnimal equal the div animal result, if myAnimal is changed, the div reflects it
  const myAnimal = document.getElementById("animalResult");
  //if no colour or no passtime selected (both must be selected)
  if (!colour || !passtime) {
    //tell user to answer questions
    myAnimal.innerHTML = "Please answer both of the questions and try again";
    return; //exit funtion early if no answers selected
  }
  //set Colour/passtimeSelected to the value of each selected
  const colourSelected = colour.value;
  const passtimeSelected = passtime.value;
  let resultText = ""; //create place to store result. "let" instead of const to allow it to change
//if colour selectedis blue and passtime is beach OR forest, change result text to "you are a dolphin"
  if (colourSelected === "blue" && (passtimeSelected === "beach" || passtimeSelected ==="forest")) {
    resultText = "<strong>You are a Dolphin!</strong><br>Dolphins are friendly creatures but they are at risk to entrapment in nets!";
  } else if (colourSelected === "red" && (passtimeSelected === "forest" || passtimeSelected ==="book")) {
    resultText = "<strong>You are an Octopus!</strong><br>Smart creatures with three hearts, but are vulnerable to habitat destruction";
  } else if (colourSelected === "green" && (passtimeSelected === "book" || passtimeSelected ==="games")) {
    resultText = "<strong>You are Coral!</strong><br>Pretty and colourful, Corals are being bleached by acidic waters!";
  } else if (colourSelected === "yellow" && (passtimeSelected === "games" || passtimeSelected ==="code")) {
    resultText = "<strong>You are a Pufferfish!</strong><br> Puffy and spikey, but affected by plastic and toxic waste in the oceans.";
  } else if (colourSelected === "pink" && (passtimeSelected === "code" || passtimeSelected ==="beach")) {
    resultText = "<strong>You are a Shrimp!</strong><br>Small creatures that help keep the ocean clean, they're suffering in warmer waters";
  } else { //any other combination 
    resultText = "<strong>You are a Fish!</strong><br>They just keep swimming, but they face threats from microplastics and overfishing";
  }
  //change the html of myAnimal to the resultText
  myAnimal.innerHTML = resultText;
}
//reset button
function resetAnimal() {
  /*set the text content of randomTipShow to nothing resetting the button and deleting the tip*/
  document.getElementById("animalResult").innerHTML = "";
  /*hiding the div containing the empty tip*/
  document.getElementById("animalResult").style.display = "none";
  /*clear radio button selections when reset clicked */
  document.getElementById("whatAnimalAreYou").reset();
}
//Tara JS Page 3 end
//--------------------------------------------------------------------------------------------------------------------------------
//Tara JS page 4

function showTip() {
  /*show div containing tip*/
  document.getElementById("plasticTip").style.display = "block";

  /*array of constants (tips for plastic sustainibility)*/
  const plasticTips = [
    "Use a reusable water bottle or coffee mug",
    "Reuse shopping bags, invest in a tote bag or any other reusable bag",
    "Use paper or metal straws",
    "Avoid products with individual wrapping",
    "Recycle correctly",
    "Upcycle by turning old containers into something new",
    "Purchase products with plastic free wrapping where possible",
    "Buy products second hand",
    "Buy in bulk where possible"
  ];

  /*choose a random fact and assign it to randomTip*/
  var randomTip = Math.floor(Math.random() * plasticTips.length);
  /*set the text content of randomTipShow to the randomly chosen tip from list of plasticTips*/
  document.getElementById("randomTipShow").textContent = plasticTips[randomTip];
}

function resetTip() {
  /*set the text content of randomTipShow to nothing resetting the button and deleting the tip*/
  document.getElementById("randomTipShow").textContent = "";
  /*hiding the div containing the empty tip*/
  document.getElementById("plasticTip").style.display = "none";
  /*ramdomising the tip again after reset to avoid duplicate tips */
  var randomTip = Math.floor(Math.random() * plasticTips.length);
}
/*FORM*/ 
function openForm() {
  /*show form*/
  document.getElementById("tarasForm").style.display = "block";
  /*hide contact me button when form open*/
  document.getElementById("openButton").style.display = "none";
}
  
function closeForm() {
  /*hide form*/
  document.getElementById("tarasForm").style.display = "none";
  /*re-show contact me button*/
  document.getElementById("openButton").style.display = "block";
  /*reset fields when form closed*/
  document.getElementById("tarasForm").reset();
}

function taraForm(event) {
  /*prevent refresh on submission*/
  //https://www.w3schools.com/jsref/event_preventdefault.asp
  event.preventDefault();
  /* alert when details submitted*/
  alert("Thank you for contacting Tara! Your form has been submitted and we will be in contact shortly");
  /*close/hide form after submission*/
  document.getElementById("tarasForm").style.display = "none";
   /*show contact button again after submission*/
  document.getElementById("openButton").style.display = "block";
   /*reset fields after submission*/
  document.getElementById("tarasForm").reset();
}

//Tara JS Page 4 end.
//--------------------------------------------------------------------------------------------------------------------------------

//Francesco JS page 5
function showMeMessage() {
  var message = [
    "everything that we do count , so please help the enviroment and recycle",
    "Help us save all the life in the ocean",
    "Don't let the ocean die",
  ];
  var random = Math.floor(Math.random() * message.length);
  document.getElementById("motivationalMessage").innerText = message[random];
}

function sendForm(event) {
  event.preventDefault(); 
  alert("Francesco will send you a message shortly");
}

//--------------------------------------------------------------------------------------------------------------------------------

//francesco quiz page 6
function showQuiz(event) {
  event.preventDefault();
  document.getElementById("quiz").style.display = "block";

  document.getElementById("form").style.display = "none";
}

function valueQuiz() {
  var userName = document.getElementById("name").value;

  var q1Answer = document.getElementById("answer1").value.trim();
  var q2Answer = document.getElementById("answer2").value.trim();
  var q3Answer = document.getElementById("answer3").value.trim();
  var q4Answer = document.getElementById("answer4").value.trim();

  var row1 = document.getElementById("question1");
  var row2 = document.getElementById("question2");
  var row3 = document.getElementById("question3");
  var row4 = document.getElementById("question4");

  var result = 0;

  if (q1Answer == "1") {
    row1.style.backgroundColor = "green";
    result++;
  } else {
    row1.style.backgroundColor = "red";
  }

  if (q2Answer == "1") {
    row2.style.backgroundColor = "green";
    result++;
  } else {
    row2.style.backgroundColor = "red";
  }

  if (q3Answer == "3") {
    row3.style.backgroundColor = "green";
    result++;
  } else {
    row3.style.backgroundColor = "red";
  }

  if (q4Answer == "1") {
    row4.style.backgroundColor = "green";
    result++;
  } else {
    row4.style.backgroundColor = "red";
  }

  document.getElementById("result").innerText =
    "Congratulations " + userName + ", you got " + result + " answers correct";
  document.getElementById("quizResult").style.display = "block"; //make results div appear once result is given
}
//francesco quiz page 6 end