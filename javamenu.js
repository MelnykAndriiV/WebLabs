function buttonClick() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function onLoad(){
    phrases = ["Hello, world!", "Do you remember the 21st night of September?", "May the force be with you", ""];
    document.getElementById('phraseOfDay').innerHTML = phrases[Math.floor(Math.random() * phrases.length)];
}