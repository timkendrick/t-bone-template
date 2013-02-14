define(
	[
		"jquery",
		"tbone",
		
		"components/TitlePageComponent/TitlePageComponent"
	],
	function(
		$,
		Component,
		
		TitlePageComponent
	) {
		// Initialise component styles
		Component.init();
		
		// Define the root page model
		var rootPageModel = new Component.Model({
			title: "Cookin' with gas!",
			body: "T-Bone is up and running."
		});
		
		// Create the root page component
		var rootPageModel = new TitlePageComponent({
			model: rootPageModel
		});
		
		// Create the root page component's DOM element
		rootPageModel.render();
		
		// Add the root page component's DOM element to the document
		$("[role=main]").empty().append(rootPageModel.$el);
		
		// Activate the root page component
		rootPageModel.activate();
		
		// Listen for window resize events
		if (typeof window !== 'undefined') { $(window).on("resize", function() { rootPageModel.updateSize(); }); }
	}
);