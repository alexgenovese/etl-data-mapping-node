const _ = require('lodash');

module.exports = {

    /**
     * 
     * @param {Object} _json 
     * @output {Object} 
     */
    transformStoreMagento2: function( _json ){
        if(!_json) new Error('transformMagento1 - No data passed')
        if( !(_json.length > 0) ) new Error('transformStoreShopify - Wrong data passed')

        let _new = {'store': null };
        _new.store = _json[0];

        _new = _new.renameProperty('id', 'no_website_id')
        _new = _new.renameProperty('website_id', 'id')
        _new = _new.renameProperty('locale', 'primary_locale')
        _new = _new.renameProperty('default_display_currency_code', 'currency')
        _new = _new.renameProperty('timezone', 'iana_timezone')
        _new = _new.renameProperty('base_link_url', 'domain')

        return _new

    },

    /**
     * 
     * @param {Object} _json 
     * @output {Object} 
     */
    transformProductMagento1: function (_json){
        if(!_json) new Error('transformMagento1 - No data passed')
        if(!_json.hasOwnProperty('products')) new Error('transformMagento1 - Wrong data passed')

        let _new = {};
        _new['products'] = _json.deleteFirstLevelKeys() 
        _new.products.forEach(function(val , key){
            _new.products[key]['productVariants'] = []
        })
        return _new;
    },

    /**
     * 
     * @param {Object} _json 
     * @output {Object}
     */
    transformProductMagento2: function (_json) {
        if(!_json) new Error('transformMagento2 - No data passed')
        if(!_json.hasOwnProperty('items')) new Error('transformMagento2 - Wrong data passed')

        _json = _json.renameProperty('items', 'products');
        _json.products.forEach(function(val, key){
            _json.products[key].renameProperty('options', 'productVariants')
            _json.products[key].renameProperty('media_gallery_entries', 'image')
        })
        return _json;
    },

    /**
     * 
     * @param {Object} _json 
     * @output {Object}
     */
    transformProductShopify: function (_json){
        if(!_json) new Error('transformShopify - No data passed')
        if(!_json.hasOwnProperty('products')) new Error('transformShopify - Wrong data passed')


        _json.products.forEach(function(val, key){
            _json.products[key].renameProperty('title', 'name')
            _json.products[key].renameProperty('body_html', 'short_description')
            _json.products[key].renameProperty('variants', 'productVariants')
        })

        return _json
    },

    /**
     * 
     * @param {Object} _json 
     * @output {Object}
     */
    transformCustomerMagento1: function( _json ){
        if(!_json) new Error('transformCustomerMagento2 - No data passed')
        
        let _new = { customers: null };
        _new.customers = _json.deleteFirstLevelKeys()
        _new.customers.forEach(function(val , key){
            
        })
        return _new
    },

    /**
     * 
     * @param {Object} _json 
     * @output {Object}
     */
    transformCustomerMagento2: function( _json ){
        if(!_json) new Error('transformCustomerMagento2 - No data passed')
        if(!_json.hasOwnProperty('items')) new Error('transformCustomerMagento2 - Wrong data passed')
        
        _json = _json.renameProperty('items', 'customers')
        _json.customers.forEach(function(val, key){
            _json.customers[key].renameProperty('addresses', 'address')
        })
        return _json
    },

    /**
     * 
     * @param {Object} _json 
     * @output {Object}
     */
    transformCustomerShopify: function( _json ){
        if(!_json) new Error('transformCustomerMagento2 - No data passed')
        if(!_json.hasOwnProperty('customers')) new Error('transformCustomerShopify - Wrong data passed')

        _json.customers.forEach(function(val, key){
            _json.customers[key].renameProperty('first_name', 'firstname')
            _json.customers[key].renameProperty('last_name', 'lastname')
            _json.customers[key].renameProperty('default_address', 'address')
        })

        return _json

    },

    /**
     * 
     * @param {Object} _json 
     * @output {Object}
     */
    transformOrderMagento1: function ( _json ){
        if(!_json) new Error('transformCustomerMagento2 - No data passed')
        
        let _new = {orders: []}
        _json = _json.deleteFirstLevelKeys()
        for (let [key, value] of Object.entries(_json)) {
            value.renameProperty('firstname', 'addresses.firstname')
            value.renameProperty('lastname', 'addresses.lastname')
            value.renameProperty('base_currency_code', 'currency')
            value.renameProperty('total_paid', 'total_price')
            value.renameProperty('base_subtotal_incl_tax', 'subtotal_price')
            value.renameProperty('base_discount_amount', 'total_discounts')
            value.renameProperty('order_items', 'line_items')
            
            if( typeof value.line_items.length === 'undefined' ){
                let _temp = value.line_items
                value.line_items = []
                value.line_items.push(_temp.data_item)
            }
            _new.orders.push(value)
        }
        return _new
    },

    /**
     * 
     * @param {Object} _json 
     * @output {Object}
     */
    transformOrderMagento2: function ( _json ){
        if(!_json) new Error('transformCustomerMagento2 - No data passed')
        
        _json = _json.renameProperty('items', 'orders')
        _json.orders.forEach(function(val, key){
            _json.orders[key].renameProperty('entity_id', 'id')
            _json.orders[key].renameProperty('customer_email', 'email')
            _json.orders[key].renameProperty('customer_firstname', 'firstname')
            _json.orders[key].renameProperty('customer_lastname', 'lastname')
            _json.orders[key].renameProperty('order_currency_code', 'currency')
            _json.orders[key].renameProperty('total_paid', 'total_price')
            _json.orders[key].renameProperty('subtotal', 'subtotal_price')
            _json.orders[key].renameProperty('base_discount_amount', 'total_discounts')
            _json.orders[key].renameProperty('items', 'line_items')
        })

        return _json
    },

}

Object.prototype.deleteFirstLevelKeys = function () {
    let _t = [];
    for (let [key, value] of Object.entries(this)) {
        _t.push(value);
    }
    return _t
};

Object.prototype.renameProperty = function (oldName, newName) {
    // Do nothing if the names are the same
    if (oldName === newName) {
        return this;
    }

    // Check for the old property name to avoid a ReferenceError in strict mode.
    if (this.hasOwnProperty(oldName)) {
        this[newName] = this[oldName];
        delete this[oldName];
    }
    return this;
};