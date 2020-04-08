const DataTransform = require("node-json-transform").DataTransform;
const transform = require('./transform');

module.exports = {

    /**
     * 
     * @param {String} _data_model 
     * @param {String} _data_filename 
     * @param {String} _schema_filename 
     * 
     * @output {Object}
     */
    getData: function(_data_model, _data_filename, _schema_filename ){
        if(!_data_model || !_data_filename || !_schema_filename ) return false

        const _data = require("./data/"+_data_model+"/"+_data_filename+".js");
        let _map = require("./schemas/"+_schema_filename+".js");
        if( !_data || !_map ) return 'Missing files';

        return DataTransform(_data, _map).transform();
    },

    /**
     * 
     * @param {String} _data_model 
     * @param {String} _data_filename 
     * @param {String} _schema_filename 
     * 
     * @output {Object}
     */
    getProductMagento1: function(_data_model, _data_filename, _schema_filename ){
        if(!_data_model || !_data_filename || !_schema_filename ) return false

        let _data = require("./data/"+_data_model+"/"+_data_filename+".js");
        let _map = require("./schemas/"+_schema_filename+".js");

        if( !_data || !_map ) return 'Missing files';

        _cleaned_data = transform.transformMagento1( _data );

        // TO DO
        // controllare che lo status non sia una stringa ma un boolean
        // true = pubblicato
        // false = non pubblicato

        return DataTransform(_cleaned_data, _map).transform();
    },

    /**
     * 
     * @param {String} _data_model 
     * @param {String} _data_filename 
     * @param {String} _schema_filename 
     * 
     * @output {Object}
     */
    getProductMagento2: function(_data_model, _data_filename, _schema_filename ){
        if(!_data_model || !_data_filename || !_schema_filename ) return false

        let _data = require("./data/"+_data_model+"/"+_data_filename+".js");
        let _map = require("./schemas/"+_schema_filename+".js");

        if( !_data || !_map ) return 'Missing files';

        _data = transform.transformMagento2( _data );

        // TO DO
        // controllare che lo status non sia una stringa ma un boolean
        // true = pubblicato
        // false = non pubblicato

        _map['operate'] = [
            {
                'run': function(ary) { 
                    return DataTransform({list:ary}, productVariants).transform();
                }, 
                'on': 'variants'
            },
            {
                'run': function(val, context) {
                    return val[0].file
                },
                'on' : 'image_url'
            },
            {
                'run': function(val) {
                    return (val === 1) ? true : false
                },
                'on' : 'status'
            }
        ];

        let productVariants = {
            'list': 'list',
            'item' : {
                "product_id" : "option_id",
                "sku" : "sku",
                "name" : "title",
                "price" :  "price"
            }
        };

        return DataTransform(_data, _map).transform();
    },

    /**
     * 
     * @param {String} _data_model 
     * @param {String} _data_filename 
     * @param {String} _schema_filename 
     * 
     * @output {Object}
     */
    getProductShopify: function(_data_model, _data_filename, _schema_filename){
        if(!_data_model || !_data_filename || !_schema_filename ) return false

        let _data = require("./data/"+_data_model+"/"+_data_filename+".js");
        let _map = require("./schemas/"+_schema_filename+".js");

        if( !_data || !_map ) return 'Missing files';

        _data = transform.transformShopify( _data )

        _map['operate'] = [
            {
                'run': function(ary) { 
                    return DataTransform({list:ary}, productVariants).transform();
                }, 
                'on': 'variants'
            },
            {
                'run': function(val) {
                    return (val) ? val.src : null
                },
                'on' : 'image_url'
            },
            {
                'run': function(val) {
                    return (val) ? val.replace(/<[^>]*>?/gm, '').substring(0, 255) : null
                },
                'on' : 'description'
            },
            {
                'run' : function(val){
                    return true
                },
                'on' : 'status'
            }
        ];

        let productVariants = {
            'list': 'list',
            'item' : {
                "product_id" : "product_id",
                "sku" : "sku",
                "name" : "title",
                "price" :  "price"
            }
        };

        return DataTransform(_data, _map).transform();

    }

}