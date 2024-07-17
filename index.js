require("dotenv").config();
const express = require("express");
const app = express();
const mongoose=require('mongoose');
const contact_routes=require('./endpoints/contactEndpoint');
const product_routes=require("./endpoints/productEndpoint");
app.use(express.json());
app.use(contact_routes);
app.use(product_routes);
// environment variables
const port = process.env.PORT || 3000;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

const dbUri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.hex2mmr.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Node API is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
