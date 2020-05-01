# Create Class in API folder
1. Class 
2. Create: check model and sanitizing data


var MyObject =
    function(args) {
        // Private
        var help = "/php/index.php?method=getHelp";
        var schedule = "/php/index.php?method=getSchedules";
        var ajax = function(url, callback, type) {
            //....
        }

        // Public
        this.property = 0;
        this.getInfo = function() {
            // ... 
        }

        // Constructor
        function(data) {
           this.property = data;
       }(args);
    };

var o = new MyObject();