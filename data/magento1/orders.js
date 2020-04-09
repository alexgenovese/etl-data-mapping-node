/*

GET /orders
Authentication: Admin, Customer, Guest
Description: Allows you to retrieve the list of existing orders. Each order contains the following information: general order information, information on ordered items, order comments, and order addresses (both billing and shipping).
The list of attributes that will be returned for the order is configured in the Magento Admin Panel.
https://devdocs.magento.com/guides/m1x/api/rest/Resources/Orders/sales_orders.html#RESTAPI-Resource-SalesOrders-HTTPMethod-GET-orders

*/

module.exports = {
    "data_item_1": {
        "customer_id": "3",
        "base_discount_amount": "0.0000",
        "base_shipping_amount": "455.0000",
        "base_shipping_tax_amount": "0.0000",
        "base_subtotal": "13650.0000",
        "base_tax_amount": "0.0000",
        "base_total_paid": [],
        "base_total_refunded": [],
        "tax_amount": "0.0000",
        "total_paid": [],
        "total_refunded": [],
        "base_shipping_discount_amount": "0.0000",
        "base_subtotal_incl_tax": "13650.0000",
        "base_total_due": "14105.0000",
        "total_due": "14105.0000",
        "base_currency_code": "USD",
        "tax_name": [],
        "tax_rate": [],
        "addresses": [
            {
                "region": "Palau",
                "postcode": "19103",
                "lastname": "Doe",
                "street": "2356 Jody Road Philadelphia, PA 19103",
                "city": "PA",
                "telephone": "610-634-1181",
                "country_id": "US",
                "firstname": "John",
                "address_type": "billing",
                "prefix": [],
                "middlename": [],
                "suffix": [],
                "company": []
            },
            {
                "region": "Palau",
                "postcode": "19103",
                "lastname": "Doe",
                "street": "2356 Jody Road Philadelphia, PA 19103",
                "city": "PA",
                "telephone": "610-634-1181",
                "country_id": "US",
                "firstname": "John",
                "address_type": "shipping",
                "prefix": [],
                "middlename": [],
                "suffix": [],
                "company": []
            }
        ],
        "order_items": {
            "data_item": {
                "sku": "Sunglasses_1",
                "price": "150.0000",
                "base_price": "150.0000",
                "base_original_price": "150.0000",
                "tax_percent": "0.0000",
                "tax_amount": "0.0000",
                "base_tax_amount": "0.0000",
                "base_discount_amount": "0.0000",
                "base_row_total": "13650.0000",
                "base_price_incl_tax": "150.0000",
                "base_row_total_incl_tax": "13650.0000"
            }
        }
    },
    "data_item_2": {
        "customer_id": "3",
        "base_discount_amount": "0.0000",
        "base_shipping_amount": "95.0000",
        "base_shipping_tax_amount": "0.0000",
        "base_subtotal": "3350.0000",
        "base_tax_amount": "0.0000",
        "base_total_paid": "2445.0000",
        "base_total_refunded": "1845.0000",
        "tax_amount": "0.0000",
        "total_paid": "2445.0000",
        "total_refunded": "1845.0000",
        "base_shipping_discount_amount": "0.0000",
        "base_subtotal_incl_tax": "3350.0000",
        "base_total_due": "1000.0000",
        "total_due": "1000.0000",
        "base_currency_code": "USD",
        "tax_name": [],
        "tax_rate": [],
        "addresses": [
            {
                "region": "Palau",
                "postcode": "19103",
                "lastname": "Doe",
                "street": "2356 Jody Road Philadelphia, PA 19103",
                "city": "PA",
                "telephone": "610-634-1181",
                "country_id": "US",
                "firstname": "John",
                "address_type": "billing",
                "prefix": [],
                "middlename": [],
                "suffix": [],
                "company": []
            },
            {
                "region": "Palau",
                "postcode": "19103",
                "lastname": "Doe",
                "street": "2356 Jody Road Philadelphia, PA 19103",
                "city": "PA",
                "telephone": "610-634-1181",
                "country_id": "US",
                "firstname": "John",
                "address_type": "shipping",
                "prefix": [],
                "middlename": [],
                "suffix": [],
                "company": []
            }
        ],
        "order_items": [
            {
                "sku": "Sunglasses_1",
                "price": "150.0000",
                "base_price": "150.0000",
                "base_original_price": "150.0000",
                "tax_percent": "0.0000",
                "tax_amount": "0.0000",
                "base_tax_amount": "0.0000",
                "base_discount_amount": "0.0000",
                "base_row_total": "1350.0000",
                "base_price_incl_tax": "150.0000",
                "base_row_total_incl_tax": "1350.0000"
            },
            {
                "sku": "Sun_glasses",
                "price": "200.0000",
                "base_price": "200.0000",
                "base_original_price": "200.0000",
                "tax_percent": "0.0000",
                "tax_amount": "0.0000",
                "base_tax_amount": "0.0000",
                "base_discount_amount": "0.0000",
                "base_row_total": "2000.0000",
                "base_price_incl_tax": "200.0000",
                "base_row_total_incl_tax": "2000.0000"
            }
        ]
    }
}
