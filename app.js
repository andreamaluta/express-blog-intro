const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const blog = [
        {
            title: 'Ciambellone',
            content: 'Dolce a forma di ciabella',
            image: 'public/ciambellone.jpeg',
            tag: ['#Torta', '#ciambellone', '#zucchero']
        }
    ] 
    res.send(blog)
})

app.listen(port, () => {
    console.log(`Server del mio blog sulla porta ${port}`);
})