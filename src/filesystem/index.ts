import path from 'path';
import fs from 'fs';
import {Exception} from "@kenift/exception";

export const Filesystem = new class Filesystem {
  createDirectory(directoryPath: string | Array<string>) {
    if (typeof directoryPath === 'string') {
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath);
        Exception.success("Filesystem", "Directory with name " + path.basename(directoryPath) + " has been created");
      } else {
        Exception.warning("Filesystem", "Directory with name " + path.basename(directoryPath) + " already exists");
      }
    } else if (Array.isArray(directoryPath)) {
      for (let index = 0; index < directoryPath.length; index++) {
        let name = directoryPath[index];

        if (!fs.existsSync(name)) {
          fs.mkdirSync(name)
          Exception.success("Filesystem", "Directory with name " + path.basename(name) + " has been created");
        } else {
          Exception.warning("Filesystem", "Directory with name " + path.basename(name) + " already exists");
        }
      }
    }
  }
  deleteDirectory(destinationFolder: string): void {
    if (fs.existsSync(destinationFolder) && fs.statSync(destinationFolder).isDirectory()) {
      this.cleanDirectory(destinationFolder);
      fs.rmdirSync(destinationFolder);
      Exception.success("Filesystem", "Directory with name " + path.basename(destinationFolder) + " has been deleted");
    } else {
      Exception.warning("Filesystem", "Directory with name " + path.basename(destinationFolder) + " is not exists");
    }
  }
  cleanDirectory(destinationFolder: string): void {
    let destinationFolderTree: Array<{ type: string, path: string }> = [];

    if (fs.existsSync(destinationFolder) && fs.statSync(destinationFolder).isDirectory()) {
      function createFolderTree(folder: string): void {
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

      let reversed: Array<{ type: string, path: string }> = destinationFolderTree.reverse();

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
}
