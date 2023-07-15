import express from 'express';

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
  res.render("index", {
    content: "<em>EJS</em> is cool",
  });
});

server.listen(8080, "0.0.0.0", () => {
  console.info(
    "Express serve is listening at http://0.0.0.0:8080",
  );
});
