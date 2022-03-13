const router = require('express').Router();
const {notes} = require('../../db/notes.json');
const {createNewNote, deleteNote} = require ('../../lib/notes');

router.post('/notes', (req, res) =>{
    req.body.id= notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
}),

router.get('/notes', (req,res)=>{
    res.json(notes)
}),

router.delete('/notes/:id', (req, res) =>{
    deleteNote( notes, req.params.id);
    res.json(notes);
})

module.exports = router;