// let multiply=function(x,y)
// {
//     console.log(x*y);
// }



// var multiplyByTwo=multiply.bind(this, 2, 3);
// multiplyByTwo(5);

// var multiplyByThree=multiply.bind(this, 3);
// multiplyByThree(5);

//===============================ANOTHER WAY to do currying i.e closures.

let multiply = function(x)
{
    return function (y)
    {
        console.log( x*y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(5);

