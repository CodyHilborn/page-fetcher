/*{
--> Take in two command line arguments (a URL and a local file path),
--> Use 'request' to retrieve the web page at the URL.
--> Once we have the page, writeFile to the file system.
--> console.log a message to say "Downloaded and saved ${file.length} bytes to ${local file path}." 
--> Will need to use async operations as we don't know how long each step will take.
}*/

const args = process.argv.slice(2);
const URL = args[0];
const filePath = args[1];

const request = require('request');
const fs = require('fs');

// console.log(URL);
// console.log(filePath);



request(`${URL}`, (error, response, body) => {
  if (error) {
    console.log('error: ', error);
  }
  console.log('statusCode: ', response && response.statusCode);
  console.log('body: ', body);

  fs.writeFile(filePath, body, err => {
    if (err) {
      console.log(err);
    }


    console.log(`Downloaded and saved ${body.length / 1000} KB to ${filePath}`);
  });
});



