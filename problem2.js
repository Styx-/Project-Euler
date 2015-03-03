//Project Euler Problem 2
var total = 0;
var j = 1;

for(var i = 0; i < 100; i += (i+j)){
	console.log(i);
j = i;
}

var total = 0;
var i1 = 0;
var i2 = 1;

for(var i = 0; i < 4000000; i = (i1 + i2)){
   console.log(i);
   if(i % 2){
       total += i;
   }
   i1 = i2;
   i2 = i;
}
console.log(total);