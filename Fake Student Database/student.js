"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStudentOnsite = exports.getStudent = exports.getOnsiteStudent = exports.getAllstudents = void 0;
const data_1 = __importDefault(require("./data"));
const getAllstudents = () => {
    return data_1.default;
};
exports.getAllstudents = getAllstudents;
const getOnsiteStudent = () => {
    const result = data_1.default.filter((student) => student.isOnsiteAllowed);
    return result;
};
exports.getOnsiteStudent = getOnsiteStudent;
const getStudent = (rollNo) => {
    const foundUser = data_1.default.find((student) => student.rollNo === rollNo);
    return foundUser;
};
exports.getStudent = getStudent;
const isStudentOnsite = (rollNo) => {
    const foundUser = data_1.default.find((student) => student.rollNo === rollNo && student.isOnsiteAllowed);
    if (foundUser) {
        return true;
    }
    else {
        return false;
    }
};
exports.isStudentOnsite = isStudentOnsite;
