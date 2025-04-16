const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    const blog = [
        {
            title: 'Ciambellone',
            content: 'Dolce a forma di ciabella',
            image: '<img src = "ciambellone.jpeg">',
            tag: ['#Torta', '#ciambellone', '#zucchero']
        },
        {
            title: 'Cracker barbabietola',
            content: 'cracker alla barbabietola',
            image: '<img src = "cracker_barbabietola.jpeg">',
            tag: ['#Barbabietola', '#cracker', '#croccanti']
        },
        {
            title: 'Pane fritto dolce',
            content: 'lorem ipsum',
            image: '<img src = "pane_fritto_dolce.jpeg">',
            tag: ['#Pane', '#dolce', '#fritto']
        },
        {
            title: 'Pasta alla barbabietola',
            content: 'lorem ipsum',
            image: '<img src = "pasta_barbabietola.jpeg">',
            tag: ['#primo', '#barbabietola', '#pasta']
        },
        {
            title: 'Torta paesana',
            content: 'Dolce tipico',
            image: '<img src = "torta_paesana.jpeg">',
            tag: ['#torta', '#zucchero', '#dolce']
        }
    ] 
    res.send(blog)
})

app.listen(port, () => {
    console.log(`Server del mio blog sulla porta ${port}`);
})