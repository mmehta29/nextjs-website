const sql = require('better-sqlite3');
const db = sql('products.db');

const dummyProducts = [
    {
        title: 'Gold Flower Earrings',
        category: 'jewelry',
        image: 'https://i.pinimg.com/564x/7a/57/30/7a5730b343a9020394f4c64b1d9534e3.jpg',
        price: 29.99,
        Rating: 4.6,
    },
    {
        title: 'Gigi Wavy Gold Bracelet',
        category: 'jewelry',
        image: 'https://i.pinimg.com/564x/1b/57/77/1b5777410ab602fadcf8c0e8d567ab54.jpg',
        price: 33.99,
        Rating: 4.5,
    },
    {
        title: 'Star Chain Bracelet',
        category: 'jewelry',
        image: 'https://i.pinimg.com/474x/26/29/7c/26297cf779d1e1ddceda29d60d6404b3.jpg',
        price: 72.99,
        Rating: 4.5,
    },
    {
        title: 'Gold Hoop Earrings',
        category: 'jewelry',
        image: 'https://i.pinimg.com/474x/ed/c4/46/edc44619176a3e8b7832ecd2783d0d75.jpg',
        price: 17.96,
        Rating: 4.5,
    },
    {
        title: 'Flower Bracelet',
        category: 'jewelry',
        image: 'https://i.pinimg.com/474x/ca/ed/b3/caedb393eb12b67ada41aec0246ee3b9.jpg',
        price: 49.99,
        Rating: 4.5,
    },
    {
        title: 'Sparkles Bracelet',
        category: 'jewelry',
        image: 'https://i.pinimg.com/564x/20/ce/57/20ce57b32607f04a30793d58dc1f4cc1.jpg',
        price: 29.99,
        Rating: 4.5,
    },
    {
        title: 'Pearl Drop Earrings',
        category: 'jewelry',
        image: 'https://i.pinimg.com/474x/0d/e2/69/0de269c9f3e0a5b4fe3f9e8721b65ad7.jpg',
        price: 22.99,
        Rating: 4.7,
    },
    {
        title: 'Andy Necklace',
        category: 'jewelry',
        image: 'https://i.pinimg.com/474x/e4/ef/6a/e4ef6aa30a260e5a7c6b7c69068d1e7e.jpg',
        price: 16.99,
        Rating: 4.4,
    },
    {
        title: 'Pearl Chain Necklace',
        category: 'jewelry',
        image: 'https://i.pinimg.com/474x/3b/ef/97/3bef97c08251485f8e38533b292f816a.jpg',
        price: 64.99,
        Rating: 4.5,
    },
    {
        title: 'Heart Shaped Earrings',
        category: 'jewelry',
        image: 'https://i.pinimg.com/474x/de/ad/80/dead806da3d620ed34f659abeff76654.jpg',
        price: 35.99,
        Rating: 4.7,
    },
    {
        title: 'Butterfly Bracelet',
        category: 'jewelry',
        image: 'https://i.pinimg.com/474x/6f/f3/07/6ff307d8fc6f0a7c6d87b50e9639008c.jpg',
        price: 59.99,
        Rating: 4.5,
    },
    {
        title: 'Daisy Hoop Earrings',
        category: 'jewelry',
        image: 'https://i.pinimg.com/564x/f2/e0/c8/f2e0c833046c09ffbdecc58ba77af423.jpg',
        price: 32.99,
        Rating: 4.5,
    },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS products (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       title TEXT NOT NULL,
       category TEXT NOT NULL,
       image TEXT NOT NULL,
       price REAL NOT NULL,
       Rating REAL NOT NULL
    )
`).run();

async function initData() {
    const stmt = db.prepare(`
      INSERT INTO products VALUES (
         null,
         @title,
         @category,
         @image,
         @price,
         @Rating
      )
   `);

    for (const product of dummyProducts) {
        stmt.run(product);
    }
}

initData();