//to check a no. is prime
const prompt=require('prompt-sync')();
var number = prompt("please enter a number");
if (number==1){
    console.log(number+ "is not a prime no.")
}
else if(number <1){
    console.log(number+ "is not a prime number")

}
else {
        for(var i=2;i<number;i++){
            if(number % i == 0){
                            var res = number+ "is not a prime no.";
                            break;
                            }
            else {
                var res = number +  "is  a prime no.";
            }
    }
    console.log(res);
}



//sum of odd numbers in range of 130 to 490
var users = 490;
var sum=0;

for(var i=130 ;i<=users;i++){
    if(i%2 !==0){
        sum=sum+i;
    }
}
console.log("the sum of odd no.:" + sum)


///reverse a no.
var num =12345;
var reverse =0;

while(num != 0){
    reverse = (reverse*10)+(num%10);
    num = parseInt(num/10);
    
}
console.log("the reverse of a no. is:"+reverse)

//factorial of a no.
var number = prompt("please enter a no.");
var fact = 1;
if(number==0){
    console.log(number);
}else if(number<0){
    console.log("not possible");
}else{
    for(var i=1;i<=number;i++){
        fact =fact*i;  
    }
    console.log("the factorial of a number is:"+fact);
}
