const url = require('url');
const MongoClient = require('mongodb').MongoClient;

let cachedDB = null;

async function connectToDatabase(uri) {
    if (cachedDB) {
        return cachedDB;
    }

    const client = await MongoClient.connect(uri, { useNewUrlParser: true });

    const db = client.db(url.parse(uri).pathname.substr(1));

    cachedDB = db;
    return db;
}

export default async (req, res) => {
    const db = await connectToDatabase(process.env.MONGDB_URI);

    const collection = await db.collection('emails');

    switch (req.method) {
        case 'GET':
            res.json({ hello: "world" });
            res.status(200); 
            break;
        case 'POST':
            console.log("post motherfuckers");
            collection.insertOne({test: "hi"});
            res.status(200); 
            break;
        default:
            res.status(405).end(); // method not allowed
            break;
    }
}