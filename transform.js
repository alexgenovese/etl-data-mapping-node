const _ = require('lodash');

module.exports = {

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
        if(!_json.hasOwnProperty('items')) new Error('transformCustomerMagento2 - Wrong data passed')
        
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

    }

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