const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:12345/TodoApp',(err,db)=>{
  if(err) console.log('unable to connect');
  else {
    console.log('connection successful');

    db.collection('Users').deleteMany({location:'ktm'}).then((result)=>{
      console.log(result.result);
      db.close();
    },(err)=>{
      console.log('cant fetch');
    });
  }
})
