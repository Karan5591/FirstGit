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

  btn.addEventListener('click', e =>{
    e.preventDefault();
    
    var name1=document.getElementById('name').value;
     myobj={
        name: name1,
        mail: document.getElementById('email').value
    }
    myobj=JSON.stringify(myobj);
var obj1=document.getElementById('email').value;

    localStorage.setItem(obj1, myobj);

    //create and showing the details below 

    var newItem=document.createElement('li');
    var text=document.getElementsByClassName('naam');
    
    var text1=document.createTextNode(text[0].value+" "+text[1].value);
    newItem.appendChild(text1);
    document.getElementById("item1").appendChild(newItem);
            
  });

