const posts=[
    {title:'post one', body: 'This is post one'},
{title:'post two', body: 'This is post two'}
];

function getPosts(){
    
    return new Promise ((resolve, reject)=>{
        console.log("Updated data");
        let output='';
        posts.forEach((post, index)=>{
           console.log(post.title);
        });
        resolve("");
        });
        
    } 

    


function createPost(post)
{
    
    console.log("Before creating this post time is:-"+new Date());
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        posts.push(post);
        console.log("Element inserted at:-"+new Date());
        resolve("");
    },2000)
    
});
}
        

function deletePost()
{
    return new Promise((resolve, reject)=>{

   
    setTimeout(()=>{
        posts.pop();
        console.log("Element removed at:-"+new Date());
        resolve("");
    },2000)
    
}) ; 
     
}
async function post1(){
await createPost({title:'Post Three'});
await getPosts();
await deletePost();
await getPosts();
}
post1();
