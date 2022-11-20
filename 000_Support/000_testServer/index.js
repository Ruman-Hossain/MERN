const {client} = require('./dbConfig');

const insertOneDoc = async()=>{
    try {
        const Database = client.db('school');
        const students = Database.collection('students');
        const doc ={
            FirstName:'Afrin Akter',
            LastName:'Annee',
            Group:'Science',
            Designation:'Dentist',
            City:'Rangpur'
        };
        const result = await students.insertOne(doc);
        console.log(`A Document was inserted with _id: ${result.insertedId}`);
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}
insertOneDoc();