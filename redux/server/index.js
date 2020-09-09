const path = require("path");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

const { PORT = 3000, PWD = process.cwd() } = process.env;

const app = express();

app.use(
  "/q",
  graphqlHTTP((req) => ({
    schema,
    context: req.session,
  }))
);

app.use("/static", express.static(path.resolve(PWD, "build", "public")));

app.use("*", (req, res) => {
  res.sendFile("build/public/index.html", {
    root: PWD,
  });
});

app.listen(PORT, () =>
  console.log(`Running server on port ${PORT} - path ${PWD}`)
);
