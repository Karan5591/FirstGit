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
     posts.push(post);
      resolve("Post created on:-");
    });
            
}
function deletePost()
{
    return new Promise((resolve, reject)=>{
        console.log("Removing element.")
        posts.pop();
     resolve("Element removed on:-");
    });
}
let updateLastUserActivityTime=new Promise((resolve, reject)=>{
                
    setTimeout(()=>{
        
        resolve(new Date());
    }, 1000)
    
});
const post1=async ()=>{
let create= await createPost({title:'Post Three'}).then((value)=>console.log(value));
let activity=await updateLastUserActivityTime.then((value)=>console.log(value))
let get1=await getPosts().then((value)=>console.log(value));
let del=  deletePost().then((value)=>console.log(value));
let activity1=await updateLastUserActivityTime.then((value)=>console.log(value))
let get2=await getPosts().then((value)=>console.log(value));
}
post1();
