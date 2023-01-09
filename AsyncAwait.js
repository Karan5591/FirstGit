console.log('person1: show ticket');
console.log('person2: show ticket');
const promiseWifeBringingTicks=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
});
// const getPopcorn=promiseWifeBringingTicks.then((t)=>{
//     console.log('husband: I have tickets');
//     console.log('husband: We should go in');
//     console.log('wife:no I am hungry');
//     return new Promise((resolve, reject)=> resolve(`${t} popcorn`));
// });
// const getButter=getPopcorn.then((t)=>{
//     console.log('husband: got some popcorn');
//     console.log('husband: We should go in');
//     console.log('wife:I need butter in popcorn');
//     return new Promise((resolve, reject)=> resolve(`${t} Butter`));
// });
// const getColdDrinks=getButter.then((t)=>{
//     console.log('husband: got some getColdDrinks ');
//     console.log('husband: We should go in');
//     console.log('wife:Ok');
//     return new Promise((resolve, reject)=> resolve(`${t} getColdDrinks `));
// });
// getColdDrinks .then((t)=>console.log(t));


// console.log('person4: show ticket');
// console.log('person5: show ticket');


const preMovie=async ()=>{
    const promiseWifeBringingTicks=new Promise((resolve, reject)=>{
            setTimeout(()=>
                resolve('ticket'),3000);
        });
        const getPopcorn= new Promise((resolve, reject)=> resolve(` popcorn`));
        const addButter= new Promise((resolve, reject)=> resolve(` butter`));
        const getColdDrinks= new Promise((resolve, reject)=> resolve(` ColdDrinks`));
     
        let ticket=  await promiseWifeBringingTicks;
      console.log(`husband: I have ${ticket}`);
    console.log('husband: We should go in');
    console.log('wife:no I am hungry');

        let popcorn=await getPopcorn;

        console.log(`husband: got some ${popcorn}`);
    console.log('husband: We should go in');
    console.log('wife:I need butter in popcorn');

    let butter=await addButter;
    console.log(`husband: I have got some ${butter} on popcorn`);
    console.log('husband: anything else');
    console.log('wife:ColdDrinks');

let ColdDrinks =await getColdDrinks;

console.log(`husband: got some ${ColdDrinks} `);
console.log('husband: We should go in');
console.log('wife:Ok');

        return ticket;
}
preMovie().then((m)=>console.log(`person 3: show ticket`));

console.log('person4: show ticket');
console.log('person5: show ticket');
