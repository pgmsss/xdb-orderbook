
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/order_book', async (req, res) => {
  const params = new URLSearchParams(req.query).toString();
  const url = `https://horizon.livenet.xdbchain.com/order_book?${params}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from XDB Horizon.' });
  }
});

app.listen(3000, () => {
  console.log('Proxy running at http://localhost:3000');
});
