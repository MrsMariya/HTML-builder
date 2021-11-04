const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');


 function styleFile(styleFolder, allStyle) {
  fsp.writeFile(allStyle, err => {if(err) throw err})
  fs.readdir(styleFolder, 'utf8' , (err, files) => {
    if(err) throw err;
    for (let file of files){
      fs.stat(path.join(styleFolder, file), 'utf8', (err, status) => {
        if(err) throw err;
          if(status.isFile() && path.extname(file) === '.css') {
           fs.readFile (path.join(styleFolder, file), 'utf8', (err, file) => {
            if(err) throw err; 
              fs.appendFile(allStyle, file,  err => {
                if(err) throw err;
            })
       })
      }
  })
}
})
} 

styleFile((path.join(__dirname, 'styles')), (path.join(__dirname, 'project-dist', 'bundle.css'))) 
