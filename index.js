const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
app.use(express.json());

app.get("/jobs", async (req, res) => {
  const query = req.query.query;
  const options = {
    method: "GET",
    url: "https://jobs-api14.p.rapidapi.com/list",
    params: {
      query: "web developement",
      location: "India",
      distance: "1.0",
      language: "en_GB",
      remoteOnly: "false",
      datePosted: "month",
      employmentTypes: "fulltime;parttime;intern;contractor",
      index: "0",
    },
    headers: {
        'X-RapidAPI-Key': '3591e5e558msh9f438e7fbc24cc7p16a94fjsnd10f5ceb77cf',
        'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
      },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
