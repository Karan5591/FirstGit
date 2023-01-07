const btn=document.querySelector('.btn');

const ul = document.querySelector('#item1');

window.onload=function()
{
    for(var i=0;i<localStorage.length;i++)
    {
        var count=window.localStorage.key(i);
        var list=JSON.parse(window.localStorage.getItem(count));
        var Amount=list.EAmount;
        var Description=list.Edescription;
        var Category=list.ECategory;


        var newItem=document.createElement('li');
        newItem.id=Description;
        var text=document.createTextNode(Amount+"-"+Description+"-"+Category);
    newItem.appendChild(text);
    document.getElementById("item1").appendChild(newItem);
    
    var DelButton=document.createElement("button");
        
    DelButton.id=Description;
    DelButton.appendChild(document.createTextNode("Delete"));
    document.getElementById(Description).appendChild(DelButton);
    

    var EditButton=document.createElement("button");
    EditButton.id=Description;
    EditButton.className=btn;
    EditButton.appendChild(document.createTextNode("Edit"));
    document.getElementById(Description).appendChild(EditButton);
   }
  
}

btn.addEventListener('click',e=>
{
    e.preventDefault();
    var Amount=document.getElementById('Amount').value;
    var Description=document.getElementById('Description').value;
    var Category=document.getElementById('Category').value;

    var Details={
        EAmount:Amount,
        Edescription:Description,
        ECategory:Category
    }
    Details=JSON.stringify(Details);
    localStorage.setItem(Description,Details);

    var newItem=document.createElement('li');
    newItem.id=Description;
    var check=document.getElementById(Description)
    if(check!=null)
    {
        var list=document.getElementById("item1");
        console.log(list);
        list.removeChild(check);
    }
    var text=document.createTextNode(Amount+"-"+Description+"-"+Category);
    newItem.appendChild(text);
    document.getElementById("item1").appendChild(newItem);
    
    var DelButton=document.createElement("button");

    DelButton.id=Description;
    DelButton.appendChild(document.createTextNode("Delete"));
    document.getElementById(Description).appendChild(DelButton);
    

    var EditButton=document.createElement("button");
    
    EditButton.id=Description;
    EditButton.className=btn;
    EditButton.appendChild(document.createTextNode("Edit"));
    document.getElementById(Description).appendChild(EditButton);
});

ul.addEventListener('click', (event) => 
{
    if(event.target.tagName === 'BUTTON') 
    {
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      
      if(button.textContent === 'Delete') 
      {
        var char1=ul.removeChild(li);
        localStorage.removeItem(char1.id);
    }
   
     
     else if(button.textContent === 'Edit') 
     {

        var char2=ul.removeChild(li);
        let data=JSON.parse(localStorage.getItem(char2.id));
        localStorage.removeItem(char2.id);
        var Amount1=document.getElementById('Amount');
        var Description1=document.getElementById('Description');
        var Category1=document.getElementById('Category');
        Amount1.value=data.EAmount;
        Description1.value=data.Edescription;
        Category1.value=data.ECategory;
     } 
    }
    
    });



