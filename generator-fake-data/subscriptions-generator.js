// https://www.json-generator.com/#


[
  '{{repeat(200, 7)}}',
  {
    _id: '{{objectId()}}',
    plan_id: '{{random("PROFESSIONAL","ENTERPRISE","CORE")}}',
    user_id: 'cus_{{objectId()}}',
    status: '{{bool()}}',
    trial_start: '{{date(new Date(2019, 12, 30), new Date(2020, 5, 30), "ISODateTimeTZ")}}',
    trial_end: '{{date(new Date(2019, 12, 30), new Date(2020, 5, 30), "ISODateTimeTZ")}}',
    created_at: '{{date(new Date(2019, 12, 30), new Date(2020, 5, 30), "ISODateTimeTZ")}}',
    stripe_customer_id: 'cus_{{objectId()}}',
    stripe_id: 'su_{{objectId()}}',
    stripe_plan_id: '{{random("PRO-PLAN", "CORE", "plan_H2IgznInHDRfEr")}}',
    stripe_billing_cycle: '{{date(new Date(2019, 12, 30), new Date(2020, 5, 30), "ISODateTimeTZ")}}',
    collection_method: 'charge_automatically',
    stripe_latest_invoice: 'in_{{guid()}}'   
  }
]