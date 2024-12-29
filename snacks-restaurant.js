const username = prompt("Enter your name:");
const gender = prompt("Enter your gender (male/female):").toLowerCase();
let greeting = `Welcome, ${username}`;

if (gender === 'male') {
    greeting = `Welcome, Mr. ${username}`;
} else if (gender === 'female') {
    greeting = `Welcome, Ms. ${username}`;
}
else
{
    alert(greeting);

}

let order = prompt("Would you like to order a shawarma, zinger, or burger?");
let validOrders = ['shawarma', 'zinger', 'burger'];

if (validOrders.includes(order.toLowerCase())) {
    alert(`Your ${order} is being prepared.`);
    console.log(`${username} has ordered a ${order}.`);
} else {
    alert('Invalid order. Please choose shawarma, zinger, or burger.');
}