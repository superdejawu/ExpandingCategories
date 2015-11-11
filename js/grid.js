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
			// $(this).next().slideToggle('fast');


			if(thisExpander.hasClass('catalog-category-expander-reveal')){

				// $(this).next().slideUp('catalog-category-expander-reveal');


				thisExpander.removeClass('catalog-category-expander-reveal');

				$('.catalog-category').not(thisCategory).animate({height: previewHeight},200);

				expanderHeight = thisExpander.outerHeight();

				totalHeight= previewHeight;
				// console.log("shrink");

			}
			else{

				thisExpander.addClass('catalog-category-expander-reveal');
				// $(this).next().slideDown('catalog-category-expander-reveal');
				expanderHeight = thisExpander.outerHeight(),


				totalHeight = previewHeight + expanderHeight;

				// console.log("expanded");

				$('.catalog-category').not(thisCategory).animate({height: previewHeight},200);
				console.log("shrink everything else");

			}
   			 thisCategory.animate({height:totalHeight},200);


			// thisCategory.css({ height: totalHeight });

			//Hide the other panels
			$(".catalog-category-expander-reveal").not($(this).next()).removeClass('catalog-category-expander-reveal');
			// $(".catalog-category-expander-reveal").not($(this).next()).css({height: previewHeight});

			$(".og-expanded").not(thisCategory).removeClass('og-expanded');


	});



});
