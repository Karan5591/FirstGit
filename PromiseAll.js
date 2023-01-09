const posts=[
    {title:'post one', body: 'This is post one'},
{title:'post two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(()=>{
        console.log("Updated data");
        let output='';
        posts.forEach((post, index)=>{
           console.log(post.title);
        });
        
        

    },1000);

}
function createPost(post)
{
    
    console.log("Before creating this post time is:-"+new Date());
    return new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
            
            posts.push(post);
            const error=false;
            if(!error)
            {
                
                resolve("Post created on:-");
            }
            else{
                
                reject("Error: something went wrong");
            }

            
            
        }, 1000);

    });
}
let updateLastUserActivityTime=new Promise((resolve, reject)=>{
                
    setTimeout(()=>{
        
        resolve(new Date());
    }, 1000)
    
});
function deletePost()
{
    return new Promise((resolve, reject)=>{
        console.log("Removing element");
        setTimeout(()=>{
            
            posts.pop();
           
            const error=false;
            if(!error)
            {
                resolve("Element removed on:-");
            }
            else{
                reject("Error: something went wrong");
            }
        }, 5000);
    });
}


Promise.all([createPost({title:'Post Three', body: 'this is post Three'}), deletePost() ]).then((value)=>{
    console.log(value);
    updateLastUserActivityTime.then((value)=>console.log(value));
    getPosts();
    
}).catch(err=> console.log(err));










