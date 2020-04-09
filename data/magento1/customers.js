/*

GET /customers

Authentication: Admin
URL Structure: http://magentohost/api/rest/customers
Description: Allows you to retrieve the list of existing customers.
Notes:: Only Admin user can retrieve the list of customers with all their attributes.
https://devdocs.magento.com/guides/m1x/api/rest/Resources/resource_customers.html#RESTAPI-Resource-Customers-HTTPMethod-GET-customers

*/

module.exports = {
    "2": {
        "entity_id": "2",
        "website_id": "1",
        "email": "test@example.com",
        "group_id": "1",
        "created_at": "2012-03-22 14:15:54",
        "disable_auto_group_change": "1",
        "firstname": "john",
        "lastname": "Doe",
        "created_in": "Admin",
        "prefix": null,
        "suffix": null,
        "taxvat": null,
        "dob": "2001-01-03 00:00:00",
        "reward_update_notification": "1",
        "reward_warning_notification": "1",
        "gender": "1"
    },
    "4": {
        "entity_id": "4",
        "website_id": "1",
        "email": "earl@example.com",
        "group_id": "1",
        "created_at": "2013-03-28 18:59:41",
        "disable_auto_group_change": "0",
        "firstname": "Earl",
        "lastname": "Hickey",
        "created_in": "Admin",
        "prefix": null,
        "suffix": null,
        "taxvat": null,
        "dob": "2012-03-28 13:54:04",
        "reward_update_notification": "1",
        "reward_warning_notification": "1",
        "gender": "1"
    }
};