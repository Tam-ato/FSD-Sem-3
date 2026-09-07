const fs=require(`fs`);
// fs.writeFileSync(`example.txt`,`This is experiment 2 in FSD`,"utf8");
// console.log("create file run successfully");

// fs.appendFileSync(`example.txt`,`\n This is the new line`);

// const data=fs.readFileSync(`example.txt`,"utf8");
// console.log("file content is:",data);

fs.writeFileSync(`example1.txt`,`This is the file we use the delete function on`,"utf8");
fs.unlinkSync(`example1.txt`);
console.log("File was deleted");

