const router = require('express').Router();
const {notes} = require('../../db/notes.json');
const {createNewNote, deleteNote} = require ('../../lib/notes');

router.post('/notes', (req, res) =>{
    try {
           req.body.id= notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.status(200).json(note);
    } catch (error) {
        res.status(500).json(error)
    }
}),

router.get('/notes', (req,res)=>{
    res.json(notes)
}),

router.delete('/notes/:id', (req, res) =>{
   
    try {
         deleteNote( notes, req.params.id);
    res.json(notes);
    } catch (error) {
        res.json(500).json(error)     
    }
})

module.exports = router;