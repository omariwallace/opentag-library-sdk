//:include tagsdk-current.js
var version = "";
var classPath = "jquery.noconflictjquery.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Noconflict jQuery",
		async: true,
		description: "Load jQuery and set it as a specified variable name attached to a window variable, not populating window.$ or window.jQuery.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/jQuery.png",
		locationDetail: "",
		isPrivate: false,
		url: "ajax.googleapis.com/ajax/libs/jquery/${version}/jquery.min.js",
		usesDocWrite: false,
		parameters: [
		{
			name: "jQuery version",
			description: "version e.g. 1.8.3",
			token: "version",
			uv: ""
		},
		{
			name: "jQuery name",
			description: "Save jQuery as a variable rather than as 'jQuery' or '$'",
			token: "jquery_name",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/
	/*~SCRIPT*/
	},
	pre: function() {
	/*PRE*/
	/*~PRE*/
	},
	post: function() {
	/*POST*/
window.this.valueForToken("jquery_name") = $.noConflict(true);
	/*~POST*/
	}
});
