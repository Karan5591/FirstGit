var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//For Submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem)

//Add Filter
filter.addEventListener('keyup', filterItems);

const textItem=document.createElement('INPUT');
textItem.setAttribute("type","text");
textItem.setAttribute("class","form-control mr-2");
textItem.setAttribute("id","item");
let parentEle = document.getElementById('addForm');
const list=document.getElementById('addForm')
list.insertBefore(textItem,list.children[1]);

//Add item
function addItem(e)
{
    e.preventDefault();
    //console.log(1);
//Create a new text field



    //get input value
    var newItem=document.getElementsByClassName('form-control mr-2');

    //Create new li element
    var li=document.createElement('li');

    //add class
    li.className='list-group-item';
    
    //Add text with input value
    
        li.appendChild(document.createTextNode(newItem[0].value+" "+newItem[1].value));
//        li.appendChild(document.createTextNode(newItem[1].value));
    
        
       

   //create edit button
    var editBtn=document.createElement('button');

    //add classses to del button
    editBtn.className='btn btn-info btn-sm float-right delete';

    //append text node
    editBtn.appendChild(document.createTextNode('E'));

    //append button
    li.appendChild(editBtn);


    //Create del button
    var delBtn=document.createElement('button');

    //add classses to del button
    delBtn.className='btn btn-danger btn-sm float-right delete';

    //append text node
    delBtn.appendChild(document.createTextNode('X'));

    //append button
    li.appendChild(delBtn);

    

    //append li to list.
    itemList.appendChild(li);

    
   

}

//remove item
function removeItem(e)
{
    
    if(e.target.classList.contains('delete'))
    {
       if(confirm('are you sure?'))
       {
        var li=e.target.parentElement;
        itemList.removeChild(li);
       }
    }
}

//Filter Items
function filterItems(e)
{
    //convert text to lowecase

    var text= e.target.value.toLowerCase();
    //get li
    var items=itemList.getElementsByTagName('li');

    //convert to an array
    Array.from(items).forEach(function(item)
    {
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';

        }
        else{
            item.style.display='none';
        }

    });
    
    

     
}


