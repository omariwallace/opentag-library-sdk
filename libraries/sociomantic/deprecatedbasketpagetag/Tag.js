//:include tagsdk-current.js
var version = "";
var classPath = "sociomantic.deprecatedbasketpagetag.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "{DEPRECATED} Basket Page Tag",
		async: true,
		description: "Product ID is required on the basket page, along with additional information like quantity, amount, currency",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sociomantic.jpg",
		locationDetail: "",
		isPrivate: true,
		url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${advertiserid}",
		usesDocWrite: false,
		parameters: [
		{
			name: "Product Ids",
			description: "A list of identifiers relating to products in the basket",
			token: "product_ids",
			uv: "universal_variable.basket.line_items[#].product.id"
		},
		{
			name: "Amounts",
			description: "A list of amounts for each item in the basket",
			token: "amounts",
			uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
		},
		{
			name: "Currency",
			description: "The currency for the current basket",
			token: "currency",
			uv: "universal_variable.basket.currency"
		},
		{
			name: "Quantities",
			description: "A list of quantities for items relating to respective items currently in the basket",
			token: "quantities",
			uv: "universal_variable.basket.line_items[#].quantity"
		},
		{
			name: "Advertiser Id",
			description: "An identifier for the client",
			token: "advertiserid",
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
var basket = {
   products: []
};

for (var i = 0, ii = this.valueForToken("product_ids").length; i < ii; i++) {
   basket.products.push({
      identifier: this.valueForToken("product_ids")[i],
      amount: this.valueForToken("amounts")[i],
      currency: '' + this.valueForToken("currency") + '',
      quantity: this.valueForToken("quantities")[i]
   });
}

window.basket = basket;
	/*~PRE*/
	},
	post: function() {
	/*POST*/
	/*~POST*/
	}
});
