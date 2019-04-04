const express=require('express')
const Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyLRO0I8ve5ItEZw'
});

var base = Airtable.base('app23dYhI1aczLCLk');
var app=express()

app.use(express.static('public'))
app.get('/api',(req,res)=>{
	base('Match1').select({
    // Selecting the first 3 records in Grid view:
    
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    var str='[';
    records.forEach(function(record) {
        var Matchname=record.get('Matchname');
        var time=record.get('time');
        var Win=record.get('Win');
        var Perkill=record.get('Perkill');
        var entryfee=record.get('entryfee');
        var type=record.get('type');
        var version=record.get('version');
        // console.log(Matchname,time,Win,Perkill,entryfee,type,version)
        str+=`{
        	"Matchname":"${Matchname}",
        	"Time": "${time}",
        	"Win": "${Win}",
        	"Perkill": "${Perkill}",
        	"entryfee": "${entryfee}",
        	"type": "${type}" ,
        	"version":"${version}"
        },`
        
    });
    str=str.substring(0,str.length-1)
    str+=']'
    res.send(str)
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { 
    	// console.error(err); return; 
    	res.send('err')
    }
});
})

const port=process.env.PORT || 3000
app.listen(port,()=>{
	console.log('server started at port '+port)
})