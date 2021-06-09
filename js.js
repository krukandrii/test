// let arr = [5, 3, 2, 8, 1]

// function filterRange(mas, a, b){ // вевести елементи від 1 до 4 якщо вони є

//   let results = mas.filter(ma => a < b)
//   console.log(results);

// }

// filterRange(arr, 1, 4)

//  var inp = document.querySelector(".inp")



//   document.querySelector(".btn").addEventListener('click', function(){
//    var val = inp.value
  
//  if (!isNaN(parseFloat(val)) && isFinite(val))
//      console.log("Число!", val);
//  else
//      console.log("Не число!", val);

//   })



// var abcd = {
//   profile: ['ivan', '20', 'Lviv']
// }

// console.log(abcd.profile );


// document.querySelector(".btn").addEventListener('click', function(){

//   var name = document.querySelector(".inp_name").value
//   var age = document.querySelector(".inp_age").value
//   var location = document.querySelector(".inp_location").value

//   var result = [name, age, location]

//   abcd.profile = result
  
//   console.log(result);

// })






let carName = 'ford'

let carYear = 2012

let date = new Date

let personYear = 1995


function age(birthday){

  let currentYear = date.getFullYear()
  let result = currentYear - birthday 

  return result

}

function showResult(year){

  if( age(year)  >= 10 ){

    console.log("старше 10 років");
  
  }
  
  else {
  
    console.log("молодша 10 років");
  }

}

showResult(carYear)
showResult(personYear)





