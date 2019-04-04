var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyLRO0I8ve5ItEZw'
});

var base = Airtable.base('app23dYhI1aczLCLk');

base('Match1').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        var Matchname=record.get('Matchname');
        var time=record.get('time');
        var Win=record.get('Win');
        var Perkill=record.get('Perkill');
        var entryfee=record.get('entryfee');
        var type=record.get('type');
        var version=record.get('version');
        console.log(Matchname,time,Win,Perkill,entryfee,type,version)

    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});