const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.json({ ok: true });
})

app.listen(process.env.PORT || 3333, () => {
    console.log(`Server Start in Port ${process.env.PORT || 3333}`)
});
