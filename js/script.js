let counter = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
   nextImage();
}, 4000)

function nextImage(){
   counter++;
   if(counter > 4){
      counter = 1;
   }

   document.getElementById("radio" + counter).checked = true;
}