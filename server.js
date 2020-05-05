const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const server = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDirectory = require("./util/path");

server.use("/admin", adminRoutes);
server.use(shopRoutes);

server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.static(path.join(rootDirectory, "public")));

server.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDirectory, "views", "404.html"));
});

server.listen(5000);
