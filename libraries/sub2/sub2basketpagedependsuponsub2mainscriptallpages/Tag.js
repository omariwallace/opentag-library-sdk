//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("sub2.sub2basketpagedependsuponsub2mainscriptallpages.Tag", {
    config: {
      /*DATA*/
	id: 39678,
	name: "Sub2 - Basket Page (depends upon \"Sub2 - Main Script - All Pages\")",
	async: true,
	description: "This script should be placed on the basket page and fire each time the contents of that basket change",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/sub2_logo.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 38759,
		name: "List of Product SKUs",
		description: "List of Product SKUs",
		token: "sku",
		uv: "universal_variable.basket.line_items[#].product.sku_code"
	},
	{
		id: 38760,
		name: "List of Product IDs",
		description: "List of Product IDs",
		token: "product_id",
		uv: "universal_variable.basket.line_items[#].product.id"
	},
	{
		id: 38761,
		name: "List of Product Names",
		description: "List of Product Names",
		token: "product_name",
		uv: "universal_variable.basket.line_items[#].product.name"
	},
	{
		id: 38762,
		name: "List or Product Prices",
		description: "List or Product Prices",
		token: "unit_price",
		uv: "universal_variable.basket.line_items[#].product.unit_price"
	},
	{
		id: 38763,
		name: "List of Product Quantities",
		description: "List of Product Quantities",
		token: "quantity",
		uv: "universal_variable.basket.line_items[#].quantity"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/


(function ()
{
  var waitFor_S2Tech_SendBasket = setInterval(function ()
  {
    if (typeof S2Tech_SendBasket === 'function')
    {
      clearInterval(waitFor_S2Tech_SendBasket);
      
      var basketData = "<Store>";

      for (var i = 0; i < this.getValueForToken("sku").length; i++)
      {
        basketData += "<Product>";
        basketData += "<SKU>" + this.getValueForToken("sku")[i] + "</SKU>";
        basketData += "<Product_ID>" + this.getValueForToken("product_id")[i] + "</Product_ID>";
        basketData += "<Product_Name>" + this.getValueForToken("product_name")[i] + "</Product_Name>";
        basketData += "<Unit_Price>" + this.getValueForToken("unit_price")[i] + "</Unit_Price>";
        basketData += "<Quantity>" + this.getValueForToken("quantity")[i] + "</Quantity>";
        basketData += "</Product>";
      }

      basketData += "</Store>";

      S2Tech_SendBasket(basketData) ;
    }
  }, 100);

  setTimeout(function ()
  {
    clearInterval(waitFor_S2Tech_SendBasket);
  }, 5000);

})();



      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});