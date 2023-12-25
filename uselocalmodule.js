var module1 =require("./localmodule1")
var module2=require("./localmodule2")
var module3=require("./localmodule3")
var module4=require("./localmodule4")



module1.Msg("simple message ! ")
module1.Add(20,30)

module2.sum(10,20)
module2.sub(10,20)
module2.mul(10,20)
module2.div(10,20)

console.log(module3)

module4.areaOfCircle(10)
module4.areaOfCylinder(10,10)