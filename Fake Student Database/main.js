"use strict";
// create student data
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
// const result = getAllstudents();
// console.log('Result:', result);
// const onsiteStudent = getOnsiteStudent();
// console.log('Onsite Student:', onsiteStudent);
// const result = getStudent(2003);
// console.log('Result:', result);
const result = (0, student_1.isStudentOnsite)(2009);
console.log('Result:', result);
