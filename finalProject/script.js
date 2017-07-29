$('.wrapper').mousemove(function(e) {
	$('.then').css('width', e.pageX - this.offsetLeft);
});