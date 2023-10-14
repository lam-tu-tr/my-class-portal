const express = require("express");
const app = express();
require("dotenv").config();

const local_PORT = 8000;

// Set default static route folder
app.use(express.static(path.join(__dirname, "routes")));

// Serve data to client

const PORT = process.env.PORT || local_PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
