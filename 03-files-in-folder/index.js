const path = require('path')
const fs = require('fs')

  fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, files) => {
      if(err) throw err;
        for (let file of files){
          fs.stat(path.join(__dirname, 'secret-folder', file.name), 'utf8', (err, status) => {
            if(err) throw err;
            if(status.isFile()) {
            console.log (`${file.name.toString().split(".")[0]} - ${file.name.toString().split(".")[1]} - ${status.size/1024}kb`)
         }
      })
   }
  })
 


 /* fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, files) => {
  if(err) throw error;
  for (let file of files){
    fs.stat(path.join(__dirname, 'secret-folder', file.name), 'utf8', (err, status) => {
      if(status.isDirectory()){
      console.log('Это папка');
    } 
   if(status.isFile()) {
     console.log('Это файл');
    }
  })
  };  
 })
 */