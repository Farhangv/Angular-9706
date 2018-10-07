let firstname = "John";
let lastname = "Doe";
let ladder = {
    material : "wood",
    length: 5
}

function getTotalLength(x : {length: number}, y: {length: number})
{
    //return x.length;
    let total = x.length + y.length;
    return total;
}
getTotalLength("John", ladder);


let age: number = 20;
//age = "david";

function getAge (birthYear:number):number
{
    return Date.now() - birthYear;
}

function getTotalLength2(x: string | any[], y: string | any[])
{
    
    //let total = x.length + y.length;
    if(x instanceof Array)
    {
        x.push(20);
    }
    if(typeof y === 'string')
    {
        y.substr(1);
    }
    let total = x.length + y.length;
    return total;
}





