var replace = function() {
	var replacedOne = false;

	var imageList = $("[href*='youtube'] > img")
	if (imageList != undefined && imageList.parent() != undefined && imageList.parent().attr('href') != undefined) {
		var videoID = imageList.parent().attr('href').replace(/.*v=+(.*)+&.*/, '$1')
		var embedHTML = '<iframe width="520" height="315"' +
			'src="//www.youtube.com/embed/' + videoID + '" frameborder="0"' +
			' allowfullscreen></iframe>';
		if (imageList != undefined && imageList.parent() != undefined && imageList.parent().parent() != undefined) {
			imageList.parent().parent().replaceWith(embedHTML);
			replacedOne = true;
		}
	}

	if (!replacedOne) {
		var secondList = $("[href*='youtube'] > span > img")
		if (secondList != undefined && secondList.parent() != undefined && secondList.parent().parent() && secondList.parent().parent().attr('href') != undefined) {
			var videoID = secondList.parent().parent().attr('href').replace(/.*v=+(.*)/, '$1')
			var embedHTML = '<iframe width="520" height="315"' +
				'src="//www.youtube.com/embed/' + videoID + '" frameborder="0"' +
				' allowfullscreen></iframe>';
			if (secondList != undefined && secondList.parent() != undefined && secondList.parent().parent() != undefined && secondList.parent().parent().parent() != undefined) {
				$(secondList.parent().parent().parent()[0]).replaceWith(embedHTML);
			}
		}
	}
};

replace();

$('a').click(replace);
