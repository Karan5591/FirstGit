//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title='Javascript';
//console.log(document.head);
//console.log(document.doctype);
//console.log(document.body);
//console.log(document.all);//get array of all elements
//console.log(document.all[5]);
//document.all[5].textContent='Hi JS'
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

//Get element by ID

//console.log(document.getElementById('header-title'));
//var Htitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(Htitle);
//Htitle.textContent='hello';
//Htitle.innerText='Goodbye';
//console.log(Htitle.innerText);
//Htitle.innerHTML= '<h3>Hello</h3>';
//header.style.borderBottom='solid 3px #000'

//Get Element by class name

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















