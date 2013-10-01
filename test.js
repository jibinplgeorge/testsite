/* du - debug utils */
var du = {  
    /* setup */
     debug : true,
     outputType:  "console",    
    /* wrapper function */
     echo : function(str, output) {  
        outputType =  (typeof output == 'undefined') ? this.outputType : output;
        if(this.debug) {
            this[outputType](str);
        }
     },  
    /* custom output methods */    
     alert : function(str) {  
         alert(str);  
     },  
     console : function(str) {  
        if (window.console && window.console.firebug) {
            console.log(str);
        }
     }  
}

 
/* Usage example */    
    
du.echo("Log this to defautt output"); // default output used
du.echo("Log this message to 'alert' output", "alert"); 
