// const fs = require('fs');
const {python} = require('child_process')
const config = require('./test.json');
const scrape = python('python'[/scripts/scraper.py])
console.log(config['items'].length);

// fs.readFile('./test.json', 'utf8', (err, jsonString) => {
//     if (err) {
//         console.log("File read failed:", err)
//         return
//     }
//     console.log('File data:', jsonString) 
// })