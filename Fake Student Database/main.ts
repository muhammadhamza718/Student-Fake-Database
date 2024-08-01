// create student data

import { log } from "console"
import { getAllstudents, getOnsiteStudent , getStudent ,isStudentOnsite} from "./student"

// const result = getAllstudents();
// console.log('Result:', result);

// const onsiteStudent = getOnsiteStudent();
// console.log('Onsite Student:', onsiteStudent);

// const result = getStudent(2003);
// console.log('Result:', result);

const result = isStudentOnsite(2009)
console.log('Result:', result);
