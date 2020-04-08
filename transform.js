const _ = require('lodash');

module.exports = {

    transformMagento1: function (_json){
        if(!_json) new Error('transformMagento1 - No data passed')
        let _new = {};
        _new['products'] = _json.deleteFirstLevelKeys() 
        _new.products.forEach(function(val , key){
            _new.products[key]['productVariants'] = []
        })
        return _new;
    },

    transformMagento2: function (_json) {
        if(!_json) new Error('transformMagento2 - No data passed')

        _json = _json.renameProperty('items', 'products');
        _json.products.forEach(function(val, key){
            _json.products[key].renameProperty('options', 'productVariants')
            _json.products[key].renameProperty('media_gallery_entries', 'image')
        })
        return _json;
    },

    transformShopify: function (_json){
        if(!_json) new Error('transformShopify - No data passed')

        _json.products.forEach(function(val, key){
            _json.products[key].renameProperty('title', 'name')
            _json.products[key].renameProperty('body_html', 'short_description')
            _json.products[key].renameProperty('variants', 'productVariants')
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