$(document).ready(function($) {

	//init selectors
	var category = $('.catalog-category');
	var preview = category.find('.catalog-category-preview');
	var previewHeight = preview.outerHeight();



	//on Catagory Preview click function
	preview.on("click",function(){
			
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
				expanderHeight = thisExpander.get(0).scrollHeight
				totalHeight = previewHeight + expanderHeight;
			}

			//Toggle expand or collapse this panel
			thisCategory.toggleClass("og-expanded");
			thisExpander.toggleClass("catalog-category-expander-reveal",300, "easeInOutCubic");

			//animate category height
   			 thisCategory.animate({height:totalHeight},300, "easeInOutCubic");

   			//Collapse the other panels 
			$('.catalog-category').not(thisCategory).animate({height: previewHeight},200);
			//Hide the other panels
			$(".catalog-category-expander-reveal").not($(this).next()).removeClass('catalog-category-expander-reveal');
			//Hide the arrow
			$(".og-expanded").not(thisCategory).removeClass('og-expanded');


	});



});
