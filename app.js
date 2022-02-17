let oneone = document.getElementById("11");
let onetwo = document.getElementById("12");
let onethree = document.getElementById("13");
let twoone = document.getElementById("21");
let twotwo = document.getElementById("22");
let twothree = document.getElementById("23");
let threeone = document.getElementById("31");
let threetwo = document.getElementById("32");
let threethree = document.getElementById("33");
let h1 = document.getElementById("h1");
let againbutton = document.getElementById("againbutton");
//EVENTS HERE

oneone.addEventListener("click", adding1);
onetwo.addEventListener("click", adding2);
onethree.addEventListener("click", adding3);
twoone.addEventListener("click", adding4);
twotwo.addEventListener("click", adding5);
twothree.addEventListener("click", adding6);
threeone.addEventListener("click", adding7);
threetwo.addEventListener("click", adding8);
threethree.addEventListener("click", adding9);
againbutton.addEventListener("click", reset1);

//FUNCTİONS HERE
let = countx = 0;
let = county = 0;

function adding1() {
  if (countx == county && h1.innerHTML == "") {
    oneone.innerText = "X";
    countx++;
  } else if (county < countx && h1.innerHTML == "") {
    oneone.innerText = "O";
    county++;
  }

  if (
    (oneone.innerText == "X" &&
      onetwo.innerText == "X" &&
      onethree.innerText == "X") ||
    (oneone.innerText == "X" &&
      twoone.innerText == "X" &&
      threeone.innerText == "X") ||
    (oneone.innerText == "X" &&
      twotwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (twoone.innerText == "X" &&
      twotwo.innerText == "X" &&
      twothree.innerText == "X") ||
    (onetwo.innerText == "X" &&
      twotwo.innerText == "X" &&
      threetwo.innerText == "X") ||
    (onethree.innerText == "X" &&
      twothree.innerText == "X" &&
      threethree.innerText == "X") ||
    (threeone.innerText == "X" &&
      threetwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (onethree.innerText == "X" &&
      twotwo.innerText == "X" &&
      threeone.innerText == "X")
  ) {
    h1.innerHTML = "Player X WİN!";
  } else if (
    (oneone.innerText == "O" &&
      onetwo.innerText == "O" &&
      onethree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twoone.innerText == "O" &&
      threeone.innerText == "O") ||
    (twoone.innerText == "O" &&
      twotwo.innerText == "O" &&
      twothree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twotwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onetwo.innerText == "O" &&
      twotwo.innerText == "O" &&
      threetwo.innerText == "O") ||
    (onethree.innerText == "O" &&
      twothree.innerText == "O" &&
      threethree.innerText == "O") ||
    (threeone.innerText == "O" &&
      threetwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onethree.innerText == "O" &&
      twotwo.innerText == "O" &&
      threeone.innerText == "O")
  ) {
    h1.innerHTML = "Player O WİN!";
  }
}

function adding2() {
  if (countx == county && h1.innerHTML == "") {
    onetwo.innerText = "X";
    countx++;
  } else if (county < countx && h1.innerHTML == "") {
    onetwo.innerText = "O";
    county++;
  }

  if (
    (oneone.innerText == "X" &&
      onetwo.innerText == "X" &&
      onethree.innerText == "X") ||
    (oneone.innerText == "X" &&
      twoone.innerText == "X" &&
      threeone.innerText == "X") ||
    (oneone.innerText == "X" &&
      twotwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (twoone.innerText == "X" &&
      twotwo.innerText == "X" &&
      twothree.innerText == "X") ||
    (onetwo.innerText == "X" &&
      twotwo.innerText == "X" &&
      threetwo.innerText == "X") ||
    (onethree.innerText == "X" &&
      twothree.innerText == "X" &&
      threethree.innerText == "X") ||
    (threeone.innerText == "X" &&
      threetwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (onethree.innerText == "X" &&
      twotwo.innerText == "X" &&
      threeone.innerText == "X")
  ) {
    h1.innerHTML = "Player X WİN!";
  } else if (
    (oneone.innerText == "O" &&
      onetwo.innerText == "O" &&
      onethree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twoone.innerText == "O" &&
      threeone.innerText == "O") ||
    (twoone.innerText == "O" &&
      twotwo.innerText == "O" &&
      twothree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twotwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onetwo.innerText == "O" &&
      twotwo.innerText == "O" &&
      threetwo.innerText == "O") ||
    (onethree.innerText == "O" &&
      twothree.innerText == "O" &&
      threethree.innerText == "O") ||
    (threeone.innerText == "O" &&
      threetwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onethree.innerText == "O" &&
      twotwo.innerText == "O" &&
      threeone.innerText == "O")
  ) {
    h1.innerHTML = "Player O WİN!";
  }
}

function adding3() {
  if (countx == county && h1.innerHTML == "") {
    onethree.innerText = "X";
    countx++;
  } else if (county < countx && h1.innerHTML == "") {
    onethree.innerText = "O";
    county++;
  }
  if (
    (oneone.innerText == "X" &&
      onetwo.innerText == "X" &&
      onethree.innerText == "X") ||
    (oneone.innerText == "X" &&
      twoone.innerText == "X" &&
      threeone.innerText == "X") ||
    (oneone.innerText == "X" &&
      twotwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (twoone.innerText == "X" &&
      twotwo.innerText == "X" &&
      twothree.innerText == "X") ||
    (onetwo.innerText == "X" &&
      twotwo.innerText == "X" &&
      threetwo.innerText == "X") ||
    (onethree.innerText == "X" &&
      twothree.innerText == "X" &&
      threethree.innerText == "X") ||
    (threeone.innerText == "X" &&
      threetwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (onethree.innerText == "X" &&
      twotwo.innerText == "X" &&
      threeone.innerText == "X")
  ) {
    h1.innerHTML = "Player X WİN!";
  } else if (
    (oneone.innerText == "O" &&
      onetwo.innerText == "O" &&
      onethree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twoone.innerText == "O" &&
      threeone.innerText == "O") ||
    (twoone.innerText == "O" &&
      twotwo.innerText == "O" &&
      twothree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twotwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onetwo.innerText == "O" &&
      twotwo.innerText == "O" &&
      threetwo.innerText == "O") ||
    (onethree.innerText == "O" &&
      twothree.innerText == "O" &&
      threethree.innerText == "O") ||
    (threeone.innerText == "O" &&
      threetwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onethree.innerText == "O" &&
      twotwo.innerText == "O" &&
      threeone.innerText == "O")
  ) {
    h1.innerHTML = "Player O WİN!";
  }
}

function adding4() {
  if (countx == county && h1.innerHTML == "") {
    twoone.innerText = "X";
    countx++;
  } else if (county < countx && h1.innerHTML == "") {
    twoone.innerText = "O";
    county++;
  }

  if (
    (oneone.innerText == "X" &&
      onetwo.innerText == "X" &&
      onethree.innerText == "X") ||
    (oneone.innerText == "X" &&
      twoone.innerText == "X" &&
      threeone.innerText == "X") ||
    (oneone.innerText == "X" &&
      twotwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (twoone.innerText == "X" &&
      twotwo.innerText == "X" &&
      twothree.innerText == "X") ||
    (onetwo.innerText == "X" &&
      twotwo.innerText == "X" &&
      threetwo.innerText == "X") ||
    (onethree.innerText == "X" &&
      twothree.innerText == "X" &&
      threethree.innerText == "X") ||
    (threeone.innerText == "X" &&
      threetwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (onethree.innerText == "X" &&
      twotwo.innerText == "X" &&
      threeone.innerText == "X")
  ) {
    h1.innerHTML = "Player X WİN!";
  } else if (
    (oneone.innerText == "O" &&
      onetwo.innerText == "O" &&
      onethree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twoone.innerText == "O" &&
      threeone.innerText == "O") ||
    (twoone.innerText == "O" &&
      twotwo.innerText == "O" &&
      twothree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twotwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onetwo.innerText == "O" &&
      twotwo.innerText == "O" &&
      threetwo.innerText == "O") ||
    (onethree.innerText == "O" &&
      twothree.innerText == "O" &&
      threethree.innerText == "O") ||
    (threeone.innerText == "O" &&
      threetwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onethree.innerText == "O" &&
      twotwo.innerText == "O" &&
      threeone.innerText == "O")
  ) {
    h1.innerHTML = "Player O WİN!";
  }
}

function adding5() {
  if (countx == county  && h1.innerHTML == "") {
    twotwo.innerText = "X";
    countx++;
  } else if (county < countx && h1.innerHTML == "") {
    twotwo.innerText = "O";
    county++;
  }

  if (
    (oneone.innerText == "X" &&
      onetwo.innerText == "X" &&
      onethree.innerText == "X") ||
    (oneone.innerText == "X" &&
      twoone.innerText == "X" &&
      threeone.innerText == "X") ||
    (oneone.innerText == "X" &&
      twotwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (twoone.innerText == "X" &&
      twotwo.innerText == "X" &&
      twothree.innerText == "X") ||
    (onetwo.innerText == "X" &&
      twotwo.innerText == "X" &&
      threetwo.innerText == "X") ||
    (onethree.innerText == "X" &&
      twothree.innerText == "X" &&
      threethree.innerText == "X") ||
    (threeone.innerText == "X" &&
      threetwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (onethree.innerText == "X" &&
      twotwo.innerText == "X" &&
      threeone.innerText == "X")
  ) {
    h1.innerHTML = "Player X WİN!";
  } else if (
    (oneone.innerText == "O" &&
      onetwo.innerText == "O" &&
      onethree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twoone.innerText == "O" &&
      threeone.innerText == "O") ||
    (twoone.innerText == "O" &&
      twotwo.innerText == "O" &&
      twothree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twotwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onetwo.innerText == "O" &&
      twotwo.innerText == "O" &&
      threetwo.innerText == "O") ||
    (onethree.innerText == "O" &&
      twothree.innerText == "O" &&
      threethree.innerText == "O") ||
    (threeone.innerText == "O" &&
      threetwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onethree.innerText == "O" &&
      twotwo.innerText == "O" &&
      threeone.innerText == "O")
  ) {
    h1.innerHTML = "Player O WİN!";
  }
}

function adding6() {
  if (countx == county  && h1.innerHTML == "") {
    twothree.innerText = "X";
    countx++;
  } else if (county < countx && h1.innerHTML == "") {
    twothree.innerText = "O";
    county++;
  }

  if (
    (oneone.innerText == "X" &&
      onetwo.innerText == "X" &&
      onethree.innerText == "X") ||
    (oneone.innerText == "X" &&
      twoone.innerText == "X" &&
      threeone.innerText == "X") ||
    (oneone.innerText == "X" &&
      twotwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (twoone.innerText == "X" &&
      twotwo.innerText == "X" &&
      twothree.innerText == "X") ||
    (onetwo.innerText == "X" &&
      twotwo.innerText == "X" &&
      threetwo.innerText == "X") ||
    (onethree.innerText == "X" &&
      twothree.innerText == "X" &&
      threethree.innerText == "X") ||
    (threeone.innerText == "X" &&
      threetwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (onethree.innerText == "X" &&
      twotwo.innerText == "X" &&
      threeone.innerText == "X")
  ) {
    h1.innerHTML = "Player X WİN!";
  } else if (
    (oneone.innerText == "O" &&
      onetwo.innerText == "O" &&
      onethree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twoone.innerText == "O" &&
      threeone.innerText == "O") ||
    (twoone.innerText == "O" &&
      twotwo.innerText == "O" &&
      twothree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twotwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onetwo.innerText == "O" &&
      twotwo.innerText == "O" &&
      threetwo.innerText == "O") ||
    (onethree.innerText == "O" &&
      twothree.innerText == "O" &&
      threethree.innerText == "O") ||
    (threeone.innerText == "O" &&
      threetwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onethree.innerText == "O" &&
      twotwo.innerText == "O" &&
      threeone.innerText == "O")
  ) {
    h1.innerHTML = "Player O WİN!";
  }
}

function adding7() {
  if (countx == county  && h1.innerHTML == "") {
    threeone.innerText = "X";
    countx++;
  } else if (county < countx && h1.innerHTML == "") {
    threeone.innerText = "O";
    county++;
  }

  if (
    (oneone.innerText == "X" &&
      onetwo.innerText == "X" &&
      onethree.innerText == "X") ||
    (oneone.innerText == "X" &&
      twoone.innerText == "X" &&
      threeone.innerText == "X") ||
    (oneone.innerText == "X" &&
      twotwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (twoone.innerText == "X" &&
      twotwo.innerText == "X" &&
      twothree.innerText == "X") ||
    (onetwo.innerText == "X" &&
      twotwo.innerText == "X" &&
      threetwo.innerText == "X") ||
    (onethree.innerText == "X" &&
      twothree.innerText == "X" &&
      threethree.innerText == "X") ||
    (threeone.innerText == "X" &&
      threetwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (onethree.innerText == "X" &&
      twotwo.innerText == "X" &&
      threeone.innerText == "X")
  ) {
    h1.innerHTML = "Player X WİN!";
  } else if (
    (oneone.innerText == "O" &&
      onetwo.innerText == "O" &&
      onethree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twoone.innerText == "O" &&
      threeone.innerText == "O") ||
    (twoone.innerText == "O" &&
      twotwo.innerText == "O" &&
      twothree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twotwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onetwo.innerText == "O" &&
      twotwo.innerText == "O" &&
      threetwo.innerText == "O") ||
    (onethree.innerText == "O" &&
      twothree.innerText == "O" &&
      threethree.innerText == "O") ||
    (threeone.innerText == "O" &&
      threetwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onethree.innerText == "O" &&
      twotwo.innerText == "O" &&
      threeone.innerText == "O")
  ) {
    h1.innerHTML = "Player O WİN!";
  }
}

function adding8() {
  if (countx == county && h1.innerHTML == "") {
    threetwo.innerText = "X";
    countx++;
  } else if (county < countx && h1.innerHTML == "") {
    threetwo.innerText = "O";
    county++;
  }

  if (
    (oneone.innerText == "X" &&
      onetwo.innerText == "X" &&
      onethree.innerText == "X") ||
    (oneone.innerText == "X" &&
      twoone.innerText == "X" &&
      threeone.innerText == "X") ||
    (oneone.innerText == "X" &&
      twotwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (twoone.innerText == "X" &&
      twotwo.innerText == "X" &&
      twothree.innerText == "X") ||
    (onetwo.innerText == "X" &&
      twotwo.innerText == "X" &&
      threetwo.innerText == "X") ||
    (onethree.innerText == "X" &&
      twothree.innerText == "X" &&
      threethree.innerText == "X") ||
    (threeone.innerText == "X" &&
      threetwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (onethree.innerText == "X" &&
      twotwo.innerText == "X" &&
      threeone.innerText == "X")
  ) {
    h1.innerHTML = "Player X WİN!";
  } else if (
    (oneone.innerText == "O" &&
      onetwo.innerText == "O" &&
      onethree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twoone.innerText == "O" &&
      threeone.innerText == "O") ||
    (twoone.innerText == "O" &&
      twotwo.innerText == "O" &&
      twothree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twotwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onetwo.innerText == "O" &&
      twotwo.innerText == "O" &&
      threetwo.innerText == "O") ||
    (onethree.innerText == "O" &&
      twothree.innerText == "O" &&
      threethree.innerText == "O") ||
    (threeone.innerText == "O" &&
      threetwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onethree.innerText == "O" &&
      twotwo.innerText == "O" &&
      threeone.innerText == "O")
  ) {
    h1.innerHTML = "Player O WİN!";
  }
}

function adding9() {
  if (countx == county  && h1.innerHTML == "") {
    threethree.innerText = "X";
    countx++;
  } else if (county < countx && h1.innerHTML == "") {
    threethree.innerText = "O";
    county++;
  }

  if (
    (oneone.innerText == "X" &&
      onetwo.innerText == "X" &&
      onethree.innerText == "X") ||
    (oneone.innerText == "X" &&
      twoone.innerText == "X" &&
      threeone.innerText == "X") ||
    (oneone.innerText == "X" &&
      twotwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (twoone.innerText == "X" &&
      twotwo.innerText == "X" &&
      twothree.innerText == "X") ||
    (onetwo.innerText == "X" &&
      twotwo.innerText == "X" &&
      threetwo.innerText == "X") ||
    (onethree.innerText == "X" &&
      twothree.innerText == "X" &&
      threethree.innerText == "X") ||
    (threeone.innerText == "X" &&
      threetwo.innerText == "X" &&
      threethree.innerText == "X") ||
    (onethree.innerText == "X" &&
      twotwo.innerText == "X" &&
      threeone.innerText == "X")
  ) {
    h1.innerHTML = "Player X WİN!";
  } else if (
    (oneone.innerText == "O" &&
      onetwo.innerText == "O" &&
      onethree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twoone.innerText == "O" &&
      threeone.innerText == "O") ||
    (twoone.innerText == "O" &&
      twotwo.innerText == "O" &&
      twothree.innerText == "O") ||
    (oneone.innerText == "O" &&
      twotwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onetwo.innerText == "O" &&
      twotwo.innerText == "O" &&
      threetwo.innerText == "O") ||
    (onethree.innerText == "O" &&
      twothree.innerText == "O" &&
      threethree.innerText == "O") ||
    (threeone.innerText == "O" &&
      threetwo.innerText == "O" &&
      threethree.innerText == "O") ||
    (onethree.innerText == "O" &&
      twotwo.innerText == "O" &&
      threeone.innerText == "O")
  ) {
    h1.innerHTML = "Player O WİN!";
  }
}

function reset1() {
  oneone.innerHTML = "";
  onetwo.innerHTML = "";
  onethree.innerHTML = "";
  twoone.innerHTML = "";
  twotwo.innerHTML = "";
  twothree.innerHTML = "";
  threeone.innerHTML = "";
  threetwo.innerHTML = "";
  threethree.innerHTML = "";
  h1.innerHTML = "";
  
}
