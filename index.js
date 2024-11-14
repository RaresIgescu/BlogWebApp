import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const posts = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.get('/posts', (req, res) => {
    res.render("posts.ejs", { posts });
});

app.get('/quotes', (req, res) => {
    res.render("quotes.ejs");
});

app.get('/miscelanous', (req, res) => {
    res.render("miscelanous.ejs");
});

app.get('/adaugare', (req, res) => {
    res.render("adaugare.ejs");
});

app.post('/submit', (req, res) => {
    const newPost ={
        title: req.body.title,
        descriere: req.body.descriere
    };
    posts.push(newPost);
    res.redirect('/posts');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
