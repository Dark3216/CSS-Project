var f5000 = 0;
var f1000 = 0;
var f500 = 0;
var f100 = 0;
var f50 = 0;
var f20 = 0;
var f10 = 0;
var f5 = 0;
var f2 = 0;
var f1 = 0;
var total = 0;
var amountEntered = 0;
var hamza = 0;
var r1 = 0;
var r2 = 0;
var r3 = 0;
var r4 = 0;
var r5 = 0;
var r6 = 0;
var r7 = 0;
var r8 = 0;
var r9 = 0;
var r10 = 0;
function amount() {
  f5000 = parseInt(prompt("enter 5000 notes"));
  document.getElementById("fiveThousands").innerHTML = f5000;

  f1000 = parseInt(prompt("enter 1000 notes"));
  document.getElementById("thousand").innerHTML = f1000;

  f500 = parseInt(prompt("enter 500 notes"));
  document.getElementById("fiveHundred").innerHTML = f500;

  f100 = parseInt(prompt("enter 100 notes"));
  document.getElementById("hundred").innerHTML = f100;

  f50 = parseInt(prompt("enter 50 notes"));
  document.getElementById("fifty").innerHTML = f50;

  f20 = parseInt(prompt("enter 20 notes"));
  document.getElementById("twenty").innerHTML = f20;

  f10 = parseInt(prompt("enter 10 notes"));
  document.getElementById("ten").innerHTML = f10;

  f5 = parseInt(prompt("enter 5 coins"));
  document.getElementById("five").innerHTML = f5;

  f2 = parseInt(prompt("enter 2 coins"));
  document.getElementById("two").innerHTML = f2;

  f1 = parseInt(prompt("enter 1 coins"));
  document.getElementById("one").innerHTML = f1;

  total =
    f5000 * 5000 +
    f1000 * 1000 +
    f500 * 500 +
    f100 * 100 +
    f50 * 50 +
    f20 * 20 +
    f10 * 10 +
    f5 * 5 +
    f2 * 2 +
    f1;
  document.getElementById("totalAmount").innerHTML = total;
  document.getElementById("zero").innerHTML = "";
}

