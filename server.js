var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    router = express.Router();

app.use(express.static(__dirname, '/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/books/:genreName', function(req, res) {
    var genreName = req.params.genreName;
    var genreBooks = [];
    for (var i = 0, len = books.length; i < len; ++i) {
        if (books[i].genre === genreName) {
            genreBooks.push(books[i]);
        }
    }
    res.json(genreBooks);
});

router.put('/books/:bookId', function(req, res) {
    var bookId = parseInt(req.params.bookId);
    var book = null;
    var bookRank = req.body.rank;

    for (var i = 0, len = books.length; i < len; ++i) {
        if (books[i].id === bookId) {
            books[i].rank = bookRank;
            book = books[i];
        }
    }
    res.json(book);
});


app.use('/api', router);

app.listen(8000);

console.log('Express is listening on port 8000');

var books = [
            {
                id: 1,
                title: 'The Picture of Dorian Gray',
                authors: ['Oscar Wilde'],
                imgPath: 'https://d.gr-assets.com/books/1424596966l/5297.jpg',
                description: 'Written in his distinctively dazzling manner, Oscar Wilde’s story of a fashionable young man who sells his soul for eternal youth and beauty is the author’s most popular work.',
                published: "1998",
                pages:"254",
                genre: "fiction",
                rank: 0
            },
            {
                id: 2,
                title: 'The Old Man and the Sea',
                authors: ['Ernest Hemingway'],
                imgPath: 'https://d.gr-assets.com/books/1329189714l/2165.jpg',
                description: 'Here, for a change, is a fish tale that actually does honor to the author. The Old Man & the Sea revived Hemingway\'s career, which was foundering under the weight of such postwar stinkers as Across the River & into the Trees.',
                published: "1996",
                pages:"132",
                genre: "fiction",
                rank: 0
            },
            {
                id: 3,
                title: 'The Catcher in the Rye',
                authors: ['J.D. Salinger'],
                imgPath: 'https://d.gr-assets.com/books/1398034300l/5107.jpg',
                description: 'Since his debut in 1951 as The Catcher in the Rye, Holden Caulfield has been synonymous with "cynical adolescent." Holden narrates the story of a couple of days in his sixteen-year-old life, just after he\'s been expelled from prep school, in a slang that sounds edgy even today and keeps this novel on banned book lists.',
                published: "2001",
                pages:"277",
                genre: "fiction",
                rank: 0
            },
            {
                id: 4,
                title: 'Thus Spoke Zarathustra',
                authors: ['Friedrich Nietzsche'],
                imgPath: 'https://d.gr-assets.com/books/1349449118l/51893.jpg',
                description: 'Thus Spoke Zarathustra: A Book for All and None (also translated as Thus Spake Zarathustra) is a philosophical novel by German philosopher Friedrich Nietzsche , composed in four parts between 1883 and 1885. ',
                published: "1978",
                pages:"327",
                genre: "philosophy",
                rank: 0
            },
            {
                id: 5,
                title: 'Atlas Shrugged',
                authors: ['Ayn Rand'],
                imgPath: 'http://fc03.deviantart.net/fs71/i/2012/146/1/6/atlas_shrugged_act_1_by_decoechoes-d4xqfgz.jpg',
                description: 'Why did he have to fight his battle, not against his enemies, but against those who needed him most, and his hardest battle against the woman he loved? What is the world’s motor — and the motive power of every man? ',
                published: "1999",
                pages:"1168",
                genre: "philosophy",
                rank: 0
            }
            ];
    