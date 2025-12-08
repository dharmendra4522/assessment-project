const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');


function loadCsvToArray(filePath) {
return new Promise((resolve, reject) => {
const rows = [];
fs.createReadStream(filePath)
.pipe(csv())
.on('data', (data) => rows.push(data))
.on('end', () => resolve(rows))
.on('error', (err) => reject(err));
});
}


module.exports = { loadCsvToArray };