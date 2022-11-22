const { readline }  = require('./readline');
const { client } = require('./dbConfig');
const {insertOneDoc,
       insertMultiDoc,
       readOneDoc,      //used in Function ReadOneDocument
       readMultiDoc,    //Used in Function ReadMultipleDocument
       readLimitedDoc,  //Used in Function ReadLimitedDocument
       updateFilter,    //Query to Select to do Updte Operation
       updateOptions,   //If Filed not found then it will create that field
       updateOneDoc,    //Used in UpdateOneDocument New Values to Set 
       updateMultiDoc,  //Used in UpdateMultipleDocument New Values to Set
       updateAllDoc,    //Used in UpdateAllDocument New Values to set 
       deleteOneDoc,    //Used in DeleteOneDocument
       deleteMultiDoc,   //Used in DeleteMultipleDocument
       deleteAllDoc,
       readOptions,
    } = require('./InputDataCRUD');


const crud = async()=>{
        console.log("Select Your Target Operation : ");
        console.log(`
                     1. Read    
                     2. Insert       
                     3. Update      
                     4. Delete    
                     `);
        //while(true){
            readline.question("Input (1/2/3/4)? :",userInput=>{
                switch (userInput) {
                    //READ OPERATIONS COMPLETED
                    case "1":
                        console.log("Select Your Target Read Operation : ");
                        console.log(`
                                     1. Read One Data   
                                     2. Read Limited Data 
                                     3. Read All Data
                                     `);
                        readline.question("Input (1/2/3)? :",readInput=>{
                            switch (readInput) {
                                case "1":
                                    ReadOneDocument();
                                    break;
                                case "2":
                                    ReadLimitedDocument();
                                    break;
                                case "3":
                                    ReadAllDocument();
                                    break;
                                default:
                                    console.log("Wrong Reading Type. Try Again!");
                                    break;
                            }
                        });
                        break;

                    //INSERT OPERATIONS COMPLETED
                    case "2":
                        console.log("Select Your Target Operation : ");
                        console.log(`
                                     1. Insert One Document  
                                     2. Insert Multi Document 
                                     `);
                        readline.question("Input (1/2)? :",insertInput=>{
                            switch (insertInput) {
                                case "1":
                                    InsertOneDocument();
                                    break;
                                case "2":
                                    InsertMultiDocument();
                                    break;
                                default:
                                    console.log("Wrong Insertion Type. Try Again!");
                                    break;
                            }
                        });
                        break;
                    
                    //UPDATE OPERATIONS COMPLETED
                    case "3":
                        console.log("Select Your Target Update Operation : ");
                        console.log(`
                                     1. Update One Document   
                                     2. Update Multiple Document
                                     3. Update All Document 
                                     `);
                        readline.question("Input (1/2/3)? :",updatetInput=>{
                            switch (updatetInput) {
                                case "1":
                                    UpdateOneDocument();
                                    break;
                                case "2":
                                    UpdateMultipleDocument();
                                    break;
                                case "3":
                                    UpdateAllDocument();
                                    break;
                                default:
                                    console.log("Wrong Update Type. Try Again!");
                                    break;
                            }
                        });
                        break;
                    
                    //DELETE OPERATIONS COMPLETED
                    case "4":
                        console.log("Select Your Target Delete Operation : ");
                        console.log(`
                                     1. Delete One Document   
                                     2. Delete Multiple Document 
                                     3. Delete All Document
                                     `);
                        readline.question("Input (1/2/3)? :",insertInput=>{
                            switch (insertInput) {
                                case "1":
                                    DeleteOneDocument();
                                    break;
                                case "2":
                                    DeleteMultipleDocument();
                                    break;
                                case "3":
                                    DeleteAllDocument();
                                    break;
                                default:
                                    console.log("Wrong Deletion Type. Try Again!");
                                    break;
                            }
                        });
                        break;
                    //DEFAULT OPERATIONS COMPLETED
                    default:
                        console.log("Wrong Input. Try Again!");
                        break;
                }
            });
        //}
    };
