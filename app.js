let age=32;
let userName='phillip';
let hobbies = ['sports', 'cooking','reading'];
let job = { 
    title : 'Dev', 
    place : 'busan', 
    salary : 50000 
};

let totalAdultYears;

function calculateAdultYears(userAge) {
    return userAge - 18;
}


totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);

age = 45;
alert(adultYears);


let person ={
    name : 'Max', //속성
    greet() { // 메소드
        console.log('hello');
    }
};

person.greet();