function enterAmount() {
  amountEntered = parseInt(prompt("Enter amount You pay: "));
  hamza = amountEntered;
  if (amountEntered <= total) {
    total = total - amountEntered;
    document.getElementById("AmountEnter").innerHTML = amountEntered;
    document.getElementById("totalAmount").innerHTML = total;
    document.getElementById("Balance").innerHTML = total;

    if (amountEntered >= 5000) {
      if (amountEntered >= f5000 * 5000 && f5000 > 0) {
        amountEntered = amountEntered - f5000 * 5000;
        r1 = f5000;
        f5000 = 0;
      } else {
        if (f5000 > 0) {
          r1 = Math.floor(amountEntered / 5000);
          f5000 = f5000 - Math.floor(amountEntered / 5000);
          amountEntered =
            amountEntered - Math.floor(amountEntered / 5000) * 5000;
        }
      }
      document.getElementById("fiveThousands").innerHTML = f5000;
    }

    if (amountEntered >= 1000) {
      if (amountEntered >= f1000 * 1000 && f1000 > 0) {
        amountEntered = amountEntered - f1000 * 1000;
        r2 = f1000;
        f1000 = 0;
      } else {
        if (f1000 > 0) {
          r2 = Math.floor(amountEntered / 1000);
          f1000 = f1000 - Math.floor(amountEntered / 1000);
          amountEntered =
            amountEntered - Math.floor(amountEntered / 1000) * 1000;
        }
      }
      document.getElementById("thousand").innerHTML = f1000;
    }

    if (amountEntered >= 500) {
      if (amountEntered >= f500 * 500 && f500 > 0) {
        amountEntered = amountEntered - f500 * 500;
        r3 = f500;
        f500 = 0;
      } else {
        if (f500 > 0) {
          r3 = Math.floor(amountEntered / 500);
          f500 = f500 - Math.floor(amountEntered / 500);
          amountEntered = amountEntered - Math.floor(amountEntered / 500) * 500;
        }
      }
      document.getElementById("fiveHundred").innerHTML = f500;
    }
    if (amountEntered >= 100) {
      if (amountEntered >= f100 * 100 && f100 > 0) {
        amountEntered = amountEntered - f100 * 100;
        r4 = f100;
        f100 = 0;
      } else {
        if (f100 > 0) {
          r4 = Math.floor(amountEntered / 100);
          f100 = f100 - Math.floor(amountEntered / 100);
          amountEntered = amountEntered - Math.floor(amountEntered / 100) * 100;
        }
      }
      document.getElementById("hundred").innerHTML = f100;
    }
    if (amountEntered >= 50) {
      if (amountEntered >= f50 * 50 && f50 > 0) {
        amountEntered = amountEntered - f50 * 50;
        r5 = f50;
        f50 = 0;
      } else {
        if (f50 > 0) {
          r5 = Math.floor(amountEntered / 50);
          f50 = f50 - Math.floor(amountEntered / 50);
          amountEntered = amountEntered - Math.floor(amountEntered / 50) * 50;
        }
      }
      document.getElementById("fifty").innerHTML = f50;
    }
    if (amountEntered >= 20) {
      if (amountEntered >= f20 * 20 && f20 > 0) {
        amountEntered = amountEntered - f20 * 20;
        r6 = f20;
        f20 = 0;
      } else {
        if (f20 > 0) {
          r6 = Math.floor(amountEntered / 20);
          f20 = f20 - Math.floor(amountEntered / 20);
          amountEntered = amountEntered - Math.floor(amountEntered / 20) * 20;
        }
      }
      document.getElementById("twenty").innerHTML = f20;
    }
    if (amountEntered >= 10) {
      if (amountEntered >= f10 * 10 && f10 > 0) {
        amountEntered = amountEntered - f10 * 10;
        r7 = f10;
        f10 = 0;
      } else {
        if (f10 > 0) {
          r7 = Math.floor(amountEntered / 10);
          f10 = f10 - Math.floor(amountEntered / 10);
          amountEntered = amountEntered - Math.floor(amountEntered / 10) * 10;
        }
      }
      document.getElementById("ten").innerHTML = f10;
    }
    if (amountEntered >= 5) {
      if (amountEntered >= f5 * 5 && f5 > 0) {
        amountEntered = amountEntered - f5 * 5;
        r8 = f5;
        f5 = 0;
      } else {
        if (f5 > 0) {
          r8 = Math.floor(amountEntered / 5);
          f5 = f5 - Math.floor(amountEntered / 5);
          amountEntered = amountEntered - Math.floor(amountEntered / 5) * 5;
        }
      }
      document.getElementById("five").innerHTML = f5;
    }
    if (amountEntered >= 2) {
      if (amountEntered >= f2 * 2 && f2 > 0) {
        amountEntered = amountEntered - f2 * 2;
        r9 = f2;
        f2 = 0;
      } else {
        if (f2 > 0) {
          r9 = Math.floor(amountEntered / 2);
          f2 = f2 - Math.floor(amountEntered / 2);
          amountEntered = amountEntered - Math.floor(amountEntered / 2) * 2;
        }
      }
      document.getElementById("two").innerHTML = f2;
    }
    if (amountEntered >= 1) {
      if (amountEntered >= f1 * 1 && f1 > 0) {
        amountEntered = amountEntered - f1 * 1;
        r10 = f1;
        f1 = 0;
      } else {
        if (f1 > 0) {
          r10 = Math.floor(amountEntered / 1);
          f1 = f1 - Math.floor(amountEntered / 1);
          amountEntered = amountEntered - Math.floor(amountEntered / 1) * 1;
        }
      }
      document.getElementById("one").innerHTML = f1;
    }
    document.getElementById("zero").innerHTML = "";
  } else {
    document.getElementById("AmountEnter").innerHTML =
      "We have insufficient Balance";
    document.getElementById("zero").innerHTML = "";
    document.getElementsByClassName("btn-2")[0].innerHTML = "";
  }
}

function generateSlip() {
  var slipTotal = hamza;
  var obj = {
    "Total Amount:": slipTotal,
    "Five thousand Notes:": r1,
    "One thousand Notes:": r2,
    "Five Hundred Notes:": r3,
    "One Hundred Notes:": r4,
    "Fifty Notes:": r5,
    "Twenty Notes:": r6,
    "Ten Notes:": r7,
    "Five Coins:": r8,
    "Two Coins:": r9,
    "One Coins:": r10,
  };

  document.getElementById("zero").innerHTML +=
    "&emsp;" + "&emsp;" + "&emsp;" + "&emsp;" + "&emsp;" + "Thank You<br>";
  for (var i in obj) {
    if (obj[i] > 0) {
      document.getElementById("zero").innerHTML += i + "&emsp;" + "&emsp;";
      document.getElementById("zero").innerHTML += "\t\t" + obj[i] + "<br>";
      background: white;
    }
  }
  r1 = 0;
  r2 = 0;
  r3 = 0;
  r4 = 0;
  r5 = 0;
  r6 = 0;
  r7 = 0;
  r8 = 0;
  r9 = 0;
  r10 = 0;
}
