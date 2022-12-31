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

  

const ul = document.querySelector('#item1');

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
    var text=document.createTextNode(userName+"-"+userEmail);
    newNode.appendChild(text);
    document.getElementById("item1").appendChild(newNode);
    
    var DelButton=document.createElement("button");

    DelButton.id=userEmail;
    DelButton.appendChild(document.createTextNode("Delete"));
    document.getElementById(userEmail).appendChild(DelButton);
    

        var EditButton=document.createElement("button");
    EditButton.id=userEmail;
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
        var userName=document.getElementById('name');
        var userMail=document.getElementById('email');
        userName.value=data.name;
        userMail.value=data.mail;
     } 
    }
    
    });



