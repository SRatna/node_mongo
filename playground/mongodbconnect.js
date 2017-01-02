const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:12345/TodoApp',(err,db)=>{
  if(err) console.log('unable to connect');
  else {
    console.log('connection successful');

    db.collection('Todos').insertOne({
      text:'something to do',
      completed:false
    },(err,result)=>{
      if(err) return console.log(err);

      console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.collection('Users').insertOne({
      name:'ram',
      age:22,
      location:'nepal'
    },(err,result)=>{
      if(err) return console.log(err);

      console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.close();
  }
})
