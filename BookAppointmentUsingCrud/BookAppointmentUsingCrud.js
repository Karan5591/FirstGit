


const btn=document.querySelector('.btn');

const ul = document.querySelector('#item1');

window.onload=function()
{
    
        axios.get("https://crudcrud.com/api/1fcba5d83d0c4575bdc8c7a79c4aaf9a/AppointmentData")
        .then((response)=>{
            console.log(response);
            for(var i=0;i<response.data.length;i++)
            {
            var userName=response.data[i].name;
            var userEmail=response.data[i].email;
            
    
            var newItem=document.createElement('li');
            newItem.id=userEmail;
            var text=document.createTextNode(userName+"-"+userEmail);
        newItem.appendChild(text);
        document.getElementById("item1").appendChild(newItem);
        
        var DelButton=document.createElement("button");
            
        DelButton.id=userEmail;
        DelButton.appendChild(document.createTextNode("Delete"));
        document.getElementById(userEmail).appendChild(DelButton);
        
    
        var EditButton=document.createElement("button");
        EditButton.id=userEmail;
        EditButton.className=btn;
        EditButton.appendChild(document.createTextNode("Edit"));
        document.getElementById(userEmail).appendChild(EditButton);
    
       }

        })
        .catch((response)=>console.log(response));

        
}

btn.addEventListener('click',e=>
{
    e.preventDefault();
    var userName=document.getElementById('name').value;
    var userEmail=document.getElementById('email').value;

    var myobj={
        name:userName,
        mail:userEmail
    }
    
    //localStorage.setItem(userEmail,myobj);
    axios.post("https://crudcrud.com/api/1fcba5d83d0c4575bdc8c7a79c4aaf9a/AppointmentData", myobj)
    .then((data)=>console.log(data))
    .catch((data)=>console.log(data));
    //ADDING NODE TO SHOW ELEMENT.
    myobj=JSON.stringify(myobj);

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


