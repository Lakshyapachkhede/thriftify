
const express = require('express');
const cors = require("cors");


const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.get('/api/home', (req, res) => {
    res.json([

        { id: 1, title: "Classic White T-Shirt", price: 499, condition: 4, image: "/img/items/item1.jpg" },
        { id: 2, title: "Black Oversized Hoodie", price: 1299, condition: 5, image: "/img/items/item (2).jpg" },
        { id: 3, title: "Denim Jacket Blue", price: 1899, condition: 4, image: "/img/items/item (3).jpg" },
        { id: 4, title: "Slim Fit Jeans", price: 1499, condition: 3, image: "/img/items/item (4).jpg" },
        { id: 5, title: "Cotton Checked Shirt", price: 799, condition: 4, image: "/img/items/item (5).jpg" },

    ]);
});
app.get('/api/search/:query', (req, res) => {
    const {query} = req.params
    res.json([
        {
            id: 1,
            title: "Classic White T-Shirt",
            price: 499,
            condition: 4,
            brand: "H&M",
            size: "M",
            color: "White",
            image: "/img/items/item1.jpg"
        },
        {
            id: 2,
            title: "Black Oversized Hoodie",
            price: 1299,
            condition: 5,
            brand: "Zara",
            size: "L",
            color: "Black",
            image: "/img/items/item (2).jpg"
        },
        {
            id: 3,
            title: "Denim Jacket Blue",
            price: 1899,
            condition: 4,
            brand: "Levi's",
            size: "M",
            color: "Blue",
            image: "/img/items/item (3).jpg"
        },
        {
            id: 4,
            title: "Slim Fit Jeans",
            price: 1499,
            condition: 3,
            brand: "Wrangler",
            size: "32",
            color: "Dark Blue",
            image: "/img/items/item (4).jpg"
        },
        {
            id: 5,
            title: "Cotton Checked Shirt",
            price: 799,
            condition: 4,
            brand: "Roadster",
            size: "L",
            color: "Red/Black",
            image: "/img/items/item (5).jpg"
        }
    ]);
});

// returns items of a user by id
app.get('/api/items/:id', (req, res) => {
    const {id} = req.params;
    res.json([
        {
            id: 1,
            title: "Classic White T-Shirt",
            price: 499,
            condition: 4,
            brand: "H&M",
            size: "M",
            color: "White",
            image: "/img/items/item1.jpg"
        },
        {
            id: 2,
            title: "Black Oversized Hoodie",
            price: 1299,
            condition: 5,
            brand: "Zara",
            size: "L",
            color: "Black",
            image: "/img/items/item (2).jpg"
        },
        {
            id: 3,
            title: "Denim Jacket Blue",
            price: 1899,
            condition: 4,
            brand: "Levi's",
            size: "M",
            color: "Blue",
            image: "/img/items/item (3).jpg"
        },
        {
            id: 4,
            title: "Slim Fit Jeans",
            price: 1499,
            condition: 3,
            brand: "Wrangler",
            size: "32",
            color: "Dark Blue",
            image: "/img/items/item (4).jpg"
        },
        {
            id: 5,
            title: "Cotton Checked Shirt",
            price: 799,
            condition: 4,
            brand: "Roadster",
            size: "L",
            color: "Red/Black",
            image: "/img/items/item (5).jpg"
        }
    ]);
});


app.get('/api/item/:id', (req, res) => {
    const { id } = req.params;

    res.json({
        id: Number(id),
            title: "Classic White T-Shirt",
            price: 499,
            condition: 4,
            brand: "H&M",
            size: "M",
            color: "White",
            images: ["/img/items/item1.jpg", "/img/items/item (5).jpg", "/img/items/item (4).jpg"],
            used_times: 2,
            seller_id: 3
        },
    );
});

app.get('/api/profile/:id', (req, res) => {
    const { id } = req.params;

    res.json({
        id: Number(id),
            name: "Yash pachkhede",
            email: "yash@gmail.com",
            phone: "9111031931",
            city: "vidisha",
            address: "hairan gali pareshan mohalla",
            pincode: "464001",

        },
    );
});

app.listen(3000, () => console.log("Server running on port 3000"));