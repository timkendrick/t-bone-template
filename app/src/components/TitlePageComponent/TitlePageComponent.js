define(
	[
		"tbone",
		
		"text!components/TitlePageComponent/TitlePageComponent.html",
		"text!components/TitlePageComponent/TitlePageComponent.css"
	],
	function(
		Component,
		
		TitlePageComponentTemplate,
		TitlePageComponentStyle
	) {
		
		var TitlePageComponent = Component.extend({
			template: TitlePageComponentTemplate
		});
		
		return Component.register(TitlePageComponent, "components.TitlePageComponent", TitlePageComponentStyle);
	}
);