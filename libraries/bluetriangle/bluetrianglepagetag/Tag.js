//:include tagsdk-current.js
var version = "";
var classPath = "bluetriangle.bluetrianglepagetag.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Blue Triangle Page Tag",
		async: true,
		description: "Page tag should be implemented on all pages. Blue Triangle will provide your client ID.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/blue_triangle.png",
		locationDetail: "",
		isPrivate: false,
		url: "${clientId}.btttag.com/BTT/btt.js",
		usesDocWrite: false,
		parameters: [
		{
			name: "Client ID",
			description: "Client ID provided by Blue Triangle. e.g. demo.btttag.com/BTT/btt.js, demo is your client ID",
			token: "clientId",
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
	/*~POST*/
	}
});
