
module.exports.areaOfCircle=function(r){

     let area=3.1415962*(r*r);

     console.log("Area of Circle : ",area);
}
module.exports.areaOfCylinder=(r,h)=>{
     let pi=3.1415962;
     let area=(2*pi*r*h)+(2*pi*(r*r));
     console.log("Area of Cylinder : ",area);
}