const ReadOneDocument = async() =>{
    try {
        var database = client.db(process.env.DATABASE_NAME);
        var users = database.collection(process.env.COLLECTION_NAME);

        const result = await users.findOne(readOneDoc,readOptions);
        if(result==null)
            console.log("Database Empty or No Data Matched Your Query");
        else{
            console.log(`One Document Reading Successful`);
            console.log(result);
        }
    } catch (error) {
        console.log(`Error Occured: Having Input Data Format Problem or ${error}`);
    }finally{
       await client.close();
    }
};
const ReadLimitedDocument = async() =>  {
    try {
        var database = client.db(process.env.DATABASE_NAME);
        var users = database.collection(process.env.COLLECTION_NAME);
        
        // const options = {
        //      runtime:{$lt:15},
        //      sort:{FirstName:1,LastName:1,Group:1,Designation:1,City:1},
        //      projection:{FirstName:1,LastName:1,Group:1,Designation:1,City:1}
        //     };
        //INSTEAD OF DEFINING OPTIONS here INDIVIDUALLY WE ARE CALLING readOptions from InputDataCRUD.js File
        const result = users.find(readLimitedDoc,readOptions).limit(readOptions.runtime.$lt);
        if ((await result.count()) === 0) {
            console.log("No documents found That Matched Your Query !");
          }else{
            //await result.forEach(console.dir); 
            let counter = 1;
            await result.forEach((item)=>{
                console.log(`${counter++}. _id : ${item._id} Name : ${item.FirstName} ${item.LastName} Group :${item.Group} Designation : ${item.Designation} City: ${item.City}`);
            }); 
            console.log(`Limited ${--counter} Documents Reading Successful`);
        }     
        
    } catch (error) {
        console.log(`Error Occured: Having Input Data Format Problem or ${error}`);
    }finally{
       await client.close();
    }
};
const ReadAllDocument = async() => {
    try {
        var database = client.db(process.env.DATABASE_NAME);
        var users = database.collection(process.env.COLLECTION_NAME);
        
        // const options = {
        //      runtime:{},
        //      sort:{},
        //      projection:{}
        //     };
        //INSTEAD OF DEFINING OPTIONS here INDIVIDUALLY WE ARE CALLING readOptions from InputDataCRUD.js File
        const result = users.find(readMultiDoc,readOptions).limit(readOptions.runtime.$lt);
        if ((await result.count()) === 0) {
            console.log("No documents found! That Matched Your Query!!");
        }else{
            //await result.forEach(console.dir); 
            let counter=1;
            await result.forEach((item)=>{
            console.log(`${counter++}. _id : ${item._id} Name : ${item.FirstName} ${item.LastName} Group :${item.Group} Designation : ${item.Designation} City: ${item.City}`);
            });
            console.log(`${--counter} Documents Reading Successful`);   
        }   
        
    } catch (error) {
        console.log(`Error Occured: Having Input Data Format Problem or ${error}`);
    }finally{
       await client.close();
    }
};
const InsertOneDocument = async() => {
    console.log(insertOneDoc);
    try {
        var database = client.db(process.env.DATABASE_NAME);
        var users = database.collection(process.env.COLLECTION_NAME);
        const result = await users.insertOne(insertOneDoc);
        console.log(`A Document was inserted with _id: ${result.insertedId}`);
    } catch (error) {
        console.log(`Error Occured: Having Input Data Format Problem or ${error}`);
    }finally{
       await client.close();
    }
};

const InsertMultiDocument = async() => {
    try {
        var database = client.db(process.env.DATABASE_NAME);
        var users = database.collection(process.env.COLLECTION_NAME);
        const options = { ordered: true }; //Prevents additional document insertion if one fails
        const result = await users.insertMany(insertMultiDoc,options);
        console.log(result);
        console.log(`${result.insertedCount} Documents Were Inserted Successfully`);
    } catch (error) {
        console.log(`Error Occured: Having Input Data Format Problem or ${error}`);
    }finally{
       await client.close();
    }
};

const DeleteOneDocument = async() => {
    try {
        var database = client.db(process.env.DATABASE_NAME);
        var users = database.collection(process.env.COLLECTION_NAME);

        const result = await users.deleteOne(deleteOneDoc);
        if (result.deletedCount === 1) {
          console.log("Successfully deleted one document.");
        } else {
          console.log("No documents matched the query. Deleted 0 documents.");
        }
    } catch (error) {
        console.log(`Error Occured: Having Input Data Format Problem or ${error}`);
    }finally{
       await client.close();
    }
};
const DeleteMultipleDocument = async() =>{
    try {
        var database = client.db(process.env.DATABASE_NAME);
        var users = database.collection(process.env.COLLECTION_NAME);

        const result = await users.deleteMany(deleteMultiDoc);
        if (result.deletedCount > 1) {
            console.log("Deleted " + result.deletedCount + " documents");
        } else {
          console.log("No documents matched the query. Deleted 0 documents.");
        }
    } catch (error) {
        console.log(`Error Occured: Having Input Data Format Problem or ${error}`);
    }finally{
       await client.close();
    }
};

const DeleteAllDocument = async() => {
    try {
        var database = client.db(process.env.DATABASE_NAME);
        var users = database.collection(process.env.COLLECTION_NAME);

        const result = await users.deleteMany(deleteAllDoc);
        if (result.deletedCount > 1) {
            console.log("Deleted " + result.deletedCount + " documents Successfully");
        } else {
          console.log("No document2s matched the query. Deleted 0 documents.");
        }
    } catch (error) {
        console.log(`Error Occured: Having Input Data Format Problem or ${error}`);
    }finally{
       await client.close();
    }
};

const UpdateOneDocument = async() => {
    try {
        var database = client.db(process.env.DATABASE_NAME);
        var users = database.collection(process.env.COLLECTION_NAME);
        const result = await users.updateOne(updateFilter,updateOneDoc,updateOptions);
        console.log(`Updated ${result.modifiedCount} documents`);
    } catch (error) {
        console.log(`Error Occured: Having Input Data Format Problem or ${error}`);
    }finally{
       await client.close();
    }
};
const UpdateMultipleDocument = async() => {
    try {
        var database = client.db(process.env.DATABASE_NAME);
        var users = database.collection(process.env.COLLECTION_NAME);
        const result = await users.updateMany(updateFilter,updateMultiDoc,updateOptions);
        console.log(`Updated ${result.modifiedCount} documents`);
    } catch (error) {
        console.log(`Error Occured: Having Input Data Format Problem or ${error}`);
    }finally{
       await client.close();
    }
};
const UpdateAllDocument = async() => {
    try {
        var database = client.db(process.env.DATABASE_NAME);
        var users = database.collection(process.env.COLLECTION_NAME);
        const result = await users.updateMany(updateFilter,updateAllDoc,updateOptions);
        console.log(`Updated ${result.modifiedCount} documents`);
    } catch (error) {
        console.log(`Error Occured: Having Input Data Format Problem or ${error}`);
    }finally{
       await client.close();
    }
};

crud();