$(document).ready(function($) {

	//init selectors
	var category = $('.catalog-category');
	var preview = category.find('.catalog-category-preview');
	var previewHeight = preview.outerHeight();



	//on Catagory Preview click function
	preview.on("click",function(){
			var expanderHeight,
				totalHeight;
			

			var thisCategory = $(this).parent();
			var thisExpander = $(this).next();

			//Expand or collapse this panel
			thisCategory.toggleClass("og-expanded");
			thisExpander.toggleClass("catalog-category-expander-reveal",300, "easeInOutCubic");



			if(thisExpander.hasClass('catalog-category-expander-reveal')){

				// $(this).next().slideUp('catalog-category-expander-reveal');
				
				// shrink everything else
				$('.catalog-category').not(thisCategory).animate({height: previewHeight},200);



				expanderHeight = thisExpander.get(0).scrollHeight;



				totalHeight= previewHeight;
				console.log(totalHeight);


				

			}
			else{


				// shrink everything else
				$('.catalog-category').not(thisCategory).animate({height: previewHeight},200);

				// $(this).next().slideDown('catalog-category-expander-reveal');
				expanderHeight = thisExpander.get(0).scrollHeight



				totalHeight = previewHeight + expanderHeight;
				console.log(totalHeight);





			}

   			 thisCategory.animate({height:totalHeight},300, "easeInOutCubic");
   			 console.log(totalHeight);



			// thisCategory.css({ height: totalHeight });

			//Hide the other panels
			$(".catalog-category-expander-reveal").not($(this).next()).removeClass('catalog-category-expander-reveal');
			// $(".catalog-category-expander-reveal").not($(this).next()).css({height: previewHeight});

			$(".og-expanded").not(thisCategory).removeClass('og-expanded');


	});



});
