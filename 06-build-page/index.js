const path = require('path')
const fs = require('fs')
const fsp = require('fs').promises


function linkageFolder () {
const buildFolder = (path.join(__dirname, 'project-dist'))
fsp.mkdir(buildFolder, err => {if(err) throw err})
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
        copyFolder(path.join(firstDir, file), path.join(destDir, file), err => {
         if(err) throw err;
      })
    }
 })
}
})
}   
copyFolder((path.join(__dirname, 'assets')), (path.join(__dirname, 'project-dist', 'assets' )))

function indexFile (soursIndex, newIndex) {
  fsp.copyFile(path.join(__dirname, 'template.html'), path.join(__dirname, 'project-dist', 'index.html'));
  fs.readdir(soursIndex, 'utf8',(err, files) => {
    if(err) throw err;
    for (let file of files) {
      fs.stat(path.join(soursIndex, file), 'utf8', (err, status) => {
        if(err) throw err;
          if(status.isFile() && path.extname(file) === '.html') {
            fs.readFile (path.join(soursIndex, file), 'utf8', (err, file) => {
              if(err) throw err; 
             fsp.appendFile(newIndex, file, err => {
                if(err) throw err; 
              })
            })
          }
       } )
      }
      })  
    }  
   indexFile ((path.join(__dirname,  'components')),(path.join(__dirname, 'project-dist', 'index.html')) ) 

function styleFile(styleFolder, allStyle) {
  fsp.writeFile(allStyle, '', err => {if(err) throw err})
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

styleFile((path.join(__dirname, 'styles')), (path.join(__dirname, 'project-dist', 'style.css')))  
}

linkageFolder ()