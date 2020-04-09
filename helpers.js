const DataTransform = require("node-json-transform").DataTransform
const transform = require('./transform')
const moment = require('moment')

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

        _cleaned_data = transform.transformProductMagento1( _data );

        _map['operate'] = [
            {
                'run': function(val) {
                    return (val === '1') ? true : false
                },
                'on' : 'status'
            }
        ];

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

        let _data = require("./data/"+_data_model+"/"+_data_filename+".js")
        let _map = require("./schemas/"+_schema_filename+".js")

        if( !_data || !_map ) return 'Missing files'

        _data = transform.transformProductMagento2( _data )

        _map['operate'] = [
            {
                'run': function(ary) { 
                    return DataTransform({list:ary}, productVariants).transform()
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

        return DataTransform(_data, _map).transform()
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

        let _data = require("./data/"+_data_model+"/"+_data_filename+".js")
        let _map = require("./schemas/"+_schema_filename+".js")

        if( !_data || !_map ) return 'Missing files'

        _data = transform.transformProductShopify( _data )

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

        return DataTransform(_data, _map).transform()

    },

        /**
     * 
     * @param {String} _data_model 
     * @param {String} _data_filename 
     * @param {String} _schema_filename 
     * 
     * @output {Object}
     */
    getCustomerMagento1: function( _data_model, _data_filename, _schema_filename ){
        if(!_data_model || !_data_filename || !_schema_filename ) return false

        let _data = require("./data/"+_data_model+"/"+_data_filename+".js")
        let _map = require("./schemas/"+_schema_filename+".js")

        if( !_data || !_map ) return 'Missing files'

        _data = transform.transformCustomerMagento1( _data )

        _map['operate'] = [
            {
                'run' : function(val){
                    return (val === '1') ? 'male' : 'female'
                },
                'on' : 'gender'
            },
            {
                'run' : function(val){
                    return 'no data'
                },
                'on' : 'accepts_marketing'
            },
            {
                'run' : function(val){
                    return true
                },
                'on' : 'status'
            },
            {
                'run' : function(val){
                    return moment(val).format()
                },
                'on' : 'created_at'
            }
        ]

        return DataTransform(_data, _map).transform()
    },

    /**
     * 
     * @param {String} _data_model 
     * @param {String} _data_filename 
     * @param {String} _schema_filename 
     * 
     * @output {Object}
     */
    getCustomerMagento2: function( _data_model, _data_filename, _schema_filename ){
        if(!_data_model || !_data_filename || !_schema_filename ) return false

        let _data = require("./data/"+_data_model+"/"+_data_filename+".js")
        let _map = require("./schemas/"+_schema_filename+".js")

        if( !_data || !_map ) return 'Missing files'

        _data = transform.transformCustomerMagento2( _data )

        _map['operate'] = [
            {
                'run' : function(val){
                    return true
                },
                'on' : 'status'
            },
            {
                'run' : function(val){
                    return 'no data'
                },
                'on' : 'accepts_marketing'
            },
            {
                'run': function(ary) { 
                    // check is default address
                    let _temp_address = { 'address': {} }
                    let _key = null;
                    ary.forEach(function(val, key){
                        if(val.default_shipping){
                            _key = key
                        }
                    })
                    _temp_address.address = ary[_key]

                    if(!_temp_address || _temp_address == null || _temp_address == undefined) new Error('Helpers.js - No Addresses found in Magento 2 json')
                    return DataTransform(_temp_address, address).transform();
                }, 
                'on': 'address'
            },
            {
                'run' : function(val){
                    console.log('Date: ', val)
                    return moment(val).format()
                },
                'on' : 'created_at'
            }
        ]

        let address = {
            'key': 'address',
            'item' : {
                "first_name": "firstname",
                "last_name": "lastname",
                "company": "company",
                "address1": "street",
                "address2": "address2",
                "city": "city",
                "country": "country_id",
                "postcode": "postcode",
                "phone": "telephone",
                "province": "region.region",
                "province_code": "region.region_code",
                "country_code": "country_id",
                "country_name": ""
            }
        }
        
        return DataTransform(_data, _map).transform()

    },

    /**
     * 
     * @param {String} _data_model 
     * @param {String} _data_filename 
     * @param {String} _schema_filename 
     * 
     * @output {Object}
     */
    getCustomerShopify: function( _data_model, _data_filename, _schema_filename ){
        if(!_data_model || !_data_filename || !_schema_filename ) return false

        let _data = require("./data/"+_data_model+"/"+_data_filename+".js")
        let _map = require("./schemas/"+_schema_filename+".js")

        if( !_data || !_map ) return 'Missing files'

        _data = transform.transformCustomerShopify( _data )

        _map['operate'] = [
            {
                'run' : function(val){
                    return true
                },
                'on' : 'status'
            },
            {
                'run': function(ary) { 
                    return DataTransform({list:ary}, address).transform()
                }, 
                'on': 'address'
            }
        ]

        let address = {
            'key': 'address',
            'item' : {
                "first_name": "first_name",
                "last_name": "last_name",
                "company": "company",
                "address1": "address1",
                "address2": "address2",
                "city": "city",
                "country": "country",
                "postcode": "zip",
                "phone": "phone",
                "province": "province",
                "province_code": "province_code",
                "country_code": "country_code",
                "country_name": "country_name"
            }
        }

        return DataTransform(_data, _map).transform()

    }


}