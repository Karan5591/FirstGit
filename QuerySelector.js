/* var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

var input= document.querySelector('input');
input.value='Hello World';

var submit=document.querySelector('input[type="submit"]');
 
var item=document.querySelector('.list-group-item');
item.style.color='red';
var secitem=document.querySelector('.list-group-item:nth-child(2)');
secitem.style.backgroundColor='green';

var Thirditem=document.querySelector('.list-group-item:nth-child(3)');
Thirditem.style.visibility='hidden';*/

//Query selector

var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';
var Seconditem=document.querySelector('.list-group-item:nth-child(2)');
Seconditem.style.color='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}