


const btn=document.querySelector('.btn');

const ul = document.querySelector('#item1');

window.addEventListener("DOMContentLoaded",()=>
{
    
        axios.get("https://crudcrud.com/api/344e2b03ebe74c71849c8fa008e13fe9/AppointmentData1")
        .then((response)=>{
            console.log(response);
            for(var i=0;i<response.data.length;i++)
            {
            var userName=response.data[i].name;
            var userEmail=response.data[i].email;
            
    
            var newItem=document.createElement('li');
            newItem.id=response.data[i]._id;
            var text=document.createTextNode(userName+"-"+userEmail);
        newItem.appendChild(text);
        document.getElementById("item1").appendChild(newItem);
        
        var DelButton=document.createElement("button");
            
        DelButton.id=response.data[i]._id;
        DelButton.appendChild(document.createTextNode("Delete"));
        document.getElementById(response.data[i]._id).appendChild(DelButton);
        
    
        var EditButton=document.createElement("button");
        EditButton.id=response.data[i]._id;
        EditButton.className=btn;
        EditButton.appendChild(document.createTextNode("Edit"));
        document.getElementById(response.data[i]._id).appendChild(EditButton);
    
       }

        })
        .catch((response)=>console.log(response));

        
})

btn.addEventListener('click',e=>
{
    e.preventDefault();
    var userName=document.getElementById('name').value;
    var userEmail=document.getElementById('email').value;

    var myobj={
        name:userName,
        email:userEmail
    }
    
       
    axios.post("https://crudcrud.com/api/344e2b03ebe74c71849c8fa008e13fe9/AppointmentData1", myobj)
    .then((response)=>{
    
    //ADDING NODE TO SHOW ELEMENT.
            myobj=JSON.stringify(myobj);

            var newNode=document.createElement('li');
            newNode.id=response.data._id;
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
        
            DelButton.id=response.data._id;;
            DelButton.appendChild(document.createTextNode("Delete"));
            document.getElementById(response.data._id).appendChild(DelButton);
            
        
                var EditButton=document.createElement("button");
            EditButton.id=response.data._id;;
            EditButton.appendChild(document.createTextNode("Edit"));
            document.getElementById(response.data._id).appendChild(EditButton);
        
        })
            .catch((data)=>console.log(data));
        
        



    
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
        //localStorage.removeItem(char1.id);
        axios.delete(`https://crudcrud.com/api/344e2b03ebe74c71849c8fa008e13fe9/AppointmentData1/${char1.id}`)
        .then((response)=>console.log(response))
        .catch((response)=>console.log(response));
        
    }
}
       
    });

