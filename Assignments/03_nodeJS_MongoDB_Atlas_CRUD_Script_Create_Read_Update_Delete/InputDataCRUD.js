let readOneDoc = {Group:'Science'};
let readMultiDoc = {};
let readLimitedDoc = {};
let readOptions ={  //USED FOR ALL TYPES OF DOCUMENT READING JUST CHANGE JUST ADD OR DELETE PARAMETERS HERE
    runtime: { $lt: 5 }, //Limit: runtime:{$lt:15};
    sort:{},    //Increasing: sort:{ColumnName: 1}; Decreasing : sort{columnName: -1}
    projection:{} //Column Selection : projection: {columnName:1}
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

let updateOneDoc = {Group:'abcd'};
let updateMultiDoc = {Designation:{$regex:'Dentist'}};
let updateAllDoc = {};

let deleteOneDoc = {Designation:{$regex:'Software'}};
let deleteMultiDoc = {Designation:{$regex:'Digital'}};  //Pattern Matching : {ColumnName:{$regex:subString or Pattern}} 
let deleteAllDoc = {};

module.exports = {
    readOneDoc,
    readMultiDoc,
    readLimitedDoc,
    readOptions,

    insertOneDoc,
    insertMultiDoc,

    updateOneDoc,
    updateMultiDoc,
    updateAllDoc,

    deleteOneDoc,
    deleteMultiDoc,
    deleteAllDoc
};