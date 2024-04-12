let fruits=['apple','banana','mango','orange','pineapple','grapes']
console.log(fruits)

//array methods
console.log('---------------------------------------------')
//1. push()- add element at the end of the array
//2. pop( ) - remove element from the end of the array
//3. shift() - remove elemt from the beginning of the array 
//4 unshift() - add element at the begining of the array
//5 splice() - add or remove element from the array
//6. slice ()- copy elemts from the array 
//7. indexof()- find the index of the elements 
//8. concat()- merge two arrays
//9 map()- iterate over the array
//10. filter()- filter the element of the array
//11. forEach()- iterate over the array

console.log(fruits[3])
console.log(fruits.length)
console.log(fruits[6])
console.log(fruits.slice(2,5))

fruits.push('strawberry')
console.log(fruits)

console.log(fruits.pop())

fruits.shift()
console.log(fruits)

fruits.unshift('Apple')
console.log(fruits)

let veg =['potato','tomato','ginger','carrot','cabbage']
let newArray=veg.concat(fruits)
console.log(newArray)

let index = fruits.indexOf('apple')
console.log(index)

console.log('-------------------------------------------------------------------')

let nums = [1,2,3,4,5,6,7,8,9,10]

//iteration using loop
for(let i=0;i<nums.length;i++){
    console.log(nums[i]**2)
}
//iteration using for each
nums.forEach((i)=>{
    console.log(i**2)
})
//iteration using map
let sqaure = nums.map((x)=>x**2)
console.log(sqaure)

//filter function
let even = nums.filter((x)=> x%2==0)
console.log(even)

let odd = nums.filter((x) => x%2!=0)
console.log(odd)


let evenNum =[]
for (let i=0;i<nums.length;i++){
        if (i%2==0){
            evenNum.push[i]
        }
}
console.log(evenNum)

let x=['red','pink','skyblue','purple','white','black','grey','green','brown']
let color = x.filter((x)=>x.length>4)
console.log(color)

let price =[1050 ,2999,2000,40000,50000,2343,2345]
let newPrice = price.filter((x)=> x>=1000 && x<=3000)
console.log(newPrice)

