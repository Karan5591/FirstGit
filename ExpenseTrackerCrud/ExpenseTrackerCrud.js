const btn=document.querySelector('.btn');

const ul = document.querySelector('#item1');
var getId2=0;
var check=0;

function showData(Amount, Description,Category,id)
{
    var newItem=document.createElement('li');
        newItem.id=id;
        var text=document.createTextNode(Amount+"-"+Description+"-"+Category);
    newItem.appendChild(text);
    document.getElementById("item1").appendChild(newItem);
    
    var DelButton=document.createElement("button");
        
    DelButton.id=id;
    DelButton.appendChild(document.createTextNode("Delete"));
    document.getElementById(id).appendChild(DelButton);
    

    var EditButton=document.createElement("button");
    EditButton.id=id;
    EditButton.className=btn;
    EditButton.appendChild(document.createTextNode("Edit"));
    document.getElementById(id).appendChild(EditButton);
   }


window.addEventListener("DOMContentLoaded", ()=>{

    axios.get("https://crudcrud.com/api/7fbb95b0e9124b968ba329d64b146b65/ExpenseTracker")
        .then((response)=>{
            for(var i=0;i<response.data.length;i++)
            {
            var Amount=response.data[i].Amount;
            var Description=response.data[i].Description;
            var Category=response.data[i].Category
            var id=response.data[i]._id;
            showData(Amount, Description,Category,id)   
            }    
    });  
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
        var getId1=ul.removeChild(li);
        //localStorage.removeItem(char1.id);
        axios.delete(`https://crudcrud.com/api/7fbb95b0e9124b968ba329d64b146b65/ExpenseTracker/${getId1.id}`)
        .then((response)=>console.log(response))
        .catch((response)=>console.log(response));
        
    }
    else if(button.textContent === 'Edit') 
     {

         getId2=ul.removeChild(li);
         check=getId2.id;
        axios.get(`https://crudcrud.com/api/7fbb95b0e9124b968ba329d64b146b65/ExpenseTracker/${getId2.id}`)
        .then((response)=>{

            var EAmount=document.getElementById('Amount');
            var EDescription=document.getElementById('Description');
            var ECategory=document.getElementById('Category');
            EAmount.value=response.data.Amount;
            EDescription.value=response.data.Description;
            ECategory.value=response.data.Category;
    })
    }
}    
    
    });



btn.addEventListener('click',e=>
{
    e.preventDefault();
    var EAmount=document.getElementById('Amount').value;
    var EDescription=document.getElementById('Description').value;
    var ECategory=document.getElementById('Category').value;

    var Details={
        Amount:EAmount,
        Description:EDescription,
        Category:ECategory
    }
    if(check!=0)
    {
        axios.put(`https://crudcrud.com/api/7fbb95b0e9124b968ba329d64b146b65/ExpenseTracker/${getId2.id}`, 
    {
        Amount:EAmount,
        Description:EDescription,
        Category:ECategory
    })
    .then((response)=>{
        // var EAmount1=response.data.Amount;
        //     var EDescription1=response.data.Description;
        //     var ECategory1=response.data.Category
        //     var id1=response.data._id;
        //     showData(EAmount1, EDescription1, ECategory1, id1) 
        console.log(response)
    })
    .catch((response)=>console.log(response));

    axios.get(`https://crudcrud.com/api/7fbb95b0e9124b968ba329d64b146b65/ExpenseTracker/${getId2.id}`)
        .then((response)=>{

            var EAmount1=response.data.Amount;
            var EDescription1=response.data.Description;
            var ECategory1=response.data.Category
            var id1=response.data._id;
            showData(EAmount1, EDescription1, ECategory1, id1) 
           
    })
    }
    
    else{
  
    axios.post("https://crudcrud.com/api/7fbb95b0e9124b968ba329d64b146b65/ExpenseTracker", Details)
    .then((response)=>{
        var Amount=response.data.Amount;
            var Description=response.data.Description;
            var Category=response.data.Category
            var id=response.data._id;
            showData(Amount, Description,Category,id)
    
    
    });
    getId2=0;
 check=0;
}


});




