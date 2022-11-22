//Among These Value : {ColumnName:{$in:['Value1','Vaue2],.......}};
//Regex Pattern Matching : {ColumnName:{$regex:'patternName'}};
let readOneDoc = {};
let readMultiDoc = {};
let readLimitedDoc = {City:'Rangpur'};
//ALL TYPES READ OPTIONS OF DOCUMENT READING JUST ADD OR DELETE PARAMETERS HERE
//Limit: runtime:{$lt:15};
//Increasing: sort:{ColumnName: 1}; Decreasing : sort{columnName: -1}
//Column Selection : projection: {columnName:1}; Deselect: projection:{ColumnName:0};
let readOptions ={  
    runtime:{$lt:105},
    sort:{},    
    projection:{}
};
let insertOneDoc = {"FirstName": "Hossain","LastName": "Mohammad","Group": "Political Science","City": "Rangpur"};

let insertMultiDoc = [{"FirstName": "Md Ruman","LastName": "Hossain","Group": "Science","Designation": "Software Engineer","City": "Rangpur"},
                      {"FirstName": "Md Rakibul ","LastName": "Islam","Group": "Science","Designation": "Software Engineer","City": "Rajshahi"},
                      {"FirstName": "Zahid","LastName": "Hossain","Group": "Science","Designation": "Frontend Developer","City": "Dhaka"},
                      {"FirstName": "Manjare","LastName": "Hasin","Group": "Science","Designation": "ML Engineer","City": "Dhaka"},
                      {"FirstName": "Faruk","LastName": "Ahmad","Group": "Science","Designation": "AI Engineer","City": "Tokiyo"},
                      {"FirstName": "Hasan","LastName": "Mahmud","Group": "Arts","Designation": "Lawyer","City": "Barishal"},
                      {"FirstName": "Afrin","LastName": "Annee","Group": "Science","Designation": "Dentist","City": "Rangpur"},
                      {"FirstName": "Jannatul ","LastName": "Mowa","Group": "Science","Designation": "Dentist","City": "Feni"},
                      {"FirstName": "Mercy ","LastName": "Afsari","Group": "Science","Designation": "Dentist","City": "Rangpur"},
                      {"FirstName": "Shahriar","LastName": "Kabir","Group": "Arts","Designation": "Lawyer","City": "Dhaka"},
                      {"FirstName": "Hasibur","LastName": "Rahman","Group": "Science","Designation": "Doctor","City": "Dhaka"},
                      {"FirstName": "Atikur","LastName": "Rahman","Group": "Science","Designation": "Doctor","City": "Rangpur"},
                      {"FirstName": "Imran","LastName": "Hasan","Group": "Science","Designation": "Digital Marketer","City": "Bogra"},
                      {"FirstName": "Saroar","LastName": "Mahmud","Group": "Science","Designation": "Data Analyst","City": "Thakurgaon"},
                      {"FirstName": "Mostafa","LastName": "Kamal","Group": "Science","Designation": "Data Scientist","City": "Rangpur"},
                      {"FirstName": "Rahat","LastName": "Hasan","Group": "Science","Designation": "ML Engineer","City": "Thakurgaon"},
                      {"FirstName": "Abdullah","LastName": "Al Mamun","Group": "Science","Designation": "Software Engineer","City": "Rangpur"},
                      {"FirstName": "Dipu Kumar","LastName": "Mohanto","Group": "Science","Designation": "Software Engineer","City": "Rangpur"},
                      {"FirstName": "Ariful","LastName": "Hasan","Group": "Science","Designation": "Writter","City": "Rangpur"},
                      {"FirstName": "Al Kafi","LastName": "Nayan","Group": "Science","Designation": "Writter","City": "Rangpur"}];

//REQUIRED FOR UPDATE OPERATIONS
let updateFilter = {};
let updateOptions = {upsert:true};//upsert:true || if value/field not found it will create update data 
let updateOneDoc = {
    $set:{
        City:'Dhaka Dhaka Dhaka'
    },
};
let updateMultiDoc = {
    $set:{
        FirstName:'Afrin Akter',
        LastName:'Annee'
    },
};
let updateAllDoc = {
    $set:{
        FirstName:'Afrin Akter',
        LastName:'Annee',
        Group:'Humanities',
        Designation:'Instructor',
        City:'Rangpur',
        Country:'Bangladesh'
    },
};

let deleteOneDoc = {Designation:{$regex:'Software'}};
let deleteMultiDoc = {Designation:{$regex:'Engineer'}};  //Pattern Matching : {ColumnName:{$regex:subString or Pattern}} 
let deleteAllDoc = {};

module.exports = {
    readOneDoc,
    readMultiDoc,
    readLimitedDoc,
    readOptions,

    insertOneDoc,
    insertMultiDoc,

    updateFilter,
    updateOptions,
    updateOneDoc,
    updateMultiDoc,
    updateAllDoc,

    deleteOneDoc,
    deleteMultiDoc,
    deleteAllDoc
};