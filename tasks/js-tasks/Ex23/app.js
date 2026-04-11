

let userDB = [
    {
        id: 1,
        fname: "hosein", 
        lname: "ghasemizade", 
        age: 23, 
        email: "ghasemizade.hosein@gmail.com"
    },
    {
        id: 2,
        fname: "mahsa", 
        lname: "shooshtari", 
        age: 25, 
        email: "shooshtari.mahsa@gmail.com"
    },
    {
        id: 3,
        fname: "hesam", 
        lname: "taheri", 
        age: 23, 
        email: "taheri.hesam@gmail.com"
    }
]

const fname = prompt("enter your first name:");
const lname = prompt("enter your last name:");
const age = Number(prompt("enter your age:"));
const email = prompt("enter your email:");

if (fname.length >= 3 && fname.length <= 10) {
    if (lname.length >= 3 && lname.length <= 15) {
        if (isNaN(age) === false && age.toString().length <= 3) {
            const addNewUser = {
                id: userDB.length + 1,
                fname: fname,
                lname: lname,
                age: age,
                email: email
            }
            
            userDB.push(addNewUser);
            
        }
    }
}


console.log(userDB);










