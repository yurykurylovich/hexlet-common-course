/*
Write finalGrade function that returns grade of student using his exam grade and the number of projects.
Your function should have to arguments:
exam — exam grade, 0 to 100;
projects — number of projects, >=0.
4 possible returns (grades):
100, if exam grade is >=90 OR there're 10 projects
90, if exam grade is > 75 AND there're 5 projects min
75, if exam grade is > 50 AND there're 2 projects min
0  - every other case.
*/

// solution
const finalGrade = (grade, projects) => {
  if (grade >= 90 || projects === 10) {
    return 100;
  }
  if (grade > 75 && projects >= 5) {
    return 90;
  }
  if (grade > 50 && projects >= 2) {
    return 75;
  }
  return 0;
}

// test
console.log(finalGrade(90, 10))
console.log('*****')
console.log(finalGrade(80, 9))
console.log('*****')
console.log(finalGrade(60, 9))
console.log('*****')
console.log(finalGrade(30, 3))
console.log('*****')
