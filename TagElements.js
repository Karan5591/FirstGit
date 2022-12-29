var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[2].style.backgroundColor='Yellow';

for(var i=0;i<li.length;i++)
{
    li[i].style.fontWeight='#f4f4f4';
}

//New list item can't be modified using Class name as it has not any class. however since it is <li> so Tagnmae will work on it
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';
items[2].style.backgroundColor='Green';

for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}
