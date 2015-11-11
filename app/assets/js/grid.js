$(document).ready(function($) {

$('header > h1').each(function(idx) {
    $(this).delay( idx * 600 ).fadeIn( 600 );
});

	//init immutable selectors
	var category = $('.catalog-category');
	var preview = category.find('.catalog-category-preview');
	var previewHeight = preview.outerHeight();

	var duration = 300;




	//on Category Preview click function
	preview.on("click",function(){




		$('.og-grid > .catalog-item > img').css({opacity: 0, height: "auto", maxWidth:"10%"});
		$('.og-grid > .catalog-item > .catalog-item-text').css({opacity: 0});



			//init height vars
			var expanderHeight,
				totalHeight;
			
			//init parent (category) and sibling (expander) selector
			var thisCategory = $(this).parent();
			var thisExpander = $(this).next();

			//if expander is expanded
			if(thisExpander.hasClass('catalog-category-expander-reveal')){
				//set total category height to preview height
				totalHeight= previewHeight;


			}

			//if expander is collapsed
			else{
				//calculate total category height
				expanderHeight = thisExpander.get(0).scrollHeight;
				totalHeight = previewHeight + expanderHeight;


				thisExpander.find('.og-grid > .catalog-item >img').each(function(i) {
			   		$(this).delay( i*(duration/5) ).animate({opacity: 1,  height: "auto", maxWidth: "100%"},duration, "easeInOutSine");
				});
				thisExpander.find('.og-grid > .catalog-item > .catalog-item-text').each(function(i) {
			   		$(this).delay( i*(duration/5) ).animate({opacity: 1},duration, "easeInOutSine");
				});
			}

			//Toggle expand or collapse this panel
			// thisCategory.toggleClass("og-expanded",300);
			setTimeout(function(){ thisCategory.toggleClass("og-expanded")}, 100);

			thisExpander.toggleClass("catalog-category-expander-reveal",300, "easeInOutCubic");

			//animate category height
   			 thisCategory.animate({height:totalHeight},300, "easeInOutCubic");

   			//Collapse the other panels 
			$('.catalog-category').not(thisCategory).animate({height: previewHeight},200);
			//Hide the other panels
			$(".catalog-category-expander-reveal").not($(this).next()).removeClass('catalog-category-expander-reveal');
			//Hide the other arrows
			$(".og-expanded").not(thisCategory).removeClass('og-expanded');


	});



});
