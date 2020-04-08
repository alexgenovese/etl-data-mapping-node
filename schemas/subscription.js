const moment = require('moment');

module.exports = {
    "key": "subscription",
    "item" : {
        "plan_id" : "-",
        "user_id" : "-",
        "status" : "status",
        "trial_start" : "trial_start",
        "trial_end" : "trial_end",
        "created_at" : "start_date", 
        "stripe_id": "id",
        "stripe_plan_id": "plan.id",
        "stripe_billing_cycle"  : "billing_cycle_anchor",
        "stripe_collection_method" : "collection_method",
        "stripe_latest_invoice"  : "latest_invoice"
    },
    "operate" : [
        {
            "run" : function(val){
                return moment(val*1000).format()
            },
            "on" : "created_at"
        },
        {
            "run" : function(val){
                return moment(val*1000).format()
            },
            "on" : "stripe_billing_cycle"
        }
    ]
}
