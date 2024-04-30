const express = require("express");
const checkWorkingHours = require("./middleware/checkWorkingHours ");
const app = express();

app.use(express.json());

// middleware
app.use(checkWorkingHours);

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running");
});
