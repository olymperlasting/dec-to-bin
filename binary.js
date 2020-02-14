function binary() {
  var x = parseInt (document.getElementById("x").value);
  var y = x;
  var arr = [];

  while (y != 0) {
    arr.push (y % 2);
    y = Math.trunc (y / 2);
  }

  document.getElementById("result").innerHTML = "Decimal number: " + x + "<br>Binary number: ";
  while (arr.length != 0) document.getElementById("result").innerHTML += arr.pop();
}
