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
    let myobj={
        name: document.getElementById('name').value,
        mail: document.getElementById('email').value
    }
    myobj_serialized=JSON.stringify(myobj);

    localStorage.setItem('myobj', myobj_serialized);
  });