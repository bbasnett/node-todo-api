const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to MongoDB Server');

    const col = client.db('TodoApp').collection('Todos');

    // deleteMany
    // col.deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // col.deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    col.findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

     // client.close();   
})