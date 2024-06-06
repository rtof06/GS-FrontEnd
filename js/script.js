let counter = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
   // nextImage();
}, 4000)

function nextImage(){
   counter++;
   if(counter > 4){
      counter = 1;
   }

   document.getElementById("radio" + counter).checked = true;
}

document.addEventListener("DOMContentLoaded", (event) => {
   let mobileMenu = document.getElementById("mobile-menu");
   let navList = document.getElementById("nav-list");

   mobileMenu.addEventListener("click", function () {
      navList.classList.toggle("nav-list-active");
   });
});

document.getElementById("sendButton").addEventListener("click", (event) => {
   alert("Cadastro enviado com sucesso! Logo nosso time retornará contato. Fique a disposição de poder nos conhecer mais em nosso site!")
})
