const express = require("express");
const app = express();
const port = 8080;

app.get("/", (request, response) => {
  response.send("Hello World 🤓");
  console.log(request.rawHeaders);
});

app.listen(port, () => {
  console.log("Server is running on:", { port });
});
