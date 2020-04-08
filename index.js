const helpers = require('./helpers');

// Shopify
//console.log( helpers.getData("shopify", "shop", "shop") );
//console.log(helpers.getProductShopify("shopify", "products", "products"))

// Magento 2: https://devdocs.magento.com/swagger/
//console.log(helpers.getProductMagento2("magento2", "products", "products"));
console.log(helpers.getCustomerMagento2("magento2", "customers", "customers"));

// Magento 1: 
//console.log(helpers.getProductMagento1("magento1", "products", "products"));

// Stripe
//console.log( helpers.getData("stripe", "subscriptions", "subscriptions") );
//console.log( helpers.getData("stripe", "subscription", "subscription") );
//console.log( helpers.getData("stripe", "subscription", "plan") );
//console.log( helpers.getData("stripe", "invoices", "invoices") );
