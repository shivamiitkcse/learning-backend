const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs'); // Set EJS as the view engine

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' directory

app.get('/', function(req, res) {
    fs.readdir('./files', function(err, files) {
        if (err) {
            console.error('Error reading directory:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        console.log(files);
        res.render('index', { files: files }); // Render index.ejs when accessing the root URL
    });
});

app.get('/files/:filename', function(req, res) {
    fs.readFile(`./files/${req.params.filename}` ,"utf-8", function(err , filedata){
        res.render('show'  , {filename: req.params.filename ,filedata});
    })
});

app.post('/create', function(req, res) {
    const fileName = req.body.title.trim().split(' ').join('') + '.txt';
    const filePath = path.join(__dirname, 'files', fileName);
    const fileContent = req.body.details;

    fs.writeFile(filePath, fileContent, function(err) {
        if (err) {
            console.error('Error writing file:', err);
            res.status(500).send('Error creating task');
            return;
        }
        
        console.log('File created successfully:', fileName);
        res.redirect('/');
    });
});

app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});
