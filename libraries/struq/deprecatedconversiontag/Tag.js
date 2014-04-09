//:include tagsdk-current.js
var version = "";
var classPath = "struq.deprecatedconversiontag.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "[Deprecated] Conversion Tag",
		async: true,
		description: "To be placed only on the confirmation page",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Struq Conversion Page ID",
			description: "",
			token: "id",
			uv: ""
		},
		{
			name: "Product IDs",
			description: "",
			token: "product_id_list",
			uv: "universal_variable.transaction.line_items[#].product.id"
		},
		{
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		},
		{
			name: "Discount",
			description: "The order discount amount. Set to 0 if not used.",
			token: "discount",
			uv: ""
		},
		{
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}
	]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/

(function (){
  var rnd, ifrm = document.createElement("IFRAME"), i = 0, ii = this.valueForToken("product_id_list").length, id_string = "";
  for (; i < ii; i++) {
    id_string += this.valueForToken("product_id_list")[i] + ",";
  }
  rnd = parseInt(Math.random() * 1000000);
  ifrm.src = "//app.struq.com/s/cd/" + this.valueForToken("id") + "/?v=2&rnd=" + rnd + "&qs=li=pid=" + id_string.slice(0,id_string.length-1) + "|qty=1|tv=1%26summary=tot=" + this.valueForToken("order_total") + "|dis=" + this.valueForToken("discount") + "|oid=" + this.valueForToken("order_id") + "";
  ifrm.width = '1px';
  ifrm.height = '1px';
  ifrm.style.display = 'none';
  document.body.appendChild(ifrm);
}())
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
