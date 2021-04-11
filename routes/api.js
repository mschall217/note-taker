const fs = require("fs");
const express = require("express");
const path = require("path");
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

module.exports = (app) => {
	app.get("/api/notes", (req, res) => {
		res.sendFile(path.join(__dirname, "../db/db.json"));
	});

	app.get("/api/notes/:id", (req, res) => {
		let notes = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
		res.json(notes[Number(req.params.id)]);
	});
	app.post("/api/notes", (req, res) => {
		let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
		let newNote = req.body;
		noteID = notes.length.toString();
		newNote.id = noteID;
		notes.push(newNote);
		updateNotes(notes);
		console.log(`you made a new note! ${newNote.title}`);
		res.json(notes);
	});
	app.delete("/api/notes/:id", (res, req) => {
        let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        let x = req.params.id.toString();
        console.log(x);

        for(let i=0; i<notes.length; i++){
            if(notes[i].id == x){
                console.log('deleting')
                res.send(notes[i]);
                notes.splice(i,1)
                return;
            }
        }
    });
	//adding a function for this write file hoping to clean up the requests
	function updateNotes(notes) {
		fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), (err) => {
			if (err) throw err;
			return true;
		});
	}
};
