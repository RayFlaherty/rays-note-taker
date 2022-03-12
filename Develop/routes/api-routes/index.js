const router = require('express').Router();
const {
    getAll,
    // getById,
    createNewNote,
    validateNotes,
    deleteNote
} = require ('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = getAll(req.query, results);
    }
    res.json(results);
});

router.post('/notes', (req, res)=>{
    req.body.id = notes.length.toString();

    if(!validateNotes(req.body)) {
        res.status(400).send('The note is not formated properly');
    }else{
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req.res)=>{
    
})
module.exports = router;