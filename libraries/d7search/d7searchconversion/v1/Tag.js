//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("d7search.d7searchconversion.v1.Tag", {
	config: {
		/*DATA*/
		name: "7Search Conversion",
		async: true,
		description: "Conversion pixel for 7Search.com",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "https://conversion.7search.com/conversion/v1/conversion.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "7Serach Advertiser ID",
			description: "The advertsier ID for your 7Search Account",
			token: "7search_advertiserid",
			uv: ""
		}, {
			name: "7Search URL ID",
			description: "",
			token: "7search_urlid",
			uv: ""
		}, {
			name: "Transaction Total",
			description: "",
			token: "transaction_total",
			uv: "universal_variable.transaction.total"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window._7search_conversion_advid = this.valueForToken("7search_advertiserid");
		window._7search_conversion_urlid = this.valueForToken("7search_urlid");
		window._7search_conversion_type = "purchase";
		window._7search_conversion_value = this.valueForToken("transaction_total");
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});