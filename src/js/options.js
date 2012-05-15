/**
	@fileOverview Options window script contains element click behavior for storing and displaying current user options
	@author <a href="mailto:relatedsearchextension@japerr.com">Jeremy Perrin</a>
	@version 1.0.0
*/
 
/**
	Initialize the options windows using the Options class
*/
document.addEventListener('DOMContentLoaded', function () {
	/**
		Initial namespace creation
		@namespace Container for Options class
	*/
	var RelatedSearch = RelatedSearch || {}
	/**
		Static options class representing the behavior of the options window
		@class Options representation
		@constructor
	*/
	RelatedSearch.Options = {
		/** 
			Related url inputbox reference
			@field
		*/
		related_url_element: null,
		/** 
			Default element reference 
			@field
		*/
		default_element: null,
		/** 
			About element reference 
			@field
		*/
		about_element: null,		
		/** 
			Save element reference 
			@field
		*/
		save_element: null,
		/** 
			Cancel element reference 
			@field
		*/
		cancel_element: null,
		/**
			Initialization method for Options class 
				with the current stored values, and attach 
				the default click behavior
		*/
		init: function() {
			related_url_element = document.getElementById('related_url');
			related_url_element.value = localStorage.related_url;
			
			url_default_element = document.getElementById('url_default');
			about_element = document.getElementById('about');
			save_element = document.getElementById('save');
			cancel_element = document.getElementById('cancel');
		
			url_default_element.addEventListener('click', this.restoreRelatedUrl);
			about_element.addEventListener('click', this.toggleAbout);
			save_element.addEventListener('click', this.saveExitOptions);
			cancel_element.addEventListener('click', this.exitOptions);	
		},
		/**
			Restore the default related url
			@param e Click event, event propagation is stopped.
		*/
		restoreRelatedUrl: function(e) {
			e.preventDefault();

			related_url_element.value = 'http://www.google.com/search?q=related:';
		},
		/**
			Toggle display the about container
			@param e Click event, event propagation is stopped.
		*/		
		toggleAbout: function(e) {
			e.preventDefault();
			
			var about_container = document.getElementById('about_container');
			about_container.style.display = about_container.style.display == 'none' ? 'block' : 'none';
		},
		/**
			Save and close the options window
		*/
		saveExitOptions: function() {
			localStorage.related_url = related_url_element.value;
			RelatedSearch.Options.exitOptions();
		},
		/**
			Close the options window
		*/
		exitOptions: function() {
			window.close();
		}
	}
	/**
		Call to the static options initialization method.
	*/
	RelatedSearch.Options.init();
});