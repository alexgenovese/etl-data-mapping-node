// GET /v1/invoices
const moment = require('moment');

module.exports = {
    "list": "data",
    "item" : {
        "stripe_id": "id",
        "stripe_subscription_id" : "subscription",
        "stripe_amount_due" : "amount_due",
        "stripe_amount_paid" : "amount_paid",
        "stripe_amount_remaining" : "amount_remaining",
        "stripe_subtotal" : "subtotal",
        "stripe_created" : "created",
        "stripe_currency" : "currency",
        "stripe_customer" : "customer",
        "stripe_customer_email" : "customer_email",
        "stripe_status" : "status",
        "stripe_download_invoice_pdf" : "https://pay.stripe.com/invoice/acct_1CeiiCF8JKqNqV06/invst_H2h7sMmy7FRy59XsMsFYEV5JhPMowcW/pdf",
        "stripe_hosted_invoice_url" : "hosted_invoice_url",
        "stripe_tax" : "tax",
        "stripe_tax_percent" : "tax_percent",
        "stripe_total_tax_amounts" : "total_tax_amounts"
    },
    "operate" : [
        {
            "run" : function(val){
                return moment(val*1000).format()
            },
            "on" : "stripe_created"
        },
        {
            "run" : function (val){
                return val/100
            },
            "on" : "stripe_amount_due"
        },
        {
            "run" : function (val){
                return val/100
            },
            "on" : "stripe_amount_paid"
        },
        {
            "run" : function (val){
                return val/100
            },
            "on" : "stripe_subtotal"
        }
    ]
}