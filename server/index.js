const express = require("express");
const bodyParser = require("body-parser");
const pg = require("./postgre_connect");
const insertInto = require("./routes/insertinto");
const cors = require("cors");

//port number to listen
const port = 5000;

//init
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/insertinto", insertInto);
app.use(cors());

//initializing
app.listen(port, () => {
  console.log("Server starten to listen...");
});

//home page
app.get("/", function (req, res) {
  res.send("Only accepting GET and POST requests!");
  console.log(res);
});

app.post("/auth", (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  if (username && username.toUpperCase().charAt(0) === "E") {
    res.send({ user: "employee" });
  }
  if (username && username.toUpperCase().charAt(0) === "A") {
    res.send({ user: "admin" });
  }
  if (username && username.toUpperCase().charAt(0) === "T") {
    res.send({ user: "tenant" });
  }
  if (username && username.toUpperCase().charAt(0) === "O") {
    res.send({ user: "owner" });
  } else {
    res.send({ user: "unknown" });
  }
});

app.get("/complaint", function (req, res) {
  res.send("Complaint registered");
});
/*
//insert values into table using post method
app.post('/insertvalues', function (req, res) {  
  // console.log('Got body:', req.body);
  const uname = req.body.username;
  const uage = req.body.password;
  let name = [uname,uage];
  const rest = pg.insertintotable(name,(err,result)=>{
    if(err) throw err;
    res.sendStatus(200);
  })
}) 
*/

//To fetch all data from table using table name
app.get("/result/:tbname", function (req, res) {
  const table_name = req.params.tbname;
  const resul = pg.fetchalldata(table_name, (err, result) => {
    res.send(result.rows);
  });
});

//returns table values
app.get("/fetchdata", (req, res) => {
  const rest = pg.fetchalldata("demotable", (err, result) => {
    res.send(result.rows);
  });
});

//Other routes
app.get("*", function (req, res) {
  res.send("Sorry, this is an invalid URL.");
});
