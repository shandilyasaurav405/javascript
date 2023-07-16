// console.log(2 >1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 ==1);
// console.log(2!=1);


console.log("2" > 1);
console.log("02" > 1);
//in the above line we compare only same data type for good and readable code.

console.log(null > 0); //this type of comparison is avoided by programmer
console.log(null == 0); 
console.log(null >= 0);

/*the reason is that an equality check == and comparisons >< >= <= work differently.
Comparisons convert null to a number,treating it as 0.
that's why (3rd line) null >=0 is true and (1st line) null > 0 is false*/



console.log(undefined ==0); //false
console.log(undefined > 0);  //false
console.log(undefined < 0); //false


