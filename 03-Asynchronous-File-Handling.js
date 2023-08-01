/**
 * Create a Node.js script that reads a text file named "data.txt"
 * and counts the number of words in it. The script should print the total
 * word count to the console
 */

const fs = require("fs");

try {
    const data = fs.readFileSync("data.txt","utf8");
    const count = data ? data?.split(" ")?.length : 0;
    console.log(`Number of words in the file are ${ count }`)
} catch (error) {
    console.log(error);
    console.log("There was an error while reading the file");
}
