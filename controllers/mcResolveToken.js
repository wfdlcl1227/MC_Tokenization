const resolveToken = (req, res, next) => {
    res.json({"resolvedTokens":[{"tokenRequestId":"abc123thn567","tokenValue":"user1@exacttarget.com","attributes":[{"name":"FirstName","value":"Alice"},{"name":"LastName","value":"Smith"}]},{"tokenRequestId":"abc098thn654","tokenValue ":"user2@gmail.com","attributes":[{"name":"FirstName","value":"John"},{"name":"LastName","value":"Smith"}]}],"unresolvedTokens":[]});
};


const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

let dbresp;

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    dbresp = row;
  }
  client.end();
});


const handleGet = (req, res, next) => {
    res.json(dbresp);
};

/*
//GET '/tea'
const getAllTea = (req, res, next) => {
    res.json({message: "GET all tea"});
};

//POST '/tea'
const newTea = (req, res, next) => {
    res.json({message: "POST new tea"});
};

//DELETE '/tea'
const deleteAllTea = (req, res, next) => {
    res.json({message: "DELETE all tea"});
};

//GET '/tea/:name'
const getOneTea = (req, res, next) => {
    res.json({message: "GET 1 tea"});
};

//POST '/tea/:name'
const newComment = (req, res, next) => {
    res.json({message: "POST 1 tea comment"});
};

//DELETE '/tea/:name'
const deleteOneTea = (req, res, next) => {
    res.json({message: "DELETE 1 tea"});
};
*/
//DELETE '/tea/:name'


//export controller functions
module.exports = {
    resolveToken,
    handleGet
};