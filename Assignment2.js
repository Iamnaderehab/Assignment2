// //libraries 

const path =require ("node:path");
const fs=require("node:fs");
const EventEmitter =require ("node:events");



// // //Question 1
// console.log(path.dirname(__filename));
// console.log(path.posix.join(__dirname, "index.js"));

// // //Question 2
// // console.log(path.basename("/user/files/report.pdf "));


// // //Question 3
// // console.log(path.posix.join("/folder","app.js"))

// // //Question 4
// // console.log(path.extname("/docs/readme.md "));

// // //Question 5
console.log(path.parse("/home/app/main.js  "));
console.log({Name : path.basename("/home/app/main.js  "), Ext : path.extname("/home/app/main.js  ")});


// // //Question 6
// // console.log(path.isAbsolute("/home/user/file.txt "));

// // //Question 7
// // console.log(path.posix.join("src","components","App.js"));

// // //Question 8
// // console.log(path.resolve("./index.js "));

// // //Question 9
// // console.log(path.posix.join(" /folder1","folder2/file.txt "))

// // //Question 10
// // const file= filePath=path.resolve("./data.txt");
// // fs.unlink(file,err =>{
// //     if(err){
// //         console.log("cannot delete file");
// //     }
// //     else{
// //         console.log( "The file.txt is deleted.");
        
// //     }
// // })

// // //Question 11
// // function makeFoldersync(data) {
// //     try {
// //         fs.mkdirSync(data);
// //         console.log("Success");
// //     } catch (error) {
// //         console.log("error");
    
// // }
// // }
// // console.log( makeFoldersync("data.txt"));

// //Question 12

// const eventEmitter= new EventEmitter();
// eventEmitter.on("start",()=>{

//     console.log(" Welcome event triggered!");
    
// })
// eventEmitter.emit("start");

// //Question 13
// eventEmitter.on("login",name=>{
//     console.log(`User logged in: ${name}`);
    
// })
// eventEmitter.emit("login","Ahmed")

// //Question 14
// const file = path.resolve("./notes.txt");
// console.log(file);

// function readFilesync(filePath) {
// try {
//     const data = fs.readFileSync(filePath, 'utf8');
//     console.log(" the file content =>" + data);
// } 
// catch (error) {
//     console.error("Error")
// }
// }
// readFilesync(file)

// //Question 15
// const file2=path.resolve("./notes.txt")
// fs.appendFile(file2," Async Save",error=>{
//   if(error){
//         console.log("error");
        
//     }
//     else{
//         console.log("Async Save");
//     }
// });
  

// //Question 16
// const file3=path.resolve("./notes.txt")
// console.log(path.isAbsolute(file3));


// //Question 17
// // const os= require ('node:os');
// // console.log(os.platform());
// // console.log(os.arch());
 
