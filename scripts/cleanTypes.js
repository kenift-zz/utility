let fs = require('fs');
let path = require('path');
let {Exception} = require("@kenift/exception");

function cleanDirectory(destinationFolder) {
  let destinationFolderTree = [];
  
  if (fs.existsSync(destinationFolder) && fs.statSync(destinationFolder).isDirectory()) {
    function createFolderTree(folder) {
      let data = fs.readdirSync(folder);
      
      for (let index = 0; index < data.length; index++) {
        let el = data[index];
        let elPath = path.join(folder, el);
        let stat = fs.statSync(elPath);
        
        if (stat.isDirectory()) {
          destinationFolderTree.push({ type: 'dir', path: elPath });
          
          createFolderTree(elPath);
        } else {
          destinationFolderTree.push({ type: 'file', path: elPath });
        }
      }
    }
    
    createFolderTree(destinationFolder);
    
    let reversed = destinationFolderTree.reverse();
    
    for (let index = 0; index < reversed.length; index++) {
      let el = reversed[index];
      
      if (el.type === 'file') {
        fs.unlinkSync(el.path);
      } else {
        fs.rmdirSync(el.path);
      }
    }
    Exception.success("Filesystem", "Directory with name " + path.basename(destinationFolder) + " has been cleaned up");
  } else {
    Exception.warning("Filesystem", "Directory with name " + path.basename(destinationFolder) + " is not exists");
  }
}

cleanDirectory(path.join(__dirname, "..", "types"));
