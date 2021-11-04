//задача еще не решена
const fs = require('fs');
const path = require('path');
const allStyle = fs.createWriteStream(path.join(__dirname, 'bundle.css'), 'utf8');
const styleFolder = fs.createReadStream(path.join(__dirname, 'styles'), 'utf8')



function styleFile() {
   fs.readdir(styleFolder, 'utf8' , (err, files) => {
    if(err) throw err;
    for (let file of files){
      fs.stat(path.join(styleFolder, file), 'utf8', (err, status) => {
        if(err) throw err;
        if(status.isFile()) {
          //if(){}
          styleFolder.on('data', (chunk) => allStyle.write(chunk), err => {
            if(err) throw err;
         })
      } 
  })
}
})
}   
styleFile()
