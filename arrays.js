
//Find the largest value(70)
var a = [5, 7, 9, 15, 70, 8];
var max = 0;

a.forEach (function (e){
  if (e > max)
  {return(max = e);}
  console.log(max);
});


________________________
//find the lowest value (5)
var a = [5, 7, 9, 15, 70, 8];
var min = Infinity;

a.forEach (function (e){
  if (e < min)
  {return(min = e);}
  console.log(min);
});

_______________________
//Find the number that is closest to 0 (-1) - This turns all numbers to positive - Not really the best practice.
var a = [5, -7, 9, -15, 70, 8, -1];
var smallest = Infinity;

var b = a.map(function(e){
  if (e < 0)
  {return e* -1}
else{
  return (e);
}
});

b.forEach(function (e){
  if (e < smallest)
  {return(smallest = e);}

});
console.log(smallest);

--------------------------
//Find the number closest to 0 - this uses absolute value and thus returns the real number (-1)
var a = [5, -7, 9, -15, 70, 8, -1];
var smallest = 100;

for (var i=0; i<a.length; i++){
  if (Math.abs(a[i])<Math.abs(smallest))
  {(smallest=a[i])}
};console.log(smallest);

______________________________
//Find the sum of the array
var a = [5, 7, 9, 15, 70, 8];
var sum=0;

a.forEach(function(e){sum = sum + e;});

_______________________________
//Find the mean of the array
var a = [5, -7, 9, -15, 70, 8, -1];
var sum=0;

a.forEach(function(e){sum = sum + e;});
sum/a.length;

____________________________
//Find the index of the highest number(70) index position[4]
var a = [6, 70, 9, -15, 70, -8, 1];
var max = a[0];

a.forEach(function(e){
  if (e > max)
  {return(max = e);}
});
console.log(a.indexOf(max));
________________________________
