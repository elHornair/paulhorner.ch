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


	/*************************************
	 ***** Shop
	 *************************************/
	function initShop () {
		document.addEventListener('DOMContentLoaded', function() {
			let db = firebase.firestore();

			db.collection('shop_items').get().then((querySnapshot) => {
				let itemsString = querySnapshot.docs
					.map((doc) => {
						return doc.data();
					})
					.map((shopItem) => {
						return `
                                <tr>
                                    <td>${shopItem.title}</td>
                                    <td>${shopItem.price}.-</td>
                                    <td>${shopItem.avg_weight} gr ${shopItem.sold_out ? ' (<i>Zurzeit ausverkauft</i>)' : ''}</td>
                                </tr>
                            `;
					})
					.join('')
				;

				document.querySelector('#prices table > tbody')
					.insertAdjacentHTML('beforeend', itemsString)
				;
			});
		});
	}

	if (document.querySelector('.quotes')) {
		initQuotes();
	}

	if (document.querySelector('#prices')) {
		initShop();
	}

})(window);
