app.get('/files/:filename', (req, res) => {
    File.findOne({ filename: req.params.filename })
        .then(file => {
            res.set('Content-Type', file.contentType);
            res.send(file.data);
        })
        .catch(err => res.status(404).send('File not found'));
});
