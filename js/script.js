// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var teoriamimetica = document.getElementById("teoriamimetica");
var centrocoyoacan = document.getElementById("centrocoyoacan");
var elecciones = document.getElementById("elecciones");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

teoriamimetica.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

centrocoyoacan.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

elecciones.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
} 
$(document).keydown(function(event) { 
    if (event.keyCode == 27) { 
        modal.style.display = "none";
    }
});
