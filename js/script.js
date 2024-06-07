document.addEventListener("DOMContentLoaded", (event) => {
   let mobileMenu = document.getElementById("mobile-menu");
   let navList = document.getElementById("nav-list");

   mobileMenu.addEventListener("click", function () {
      navList.classList.toggle("nav-list-active");
   });
});

document.getElementById("sendButton").addEventListener("click", (event) => {
   alert("Cadastro enviado com sucesso! \nLogo nosso time retornará contato. \nFique a disposição de poder nos conhecer mais em nosso site!")
})
