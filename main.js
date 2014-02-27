

window.onload = function() {


	url = window.location.href;
	onpage = url.split('.com/');

	$('h1').click(function() {
		document.location.href = onpage[0] + ".com";
	});
	

	if (onpage[1].split('/')[0] == "post") {
		
		$('#mason-container').css('width','400px');
		$('article').css('width','400px');
		$('article img').css('width','100%');
		$('.caption').css('display','block');
		
		$('#posts article').css('max-width','400px');
		$('.autopagerize_page_element').css('width','400px');
		$('.autopagerize_page_element').css('min-width','400px');
		setTimeout(function() {
			$(".attribution-tags").css('display','block');
			$(".attribution-tags").addClass('show');
 		},500);

		$('.button-disagree').click(function(e){ 
			e.preventDefault();
			document.location.href = onpage[0] + ".com";
		});

		s.pageName='us:movies:robocop:tumblr:index.html'
        s.channel=s.eVar3='us:movies'
        s.prop3=s.eVar23='us:movies:robocop:tumblr'
        s.prop4=s.eVar4='us:robocop'
        s.prop5=s.eVar5='us:movies:blog'
        s.prop11='us'

        var s_code=s.t();if(s_code)document.write(s_code)


		$('.submit-fanart').click(function(e) {
			e.preventDefault();

			s.pageName=null;
	        s.channel=s.eVar3=null;
	        s.prop3=s.eVar23=null;
	        s.prop4=s.eVar4=null;
	        s.prop5=s.eVar5=null;
	        s.prop11=null;

 			document.location.href = onpage[0] + ".com/submit";
		});

		$(".attribution-tags").css('display','block');

	} else 	if (onpage[1] == "submit") {
		$('#terms').fadeIn('slow');
		$('#posts article').hide();
		$('#posts article').css('max-width','none');
	
		$('.button-agree').click(function(e){ 
			e.preventDefault();
			$('#terms').fadeOut('slow');
			$('#posts article').fadeIn('slow');
		});

		$('.button-disagree').click(function(e){ 
			e.preventDefault();
			document.location.href = onpage[0] + ".com";
		});
		$('.submit-fanart').click(function(e) {
			e.preventDefault();
			document.location.href = onpage[0] + ".com/submit";
		});

		$(".attribution-tags").css('display','block');

		//track submit page
		s.pageName='us:movies:robocop:tumblr:submit.html'
        s.channel=s.eVar3='us:movies'
        s.prop3=s.eVar23='us:movies:robocop:tumblr'
        s.prop4=s.eVar4='us:robocop'
        s.prop5=s.eVar5='us:movies:blog'
        s.prop11='us'
        var s_code=s.t();if(s_code)document.write(s_code)
	} else {
		$('.submit-fanart').click(function(e) {
			e.preventDefault();
			document.location.href = onpage[0] + ".com/submit";
		});
		
		/*
		$(".attribution-tags").css('display','none !important');
		*/

		//track index page
		s.pageName='us:movies:robocop:tumblr:index.html'
        s.channel=s.eVar3='us:movies'
        s.prop3=s.eVar23='us:movies:robocop:tumblr'
        s.prop4=s.eVar4='us:robocop'
        s.prop5=s.eVar5='us:movies:blog'
        s.prop11='us'
        var s_code=s.t();if(s_code)document.write(s_code)
	}
	


	$('#mason-container').fadeIn('slow');

	var $container = $('.autopagerize_page_element');
	$container.imagesLoaded(function() {
		$('.autopagerize_page_element').masonry({
		  itemSelector: '.photo',
		  columnWidth: 0,
		  isResizable: true,
		  isAnimated: true
		});
	});




 
  $container.infinitescroll({
    navSelector: "#pagination",
    // selector for the paged navigation (it will be hidden)
    nextSelector: ".next",
    // selector for the NEXT link (to page 2)
    itemSelector: ".photo",

   // loadingImg: "http://b.imagehost.org/0548/Untitled-2.png",
    //loadingText: "<em>Loading</em>",
  },
  // call masonry as a callback.
  function( newElements ) {
    var $newElems = $( newElements );
    $newElems.imagesLoaded(function() {
	    $container.masonry( 'appended', $newElems);
	    $container.height
    });
    articles = document.querySelectorAll('article');
 	for (var i = articles.length - 1; i >= 0; i--) {
 		articles[i].onmouseover = function() {
 			$(this).find('.panel').css('display','block')
 		}
 		articles[i].onmouseout = function() {
 			$(this).find('.panel').css('display','none')
 		}
 	};
  }
	);


 	articles = document.querySelectorAll('article');
 	for (var i = articles.length - 1; i >= 0; i--) {
 		articles[i].onmouseover = function() {
 			$(this).find('.panel').css('display','block')
 		}
 		articles[i].onmouseout = function() {
 			$(this).find('.panel').css('display','none')
 		}
 	};


	var win = $(window);
 	function resizeBg() {

 		var win_w = win.width(),
       	 	win_h = win.height(),
        	img  = $("#img-bg").find('img');
        	img_h = $(img).height();
        	img_bg  = $("#img-bg");

        	if (win_h <= img_h) {
        		$(img).css('bottom','auto');
        		$(img).css('top','0');

        		$(img_bg).css('bottom', 'auto');
        		$(img_bg).css('top','0');
        	} else {
        		$(img).css('bottom','0');
        		$(img).css('top','auto');

        		$(img_bg).css('bottom', '0');
        		$(img_bg).css('top','auto');
        	}
 
 	}


 	$(window).resize(resizeBg).trigger("resize");


}