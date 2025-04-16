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
            title: 'Ciambellone',
            content: 'Dolce a forma di ciabella',
            image: '<img src = "ciambellone.jpeg">',
            tag: ['#Torta', '#ciambellone', '#zucchero']
        },
        {
            title: 'Ciambellone',
            content: 'Dolce a forma di ciabella',
            image: '<img src = "ciambellone.jpeg">',
            tag: ['#Torta', '#ciambellone', '#zucchero']
        },
        {
            title: 'Ciambellone',
            content: 'Dolce a forma di ciabella',
            image: '<img src = "ciambellone.jpeg">',
            tag: ['#Torta', '#ciambellone', '#zucchero']
        },
        {
            title: 'Ciambellone',
            content: 'Dolce a forma di ciabella',
            image: '<img src = "ciambellone.jpeg">',
            tag: ['#Torta', '#ciambellone', '#zucchero']
        }
    ] 
    res.send(blog)
})

app.listen(port, () => {
    console.log(`Server del mio blog sulla porta ${port}`);
})