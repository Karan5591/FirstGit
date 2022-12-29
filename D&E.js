var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//For Submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem)

//Add item
function addItem(e)
{
    e.preventDefault();
    //console.log(1);
    //get inpur value
    var newItem=document.getElementById('item').value;

    //Create new li element
    var li=document.createElement('li');

    //add class
    li.className='list-group-item';
    
    //Add text with input value
    li.appendChild(document.createTextNode(newItem));

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


