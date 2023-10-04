const express = require('express');
const db = require('./config/config.js')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

//connectDB();


// Route to get all posts
app.get("/api/get", (req,res)=>{
    /*
    if(connection.state === 'disconnected'){
        return respond(null, { status: 'fail', message: 'server down'});
      }
    console.log("DATABASE: " + db);
    */

db.query("SELECT * FROM Exam;", (err,result)=>{
    if(err) {
    console.log(err)
    } 
result = "hello"
res.send(result)
});   
});

// Route to get one post
/*
app.get("/api/getFromId/:id", (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM posts WHERE id = ?", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating the post
app.post('/api/create', (req,res)=> {

const username = req.body.userName;
const title = req.body.title;
const text = req.body.text;

db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to like a post
app.post('/api/like/:id',(req,res)=>{

const id = req.params.id;
db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
    if(err) {
   console.log(err)   } 
   console.log(result)
    });    
});

// Route to delete a post

app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })
*/ 
app.listen(PORT, ()=>{
    //console.log(db);
    //module.exports = db;
    db.connect( (err) => {
        if(err) {
            console.log("Unsuccessful")
            return err.stack;
            return;
        } else {
            console.log("Successful")
            return db.threadId;
        }
    }
    );

    
    console.log(`Server is running on ${PORT}`)
})
