const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:8080"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models/');
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to the database!');
    }).catch((err) => {
        console.error('Cannot connect to the database', err)
        process.exit();
    });

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Galang REST API SERVER COBA"
    })
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}')
});