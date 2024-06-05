document.querySelectorAll('.dot').forEach(dot => {
   dot.addEventListener('click', function () {
       var modalId;
       if (this.classList.contains('porto-seguro')) {
           modalId = 'modal1';
       } else if (this.classList.contains('ubatuba')) {
           modalId = 'modal2';
       } else if (this.classList.contains('florianopolis')) {
           modalId = 'modal3';
       }
       const modal = document.getElementById(modalId);
       modal.style.display = "block";
   });
});

document.querySelectorAll('.close').forEach(closeBtn => {
   closeBtn.addEventListener('click', function () {
       var modal = this.parentElement.parentElement;
       modal.style.display = "none";
   });
});