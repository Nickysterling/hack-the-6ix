// // const fs = require('fs');
// const spawn = require('child_process').spawn;
// // const config = require('./test.json');
// const process = spawn('python3', ['scraper.py']);
// // console.log(childPython)
// console.log('anything');
// process.stdout.on('data', function (data){
//     console.log('stdout');
//         console.log(data);
// });
// process.on('data', (data)=>{
//     console.log('close');
//     console.log(data);
// });
// // console.log(config['items'].length);
// // console.log(results);

// // fs.readFile('./test.json', 'utf8', (err, jsonString) => {
// //     if (err) {
// //         console.log("File read failed:", err)
// //         return
// //     }
// //     console.log('File data:', jsonString) 
// // })

let {PythonShell} = require('python-shell');

let options = {
  scriptPath: __dirname,
  args: ['https://cafedelites.com/garlic-mushrooms/']
};

PythonShell.run('scraper.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log(parseInt(results[0]));
});