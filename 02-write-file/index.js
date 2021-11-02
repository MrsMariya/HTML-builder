const { stdout, stdin } = process;
const fs = require('fs');
const path = require('path');
const text = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf-8');

stdout.write('Hello! Please enter your text\n');
stdin.on('data', data => {
  if(data.toString().trim() === 'exit') {
    stdout.write('\nGood luck learning Node.js!');
    process.exit();
  } else {
    text.write(data);
  }
})
process.on('SIGINT', () =>  {
  stdout.write('\nGood luck learning Node.js!');
  process.exit();
}) 

