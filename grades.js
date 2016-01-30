var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
//A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
var grades = {
    A: [],
    B: [],
    C: [],
    D: [],
    F: []
}
for (i = 0; i < scores.length; i++) {
    // console.log("total scores" ,scores[i], scores.length) 
    if (scores[i] > 90) {
        grades.A.push(scores[i]); // pushes score integer into grades object A array

    } else if (scores[i] <=90 && scores[i] > 80) {
        grades.B.push(scores[i]); // to B array
    } else if (scores[i] <= 80 && scores[i] > 70) {
        grades.C.push(scores[i]); // to C array
    } else if (scores[i] <= 70 && scores[i] > 60) {
        grades.D.push(scores[i]); // to D array
    } else {
        grades.F.push(scores[i]); // to F
    }
}
console.log("Number of A Grades ", grades.A.length );
console.log("Number of B Grades ", grades.B.length );
console.log("Number of C Grades ", grades.C.length );
console.log("Number of D Grades ", grades.D.length );
console.log("Number of F Grades ", grades.F.length );