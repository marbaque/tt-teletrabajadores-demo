(function(){
	
	$('.accordion').on('click', '.panel-title', function(e){ // When clicked
	  e.preventDefault();                    // Prevent default action of button
	  $(this)                                // Get the element the user clicked on
	    .next('.accordion-panel')            // Select following panel 
	    .not(':animated')                    // If it is not currently animating
	    .slideToggle();                      // Use slide toggle to show or hide it
	    
	    //resize quiz height
		$(window).resize(function() {
		    $('.quiz-container').height($('.slide').height() + 80);
		});
	
		$(window).trigger('resize');
	    
	});
	
	// mostrar o esconder botton de scroll a arriba
	$(function() {
		var $window = $(window);
		var $topButton = $('#topbutton');
		var endZone =  $('#footer').offset().top - $window.height() - 50;
		
		$window.on('scroll', function() {
			if ( (endZone) < $window.scrollTop() ) {
				$topButton.animate({ 'right': '0px' }, 250);
			} else {
				$topButton.stop(true).animate({ 'right': '-360px' }, 250);
			}
		});
	});
	
	//hacer scroll hasta arriba
	$("a[href='#top']").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});

	//Modal init
	
	var $content = $('#ventana-demo').detach();   // Remove modal from page	
	
	$('.demo').on('click', function() {// Click handler to open modal
	    modal.open({content: $content, width:320, height:300});
	    
	    var $window = $(window); 
	    var top = Math.max($window.height() - $content.outerHeight(), 0) / 2;
	    //var left = Math.max($window.width() - $content.outerWidth(), 0) / 2;
	    
	    $($content).css({top:'100%', opacity:'0'});
	    
	    $($content).animate({top:top, opacity:'1'}, 1000);
	});
	
	

	// Create a variable to hold a new Date object (defaults to now)
	var today = new Date();
	// Create a variable to hold the year this year
	var year = today.getFullYear();
	
	// Create a variable called el to hold the element whose id attribute has a value of footer
	var el = document.getElementById('year');
	// Write the year into that element.
	el.innerHTML = '&copy; ' + year;
	
		
	
	
  
}());
