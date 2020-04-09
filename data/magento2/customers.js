/*

GET /V1/customers/search

Retrieve customers which match a specified criteria. This call returns an array of objects, 
but detailed information about each object’s attributes might not be included. 
See http://devdocs.magento.com/codelinks/attributes.html#CustomerRepositoryInterface to determine 
which call to use to get detailed information about all attributes for an object.

*/

module.exports = {
    "items": [
        {
            "id": 0,
            "group_id": 0,
            "default_billing": "string",
            "default_shipping": "string",
            "confirmation": "string",
            "created_at": "2012-03-22 14:15:54",
            "updated_at": "string",
            "created_in": "string",
            "dob": "string",
            "email": "string",
            "firstname": "string",
            "lastname": "string",
            "middlename": "string",
            "prefix": "string",
            "suffix": "string",
            "gender": 0,
            "store_id": 0,
            "taxvat": "string",
            "website_id": 0,
            "addresses": [
                {
                    "id": 0,
                    "customer_id": 0,
                    "region": {
                        "region_code": "string",
                        "region": "string",
                        "region_id": 0,
                        "extension_attributes": {}
                    },
                    "region_id": 0,
                    "country_id": "string",
                    "street": [
                        "string"
                    ],
                    "company": "string",
                    "telephone": "string",
                    "fax": "string",
                    "postcode": "string",
                    "city": "string",
                    "firstname": "string",
                    "lastname": "string",
                    "middlename": "string",
                    "prefix": "string",
                    "suffix": "string",
                    "vat_id": "string",
                    "default_shipping": true,
                    "default_billing": true,
                    "extension_attributes": {},
                    "custom_attributes": [
                        {
                            "attribute_code": "string",
                            "value": "string"
                        }
                    ]
                }
            ],
            "disable_auto_group_change": 0,
            "extension_attributes": {
                "company_attributes": {
                    "customer_id": 0,
                    "company_id": 0,
                    "job_title": "string",
                    "status": 0,
                    "telephone": "string",
                    "extension_attributes": {}
                },
                "is_subscribed": true,
                "amazon_id": "string",
                "vertex_customer_code": "string"
            },
            "custom_attributes": [
                {
                    "attribute_code": "string",
                    "value": "string"
                }
            ]
        }
    ],
    "search_criteria": {
        "filter_groups": [
            {
                "filters": [
                    {
                        "field": "string",
                        "value": "string",
                        "condition_type": "string"
                    }
                ]
            }
        ],
        "sort_orders": [
            {
                "field": "string",
                "direction": "string"
            }
        ],
        "page_size": 0,
        "current_page": 0
    },
    "total_count": 0
};