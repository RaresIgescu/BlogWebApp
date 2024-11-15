import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const posts = [];
const quotes = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.get('/posts', (req, res) => {
    res.render("posts.ejs", { posts });
});

app.get('/quotes', (req, res) => {
    res.render("quotes.ejs", {quotes});
});

app.get('/miscelanous', (req, res) => {
    res.render("miscelanous.ejs");
});

app.get('/adaugare', (req, res) => {
    res.render("adaugare.ejs");
});

app.post('/submit', (req, res) => {
    const newPost ={
        id: Date.now().toString(),
        title: req.body.title,
        descriere: req.body.descriere
    };
    posts.push(newPost);
    res.redirect('/posts');
});

app.get('/edit/:id', (req, res) => {
    const postId = req.params.id;
    const postToEdit = posts.find(post => post.id == postId);

    if(postToEdit) {
        res.render('editare.ejs', {post: postToEdit});
    } else {
        res.redirect('/posts.ejs');
    }
});

app.post('/edit/:id', (req, res) => {
    const postId = req.params.id;
    const postIndex = posts.findIndex(post => post.id == postId);

    if(postIndex !== -1) {
        posts[postIndex].title = req.body["title"];
        posts[postIndex].descriere = req.body["descriere"];
    }
    res.redirect('/posts');
});

app.get("/sterge/:id", (req, res) => {
    const postId = req.params.id;
    const postIndex = posts.findIndex(post => post.id == postId);
    posts.splice(postIndex, 1);
    res.redirect('/posts');
})

app.get('/adaugareCitat', (req, res) => {
    res.render("adaugareCitat.ejs");
});

app.post('/submitCitat', (req, res) => {
    const newQuote = {
        id: Date.now().toString(),
        titlu: req.body["title"],
    };
    quotes.push(newQuote);
    res.redirect('/quotes');
});

app.get('/stergeCitat/:id', (req, res) => {
    const citatId = req.params.id;
    const citatIndex = quotes.findIndex(citat => citat.id == citatId);
    quotes.splice(citatIndex, 1);
    res.redirect('/quotes');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
