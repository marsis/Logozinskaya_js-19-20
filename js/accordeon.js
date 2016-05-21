$(".accordeon dd").hide().prev().click(function() {
	$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active").children('p').html('+');
	$(this).next().not(":visible").slideDown().prev().addClass("active").children('p').html('-');
});





