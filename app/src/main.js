define(
	[
		"tbone",
		
		"components/TitlePageComponent/TitlePageComponent"
	],
	function(
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
		$("[role=main]").append(rootPageModel.$el);
		
		// Activate the root page component
		rootPageModel.activate();
		
		// Listen for window resize events
		$(window).on("resize", function() { rootPageModel.updateSize(); });
	}
);