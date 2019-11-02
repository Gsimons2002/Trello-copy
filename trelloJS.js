/*Create a new list item when clicking on the "Add" button */
/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo */
function newElement() {
  var li = document.createElement("LI");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("card").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var button = document.createElement("BUTTON");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
