function greet()
{
    console.log("Hello World");
}

greet();

function info(user)
{
    return `Welcome ${user}!!`
}

let user = 'Teju';
let str = info(user);
console.log(str);