const fs=require('fs');
fs.writeFile("newexample.txt","Welcome to fsd classes","utf-8", (err)=>{
        if(err){
            console.log("Error creating file",err);
        } console.log("file created succesfully");
    }
)
fs.readFile("newexample.txt","utf8",(err,data)=>{
    if(err){
         console.log("Error reading file",err);
         return;
    }
    console.log("File content:");
    console.log(data);
})