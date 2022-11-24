const fs = require("fs");
const request = require('request')
console.log(process.argv)
const args = process.argv.slice(2)
const url = args[0]
const file = args[1]
console.log(`download website ${url} to the ${file}`)

request(url, (error, response, body) => {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body);

  fs.writeFile(file, body, (error) => {
    if (error) {
      console.log(error)
      return
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${file}`)

  })

})



















