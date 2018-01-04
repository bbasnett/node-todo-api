const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to MongoDB Server');

    const col = client.db('TodoApp').collection('Users');

    col.find({
        Name: 'Karma'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    });
    // client.close();

    // col.find().count().then((count) => {
    //     console.log(`Todos count : ${count}`);
    //     // console.log(JSON.stringify(docs, undefined, 2));
    // });
})