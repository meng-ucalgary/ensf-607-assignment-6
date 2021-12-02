const animals = [
    {
        "animalId": 1,
        "name": "Ace",
        "type": "Dog",
        "breed": "German shepherd",
        "birthDate": "N/A",
        "sex": "1",
        "status": "INACTIVE",
        "theOwner": {
            "ownerId": 1,
            "firstName": "Damian",
            "middleName": "Bruce",
            "lastName": "Wayne",
            "role": "N/A",
            "contactNumber": "4036653061",
            "emailId": "damian.bruce.wayne@ucalgary.ca",
            "address": "Wayne Manor"
        },
        "tattooNum": 130110477,
        "rfidNumber": "229664665",
        "microChipNumber": "229348845",
        "weight": [{"date":"Feb 2021", "value": 23}, {"date":"Mar 2021", "value": 32}, {"date":"Apr 2021", "value": 13}],
        "coatColor": "Black",
        "continuousMedication": "N/A",
        "animalPhotoList": [],
        "animalCommentList": [{"commentid": 1, "commentdesc": "this is good", "date": "Nov 1, 2021"}, {"commentid": 2, "commentdesc": "this is rad", "date": "Nov 2, 2021"}, {"commentid": 3, "commentdesc": "this is bad", "date": "Nov 3, 2021"}],
        "animalTreatmentList": [{"id": 1,"date": "Nov 1, 2021", "description": "It went well"},{"id": 2,"date": "Nov 2, 2021", "description": "It went not so well"}],
        "animalIssueList": [],
        "age": 0
    },
    {
        "animalId": 2,
        "name": "Ampersand",
        "type": "Monkey",
        "breed": "Capuchin monkey",
        "birthDate": "N/A",
        "sex": "0",
        "status": "YELLOW",
        "theOwner": {
            "ownerId": 2,
            "firstName": "Yorrick",
            "middleName": "",
            "lastName": "Brown",
            "role": "N/A",
            "contactNumber": "4034097804",
            "emailId": "yorrick.brown@ucalgary.ca",
            "address": ""
        },
        "tattooNum": 204261377,
        "rfidNumber": "313829102",
        "microChipNumber": "233453231",
        "weight": [{"date":"Feb 2021", "value": 23}, {"date":"Mar 2021", "value": 32}, {"date":"Apr 2021", "value": 98}],
        "coatColor": "Brown",
        "continuousMedication": "N/A",
        "animalPhotoList": [],
        "animalCommentList": [{"commentid": 1, "commentdesc": "this is good", "date": "Nov 1, 2021"}, {"commentid": 2, "commentdesc": "this is rad", "date": "Nov 2, 2021"}, {"commentid": 3, "commentdesc": "this is bad", "date": "Nov 3, 2021"}],
        "animalTreatmentList": [],
        "animalIssueList": [],
        "age": 0
    },
    {
        "animalId": 3,
        "name": "Bat Cow",
        "type": "Cow",
        "breed": "N/A",
        "birthDate": "N/A",
        "sex": "0",
        "status": "RED",
        "theOwner": {
            "ownerId": 1,
            "firstName": "Damian",
            "middleName": "Bruce",
            "lastName": "Wayne",
            "role": "N/A",
            "contactNumber": "4036653061",
            "emailId": "damian.bruce.wayne@ucalgary.ca",
            "address": "Wayne Manor"
        },
        "tattooNum": 171659869,
        "rfidNumber": "223023284",
        "microChipNumber": "202432386",
        "weight": [{"date":"Feb 2021", "value": 123}, {"date":"Mar 2021", "value": 32}, {"date":"Apr 2021", "value": 13}],
        "coatColor": "Brown, White",
        "continuousMedication": "N/A",
        "animalPhotoList": [],
        "animalCommentList": [{"commentid": 1, "commentdesc": "this is good", "date": "Nov 1, 2021"}, {"commentid": 2, "commentdesc": "this is rad", "date": "Nov 2, 2021"}, {"commentid": 3, "commentdesc": "this is bad", "date": "Nov 3, 2021"}],
        "animalTreatmentList": [],
        "animalIssueList": [],
        "age": 0
    },
    {
        "animalId": 4,
        "name": "Comet",
        "type": "Horse",
        "breed": "Canadian horse",
        "birthDate": "N/A",
        "sex": "1",
        "status": "YELLOW",
        "theOwner": {
            "ownerId": 3,
            "firstName": "Clark",
            "middleName": "Joseph",
            "lastName": "Kent",
            "role": "N/A",
            "contactNumber": "4032991533",
            "emailId": "clark.joseph.kent@ucalgary.ca",
            "address": "Smallville"
        },
        "tattooNum": 225931412,
        "rfidNumber": "184668886",
        "microChipNumber": "345541619",
        "weight": [{"date":"Feb 2021", "value": 23}, {"date":"Mar 2021", "value": 132}, {"date":"Apr 2021", "value": 13}],
        "coatColor": "White",
        "continuousMedication": "N/A",
        "animalPhotoList": [],
        "animalCommentList": [{"commentid": 1, "commentdesc": "this is good", "date": "Nov 1, 2021"}, {"commentid": 2, "commentdesc": "this is rad", "date": "Nov 2, 2021"}, {"commentid": 3, "commentdesc": "this is bad", "date": "Nov 3, 2021"}],
        "animalTreatmentList": [],
        "animalIssueList": [],
        "age": 0
    },
    {
        "animalId": 5,
        "name": "Krypto",
        "type": "Dog",
        "breed": "Labrador retriever",
        "birthDate": "N/A",
        "sex": "0",
        "status": "PENDING_REQUEST",
        "theOwner": {
            "ownerId": 3,
            "firstName": "Clark",
            "middleName": "Joseph",
            "lastName": "Kent",
            "role": "N/A",
            "contactNumber": "4032991533",
            "emailId": "clark.joseph.kent@ucalgary.ca",
            "address": "Smallville"
        },
        "tattooNum": 185030356,
        "rfidNumber": "170719459",
        "microChipNumber": "157412204",
        "weight": [{"date":"Feb 2021", "value": 23}, {"date":"Mar 2021", "value": 3}, {"date":"Apr 2021", "value": 13}],
        "coatColor": "White",
        "continuousMedication": "N/A",
        "animalPhotoList": [],
        "animalCommentList": [{"commentid": 1, "commentdesc": "this is good", "date": "Nov 1, 2021"}, {"commentid": 2, "commentdesc": "this is rad", "date": "Nov 2, 2021"}, {"commentid": 3, "commentdesc": "this is bad", "date": "Nov 3, 2021"}],
        "animalTreatmentList": [],
        "animalIssueList": [],
        "age": 0
    },
    {
        "animalId": 6,
        "name": "Snowy",
        "type": "Dog",
        "breed": "Wire Fox Terrier",
        "birthDate": "N/A",
        "sex": "1",
        "status": "ACCEPTED_BY_ADMIN",
        "theOwner": {
            "ownerId": 4,
            "firstName": "Tintin",
            "middleName": "",
            "lastName": "",
            "role": "N/A",
            "contactNumber": "4031678053",
            "emailId": "tintin@ucalgary.ca",
            "address": "Marlinspike Hall, Belgium"
        },
        "tattooNum": 225864215,
        "rfidNumber": "188758885",
        "microChipNumber": "255400812",
        "weight": [{"date":"Feb 2021", "value": 56}, {"date":"Mar 2021", "value": 32}, {"date":"Apr 2021", "value": 23}],
        "coatColor": "White",
        "continuousMedication": "N/A",
        "animalPhotoList": [],
        "animalCommentList": [{"commentid": 1, "commentdesc": "this is good", "date": "Nov 1, 2021"}, {"commentid": 2, "commentdesc": "this is rad", "date": "Nov 2, 2021"}, {"commentid": 3, "commentdesc": "this is bad", "date": "Nov 3, 2021"}],
        "animalTreatmentList": [],
        "animalIssueList": [],
        "age": 0
    },
    {
        "animalId": 7,
        "name": "Streaky",
        "type": "Cat",
        "breed": "Abyssinian",
        "birthDate": "N/A",
        "sex": "1",
        "status": "TECHNICIAN_APPROVAL",
        "theOwner": {
            "ownerId": 3,
            "firstName": "Clark",
            "middleName": "Joseph",
            "lastName": "Kent",
            "role": "N/A",
            "contactNumber": "4032991533",
            "emailId": "clark.joseph.kent@ucalgary.ca",
            "address": "Smallville"
        },
        "tattooNum": 209577225,
        "rfidNumber": "177988155",
        "microChipNumber": "267795413",
        "weight": [{"date":"Feb 2021", "value": 3}, {"date":"Mar 2021", "value": 12}, {"date":"Apr 2021", "value": 13}],
        "coatColor": "Orange",
        "continuousMedication": "N/A",
        "animalPhotoList": [],
        "animalCommentList": [{"commentid": 1, "commentdesc": "this is good", "date": "Nov 1, 2021"}, {"commentid": 2, "commentdesc": "this is rad", "date": "Nov 2, 2021"}, {"commentid": 3, "commentdesc": "this is bad", "date": "Nov 3, 2021"}],
        "animalTreatmentList": [],
        "animalIssueList": [],
        "age": 0
    }
];

export function getAnimals() {
    return animals;
  }

export function getAnimalbyId(id){
    return animals[id-1];

}

export function postAnimal(id, field, content){
    animals[id-1][field] = content;
}

