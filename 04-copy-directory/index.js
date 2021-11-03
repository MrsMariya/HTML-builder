const path = require('path')
const fs = require('fs')
const fsp = require('fs').promises

function copyFolder(firstDir, destDir) {
   fsp.mkdir(destDir, err => {if(err) throw err})
   fs.readdir(firstDir, 'utf8' , (err, files) => {
    if(err) throw err;
    for (let file of files){
      fs.stat(path.join(firstDir, file), 'utf8', (err, status) => {
        if(err) throw err;
        if(status.isFile()) {
          fs.copyFile(path.join(firstDir, file), path.join(destDir, file), err => {
            if(err) throw err;
         })
      } else {
         fs.copyFolder(path.join(firstDir, file), path.join(destDir, file), err => {
          if(err) throw err;
       })
    }
  })
}
})
}   
copyFolder((path.join(__dirname, 'files')), (path.join(__dirname, 'files-copy')))




