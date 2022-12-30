const btn=document.querySelector('.btn');

/*btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.className);
    var name=document.getElementById('name').value;
    var mail=document.getElementById('email').value;

    localStorage.setItem('name',name);
    localStorage.setItem('Email', mail);
    
  }); */

  //Storing data as an object

  btn.addEventListener('click',e=>
{
    e.preventDefault();
    var userName=document.getElementById('name').value;
    var userEmail=document.getElementById('email').value;

    var myobj={
        name:userName,
        mail:userEmail
    }
    myobj=JSON.stringify(myobj);
    localStorage.setItem(userEmail,myobj);

    //ADDING NODE TO SHOW ELEMENT.
    

    var newNode=document.createElement('li');
    newNode.id=userEmail;
    var check=document.getElementById(userEmail)
    if(check!=null)
    {
        var list=document.getElementById("item1");
        console.log(list);
        list.removeChild(check);
    }
    var text=document.createTextNode(userName+" "+userEmail);
    newNode.appendChild(text);
    document.getElementById("item1").appendChild(newNode);
    
    var DelButton=document.createElement("button");

    DelButton.className=userEmail;
    DelButton.appendChild(document.createTextNode("delete"));
    document.getElementById(userEmail).appendChild(DelButton);
    

        var EditButton=document.createElement("button");
    EditButton.className=userEmail;
    EditButton.appendChild(document.createTextNode("Edit"));
    document.getElementById(userEmail).appendChild(EditButton);
});

ul.addEventListener('click', (event) => 
{
    if(event.target.tagName === 'BUTTON') 
    {
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      
      if(button.textContent === 'delete') 
      {
        var char1=ul.removeChild(li);
        
        for(var i=0;i<localStorage.length;i++)
   {
    if ((localStorage.key(i))==char1.id)
    {
        localStorage.removeItem(char1.id);
    }
   }
     }
     else if(button.textContent === 'Edit') 
     {
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = li.textContent;
        button.textContent = 'save';
      } 
      
    }
    });
