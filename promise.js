const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_test',
});


db.connect((err) => {
  // you should probably add reject instead of throwing error
  // reject(new Error()); 
  if (err) { throw err; }
  console.log('Mysql: Connected');
});


function getId(sql) {
  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) { reject(new Error()); }
      else { resolve(result); }
    });
  });
};

getId("SELECT * FROM users WHERE age=13")
  .then((result) => {
    console.log(result);
    var sql = `SELECT * FROM users WHERE id=${result[0].id}`;

    return getId(sql);
  }).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });
