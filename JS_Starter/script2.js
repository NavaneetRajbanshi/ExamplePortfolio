// var grade;

// grade = 48;

// if (grade< 40){
//     console.log('You can not go to next class')
// }else if(grade >= 40 && grade < 48){
//     console.log('try again')
// }else{
//     console.log('You can go to next class')
// }

// var age;

// age = 23;

// if(age <= 18){
//     console.log('He/She cannot enter the cafe');
// }else if(age < 23){
//     console.log('He/She can enter the cafe but cannot drink alcohol');
// }else{
//     console.log('He/She can enter the cafe and can drink alcohol')
// }

// var gradeAlex = (80 + 90 + 95) / 3;
// var gradeSara = (89 + 90 + 98) / 3;
// var gradeNancy = (42 + 98 + 83) / 3;


// console.log('Alex average grade is:', gradeAlex );
// console.log('Sara average grade is:', gradeSara );
// console.log('Nancy average grade is:', gradeNancy );

// if(gradeAlex > gradeSara && gradeAlex > gradeNancy){
//     console.log('Alex has the highest average grade:', gradeAlex);
// }else if(gradeSara > gradeAlex && gradeSara > gradeNancy){
//     console.log('Sara has the highest average grade:', gradeSara);
// }else if(gradeNancy > gradeAlex && gradeNancy > gradeSara){
//     console.log('Nancy has the highest average grade:', gradeNancy);
// }else{
//     console.log('May be there is equal grade');
// }

// var num = 1;

// while (num < 11){
//     console.log(num);
//     num +=2;
// }

// var number = 132;
// while(number <= 148){
//     console.log(number);
//     number +=2;
// }

// var number = 132;
// while(number <= 148){
//     if(number % 2 === 0){
//         console.log(number);
//     }
//     number ++;
// }

// var div = 25;
// while(div <= 100){
//     if(div % 7 === 0){
//         console.log(div);
//     }
//     div ++ ;
// }

// for(var number = 1; number <= 11; number++){
//     console.log(number);
// }

// for(var i = 132; i <= 148; i++){
//     if (i % 2 ==! 0){
//         console.log(i);
//     }
// }

// for(j = 25; j <= 100; j++){
//     if( j % 5 === 0 && j % 7 === 0){
//         console.log(j);
//     }
// }

// function declaration 

// function doSomthing(){
//     console.log('Hello');
//     console.log('Hello');
//     console.log('Hello');
// }
// doSomthing();
// doSomthing();

// function with arguments

// function cube(number){
//     console.log(number * number * number);
// }
// cube(3);

// funtion with return

// function cube(number){
//     return(number * number * number);
// }
// var num = cube(5);

// console.log(num);

// function enterCafe(Age){
//     if(Age < 18){
//         return('You cant enter cafe')
//     }return('You can enter cafe');
// }
// var cafe = enterCafe(14);
// console.log(cafe);

// function substraction (x,y) {
//     return(y - x);
// }
 
// var result = substraction(18, 97);
// console.log(result);

// function isOdd(x){
//     if(x % 2 !== 0){
//         return true;
//     }
//     return false;
// }
// var check = isOdd(17);
// console.log(check);

// function expression 

// var isOdd = function(no){
//     if(no % 2 !== 0) {
//         return true;
//     }
//     return false;
// }

// console.log(isOdd(17));

var addition = function(number){
    var res = 0;
    for(i = 1; i <= number; i ++){
        res = res + i;
    }
    return res;
}
var result = addition(3);
console.log(result);

