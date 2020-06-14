(function(window) {
	"use strict";

	/*************************************
	 ***** Quotes
	 *************************************/
	function initQuotes () {
		let quoteActiveClass = 'quote--active',
			quotes = document.querySelectorAll('.quotes .quote');

		function changeQuote () {
			let nextIndex = Math.round(Math.random()*(quotes.length-1));

			quotes.forEach((quoteEl) => {
				quoteEl.classList.remove(quoteActiveClass)
			});

			quotes.item(nextIndex).classList.add(quoteActiveClass);
		}

		changeQuote();
		window.setInterval(changeQuote, 3000);

	}

	initQuotes();


})(window);
