//Project Euler Problem 1
var total = 0;

for(var i = 1000;i > 0;i--){
    if((i % 3 === 0)||(i % 5 === 0)){
        console.log(i);    
    }
    total += i;

}
console.log(total);