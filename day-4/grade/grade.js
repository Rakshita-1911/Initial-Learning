function APlus(totalMarks, examType) {
  if (examType === "Final-exam") {
    return totalMarks >= 90;
  } else {
    return totalMarks >= 89 && totalMarks <= 100;
  }
}

console.log(APlus(95, "Final-exam"));   
console.log(APlus(90, "Midterm"));   
console.log(APlus(98, "Final-exam"));   
console.log(APlus(9, "Midterm"));      
