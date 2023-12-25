
function message(msg)
{
     console.log("Message : ",msg);
}

var add=(num1,num2)=>
{
     console.log("Addtion : ",(num1+num2));
}
module.exports.Msg=message;
module.exports.Add=add;