var element = [{name:"Hydrogen" , symbol:"H" , atiomicNumber:"1", weight:"1.008", state:"gas", metal:"no"},
              {name:"Helium" , symbol:"HE" , atiomicNumber:"2", weight:"4.0026", state:"gas", metal:"no"},
              {name:"Lithium" , symbol:"LI" , atiomicNumber:"3", weight:"6.94", state:"solid", metal:"Alkali"},
              {name:"Beryllium" , symbol:"BE" , atiomicNumber:"4", weight:"9.0122", state:"solid", metal:"Alkaline"},
              {name:"Boron" , symbol:"B" , atiomicNumber:"5", weight:"10.81", state:"solid", metal:"metalloids"}
            ];
var userName = "HeBeH"
var namearray = [];

for (i = 0; i < userName.length; i+=2){
  console.log(userName[i]);
}

for (i = 0; i < element.length; i+=1){
  var number = userName.indexOf(element[i].symbol)
  if (number >= 0){
    document.write(element[i].name);
  }
}
