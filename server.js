const util = require('util');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_test',
});


db.connect((err) => {
  if (err) { throw err; }
  console.log('Mysql: Connected');
});

const query = util.promisify(db.query).bind(db)



async function getalluser() {
  try {
    let res = await query("SELECT * FROM users WHERE age=13")
    console.log(res);
    let result = await query(`SELECT * FROM users WHERE id = ${res[0].id}`)
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getalluser();



// function getId(sql) {
//   return new Promise((resolve, reject) => {
//     db.query(sql, (err, result) => {
//       if (err) { reject(new Error()); }
//       else { resolve(result); }
//     });
//   });
// };


// function getuser(id) {
//   return new Promise((resolve, reject) => {
//     db.query(`select * from users where id = ${id}`, (err, result) => {
//       if (err) { reject(new Error()); }
//       else { resolve(result) }
//     })
//   })
// }

// async function getalluser() {
//   const res = await getId("SELECT * FROM users WHERE age=13");
//   const id = res[0].id;
//   const result = await getuser(id);
//   console.log(result);
// }
// getalluser();
