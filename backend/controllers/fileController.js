const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('file'), (req, res) => {
    const newFile = new File({
        filename: req.file.originalname,
        contentType: req.file.mimetype,
        data: req.file.buffer,
    });

    newFile.save()
        .then(() => res.send('File uploaded successfully'))
        .catch(err => res.status(400).send(err));
});
