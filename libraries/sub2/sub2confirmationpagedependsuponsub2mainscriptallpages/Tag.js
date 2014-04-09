//:include tagsdk-current.js
var version = "";
var classPath = "sub2.sub2confirmationpagedependsuponsub2mainscriptallpages.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Sub2 - Confirmation Page (depends upon \"Sub2 - Main Script - All pages\")",
		async: true,
		description: "The script should be added to the Order Confirmation page on the website. The purpose of this script is to capture the relevant details relating to the user's order.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/sub2_logo.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Order ID",
			description: "Order ID",
			token: "orderId",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Affiliation",
			description: "Voucher Code",
			token: "affiliation",
			uv: "universal_variable.transaction.voucher"
		},
		{
			name: "Order Total excluding Shipping Cost",
			description: "Order Total",
			token: "total",
			uv: "universal_variable.transaction.subtotal"
		},
		{
			name: "Order Tax",
			description: "Order Tax",
			token: "tax",
			uv: "universal_variable.transaction.tax"
		},
		{
			name: "Shipping Cost",
			description: "Shipping Cost",
			token: "shipping",
			uv: "universal_variable.transaction.shipping_cost"
		},
		{
			name: "City",
			description: "City",
			token: "city",
			uv: "universal_variable.transaction.delivery.city"
		},
		{
			name: "County",
			description: "Leave blank if not available",
			token: "county",
			uv: ""
		},
		{
			name: "Country",
			description: "Country",
			token: "country",
			uv: "universal_variable.transaction.delivery.country"
		},
		{
			name: "List of Product IDs",
			description: "List of Purchased Items",
			token: "product_id",
			uv: "universal_variable.transaction.line_items[#].product.id"
		},
		{
			name: "List of Product Names",
			description: "List of Product Names",
			token: "product_name",
			uv: "universal_variable.transaction.line_items[#].product.name"
		},
		{
			name: "List of Product Categories",
			description: "List of Product Categories",
			token: "category_unit",
			uv: "universal_variable.transaction.line_items[#].product.category"
		},
		{
			name: "List of Product Prices",
			description: "List of Product Prices",
			token: "unit_price",
			uv: "universal_variable.transaction.line_items[#].product.unit_price"
		},
		{
			name: "List of Product Quantities",
			description: "List of Product Quantities",
			token: "quantity",
			uv: "universal_variable.transaction.line_items[#].quantity"
		},
		{
			name: "List of Product SKUs",
			description: "List of Product SKUs",
			token: "sku",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		},
		{
			name: "Title",
			description: "Mr, Mrs, Ms",
			token: "title",
			uv: ""
		},
		{
			name: "Forename",
			description: "forename",
			token: "forename",
			uv: ""
		},
		{
			name: "Last Name",
			description: "last name",
			token: "lastname",
			uv: ""
		},
		{
			name: "Address 1",
			description: "Address 1",
			token: "address1",
			uv: "universal_variable.transaction.billing.address"
		},
		{
			name: "Address 2",
			description: "Address 2",
			token: "address2",
			uv: "universal_variable.transaction.billing.city"
		},
		{
			name: "Address 3",
			description: "Address 3",
			token: "address3",
			uv: "universal_variable.transaction.billing.state"
		},
		{
			name: "Address 4",
			description: "Address 4",
			token: "address4",
			uv: "universal_variable.transaction.billing.country"
		},
		{
			name: "Postcode",
			description: "postcode",
			token: "postcode",
			uv: "universal_variable.transaction.billing.postcode"
		},
		{
			name: "Email",
			description: "Email",
			token: "email",
			uv: "universal_variable.user.email"
		},
		{
			name: "Landline",
			description: "Landline",
			token: "landline",
			uv: ""
		},
		{
			name: "Mobile",
			description: "Mobile",
			token: "mobile",
			uv: ""
		},
		{
			name: "OptIns",
			description: "User Opted for SignUp Or Not",
			token: "optins",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/


(function ()
{
  var ii = 0;
  var waitForConfirmationScripts =function ()
  {
    if ((typeof S2Tech_addOrder === 'function') && (typeof S2Tech_addItem === 'function') && (typeof S2Tech_MatchData_NA === 'function'))
    {
      S2Tech_addOrder("" + this.valueForToken("orderId") + "", "" + this.valueForToken("affiliation") + "", "" + this.valueForToken("total") + "", "" + this.valueForToken("tax") + "", "" + this.valueForToken("shipping") + "", "" + this.valueForToken("city") + "", "" + this.valueForToken("county") + "", "" + this.valueForToken("country") + "");

      for (var i = 0; i < this.valueForToken("product_id").length; i++)
      {
        S2Tech_addItem("" + this.valueForToken("orderId") + "", this.valueForToken("sku")[i], this.valueForToken("product_name")[i], this.valueForToken("category_unit")[i], this.valueForToken("unit_price")[i], this.valueForToken("quantity")[i]);
      }
      
      S2Tech_MatchData_NA("" + this.valueForToken("title") + "", "" + this.valueForToken("forename") + "", "" + this.valueForToken("lastname") + "", "" + this.valueForToken("address1") + "", "" + this.valueForToken("address2") + "", "" + this.valueForToken("address3") + "", "" + this.valueForToken("address4") + "", "" + this.valueForToken("postcode") + "", "" + this.valueForToken("email") + "", "" + this.valueForToken("landline") + "", "" + this.valueForToken("mobile") + "", "" + this.valueForToken("optins") + "");
    }
    else if (ii < 50)
    {
       ii++;
       setTimeout(waitForConfirmationScripts, 100);
    }
  };

  waitForConfirmationScripts();

})();

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
