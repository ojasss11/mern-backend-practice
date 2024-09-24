const fs = require("fs");
// fs.readFile(path[, options], callback)
/*
fs.readFile("text.txt", "utf-8", (error, data) => {
  if (error) console.log(error);
  else console.log(data);
});
fs.appendFile("abcd.txt", "WRITING ABCD 1\n", (error, data) => {
  // console.log(data);
});
for (let i = 1; i < 11; i++) {
  fs.appendFile("abcd2.txt", `hello world ${i}\n`, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
  });
}
  */
/*
fs.rename("abce.txt", "abcdfewrwererw.txt", (error) => {
  if (error) {
    console.log(`Error occured`);
    return;
  } else {
    console.log(`File renamed succesfully`);
  }
});
*/
fs.unlink("abcdfewrwererw.txt", (error) => {
  if (error) {
    console.log(`Error occured in deleting`);
    return;
  } else {
    console.log("File deleted");
  }
});
// CREATING A FOLDER NAMED lolo
fs.mkdir("lolo", (error) => {
  if (error) {
    console.log(`ERROR OCCURED in creation`);
    return;
  } else {
    console.log("FOLDER created succesfully");
  }
});
fs.readdir("lolo", { withFiletypes: true }, (error, data) => {
  if (error) {
    console.log(error);
    console.log(`Error in reading`);
  } else {
    console.log(data);
  }
});
/*
fs.appendFile("txt2.txt", "hello appending\n", (error, data) => {
  if (error) {
    console.log(`ERROR OCCURED`);
    return;
  } else {
    console.log(`created file successfully!`);
  }
});
*/
/*
fs.unlink("txt2.txt", (err) => {
  console.log(`error`);
});
*/
// removing a folder
fs.rmdir(`lolo`, { recursive: true, force: true }, (error) => {
  // You cannot delete a folder with files in it
  // you have to go into the particular folder then inside that particular folder delete the particular file
  if (error) console.log(`Error deleting directory` + error);
  else console.log("Directory deleted successully");
});
// Create and Write to a File
fs.writeFile("newfile.txt", "Hello, this is a new file!\n", (error) => {
  if (error) console.log("Error writing to file");
  else {
    console.log("File written successfully");

    // Check if the File Exists
    fs.access("newfile.txt", fs.constants.F_OK, (error) => {
      console.log(`${error ? "File does not exist" : "File exists"}`);

      // Read and Log File Stats
      fs.stat("newfile.txt", (error, stats) => {
        if (error) console.log("Error getting file stats");
        else {
          console.log("File Stats:", stats);

          // Append Data to the File
          fs.appendFile("newfile.txt", "Appending some data...\n", (error) => {
            if (error) console.log("Error appending to file");
            else console.log("Data appended successfully");

            // Read the File after Appending
            fs.readFile("newfile.txt", "utf-8", (error, data) => {
              if (error) console.log("Error reading file");
              else console.log("Updated File Content:\n", data);
            });
          });
        }
      });
    });
  }
});
