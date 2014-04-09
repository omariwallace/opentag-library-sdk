//:include tagsdk-current.js
var version = "";
var classPath = "pricegrabber.roitrackingctscode.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "ROI Tracking (CTS Code)",
		async: true,
		description: "Tracking tag to be placed on the confirmation page",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/price_grabber.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Account ID",
			description: "",
			token: "account_id",
			uv: ""
		},
		{
			name: "Manufacturers",
			description: "",
			token: "manufacturers",
			uv: "universal_variable.transaction.line_items[#].product.manufacturer"
		},
		{
			name: "Prices",
			description: "",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		},
		{
			name: "SKUs",
			description: "",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		},
		{
			name: "ID List",
			description: "",
			token: "ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		},
		{
			name: "Quantity List",
			description: "",
			token: "quants",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}
	]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/


  (function () {

    var pixel = new Image();
    var source = "https://www.pricegrabber.com/conversion.php?retid=" + this.valueForToken("account_id") + "";
    var item, items = "";

    for (var i = 0, ii = this.valueForToken("ids").length; i < ii; i++) {
      item = [
        this.valueForToken("manufacturers")[i],
        "",
        this.valueForToken("prices")[i],
        this.valueForToken("skus")[i],
        this.valueForToken("ids")[i],
        this.valueForToken("quants")[i]
      ];
      items += "&item" + (i + 1) + "=" + item.join("|");
    }

    source += items;
    pixel.src = source;

  }());

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
