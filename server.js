const express = require('express');
const path = require('path');
const fs = require('fs')
//need acess to these node modules

const app = express();
const PORT = process.env.PORT || 3000;
// Sets up the Express App, we use the process to allow heroku to decide the port when deployed

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname))
// Sets up the Express app to handle data parsing

//this is where the array that held characters / resrvations went 
     fs.readFile("db/db.json","utf8", (err,data) => {
        if(err) throw err;
        const notes = JSON.parse(data);
        updateNotes();
        console.log(notes);

     app.get("/api/notes", (req,res) => {res.json(notes)});

     app.post("/api/notes", (req, res) =>{
        let newNote = req.body
        notes.push(newNote);
         return console.log(`added new note`)
     })


    app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'public/index.html'))});
    app.get('/notes', (req, res) => {res.sendFile(path.join(__dirname, 'public/notes.html'))});
    // Basic route that sends the user first to the AJAX Page
    function updateNotes(){
        fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err =>{
            if(err) throw err;
            return true;
        })
     };

    });
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));