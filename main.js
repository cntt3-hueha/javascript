
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

