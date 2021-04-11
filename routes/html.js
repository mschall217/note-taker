const path = require("path");

module.exports = (app) => {
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
	app.get("/notes", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/notes.html"));
	});
	// Basic route that sends the user first to the AJAX Page
};
