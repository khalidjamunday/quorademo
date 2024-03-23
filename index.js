const express=require("express");
const app=express();
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.urlencoded({extended:true}));//post req m urlendcoded data aata hai
app.use(express.static(path.join(__dirname,"/public")));


const port=3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

let posts=[
    {
        username:"apnacollege",
        content:"I love coding!!"
    },
    {
        username:"akshat",
        content:"Got an internship!!"
    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
});

app.get("/posts/new",(req,res)=>{
    res.render("newf.ejs");
})

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    posts.push({username,content});
    //when key value both same passed obj. like this
    res.send("New Post Added");
})