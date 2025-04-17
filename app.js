const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    
    res.send('server del mio blog');
})

app.get('/bacheca', (req, res) => {
    const blog = [
        {
            title: 'Ciambellone',
            content: 'Dolce a forma di ciabella',
            image:  '/images/posts/ciambellone.jpeg',
            tag: ['#Torta', '#ciambellone', '#zucchero']
        },
        {
            title: 'Cracker barbabietola',
            content: 'cracker alla barbabietola',
            image:  '/images/posts/cracker_barbabietola.jpeg',
            tag: ['#Barbabietola', '#cracker', '#croccanti']
        },
        {
            title: 'Pane fritto dolce',
            content: 'lorem ipsum',
            image:  '/images/posts/pane_fritto_dolce',
            tag: ['#Pane', '#dolce', '#fritto']
        },
        {
            title: 'Pasta alla barbabietola',
            content: 'lorem ipsum',
            image:  '/images/posts/pasta_barbabietola.jpeg',
            tag: ['#primo', '#barbabietola', '#pasta']
        },
        {
            title: 'Torta paesana',
            content: 'Dolce tipico',
            image:  '/images/posts/torta_paesana.jpeg',
            tag: ['#torta', '#zucchero', '#dolce']
        }
    ];
    
    res.json(blog)
})

app.listen(port, () => {
    console.log(`Server del mio blog sulla porta ${port}`);
})