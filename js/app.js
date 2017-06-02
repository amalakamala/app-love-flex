/*
 * Archivo principal de funcionalidad de JS
 */
(function images(){
 	var lasImagenes = Array.from(document.getElementsByClassName("img-proyecto"));
 	var modal = document.getElementById("img-proyecto-modal");

 	var cuerpoModal, close, icono;


 	lasImagenes.forEach(function(c){
 		c.addEventListener("click",function(){
 			modal.innerHTML="";
 			cuerpoModal = document.createElement("div");
 			cuerpoModal.classList.add("modal-completo");

 			cuerpoModal.innerHTML = c.innerHTML;

 			modal.appendChild(cuerpoModal);
 			modal.classList.remove("hide");

 			texto = Array.from(document.getElementsByClassName("n-producto"));
 			texto.forEach(function(b){
 				b.classList.add("hide");
 			}); 			
			
 			close = document.createElement("div"); 
 			close.classList.add("close-img");
 			icono = document.createElement("i");
 			icono.setAttribute("class","fa fa-times-circle");
 			icono.setAttribute("aria-hidden","true");

 			close.appendChild(icono);
 			modal.appendChild(close);

 			close.addEventListener("click", function(){
 				modal.classList.add("hide");
 			});

 		});
		
 	});
 })();



function resizeHeaderOnScroll() {
  var distanciaY = window.pageYOffset || document.documentElement.scrollTop;
  var limite = 300;
  var elNav = document.getElementById('nav');
  
  if (distanciaY > limite) {
  	elNav.classList.add("menu-dos");    
  }else{
    elNav.classList.remove("menu-dos");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);
 	



