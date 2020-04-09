// GET /v1/plans

module.exports = {
    "key": "subscription",
    "item" : {
        "name" : "plan.nickname",
        "stripe_id": "plan.id",
        "stripe_product_id" : "plan.product",
        "stripe_status" : "plan.active",
        "stripe_amount" : "plan.amount",
        "stripe_currency" : "plan.currency",
        "stripe_interval" : "plan.interval",
        "stripe_trial_days" : "plan.trial_period_days"
    },
    "operate" : [
        {
            "run" : function(val){
                return val/100
            },
            "on" : "stripe_amount"
        }
    ]
}