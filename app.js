
// // // // Loops 

// // let count = 1;

// // while (count <= 100){
// // console.log(count)
// // count = count +1;
// // }




// // for (let i = 1;i <= 20; ++i){
// //         if (i % 5 === 0 && i % 3 === 0){
// //         console.log(`${i} -->Frontend Simplified`)
// //     }
// // else if (i % 3 === 0){
// //         console.log(`${i} --> frontend`)
// //     }
// // else if (i % 5 === 0){
// //         console.log(`${i} -->simplified`)
// //     }
// // else
// // console.log(`${i} --> ${i}`)
// // }


    
// //     for (let i = 1; i <= 20; i++){
    
// //     if (i % 3 === 0 && i % 5 === 0){
// //     console.log(`${i}--> Frontend Simplified`)}
    
// //     else if (i % 3 === 0){
// //     console.log(`${i}-->Frontend`)}

// //     else if (i % 5 === 0){
// //     console.log(`${i}--> Simplified`)}

// //     else{
// //     console.log(`${i}-->${i}`)}
// // }


// // let str = "frontend Simplified"

// // for (let i = 0 ;i < str.length; i++){
// // console.log(str[i])}


// // functions

// // function definition

// // function welcomePersonToFES (firstName, lastName){
// // console.log(`Welcome to FES, ${firstName} ${lastName}`)
// // }

// // // Call a function
// // welcomePersonToFES('Ricky', 'Dheria')
// // welcomePersonToFES('Zen')
// // welcomePersonToFES('Mitri')



// // function celciusToFahrenheit (celcius){
// // return celcius * 1.8 + 32
// // }

// // console.log(celciusToFahrenheit(0))


// // // SECOND WAY TO CALL A FUNCTION

// // const convertingCelciusToFahrenheit = (celcius) =>{
// // return celcius * 1.8 + 32
// // }

// // console.log(convertingCelciusToFahrenheit(10))


// // ARRAYS

// // let arr = [20, 30, 40, 50, 100]

// //First element of Array

// // console.log(arr[0])

// // // Last element of Array

// // console.log(arr[arr.length -1])

// // // Add element to the end of an Array

// // arr.push (200)



// // Goes throughe every single array to see if it's true

// // LONG FORM ARRAY

// // let newArr = arr.filter((element) => {
// //     console.log(element)
// //     if (element <= 50)
// //     return true;
// // })

// // SHORT FORM ARRAY

// // let arr = [20, 30, 40, 50, 100]

// // let newArr = arr.filter(element => element <= 50)
// // console.log(newArr)


// // let arr = ['A+', 'A', 'FAIL' ]

// // let newArr = arr.filter( element =>  element <= [0,1])

// // console.log(newArr)


// // let arr = ['A+', 'A', 'FAIL' ]

// // console.log(arr[0])


// // let arr = ['A+', 'A', 'FAIL' ]

// // let newArr = arr.filter((element) => {
// //     console.log(element)
// //     if (element ){
// //         return true;
// //     }
    
// // })

// // console.log(newArr < [2])


// // let grades = ['A+', 'A', 'B','FAIL']

// // let goodGrades = grades.filter((element) => {
// //     if (element !== 'FAIL'){
// //         return true
// //     }
// // })

// // console.log(goodGrades)

// // let badGrades = grades.filter((element) => {
// //     if (element === 'B'){
// //         return true
// //     }
// // })

// // console.log(badGrades)


// // let nullGrades = grades.filter((element) => {
// //     if (element === ''){
// //         return true
// //     }
// // })

// // console.log(nullGrades)



// // }


// // let grades = ['A+', 'A', 'B', 'FAIL']

// // let goodGrades = grades.filter(element => element !== 'FAIL')

// // console.log(goodGrades) 






// // let grades = ['A+', 'A', 'B', 'FAIL']

// // let goodGrades = []

// // for (i = 0; i < grades.length; ++i)
// // if (grades[i] !== 'FAIL'){
// //     goodGrades.push (grades[i])
// // }

// // console.log (goodGrades)



// // for (let i = 0 ; i < grades.length; ++i) {
// //     if (i !== 3){
// //     console.log(grades[i])
// // }
// // }


// // let arr = [1,5,10,3]

// // let newArr = arr.map(element => element*100)

// // console.log(newArr)

// // let arr2 = [0,10,20]

// // let newArr2 = arr2.map((elem) => {
// //     return (elem * 100)
// // })

// // console.log(newArr2)


// // let arr = [1,5,10,3];

// // let newArr = [];

// // for (let i = 0; i < arr.length; i++){

// //     newArr.push (arr[i] * 100)
    
// // }

// // console.log(newArr)


let users = [{
    username: "ranvir", 
    email:"ranvirdheria@gmail.com",
    password: "lion",
    subscription: "VIP",
    discord: "syn001",
    lessonsCompleted: [0,1,2,3,4],
    
   
},
{
    username: "devin", 
    discord: "devinn001",
    password: "horse",
    email:"devin@gmail.com",
    lessonsCompleted: [0,1,2,3,4,5],
},
{
    username: "zen", 
    discord: "devinn001",
    password: "horse",
    email:"zen@gmail.com",
    lessonsCompleted: [0,1,2,3,4,5],
},
];


// // let registeredUsers = []

// // function register (username, email, password, subscription, discord, lessonsCompleted){
// //     for (i = 0; i < users.length; ++i){
// //         if (users[i].email === email){
// //         console.log(users[i])
// //         registeredUsers.push (users[i])
// //         console.log(registeredUsers[i])
// //         if (users[i].password === password){
// //             console.log("log the user in, the details are correct")
// //         }
// //         else{
// //             console.log("password is incorrect, try again.")
// //         }
// //         return;
// //     }
// // }
// // console.log("could not find an email that matches")
// // }
// // register('ranvir', 'ranvirdheria@gmail.com', 'lion', 'VIP', 'syn001', [0,1,2,3,4])

// let registeredUsers = []

// function register (username, email, password, subscription, discord, lessonsCompleted){
// registeredUsers.push(register)

// }
// console.log(registeredUsers)
// console.log(register('ranvir', 'ranvirdheria@gmail.com', 'lion', 'VIP', 'syn001', [0,1,2,3,4]))




function register (user){

users.push(user);

    }
    register({
       username: 'ranvir', 
       email: 'ranvirdheria@gmail.com', 
       password: 'lion', 
       subscriptionStatus: 'VIP', 
       discord: 'syn001', 
       lessonsCompleted: [0,1,2,3,4]});

    console.log(users)