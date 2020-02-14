function binary() {
  var x = parseInt (document.getElementById("x").value);
  var y = Math.abs (x);
  var arr = [];

  while (y != 0) {
    arr.push (y % 2);
    y = parseInt (y / 2);
  }

  if (arr.length == 0) document.getElementById("result").innerHTML = "Decimal number: " + x + "<br>Binary number: 0";
  else if (x > 0) {
    document.getElementById("result").innerHTML = "Decimal number: " + x + "<br>Binary number: ";
    while (arr.length != 0) document.getElementById("result").innerHTML += arr.pop();
  } else if (x < 0) {
    document.getElementById("result").innerHTML = "Decimal number: " + x + "<br>Binary number: -";
    while (arr.length != 0) document.getElementById("result").innerHTML += arr.pop();
  }
}
