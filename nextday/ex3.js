let user=[];

let username = prompt("Enter your name:");
let greeting = `Welcome, ${username}`;
askGender();


let order = prompt("Would you like to order a shawarma, zinger, or burger?");
let validOrders = ['shawarma', 'zinger', 'burger'];

if (validOrders.includes(order.toLowerCase())) {
    alert(`Your ${order} is being prepared.`);
    console.log(`${username} has ordered a ${order}.`);
} else {
    alert('Invalid order. Please choose shawarma, zinger, or burger.');
}

user.push(username);
user.push(gender);
user.push(order);

for(let i =0;i<user.length; i++){
    console.log(user[i])
}


function askGender() {
  let gender= prompt("Enter your gender (male/female):").toLowerCase();
    if (gender === 'male') {
        greeting = `Welcome, Mr. ${username}`;
        return alert(greeting);
    } else if (gender === 'female') {
       greeting = `Welcome, Ms. ${username}`;
       return alert(greeting);
    }
    else
    {
      return  alert(greeting);
    }
   
}

