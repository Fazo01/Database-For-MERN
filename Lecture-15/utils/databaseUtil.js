const mysql=require('mysql2');
const pool=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'faizanfk0309',
  database:'airbnb'
})
module.exports=pool.promise();