const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to MongoDB Server');

    const col = client.db('TodoApp').collection('Users');

    col.insert({
        Name: 'Bikash Basnett',
        Age: 35,
        Location : 'Sikkim'
    }, (err, result) => {
        if(err){
            return console.log('Unable to inser todo',err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    client.close();
})