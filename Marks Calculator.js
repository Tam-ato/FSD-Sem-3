const prompt = require("readline-sync").question;
let studentName;
let rollNo;
let marks = [];
let totalMarks = 0;

function getData() {
  studentName = prompt("Enter your name:");
  rollNo = prompt("Enter your roll no.:");
  

  let numSubjects = parseInt(prompt("Enter the number of subjects:"), 10);
  
  
  marks = []; 
  
  for (let i = 0; i < numSubjects; i++) {
    let mark = parseFloat(prompt(`Enter marks of subject ${i + 1}:`));
    marks.push(mark);
  }
}

function calculateTotal() {
  totalMarks = 0; // Reset total
  for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
  }
  return totalMarks;
}

function displayData() {
  // 1. Calculate Average
  let average = totalMarks / marks.length;

  // 2. Pass / Fail Logic (e.g., passing average is 40 or higher)
  let result;
  if (average >= 40) {
    result = "PASSED";
  } else {
    result = "FAILED";
  }

  // 3. Output results
  console.log("----------------STUDENTRECORDS----------------");
  console.log(`Name: ${studentName}`);
  console.log(`Roll No: ${rollNo}`);
  console.log(`Marks: ${marks.join(", ")}`);
  console.log(`Total Marks: ${totalMarks}`);
  console.log(`Average: ${average.toFixed(2)}%`);
  console.log(`Status: ${result}`);
}


getData();
calculateTotal();
displayData();