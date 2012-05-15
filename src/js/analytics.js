/**
	@fileOverview Google analytics wrapper class, initialize usage tracking and event tracking
	@author <a href="mailto:relatedsearchextension@japerr.com">Jeremy Perrin</a>
	@version 1.0.0
*/

/**
	Startup google analytics when the page is ready
*/
document.addEventListener('DOMContentLoaded', function () {
	/**
		Initial namespace creation
		@namespace Top level namespace for related search extension
	*/
	var RelatedSearch = RelatedSearch || {}
	/**
		Static google analytics class, which handles adding tracking behavior
		@class Analytics representation
		@constructor
	*/
	RelatedSearch.Analytics = {
		/**
			Default element selector
			@field
		*/
		selector: 'a',
		/**
			Initialization method for Analytics class
				attaches the trackButtonClick event listener to all elements retrieve using the {@link RelatedSearch.Analytics.selector}
		*/
		init: function() {
			var buttons = document.querySelectorAll(this.selector);
			for (var i = 0; i < buttons.length; i++)
				buttons[i].addEventListener('click', this.trackButtonClick);
		},
		/**
			Queues up a google analytics click tracking event
			@param e Click event containing the button id to track
		*/
		trackButtonClick: function(e) {
			_gaq.push(['_trackEvent', 'clicked', e.target.id]);
		}
	};
	/**
		Call to the static analytics initialization method.
	*/
	RelatedSearch.Analytics.init();
});
/**
	Initializes the google analytics queue
	Set the account
	Add page view track	
*/
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
_gaq.push(['_trackPageview']);
/**
	Insert google analytics script tag into the options page
*/
(function() {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = 'https://ssl.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();