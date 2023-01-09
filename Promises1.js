const posts=[
    {title:'post one', body: 'This is post one'},
{title:'post two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post, index)=>{
           console.log(post.title);
        });
        console.log("User Last Activity time");
        updateLastUserActivityTime.then(value=>console.log(value));

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
                
                resolve();
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
    }, 3000)
    
});
function deletePost()
{
    return new Promise((resolve, reject)=>{
       
        setTimeout(()=>{
            console.log("Removing element");
            posts.pop();
           
            const error=false;
            if(!error)
            {
                resolve("Element removed");
            }
            else{
                reject("Error: something went wrong");
            }
        }, 4000);
    });
}
createPost({title:'Post Three', body: 'this is post Three'})
.then(getPosts)
.catch(err=> console.log(err));
deletePost().then(getPosts).catch(err=> console.log(err));








