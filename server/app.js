const express = require("express");
const app = express();
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

// allow cross-origin requests
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/graph-ql", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the DB"))
  .catch((err) => console.log(err));

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => console.log("Server is listening on port 4000"));
