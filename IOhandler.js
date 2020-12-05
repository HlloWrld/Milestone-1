/*
 * Project: COMP1320 Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 * 
 * Created Date: November 14 2020
 * Author: Alex Webster
 * 
 */

const { getUnpackedSettings } = require('http2');

const unzipper = require('unzipper'),
  fs = require("fs"),
  PNG = require('pngjs').PNG,
  path = require('path');



/**
 * Description: decompress file from given pathIn, write to given pathOut 
 *  
 * @param {string} pathIn 
 * @param {string} pathOut 
 * @return {promise}
 */

// fs.readFile("/BCIT/COMP1320/Milestone1/starter/unzipped", (err, data) => {
//   if(err) {
//       console.log(err);
//   } else {
//       console.log(data);
//     }
//  })

// fs.readFile("/unzipped", (err, data) => {
//   if(err) {
//       console.log(err);
//   } else {
//       console.log(data);
//     }
// })

let zipPath = /starter/myfile.zip
let unzipped = /starter/unzipped
let unzippedFiles = /starter/myfile
let sendInPNG = "d:\BCIT\COMP1320\Milestone1\starter\myfile"
let sendOutPNG = /starter/greyscaled

const unzip = (pathIn, pathOut) => {
  fs.createReadStream('/BCIT/COMP1320/Milestone1/starter/myfile.zip')
  .pipe(unzipper.Parse())
    .on('zipFilePath', function (pathIn) {
      let fileName = pathIn.path;
      if (fileName === "myfile.zip") {
        pathOut.pipe(fs.createWriteStream('/BCIT/COMP1320/Milestone1/starter/unzipped/unzipped'));
      } else {
        console.log("error");
      }
  });
  
  // Other attempts/notes below
    //pathIn = ("./myfile.js");
    //pathOut = ("./unzipped");
    // specify the pathin for the images --> myzip.zip
    // specify the pathout for the immages --> unzipped
    //console.log("Extraction successful");
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path 
 * 
 * @param {string} path 
 * @return {promise}
 */

const readDir = dir => {
  fs.readFile("/BCIT/COMP1320/Milestone1/starter/unzipped", (err, dir) => {
    return promise ((resolve, reject) => {
      fs.readDir(dir, err) => {
        if(err) {
         reject(err);
         console.log(err);
      } else {
          FileList.array.forEach(element => {
            if(pathIn == myfile.zip) {
              Array.push(myfile.zip); //need to push or read file?
          });
       }
   })
};

// let readFileCallBack = (err, data) => {
//   if(err) {
//       console.log(err);
//   } else {
//       console.log("File Read successfully.");
//   }
// }

// const 
// fs.readfile("unzipped", readFileCallBack)

/**
 * Description: Read in png file by given pathIn, 
 * convert to grayscale and write to given pathOut
 * 
 * @param {string} filePath 
 * @param {string} pathProcessed 
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {
  return promise ((resolve, reject) => {
    fs.createReadStream(pathIn)
      .pipe(
        new PNG ({
          filterType , // unsure
    
        })
      )
      .on("parsed image") () => {
        for (let i=0; i < data.length; i += filtertype) {
          let pixelAverage = ((data.length[i] + data.length[i + 1] + data.length[i + 2]) /3)
          data.length[i] = pixelAverage;
          data.length[i +1]};
          data.length[i +2];
        }
        data.length.pack().pipe(fs.createWriteStream(pathout)) //unzipped folder here?
        resolve("Conversion has been completed")
          if(err ("error", () => reject(err))
        }
      })
};

//export to be used in main.js
module.exports = {
  unzip,
  readDir,
  grayScale
};