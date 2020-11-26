/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function filter() {
  document.getElementById("filter").classList.toggle("show");
}
function sort() {
  document.getElementById("sort").classList.toggle("show");
}

function appendColumn() {
  var tbl = document.getElementById('my-table'), // table reference
      i;
  // open loop for each row and append cell
  for (i = 0; i < tbl.rows.length; i++) {
      createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
  }
}

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
