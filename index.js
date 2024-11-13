import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.get('/posts', (req, res) => {
    res.render("posts.ejs")
});

app.get('/quotes', (req, res) => {
    res.render("quotes.ejs");
})

app.get('/miscelanous', (req, res) => {
    res.render("miscelanous.ejs");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
