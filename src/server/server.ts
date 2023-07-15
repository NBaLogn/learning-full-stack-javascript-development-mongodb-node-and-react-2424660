import express from "express";
import os from "node:os";

import config from "./config";

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
  res.render("index", {
    content: "<em>EJS</em> is cool",
  });
});

server.listen(config.PORT, config.HOST, "0.0.0.0", () => {
  console.info(
    `Express serve is listening at ${config.SERVER_URL}`,
    `Free mem: ${os.freemem() / 1024 / 1024}`,
  );
});
