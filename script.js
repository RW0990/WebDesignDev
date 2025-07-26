function createBuggle() {
  const section = document.querySelector("section");
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

function showQuiz(event) {
  event.preventDefault();
  document.getElementById("quiz").style.display = "block";

  document.getElementById("userForm").style.display = "none";
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

  if (q1Answer == "") {
    row1.style.backgroundColor = "green";
    result++;
  } else {
    row1.style.backgroundColor = "red";
  }

  if (q2Answer == "") {
    row2.style.backgroundColor = "green";
    result++;
  } else {
    row2.style.backgroundColor = "red";
  }

  if (q3Answer == "") {
    row3.style.backgroundColor = "green";
    result++;
  } else {
    row3.style.backgroundColor = "red";
  }

  if (q4Answer == "") {
    row4.style.backgroundColor = "green";
    result++;
  } else {
    row4.style.backgroundColor = "red";
  }

  document.getElementById("result").innerText =
    "You did " + result + " " + userName;
}
