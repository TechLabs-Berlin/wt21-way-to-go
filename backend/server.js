const express = require("express");
const app = express();
app.listen(5000, () => console.log("listening at 5000"));
app.use(express.static("public"));

require("dotenv").config();

//app.get("/api/firstUser", (req, res) => {
//const firstUser = [{ id: 1, firstRoute: "HBF", endPoint: "Spreebogenpark" }];
//res.json( firstUser );
//});

const port = 5000;

app.listen(port, () => console.log(`Server starter on port ${port}`));

//const firstUser = require("./firstUser.route");
const users = require("./api/users.route");
const routes = require("./api/routes.route");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
//it is possible put a limit of mb to protect the server of big ammount of data

//Users
app.use("/api/users", users);
//Routes
app.use("/api/routes", routes);

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

app.post("/api", (request, response) => {
  console.log("Success request!");
  console.log(request.body);
});
