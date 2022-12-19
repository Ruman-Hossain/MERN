const {client}= require ("./dbConfig")

const insertSingleDoc= async()=>{
    try {
        const database = client.db("school");
        const users = database.collection("users");
        const doc = {
            name: 'Adiba Jahan',
            city: ['Rangpur','Dhaka']
          };
          const result = await users.insertOne(doc);
          //console.log(result);
          console.log(`A document was inserted with the _id: ${result.insertedId}`);
  

    } catch (error) {
        console.log(error);
    } finally{
        await client.close();

    }
}
insertSingleDoc();