//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("webtrends.webtrendsbasicmultitrack.Tag", {
    config: {
      /*DATA*/
	id: 36198,
	name: "Webtrends - basic multiTrack",
	async: true,
	description: "Use multiTrack for sending back custom data, or overriding the values from Webtrends' standard set of data.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/webtrends.jpg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35340,
		name: "Custom variables",
		description: "You should return an object (key/value) from within a self executing anonymous function.",
		token: "data",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

Webtrends.multiTrack({
  args: this.getValueForToken("data")
});


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