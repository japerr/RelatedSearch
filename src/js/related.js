/**
	@fileOverview Extension background script, initializes default options and sets up default browser action behavior
	@author <a href="mailto:relatedsearchextension@japerr.com">Jeremy Perrin</a>
	@version 1.0.0
 */

/**
	Initializes the default related url, if it's not set
	@default 'http://www.google.com/search?q=related:'
*/
if (!localStorage.related_url)
	localStorage.related_url = 'http://www.google.com/search?q=related:';
/**							 
	Click behavior for related search browser action
	domain is pulled from the current tab url regex
	Domain RegExp: http://stackoverflow.com/questions/3689423/google-chrome-plugin-how-to-get-domain-from-url-tab-url/3689475#3689475
*/
chrome.browserAction.onClicked.addListener(function(tab) {
	var domain = tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1];
	_gaq.push(['_trackEvent', 'related search', domain]);
	chrome.tabs.create({ 'url': localStorage.related_url + domain });	
});
/**
	Initializes the google analytics queue
	Set the account
	Add page view track	
	@field
*/
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
_gaq.push(['_trackPageview']);
/**
	Insert google analytics script tag into the options page
	@function
*/
(function() {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = 'https://ssl.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();