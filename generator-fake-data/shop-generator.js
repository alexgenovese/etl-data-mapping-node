// https://www.json-generator.com/#


[
  '{{repeat(200, 7)}}',
  {
    _id: '{{objectId()}}',
    store_id: '{{integer("10000","1000000")}}',
    name: '{{company()}}',
    domain: 'www.{{random("siteA", "siteB", "siteC")}}.com',
    type: '{{random("shopify", "magento2", "magento19")}}',
    address1: '{{street()}}',
    address2: '{{street()}}',
    zip: '{{integer("1212", "8467322")}}',
    city: '{{city()}}',
    locale: '{{random("it", "en", "es", "de", "fr")}}',
    province: '{{city()}}',
    country: '{{country()}}',
    currency: '{{random("EUR","USD", "GBP")}}',
    iana_timezone: '{{random("America/New_York", "Europe/Rome", "America/St_Thomas", "Europe/Amsterdam", "Europe/Budapest")}}'
  }
]