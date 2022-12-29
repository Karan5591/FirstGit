//Traversing the DOM
var itemList=document.querySelector('#items');

//parent node
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4'
//console.log(itemList.parentNode.parentNode);

//Parent Element

//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4'
//console.log(itemList.parentElement.parentElement);

//child nodes
//console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='yellow';

//FirstChild
//console.log(itemList.firstChild);

//firstelement child

//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='Hello';

//lastchild
//console.log(itemList.lastChild);

//lastelement child
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='Hello 1';

//nextSiblings
//console.log(itemList.nextSibling);

//nextelementsibling
//console.log(itemList.nextElementSibling);

//previoussibling

//console.log(itemList.previousSibling);

//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.getElementsByClassName.color='green';

//Create elements and create them.

//create elements.

//create a div

var newDiv=document.createElement('div');
//Add class
newDiv.className='hello';
//add id
newDiv.id='hello1';

//add attribute
newDiv.setAttribute('title','Hello Div');

//create a text node
var newDivText=document.createTextNode('HEllo');

//add text tp div
newDiv.appendChild(newDivText);

//find place to insert above div
//var container=document.querySelector('header .container');
//var h1=document.querySelector('header h1');

//console.log(newDiv);
//newDiv.style.fontSize='30px';
//container.insertBefore(newDiv,h1);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);

var container=document.querySelector('ul.list-group');
var li=document.querySelector('ul li');

console.log(newDiv);

container.insertBefore (newDiv,li);
















