const fs = require("fs");
const getNotes = function () {
  return "Your notes...";
};
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log(" Note existed!");
  }
};
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("1-json.json", dataJSON);
};
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("1-json.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};
const removeNote = function (title) {
  const notes = loadNotes();
  const restNotes = notes.filter((note) => {
    note.title != title;
  });
  saveNotes(restNotes);
};
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
