const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:12345/TodoApp',(err,db)=>{
  if(err) console.log('unable to connect');
  else {
    console.log('connection successful');

    db.collection('Todos').find().count().then((no)=>{
      console.log(no);
      db.close();
    },(err)=>{
      console.log('cant fetch');
    });
  }
})
