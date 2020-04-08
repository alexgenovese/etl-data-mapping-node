const DataTransform = require("node-json-transform").DataTransform;
const transform = require('./transform');

module.exports = {

    getData: function(_data_model, _data_filename, _schema_filename ){
        if(!_data_model || !_data_filename || !_schema_filename ) return false

        const _data = require("./data/"+_data_model+"/"+_data_filename+".js");
        let _map = require("./schemas/"+_schema_filename+".js");
        if( !_data || !_map ) return 'Missing files';

        return DataTransform(_data, _map).transform();
    },

    getProductMagento1: function(_data_model, _data_filename, _schema_filename ){
        if(!_data_model || !_data_filename || !_schema_filename ) return false

        let _data = require("./data/"+_data_model+"/"+_data_filename+".js");
        let _map = require("./schemas/"+_schema_filename+".js");

        if( !_data || !_map ) return 'Missing files';

        _cleaned_data = transform.transformMagento1( _data );

        return DataTransform(_cleaned_data, _map).transform();
    },

    getProductMagento2: function(_data_model, _data_filename, _schema_filename ){
        if(!_data_model || !_data_filename || !_schema_filename ) return false

        let _data = require("./data/"+_data_model+"/"+_data_filename+".js");
        let _map = require("./schemas/"+_schema_filename+".js");

        if( !_data || !_map ) return 'Missing files';

        _data = transform.transformMagento2( _data );

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
            }
        ];

        let productVariants = {
            'list': 'list',
            'item' : {
                "sku" : "sku",
                "name" : "title",
                "status" : "status",
                "price" :  "price"
            }
        };

        return DataTransform(_data, _map).transform();
    },

    // TO DO
    getProductShopify: function(_data_model, _data_filename, _schema_filename){
        if(!_data_model || !_data_filename || !_schema_filename ) return false

        const _data = require("./data/"+_data_model+"/"+_data_filename+".js");
        let _map = require("./schemas/"+_schema_filename+".js");

        if( !_data || !_map ) return 'Missing files';

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
            }
        ];

        let productVariants = {
            'list': 'list',
            'item' : {
                "sku" : "sku",
                "name" : "title",
                "status" : "status",
                "price" :  "price"
            }
        };

        return DataTransform(_data, _map).transform();

    }

}