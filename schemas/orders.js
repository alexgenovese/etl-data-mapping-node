// GET /v1/orders

module.exports = {
    "list": "orders",
    "item": {
        "external_id" : "id",
        "external_customer_id" : "customer_id",
        "email" : "email",
        "first_name" : "firstname",
        "last_name" : "lastname",
        "currency" : "currency",
        "total_price" : "total_price",
        "subtotal_price" : "subtotal_price",
        "total_discounts" : "total_discounts",
        "products" : "line_items",
        "created_at" : "created_at"
    }
}