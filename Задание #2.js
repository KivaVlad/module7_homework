function hasProp(object, keyname){
    return (keyname in object);
  }
  
  const car1 = {
    name: "Ford",
    maxSpeed: "250",
    color: "blue"
  }
  
console.log(hasProp(car1, "name"));
console.log(hasProp(car1, "minSpeed"));