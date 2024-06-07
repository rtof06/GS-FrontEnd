function mostrarOutraCidade() {
   var cidade = document.getElementById("city");
   var inputOutraCidade = document.getElementById("inputOutraCidade");

   if (cidade.value === "Outra") {
      inputOutraCidade.style.display = "block";
   } else {
      inputOutraCidade.style.display = "none";
   }
}

document.getElementById("btn-register").addEventListener("click", (event) => {
   alert("Cadastro enviado com sucesso!\nNosso time irá conferir se a cidade está disponível para seu evento. \nLogo em seguida, nosso time retornará contato com você. \nFique a disposição de poder nos conhecer mais em nosso site!")
})
