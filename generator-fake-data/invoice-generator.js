// https://www.json-generator.com/#

[
  '{{repeat(300, 7)}}',
  {
    _id: '{{objectId()}}',
    plan_id: 'plan_{{objectId()}}',
    stripe_subscription_id: 'sub_{{objectId()}}',
    stripe_amount_due: '{{integer("199", "499")}}',
    stripe_amount_paid: '{{integer("199", "499")}}',
    stripe_amount_remaining: 0,
    stripe_created: '{{date(new Date(2019, 12, 30), new Date(2020, 5, 30), "ISODateTimeTZ")}}',
    stripe_currency: 'eur',
    stripe_customer: 'cus_{{objectId()}}',
    stripe_customer_email: '{{email()}}',
    stripe_status: '{{bool()}}',
    stripe_download_invoice_pdf: 'https://pay.stripe.com/invoice/acct_1CeiiCF8JKqNqV06/invst_H2h7sMmy7FRy59XsMsFYEV5JhPMowcW',
    stripe_hosted_invoice_url: 'https://pay.stripe.com/invoice/acct_1CeiiCF8JKqNqV06/invst_H2h7sMmy7FRy59XsMsFYEV5JhPMowcW/pdf',
    stripe_tax: '{{integer("2","22")}}',
    stripe_tax_percent: '{{integer("2","22")}}'
  }
]