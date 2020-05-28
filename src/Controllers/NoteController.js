const Note = require('../Models/Note');

module.exports = {
    async index(req, res){
        const notes = await Note.find();

        return res.json( notes );
    },

    async store(req, res){
        const {title, content} = req.body;

        const note = await Note.create({
            title,
            content
        })

        return res.json(note);
    }
}