// https://www.json-generator.com/#


[
  '{{repeat(200, 7)}}',
  {
    _id: '{{objectId()}}',
    name: '{{random("T-Shirt", "Pantaloni", "Jeans", "Scarpe", "Bracciale", "Orologio", "Portafoglio")}}',
    description: '{{lorem("10")}}',
    status: '{{bool()}}',
    product_type: '{{bool()}}',
    created_at: '{{date(new Date(2019, 1, 30), new Date(2019, 12, 30), "ISODateTimeTZ")}}',
    updated_at: '{{date(new Date(2020, 1, 1), new Date(2020, 8, 30), "ISODateTimeTZ")}}',
    image_url: 'https://{{random("image1", "image2", "image3", "image4", "image5")}}.jpeg',
    variants: function (tags, index) { return [{ product_id: 'aisuhasiduchasdc', sku: 'asdcasdcsadc', name: 'Prodcut Name', price: "21,12" }, { product_id: 'aisuhasiduchasdc', sku: 'asdcasdcsadc', name: 'Prodcut Name', price: "21,12" }] }
  }
]