//francesco quiz
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
//francesco quiz end


//francesco bubbles

function createBuggle() {
  const section = document.querySelector("section");
  if (!section) { //this prevents errors and stops the quiz from breaking if no <secion> is found
   return;
  }
  const createElement = document.createElement("span");
  var size = Math.random() * 60;

  createElement.style.width = size + "px";
  createElement.style.height = size + "px";
  createElement.style.left = Math.random() * innerWidth + "px";
  section.appendChild(createElement);
  setTimeout(() => {
    createElement.remove();
  }, 4000);
}

setInterval(createBuggle, 50);
//francesco bubbles end

