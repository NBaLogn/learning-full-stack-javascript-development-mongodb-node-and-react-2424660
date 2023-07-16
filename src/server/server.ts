import express from "express";
import os from "node:os";

import config from "./config";
import apiRouter from "./api-router";

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/api", apiRouter);

server.get("/", (req, res) => {
  res.render("index", {
    initialContent: "Loading...",
  });
});

server.listen(Number(config.PORT), config.HOST, () => {
  console.info(
    `Express serve is listening at ${config.SERVER_URL}`,
    `Free mem: ${os.freemem() / 1024 / 1024}`,
  );
});
