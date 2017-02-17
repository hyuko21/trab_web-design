window.onload = function() {
	var path = location.pathname;
	var page = path.split("/").pop();
	
	if (page == 'aluno.html' || page == 'professor.html'){
		document.body.style.background = 'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .9)), url(imagem/harvard_alunos.jpg) no-repeat';
		document.body.style.backgroundPosition = 'center';
		document.body.style.backgroundSize = 'cover';
		document.body.style.backgroundAttachment = 'fixed';
	} else if (page == 'pais.html' || page == 'secretaria.html'){
		document.body.style.background = 'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .9)), url(imagem/harvard_serious.jpg) no-repeat';
		document.body.style.backgroundPosition = 'center';
		document.body.style.backgroundSize = 'cover';
		document.body.style.backgroundAttachment = 'fixed';
	}
}

//Botão para voltar à parte superior da página
$(document).ready(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1200) {
			$('.scrollToTop').fadeIn(600);
		} else {
			$('.scrollToTop').fadeOut(600);
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});

//Scroll da página clicando nos links(História/Contato)
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1400, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});