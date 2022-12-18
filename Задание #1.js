const userIvanov = function(a){
    a = {
      Name: "Ivan",
      Surname: "Ivanov",
      Age: "18"
    }
    
    for (let key in a){
      console.log(key + ": " + a[key])
    }
  }

userIvanov();