/*
giới thiệu một số hàm built-in
    1.alert
    2.console
    3.confirm
    4.prompt
    5.set timeout
    5. set interval

    */

    // setTimeout(function(){
    //     alert('thong bao');
    // },1000)

    // setInterval(function(){
    //     console.log('day la tong' + Math.random())
    // },1000)
    


    /// function 
    // tham so trong hàm function 
    // function writeLog (){
    //     var myString = '';
    //     for(var param of arguments){
    //         myString+= `${param} - `
    //     }
    //     console.log(myString);
    // }
    // writeLog('log1', 'log2');


    // id, tên, họ, ngày sinh, giới tính

    
//     let Array1 = [
//         {id: '1',first_name: 'Mai',last_name: 'Nguyen',age: 20, gender: 'male'},
//         {id: '2',first_name: 'Lan',last_name: 'Nguyen',age: 20,gender: 'female'},
//         {id: '3',first_name: 'Hoa',last_name: 'Hoang',age: 20, gender: 'female' },
//         {id: '4',first_name: 'Lan',last_name: 'Tran',age: 40, gender: 'female'},
//         {id: '5',first_name: 'Kien',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '6',first_name: 'Hoang',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '7',first_name: 'Cuong',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '8',first_name: 'An',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '9',first_name: 'Cuong',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '10',first_name: 'An',last_name: 'Nguyen',age: 30, gender: 'female'},
//         {id: '11',first_name: 'Cuong',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '12',first_name: 'Mai',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '13',first_name: 'Cuong',last_name: 'Tran',age: 35, gender: 'female'},
//         {id: '14',first_name: 'Lien',last_name: 'Tran',age: 28, gender: 'female'},
//         {id: '15',first_name: 'Nghia',last_name: 'Tran',age: 29, gender: 'female'},
//         {id: '16',first_name: 'Khanh',last_name: 'Tran',age: 30, gender: 'female'},
//         {id: '17',first_name: 'Hao',last_name: 'Tran',age: 25, gender: 'female'},
//         {id: '18',first_name: 'Cuong',last_name: 'Tran',age: 33, gender: 'female'},
//         {id: '19',first_name: 'Cuong',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '20',first_name: 'Cuong',last_name: 'Tran',age: 27, gender: 'female'},
//         {id: '21',first_name: 'Ly',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '22',first_name: 'Cuong',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '23',first_name: 'Nga',last_name: 'Tran',age: 29, gender: 'female'},
//         {id: '24',first_name: 'Cuong',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '25',first_name: 'Huy',last_name: 'Tran',age: 31, gender: 'female'},
//         {id: '26',first_name: 'An',last_name: 'Duong',age: 33, gender: 'male'},
//         {id: '27',first_name: 'Cuong',last_name: 'Tran',age: 21, gender: 'female'},
//         {id: '28',first_name: 'Cuong',last_name: 'Tran',age: 22, gender: 'male'},
//         {id: '29',first_name: 'My',last_name: 'Tran',age: 23, gender: 'male'},
//         {id: '30',first_name: 'Cuong',last_name: 'Tran',age: 24, gender: 'male'},
//         {id: '31',first_name: 'Ni',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '32',first_name: 'Duong',last_name: 'Tran',age: 25, gender: 'male'},
//         {id: '33',first_name: 'Trinh',last_name: 'Tran',age: 25, gender: 'male'},
//         {id: '34',first_name: 'Mi',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '35',first_name: 'Cuong',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '36',first_name: 'Lan',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '37',first_name: 'Y',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '38',first_name: 'Mien',last_name: 'Tran',age: 38, gender: 'male'},
//         {id: '39',first_name: 'Cuong',last_name: 'Tran',age: 20, gender: 'female'},
//         {id: '40',first_name: 'Hoan',last_name: 'An',age: 20, gender: 'female'},
//     ];
// console.log(Array1);

    

// //List all people in the list has full name (first name + last name) contains "an" (case insensitive)?
// var fullname = Array1.filter(function(f) {
//     return (f.first_name === "An" ) || (f.last_name === "An" );
// })
// console.log(fullname);
// //List all people in the list aged from 25 to 33, 38 and gender is male?

// var aged = Array1.filter((f) =>  (f.age === 38 && f.gender === "male") || ( (f.age >= 25) && (f.age <=33) &&(f.gender ==='male') ))
// console.log(aged);
// ID

var users = [];

var firstNames = ['January', 'February', 'March','An','Thuy','Hoang','Khang','My','Hoang','Ny',
'January', 'February', 'March','An','Thuy','Hoang','Khang','My','Hoang','Ny','January', 
'February', 'March','An','Thuy','Hoang','Khang','My','Hoang','Ny',
'January', 'February', 'March','An','Thuy','Hoang','Khang','My','Hoang','Ny'];
// function random_firstName(array_firstname) {
//      return array_firstname[Math.floor(Math.random() * array_firstname.length)]
// }

 //console.log(random_firstName(first_name));
// LAST NAME
var lastNames = ['Nguyen','Hoang','An','Ha','Le','Mai','Kim','Duong','Huynh','Su',
'Nguyen','Hoang','An','Ha','Le','Mai','Kim','Duong','Huynh','Su',
'Nguyen','Hoang','An','Ha','Le','Mai','Kim','Duong','Huynh','Su',
'Nguyen','Hoang','An','Ha','Le','Mai','Kim','Duong','Huynh','Su'];

var genders = ['male', 'female'];

function randomItem(array){
    return array[Math.floor(Math.random()*array.length)];
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function randomAge(a, b) {
        return Math.floor(Math.random() * (b - a) + a);
    }
   // console.log( randomAge(20,40));
  
  //console.log(randomDate(new Date(2012, 0, 1), new Date()));

for(let i = 0; i < 40; i++) {
    let id = Date.now() + ( (Math.random()*100000).toFixed());
    let fullname = randomItem(firstNames) + ' ' + randomItem(lastNames);
    
    let gender = randomItem(genders);
    let age = randomAge(20,40);
    let birthDay = randomDate(new Date(1980, 0, 1), new Date());

    
    let user = {
        'id': id,
        'fullname': fullname,
        'age': age,
        'gender': gender,
        'birthday': birthDay,
    };

    users.push(user);
}

console.log(users);

// function getUniqueID(){
//     for(var i = 0; i<=40; i++)
//       console.log(Date.now() + ( (Math.random()*100000).toFixed()));
      
// }
// getUniqueID();

// // FIRST NAME


// console.log(random_lastName(last_name) +' '+ random_firstName(first_name));

// // AGE
// function randomAge(a, b) {
//     return Math.floor(Math.random() * (b - a) + a);
// }
// console.log( randomAge(1,40));
// // gender
// function randomGender(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;  
// }
// console.log(randomGender(0,1));

// user = {id : }
