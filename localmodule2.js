var arithmeticFunction={
     sum:function(a,b){

          console.log("Addtion : ",(a+b));
     },
     sub:function(a,b)
     {
          if(a>b)
        {
          console.log("subtraction : ",(a-b));
        }
        else
        {
          console.log("subtraction : ",(b-a));
        }   
     },
     mul:function(a,b)
     {
          console.log("multiplication : ",(a*b));
          
     },
     div:function(a,b)
     {
        if(a>b)
        {
          console.log("Divistion : ",(a/b));
        }
        else
        {
          console.log("Divistion : ",(b/a));
        }
          
     },
};

module.exports =arithmeticFunction;