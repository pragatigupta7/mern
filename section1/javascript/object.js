let student ={
    name:'john',
    age:25,
    email:'john123@gmail.com',
    phone:'123456789',
    course:'javascript',

}
console.log(student)
 //to access value of key
console.log(student.name)
console.log(student['name'])

//replace value
student.course='python'
console.log(student)

//add new key-value pair
student.city = 'new york'
console.log(student)

console.log('--------------------------------------------------------------------')

const smartphones={
    brand:'Samsung',
    model:'Galaxy S10',
    price:50000,
    color:['White','Black','Blue','Green','Red'],
    ram:'8GB',
    storage:'128GB',
    camera:'48MP',
    battery:'4000mAh',

}
console.log(smartphones)
console.log(smartphones.color[2])  //accessing the blue color smarphone
smartphones.color[2]="skyblue"
console.log(smartphones)

console.log('---------------------------------------------------------------------------------------------')

const phones =[
    {brand:'Apple',model:'iphone11',price:70000,color:['White','Black','Green','Red']},
    {brand:'Samsung',model:'Galaxy S10',price:50000,color:['White','Black','Blue','Green','Red']},
    {brand:'Oneplus',model:'8T',price:45000,color:['White','Black','Blue','Green']},
    {brand:'Xiaomi',model:'Mi 10',price:40000,color:['White','Black','Blue','Green','Red']},
]
console.log(phone[1].model)
console.log(phones[1].colors[2])