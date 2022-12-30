const btn=document.querySelector('.btn');

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.className);
    var name=document.getElementById('name').value;
    var mail=document.getElementById('email').value;

    localStorage.setItem('name',name);
    localStorage.setItem('Email', mail);
    
  });