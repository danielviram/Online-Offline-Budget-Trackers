let bd;

const request = IndexedDB.open("budget", 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore ("pending", {autoIncrement: true});
};

request.onsuccess = function(event) {
    db = event.target.result; 
};

request.onerroe = function (event) {
    console.log ("Woops!" + event.target.errorCode);
};

function saveRecord(record)  {
    console.log('saveRecord');

    con
}