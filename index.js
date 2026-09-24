const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample menu data
const menu = [
  { id: 1, name: "Cappuccino", price: 120 },
  { id: 2, name: "Cold Coffee", price: 150 },
  { id: 3, name: "Veg Sandwich", price: 100 },
];

app.get("/menu", (req, res) => {
  res.json(menu);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
