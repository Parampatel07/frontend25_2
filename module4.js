class person {
     constructor(name, age, gender) {
          this.name = name;
          this.age = age;
          this.gender = gender;
     }

     getInfo() {
          console.log("Name is " + this.name + " age is " + this.age + " gender is " + this.gender);
     }
}

module.exports.person = person ;
// export = person ; 