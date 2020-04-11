// https://www.json-generator.com/#


[
  '{{repeat(400, 7)}}',
  {
    _id: '{{objectId()}}',
    external_id: '{{objectId()}}',
    external_customer_id: '{{objectId()}}',
    email: '{{email()}}',
    first_name: '{{firstName()}}',
    last_name: '{{surname()}}',
    currency: '{{random("EUR", "USD", "GBP")}}',
    total_price: '{{floating("23,22", "4999", "4", "0.00")}}',
    subtotal_price: '{{floating("23,22", "4999", "4", "0.00")}}',
    total_discounts: '{{floating("2", "499", "4", "0.00")}}',
    products: function (tags, index) { return [{ product_id: 'aisuhasiduchasdc', sku: 'asdcasdcsadc', name: 'Prodcut Name', price: "21,12" }, { product_id: 'aisuhasiduchasdc', sku: 'asdcasdcsadc', name: 'Prodcut Name', price: "21,12" }] },
    created_at: '{{date(new Date(2020, 1, 1), new Date(2020, 8, 30), "ISODateTimeTZ")}}'
  }
]