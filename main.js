
var users = [];

var firstNames = ['January', 'February', 'March','An','Thuy','Hoang','Khang','My','Hoang','Ny',
'January', 'February', 'March','An','Thuy','Hoang','Khang','My','Hoang','Ny','January', 
'February', 'March','An','Thuy','Hoang','Khang','My','Hoang','Ny',
'January', 'February', 'March','An','Thuy','Hoang','Khang','My','Hoang','Ny'];

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


for(let i = 0; i < 40; i++) {
    let id = Date.now() + ( (Math.random()*100000).toFixed());
    let firstname = randomItem(firstNames); 
    let lastname = randomItem(lastNames);
    let gender = randomItem(genders);
    let age = randomAge(20,40);
    let birthDay = randomDate(new Date(1980, 0, 1), new Date());

    
    let user = {
        'id': id,
        'firstname': firstname,
        'lastname': lastname,
        'age': age,
        'gender': gender,
        'birthday': birthDay,
    };

    users.push(user);
}

console.log(users);
// Change the first name of the user at position 3 to Smith
    let Location = users[2];
    console.log(Location);
    Location.firstname = "Smith";
    console.log(Location);


//List all people in the list has full name (first name + last name) contains “an” (case insensitive)?
let fullname = users.filter((f) => {
        return (f.firstname === "An" ) || (f.lastname === "An" )
    })
console.log(fullname);


//List all people in the list aged from 25 to 33, 38 and gender is male?

var aged = users.filter((f) =>  (f.age === 38 && f.gender === "male") ||
 ( (f.age >= 25) && (f.age <=33) &&(f.gender ==='male') ))
console.log(aged);

//  List all the people in the list has first name start with “s” and end with “h”. (Use regular expression)
var useFirstname = users.filter(function(f){
    const str = f.firstname;
    return (str.toLowerCase().charAt(0)==='s' && str.toLowerCase().charAt(str.length - 1)==='h')
}) ;
console.log("useFirstname",useFirstname );

//Remove all the people aged greater than 35
users = users.filter(function(returnableObjects){
    return returnableObjects.age < 35 
});
       
console.log("users",users)



//Add new 2 random users to first/last in current list (one first, one last)
