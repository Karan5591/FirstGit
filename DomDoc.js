/*//Examine the object type


//console.dir(document)
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title='Javascript';
console.log(document.head);
console.log(document.doctype);
console.log(document.body);
console.log(document.all);//get array of all elements
console.log(document.all[5]);
//document.all[5].textContent='Hi JS'
console.log(document.forms);
console.log(document.links);
console.log(document.images); */

//Get element by ID

//console.log(document.getElementById('header-title'));
var Htitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
console.log(Htitle);
Htitle.innerHTML='<h3>Hello</h3>'
header.style.borderBottom='solid 3px #000';
var item=document.getElementById('title1');
item.style.color='Red';
item.style.font="bold 50px arial,serif";

