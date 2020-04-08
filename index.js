const DataTransform = require("node-json-transform").DataTransform;
const fs = require('fs');

const _data_shopify_order = JSON.parse(fs.readFileSync("./data/shopify/shop.js", 'utf8'));
const _data_shopify_map_order = JSON.parse(fs.readFileSync("./schemas/shopify/shop.js", 'utf8'));

var shop_owner_map = {
	key: "store",
	item: {
		name: "shop_owner",
	}
}


var dataTransform = DataTransform(_data_shopify_order, _data_shopify_map_order);
var result = dataTransform.transform();
console.log(result);

