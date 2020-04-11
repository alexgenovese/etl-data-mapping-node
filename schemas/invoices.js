// GET /v1/invoices
const moment = require('moment');

module.exports = {
    "list": "data",
    "item" : {
        "stripe_id": "id",
        "stripe_subscription_id" : "subscription",
        "stripe_amount_due" : "amount_due",
        "stripe_amount_paid" : "amount_paid",
        "stripe_created" : "created",
        "stripe_currency" : "currency",
        "stripe_customer" : "customer",
        "stripe_customer_email" : "customer_email",
        "stripe_status" : "status",
        "stripe_download_invoice_pdf" : "hosted_invoice_url",
        "stripe_hosted_invoice_url" : "invoice_pdf",
        "stripe_tax" : "tax",
        "stripe_tax_percent" : "tax_percent"
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
        }
    ]
}