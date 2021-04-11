const express = require("express");
//need acess to these node modules

const app = express();
const PORT = process.env.PORT || 3000;
// Sets up the Express App, we use the process to allow heroku to decide the port when deployed


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
// Sets up the Express app to handle data parsing


//HTML ROUTES these are my routes to the HTML documents. Moved these to a folder for smaller views 
require('./routes/html')(app);
require('./routes/api')(app);

//moved all of these to a routes folder
//this retreives the notes from the db file 
//app.get("/api/notes", (req, res) => {res.sendFile(path.join(__dirname, "db/db.json"));});
//this access and adds an ID element to the notes 
//app.get("/api/notes/:id", (req, res) => {let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));res.json(notes[Number(req.params.id)]);});


//this is the post requests that allows the user to add a new note to the list
// app.post("/api/notes", (req, res) => {
// 	let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
// 	let newNote = req.body;
// 	noteID = notes.length.toString();
// 	newNote.id = noteID;
// 	notes.push(newNote);
// 	updateNotes(notes);
// 	console.log(`you made a new note! ${newNote.title}`);
// 	res.json(notes);
// });

//adding a function for this write file hoping to clean up the requests
// function updateNotes(notes) {
// 	fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), (err) => {
// 		if (err) throw err;
// 		return true;
// 	});
// }

//});
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
