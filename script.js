function runaway(id) {
    id.style.top = Math.round(Math.random() * 250) - 100 + 'px';
    id.style.left = Math.round(Math.random() * 250) - 200 + 'px';
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myButton");
var span = document.getElementsByClassName("close")[0];
var img = document.getElementById("img01");
var msg = document.getElementById("modal-content-msg");

btn.onclick = function(){
  modal.style.display = "block";
  img.src = 'https://pbs.twimg.com/media/ErKIWNGXYAM21GO.jpg:large'; // Replace with your image URL
  msg.innerHTML = 'so don\'t shout at Murugan for sending complimenting memes, okie Sakthi?';
}

span.onclick = function() { 
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
