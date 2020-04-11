// https://www.json-generator.com/#

[
  '{{repeat(200, 7)}}',
  {
    _id: '{{objectId()}}',
    name: '{{random("Core plan", "Professional plan", "Enterprise plan")}}',
    stripe_id: 'plan_{{random("CORE", "PRO", "ENTERPRISE")}}',
    stripe_product_id: 'prod_{{objectId()}}',
    stripe_status: '{{bool()}}',
    stripe_amount: '{{integer("199", "499")}}',
    stripe_currency: '{{random("EUR", "USD", "GBP")}}',
    stripe_interval: 'month',
    stripe_trial_days: '{{integer("0", "14")}}'
  }
]